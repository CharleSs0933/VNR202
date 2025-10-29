"use client";

import { VietnamMap } from "@/components/VietnamMap";
import { Navigation } from "@/components/Navigation";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { BackToTop } from "@/components/BackToTop";
import { motion } from "framer-motion";

export default function MapPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <ScrollIndicator />
      <BackToTop />

      <div className="pt-24 pb-12">
        <main className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Bản đồ Lịch sử Việt Nam
            </h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Khám phá 13 địa điểm lịch sử quan trọng trong cuộc kháng chiến
              chống Mỹ, cứu nước (1954-1975)
            </p>
          </motion.div>

          {/* Vietnam Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <VietnamMap />
          </motion.div>

          {/* Additional Information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 grid md:grid-cols-2 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span>
                Cách sử dụng bản đồ
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">1.</span>
                  <span>
                    <strong>Phóng to/Thu nhỏ:</strong> Sử dụng nút +/- ở góc
                    phải hoặc scroll chuột
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">2.</span>
                  <span>
                    <strong>Xem thông tin:</strong> Di chuột vào các điểm đỏ để
                    xem tên địa điểm
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">3.</span>
                  <span>
                    <strong>Chi tiết:</strong> Click vào điểm đánh dấu để xem
                    thông tin đầy đủ
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">4.</span>
                  <span>
                    <strong>Đặt lại:</strong> Click nút 🔄 để về vị trí ban đầu
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">📍</span>
                Các địa điểm quan trọng
              </h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-600 rounded-full"></span>
                  <strong>10 sự kiện quan trọng cao:</strong> Hà Nội, Điện Biên
                  Phủ, Vĩnh, Quảng Trị, Huế, Đà Nẵng, Bến Tre, Ấp Bắc, Sài Gòn,
                  Củ Chi
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 bg-orange-500 rounded-full"></span>
                  <strong>3 sự kiện quan trọng vừa:</strong> Pleiku, Khe Sanh,
                  Trường Sa
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-xs text-gray-500 italic">
                    Bản đồ sử dụng dữ liệu GeoJSON chính thức với tọa độ GPS
                    chính xác. Bao gồm cả quần đảo Hoàng Sa và Trường Sa - chủ
                    quyền thiêng liêng của Việt Nam.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </main>
      </div>
    </div>
  );
}
