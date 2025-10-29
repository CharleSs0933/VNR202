"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BookOpen,
  FileText,
  Video,
  ExternalLink,
  Download,
} from "lucide-react";

export default function ResourcesPage() {
  const documents = [
    {
      title: "Hiệp định Genève (1954)",
      description:
        "Văn bản thỏa thuận chấm dứt chiến tranh Đông Dương lần thứ nhất",
      icon: FileText,
    },
    {
      title: "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH",
      description: "Đại hội III của Đảng (1960)",
      icon: FileText,
    },
    {
      title: "Hiệp định Paris (1973)",
      description:
        "Hiệp định về chấm dứt chiến tranh, lập lại hòa bình ở Việt Nam",
      icon: FileText,
    },
  ];

  const videos = [
    {
      title: "Chiến thắng Điện Biên Phủ",
      description: "Tư liệu lịch sử về chiến thắng lịch sử năm 1954",
    },
    {
      title: "Tổng tiến công Tết Mậu Thân 1968",
      description: "Ký ức về bước ngoặt lịch sử của cuộc kháng chiến",
    },
    {
      title: "Chiến dịch Hồ Chí Minh",
      description: "Tư liệu về chiến dịch giải phóng miền Nam 1975",
    },
  ];

  const books = [
    {
      title: "Lịch sử Đảng Cộng sản Việt Nam",
      author: "Ban Chấp hành Trung ương",
      description: "Giáo trình chính thức về lịch sử Đảng",
    },
    {
      title: "Hồi ký trong chiến tranh",
      author: "Võ Nguyên Giáp",
      description: "Hồi ức của Đại tướng về các chiến dịch lớn",
    },
    {
      title: "Nhật ký Nam Bộ kháng chiến",
      author: "Trần Văn Giàu",
      description: "Tư liệu quý về kháng chiến ở miền Nam",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="mb-4 text-center text-4xl font-bold text-gray-900">
            Tài liệu tham khảo
          </h1>
          <p className="text-center text-lg text-gray-600">
            Khám phá thêm về lịch sử Việt Nam giai đoạn 1954-1975
          </p>
        </motion.div>

        {/* Documents Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold text-red-700 flex items-center gap-2">
            <FileText className="h-6 w-6" />
            Văn kiện lịch sử
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                      <doc.icon className="h-6 w-6 text-red-600" />
                    </div>
                    <CardTitle className="text-lg">{doc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{doc.description}</p>
                    <button className="mt-4 flex items-center gap-2 text-red-600 hover:text-red-700 font-medium">
                      Xem chi tiết
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Videos Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="mb-6 text-2xl font-bold text-red-700 flex items-center gap-2">
            <Video className="h-6 w-6" />
            Video tư liệu
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100">
                      <Video className="h-6 w-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-lg">{video.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{video.description}</p>
                    <button className="mt-4 flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium">
                      Xem video
                      <ExternalLink className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Books Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="mb-6 text-2xl font-bold text-red-700 flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Sách tham khảo
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100">
                      <BookOpen className="h-6 w-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{book.title}</CardTitle>
                    <p className="text-sm text-gray-500">
                      Tác giả: {book.author}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{book.description}</p>
                    <button className="mt-4 flex items-center gap-2 text-green-600 hover:text-green-700 font-medium">
                      Tải về
                      <Download className="h-4 w-4" />
                    </button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* External Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12"
        >
          <Card className="bg-linear-to-r from-red-50 to-yellow-50 border-2 border-red-200">
            <CardHeader>
              <CardTitle className="text-2xl">Liên kết hữu ích</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <a
                href="https://www.baotanglichsu.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Bảo tàng Lịch sử Quốc gia</span>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
              <a
                href="https://www.daidoanket.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Báo Đại Đoàn Kết</span>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
              <a
                href="https://www.tapchicongsan.org.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4 hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">Tạp chí Cộng sản</span>
                <ExternalLink className="h-5 w-5 text-gray-400" />
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
