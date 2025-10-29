"use client";

import { useState } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, X, ZoomIn, ZoomOut, Maximize2 } from "lucide-react";

interface HistoricalEvent {
  id: string;
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
  year: string;
  description: string;
  importance: "high" | "medium" | "low";
  type: "battle" | "city" | "landmark";
}

const historicalEvents: HistoricalEvent[] = [
  {
    id: "hanoi",
    name: "Hà Nội",
    coordinates: [105.8342, 21.0285],
    year: "10/10/1954",
    description:
      "Tiếp quản Thủ đô. Trung tâm lãnh đạo của miền Bắc, chịu ném bom dữ dội từ Mỹ (1965-1972). Chiến thắng 'Điện Biên Phủ trên không' tháng 12/1972.",
    importance: "high",
    type: "city",
  },
  {
    id: "dien-bien-phu",
    name: "Điện Biên Phủ",
    coordinates: [103.0167, 21.3833],
    year: "7/5/1954",
    description:
      "Chiến thắng lịch sử Điện Biên Phủ 7/5/1954, kết thúc ách thống trị của thực dân Pháp, mở đường cho Hiệp định Giơnevơ.",
    importance: "high",
    type: "battle",
  },

  {
    id: "quang-tri",
    name: "Quảng Trị",
    coordinates: [107.1897, 16.7474],
    year: "Hè 1972",
    description:
      "Thành phố anh hùng trong chiến dịch Hè 1972. Chiến trường ác liệt, 81 ngày đêm kiên cường bảo vệ thành phố.",
    importance: "high",
    type: "battle",
  },
  {
    id: "hue",
    name: "Huế",
    coordinates: [107.5955, 16.4637],
    year: "Tết 1968",
    description:
      "Cố đô Huế - mục tiêu quan trọng trong Tổng tiến công và nổi dậy Tết Mậu Thân 1968. Giải phóng sau 25 ngày chiến đấu.",
    importance: "high",
    type: "city",
  },
  {
    id: "da-nang",
    name: "Đà Nẵng",
    coordinates: [108.2022, 16.0544],
    year: "8/3/1965",
    description:
      "Nơi quân Mỹ đổ bộ đầu tiên ngày 8/3/1965, mở đầu cuộc 'Chiến tranh cục bộ'. Căn cứ quân sự lớn nhất của Mỹ ở miền Nam.",
    importance: "high",
    type: "city",
  },
  {
    id: "pleiku",
    name: "Pleiku (Tây Nguyên)",
    coordinates: [107.9923, 13.9833],
    year: "1975",
    description:
      "Căn cứ quân sự chiến lược của Mỹ ở Tây Nguyên. Giải phóng trong chiến dịch Tây Nguyên 1975, mở đường cho Chiến dịch Hồ Chí Minh.",
    importance: "high",
    type: "battle",
  },
  {
    id: "ben-tre",
    name: "Bến Tre",
    coordinates: [106.3755, 10.2433],
    year: "17/1/1960",
    description:
      "Nơi bùng nổ phong trào Đồng Khởi 17/1/1960, mở đầu cao trào cách mạng miền Nam. 'Đảo khó nhằn' nổi tiếng của cách mạng.",
    importance: "high",
    type: "battle",
  },
  {
    id: "ap-bac",
    name: "Ấp Bắc (Mỹ Tho)",
    coordinates: [106.2, 10.45],
    year: "2/1/1963",
    description:
      "Chiến thắng Ấp Bắc 2/1/1963, lần đầu tiên đánh bại chiến thuật trực thăng vận của Mỹ, đánh dấu thất bại của 'Chiến tranh đặc biệt'.",
    importance: "high",
    type: "battle",
  },
  {
    id: "saigon",
    name: "Sài Gòn (TP.HCM)",
    coordinates: [106.6297, 10.8231],
    year: "30/4/1975",
    description:
      "Giải phóng hoàn toàn miền Nam ngày 30/4/1975, kết thúc 21 năm kháng chiến chống Mỹ. Chiến dịch Hồ Chí Minh toàn thắng, thống nhất đất nước.",
    importance: "high",
    type: "city",
  },
];

const vietnamGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_VNM_0.json";

const paracelIslandsGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XPI_0.json";

const spralyIslandsGeoUrl =
  "https://gist.githubusercontent.com/tandat2209/5eb797fc2bcc1c8b6d71271353a40ab4/raw/ca883f00b7843afeb7b6ad73ec4370ab514a8a90/gadm36_XSP_0.json";

// GeoJSON URL for Vietnam - using public dataset
const VIETNAM_TOPO_JSON = [
  vietnamGeoUrl,
  paracelIslandsGeoUrl,
  spralyIslandsGeoUrl,
];

export function VietnamMap() {
  const [selectedEvent, setSelectedEvent] = useState<HistoricalEvent | null>(
    null
  );
  const [hoveredEvent, setHoveredEvent] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([106.5, 16.5]);

  const handleZoomIn = () => {
    if (zoom < 4) setZoom(zoom + 0.5);
  };

  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom - 0.5);
  };

  const handleReset = () => {
    setZoom(1);
    setCenter([106.5, 16.5]);
  };

  const getMarkerColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "#dc2626"; // red-600
      case "medium":
        return "#f97316"; // orange-500
      default:
        return "#eab308"; // yellow-500
    }
  };

  const getMarkerSize = (importance: string) => {
    switch (importance) {
      case "high":
        return 8;
      case "medium":
        return 6;
      default:
        return 4;
    }
  };

  return (
    <div className="relative w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-linear-to-br from-blue-50 via-green-50 to-yellow-50 rounded-2xl shadow-2xl p-4 md:p-8 border-2 border-red-200"
      >
        {/* Header */}
        <div className="mb-4 md:absolute md:top-4 md:left-4 bg-white/95 backdrop-blur px-4 py-3 rounded-lg shadow-md max-w-md">
          <h3 className="font-bold text-red-700 text-base md:text-lg flex items-center gap-2">
            🗺️ Bản đồ Lịch sử Việt Nam 1954-1975
          </h3>
          <p className="text-xs md:text-sm text-gray-600 mt-1">
            Click vào các điểm đánh dấu để xem chi tiết sự kiện lịch sử
          </p>
        </div>

        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur rounded-lg shadow-md p-2 flex flex-col gap-2 z-10">
          <button
            onClick={handleZoomIn}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Phóng to"
          >
            <ZoomIn className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Thu nhỏ"
          >
            <ZoomOut className="w-5 h-5 text-gray-700" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 hover:bg-gray-100 rounded transition-colors"
            title="Đặt lại"
          >
            <Maximize2 className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Map Container */}
        <div
          className="relative bg-white rounded-xl shadow-inner border border-gray-200 overflow-hidden"
          style={{ height: "600px" }}
        >
          <ComposableMap
            projection="geoMercator"
            projectionConfig={{
              center: center,
              scale: 2000 * zoom,
            }}
            className="w-full h-full"
          >
            <ZoomableGroup zoom={zoom} center={center}>
              {VIETNAM_TOPO_JSON.map((geoUrl) => (
                <Geographies key={geoUrl} geography={geoUrl}>
                  {({ geographies }) =>
                    geographies.map((geo) => (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill="#3b82f6"
                        fillOpacity={0.2}
                        stroke="#2563eb"
                        strokeWidth={0.5}
                        style={{
                          default: { outline: "none" },
                          hover: {
                            fill: "#dc2626",
                            fillOpacity: 0.3,
                            outline: "none",
                          },
                          pressed: { outline: "none" },
                        }}
                      />
                    ))
                  }
                </Geographies>
              ))}

              {/* Historical Event Markers */}
              {historicalEvents.map((event) => (
                <Marker
                  key={event.id}
                  coordinates={event.coordinates}
                  onMouseEnter={() => setHoveredEvent(event.id)}
                  onMouseLeave={() => setHoveredEvent(null)}
                  onClick={() => setSelectedEvent(event)}
                >
                  <motion.g
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    whileHover={{ scale: 1.3 }}
                    transition={{
                      delay: 0.05 * historicalEvents.indexOf(event),
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    {/* Outer pulse ring for high importance */}
                    {event.importance === "high" && (
                      <circle
                        r={getMarkerSize(event.importance) + 4}
                        fill={getMarkerColor(event.importance)}
                        fillOpacity={0.2}
                        className="animate-ping"
                      />
                    )}
                    {/* Main marker */}
                    <circle
                      r={getMarkerSize(event.importance)}
                      fill={getMarkerColor(event.importance)}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                    {/* Hover tooltip */}
                    {hoveredEvent === event.id && (
                      <g>
                        <rect
                          x={15}
                          y={-15}
                          width={event.name.length * 8 + 20}
                          height={30}
                          fill="#1f2937"
                          rx={4}
                          opacity={0.95}
                        />
                        <text
                          x={25}
                          y={3}
                          fontSize={12}
                          fill="#fff"
                          fontWeight="bold"
                          style={{ pointerEvents: "none" }}
                        >
                          {event.name}
                        </text>
                      </g>
                    )}
                  </motion.g>
                </Marker>
              ))}
            </ZoomableGroup>
          </ComposableMap>
        </div>

        {/* Region Info */}
        <div className="mt-6 grid grid-cols-5 gap-4">
          <div className="col-span-2 bg-red-50 border-2 border-red-300 rounded-lg p-4">
            <h4 className="font-bold text-red-700 flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-red-600 rounded-full"></span>
              Miền Bắc (1954-1975)
            </h4>
            <p className="text-xs text-gray-600">
              Căn cứ địa XHCN vững mạnh, hậu phương lớn chi viện cho cuộc kháng
              chiến chống Mỹ ở miền Nam.
            </p>
          </div>
          <div className="col-span-2 col-start-3 bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <h4 className="font-bold text-blue-700 flex items-center gap-2 mb-2">
              <span className="w-3 h-3 bg-blue-600 rounded-full"></span>
              Miền Nam (1954-1975)
            </h4>
            <p className="text-xs text-gray-600">
              Chiến trường chính chống Mỹ cứu nước, nơi diễn ra những trận đánh
              khốc liệt nhất.
            </p>
          </div>
          <div className="col-start-5 bg-blue-50 border-2 border-blue-300 rounded-lg p-4">
            <h4 className="font-bold text-black flex items-center gap-2 mb-2">
              Chú thích
            </h4>

            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-red-600 rounded-full"></div>
              <span className="text-xs text-gray-600">
                Sự kiện quan trọng cao
              </span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Event Detail Modal */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full p-6 md:p-8 relative max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-start gap-4 mb-6">
                <div
                  className="p-4 rounded-full text-white shadow-lg"
                  style={{
                    backgroundColor: getMarkerColor(selectedEvent.importance),
                  }}
                >
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                    {selectedEvent.name}
                  </h3>
                  <p className="text-red-600 font-bold text-lg">
                    📅 {selectedEvent.year}
                  </p>
                </div>
              </div>

              <div className="bg-linear-to-br from-red-50 to-yellow-50 rounded-xl p-5 border-l-4 border-red-600 mb-6">
                <p className="text-gray-800 leading-relaxed text-base">
                  {selectedEvent.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                <span
                  className={`text-sm px-4 py-2 rounded-full font-semibold ${
                    selectedEvent.importance === "high"
                      ? "bg-red-100 text-red-700"
                      : selectedEvent.importance === "medium"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {selectedEvent.importance === "high"
                    ? "⭐ Sự kiện cực kỳ quan trọng"
                    : selectedEvent.importance === "medium"
                    ? "🔸 Sự kiện quan trọng"
                    : "📍 Địa danh lịch sử"}
                </span>
                <span className="text-sm px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                  {selectedEvent.type === "battle"
                    ? "⚔️ Chiến trường"
                    : selectedEvent.type === "city"
                    ? "🏙️ Thành phố"
                    : "🗺️ Địa danh đặc biệt"}
                </span>
              </div>

              <div className="text-xs text-gray-500 italic">
                Tọa độ: {selectedEvent.coordinates[1].toFixed(4)}°N,{" "}
                {selectedEvent.coordinates[0].toFixed(4)}°E
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
