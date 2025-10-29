"use client";

import { Navigation } from "@/components/Navigation";
import { Timeline } from "@/components/Timeline";
import { motion } from "framer-motion";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function TimelinePage() {
  const [selectedPeriod, setSelectedPeriod] = useState("all");

  const timelineData1954_1960 = [
    {
      year: "10/1954",
      title: "Miền Bắc hoàn toàn giải phóng",
      description:
        "Quân đội ta tiếp quản Thủ đô Hà Nội, miền Bắc bước vào thời kỳ hòa bình",
    },
    {
      year: "1953-1956",
      title: "Cải cách ruộng đất",
      description:
        "9 triệu người được chia hơn 810.000 ha đất, xóa bỏ chế độ phong kiến",
    },
    {
      year: "1/1959",
      title: "Nghị quyết Trung ương 15",
      description:
        "Cho phép sử dụng bạo lực cách mạng, kết hợp đấu tranh chính trị với vũ trang",
    },
    {
      year: "1960",
      title: "Phong trào Đồng khởi",
      description:
        "Nổ ra ở Bến Tre, lan khắp miền Nam, mở ra thế tiến công mới",
    },
    {
      year: "20/12/1960",
      title: "Thành lập Mặt trận Dân tộc Giải phóng miền Nam",
      description: "Tại Tân Lập, Tây Ninh, tập hợp các lực lượng yêu nước",
    },
  ];

  const timelineData1961_1965 = [
    {
      year: "9/1960",
      title: "Đại hội Đảng toàn quốc lần III",
      description:
        "Xác định hai chiến lược cách mạng song song ở hai miền Nam-Bắc",
    },
    {
      year: "1/1963",
      title: "Chiến thắng Ấp Bắc",
      description: "Mở đầu phong trào 'một tấc không đi, một ly không rời'",
    },
    {
      year: "1961-1965",
      title: "Mỹ thực hiện 'Chiến tranh đặc biệt'",
      description: "Ấp chiến lược, trực thăng vận, rải chất độc hóa học",
    },
    {
      year: "Đầu 1965",
      title: "'Chiến tranh đặc biệt' phá sản",
      description: "Cách mạng miền Nam chuyển sang thế tiến công mạnh mẽ",
    },
  ];

  const timelineData1965_1968 = [
    {
      year: "8/3/1965",
      title: "Quân Mỹ đổ bộ Đà Nẵng",
      description: "Mở đầu cuộc tham chiến trực tiếp của Mỹ vào Việt Nam",
    },
    {
      year: "3/1965",
      title: "Hội nghị Trung ương 11",
      description: "Xác định đường lối kháng chiến chống Mỹ, cứu nước",
    },
    {
      year: "1965-1968",
      title: "Đánh thắng 'Chiến tranh cục bộ'",
      description: "Bắn rơi 3.200 máy bay, đánh chìm 140 tàu chiến Mỹ",
    },
    {
      year: "1968",
      title: "Tổng tiến công và nổi dậy Tết Mậu Thân",
      description: "Bước ngoặt lớn, buộc Mỹ ngồi vào bàn đàm phán Paris",
    },
    {
      year: "13/5/1968",
      title: "Mở Hội nghị Paris",
      description: "Mỹ buộc phải đàm phán với Việt Nam",
    },
    {
      year: "1/11/1968",
      title: "Mỹ chấm dứt ném bom miền Bắc",
      description: "Sau khi bị đánh bại nặng nề",
    },
  ];

  const timelineData1969_1975 = [
    {
      year: "1969-1973",
      title: "Mỹ thực hiện 'Việt Nam hóa chiến tranh'",
      description: "Dùng người Việt đánh người Việt",
    },
    {
      year: "1971",
      title: "Chiến dịch Đường 9 - Nam Lào",
      description: "Đánh bại âm mưu cắt đứng đường Hồ Chí Minh",
    },
    {
      year: "1972",
      title: "Chiến dịch Xuân và Điện Biên Phủ trên không",
      description: "Bắn rơi 84 máy bay B-52",
    },
    {
      year: "27/1/1973",
      title: "Ký Hiệp định Paris",
      description: "Mỹ buộc phải rút quân khỏi Việt Nam",
    },
    {
      year: "1975",
      title: "Tổng tiến công và nổi dậy Xuân 1975",
      description: "Chiến dịch Hồ Chí Minh lịch sử",
    },
    {
      year: "30/4/1975",
      title: "Giải phóng hoàn toàn miền Nam",
      description: "Thống nhất đất nước, kết thúc chia cắt dân tộc",
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-gray-50 pt-16">
      <div className="absolute inset-0 bg-[url('https://hinhnenpowerpoint.com/wp-content/uploads/images/cach-tao-hinh-nen-powerpoint-dep-ve-lich-su-viet-nam.jpg')] bg-cover bg-center blur-md z-[-1]"></div>

      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Dòng thời gian lịch sử
          </h1>
          <p className="mb-8 text-center text-lg text-gray-600">
            Khám phá các sự kiện quan trọng trong giai đoạn 1954-1975
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-12">
            <TabsTrigger value="all">Tất cả</TabsTrigger>
            <TabsTrigger value="1954-1960">1954-1960</TabsTrigger>
            <TabsTrigger value="1961-1965">1961-1965</TabsTrigger>
            <TabsTrigger value="1965-1968">1965-1968</TabsTrigger>
            <TabsTrigger value="1969-1975">1969-1975</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-red-700">
                Toàn bộ giai đoạn 1954-1975
              </h2>
              <Timeline
                items={[
                  ...timelineData1954_1960,
                  ...timelineData1961_1965,
                  ...timelineData1965_1968,
                  ...timelineData1969_1975,
                ]}
              />
            </motion.div>
          </TabsContent>

          <TabsContent value="1954-1960">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-red-700">
                Khôi phục kinh tế và Đồng khởi (1954-1960)
              </h2>
              <Timeline items={timelineData1954_1960} />
            </motion.div>
          </TabsContent>

          <TabsContent value="1961-1965">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-red-700">
                Xây dựng CNXH và chống Chiến tranh đặc biệt (1961-1965)
              </h2>
              <Timeline items={timelineData1961_1965} />
            </motion.div>
          </TabsContent>

          <TabsContent value="1965-1968">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-red-700">
                Kháng chiến chống Mỹ và Tết Mậu Thân (1965-1968)
              </h2>
              <Timeline items={timelineData1965_1968} />
            </motion.div>
          </TabsContent>

          <TabsContent value="1969-1975">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mb-6 text-2xl font-bold text-red-700">
                Đại thắng mùa Xuân và giải phóng miền Nam (1969-1975)
              </h2>
              <Timeline items={timelineData1969_1975} />
            </motion.div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
