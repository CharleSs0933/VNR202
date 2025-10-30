"use client";

import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Brain, CheckCircle, Shield, Sparkles } from "lucide-react";

export default function AIUsagePage() {
  const aiTools = [
    {
      name: "ChatGPT (OpenAI)",
      icon: Brain,
      url: "https://static.vecteezy.com/system/resources/previews/021/972/603/original/minsk-belarus-03-27-2023-openai-and-chatgpt-logo-artifical-chatbot-system-chat-bot-button-for-web-app-and-phone-icon-symbol-editorial-illustration-free-vector.jpg",
      color: "emerald",
      description:
        "Được sử dụng để hỗ trợ tổng hợp kiến thức, tóm tắt văn bản, gợi ý cách diễn đạt và kiểm tra logic nội dung.",
      features: [
        "Tổng hợp kiến thức",
        "Tóm tắt văn bản",
        "Gợi ý cách diễn đạt",
        "Kiểm tra logic nội dung",
      ],
    },
    {
      name: "Gemini (Google AI)",
      icon: Sparkles,
      color: "blue",
      url: "https://tse3.mm.bing.net/th/id/OIP.8VamCYMlSR28Finw60_ysQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Được dùng để tra cứu thông tin, so sánh và đối chiếu các khái niệm từ nhiều nguồn khác nhau.",
      features: [
        "Tra cứu thông tin",
        "So sánh khái niệm",
        "Đối chiếu nguồn",
        "Xác minh dữ liệu",
      ],
    },
    {
      name: "Cursor AI",
      icon: Shield,
      color: "purple",
      url: "https://tse2.mm.bing.net/th/id/OIP.Kqapk7ygl6rKV46J2E13ggHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
      description:
        "Được sử dụng trong quá trình viết và kiểm tra mã code, gợi ý cấu trúc hàm và tối ưu thuật toán.",
      features: [
        "Viết và kiểm tra code",
        "Gợi ý cấu trúc hàm",
        "Tối ưu thuật toán",
        "Debug và refactor",
      ],
    },
  ];

  const principles = [
    {
      title: "AI chỉ là trợ lý",
      description:
        "Các công cụ AI chỉ đóng vai trò trợ lý hỗ trợ, không phải tác giả.",
      icon: "🤝",
    },
    {
      title: "Kiểm chứng nghiêm ngặt",
      description:
        "Mọi thông tin được kiểm chứng lại dựa trên giáo trình, tài liệu học thuật, và các nguồn uy tín liên quan.",
      icon: "✅",
    },
    {
      title: "Trách nhiệm hoàn toàn",
      description:
        "Kết quả cuối cùng được chỉnh sửa, biên tập và chịu trách nhiệm hoàn toàn bởi nhóm/cá nhân thực hiện.",
      icon: "📝",
    },
  ];

  return (
    <div className="relative isolate min-h-screen bg-gray-50 pt-16">
      <div className="absolute inset-0 bg-[url('https://hinhnenpowerpoint.com/wp-content/uploads/images/cach-tao-hinh-nen-powerpoint-dep-ve-lich-su-viet-nam.jpg')] bg-cover bg-center blur-md z-[-1]"></div>

      <Navigation />
      <main className="mx-auto max-w-7xl px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <div className="mb-4 flex justify-center">
            <div className="rounded-full bg-linear-to-r from-purple-500 to-blue-500 p-4">
              <Brain className="h-12 w-12 text-white" />
            </div>
          </div>
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            Sử dụng AI trong Đề tài
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Trong quá trình thực hiện đề tài, nhóm/cá nhân có sử dụng các công
            cụ trí tuệ nhân tạo (AI) nhằm hỗ trợ tìm kiếm thông tin, tóm tắt nội
            dung và gợi ý ý tưởng.
          </p>
        </motion.div>

        {/* AI Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Công cụ AI được sử dụng
          </h2>
          <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
            {aiTools.map((tool, index) => {
              const Icon = tool.icon;
              const colorClasses = {
                emerald: {
                  bg: "bg-emerald-100",
                  text: "text-emerald-600",
                  border: "border-emerald-200",
                  hover: "hover:border-emerald-400",
                },
                blue: {
                  bg: "bg-blue-100",
                  text: "text-blue-600",
                  border: "border-blue-200",
                  hover: "hover:border-blue-400",
                },
                purple: {
                  bg: "bg-purple-100",
                  text: "text-purple-600",
                  border: "border-purple-200",
                  hover: "hover:border-purple-400",
                },
              };
              const colors =
                colorClasses[tool.color as keyof typeof colorClasses];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <Card
                    className={`h-full border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-xl bg-white`}
                  >
                    <CardHeader>
                      <img
                        src={tool.url}
                        alt={tool.name}
                        className="w-24 h-24 object-cover rounded-xl"
                      />
                      <CardTitle className="text-xl font-bold text-gray-900">
                        {tool.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-gray-600">{tool.description}</p>
                      <div className="space-y-2">
                        {tool.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <CheckCircle
                              className={`mt-0.5 h-4 w-4 shrink-0 ${colors.text}`}
                            />
                            <span className="text-sm text-gray-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Principles Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Nguyên tắc sử dụng
          </h2>
          <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              >
                <Card className="h-full border-2 border-gray-200 bg-white hover:border-red-300 hover:shadow-lg transition-all duration-300">
                  <CardHeader>
                    <div className="mb-3 text-4xl">{principle.icon}</div>
                    <CardTitle className="text-xl font-bold text-gray-900">
                      {principle.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{principle.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          <Card className="border-2 border-red-200 bg-linear-to-r from-red-50 to-orange-50">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">
                Cam kết học thuật
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-lg leading-relaxed text-gray-700">
                Chúng tôi cam kết rằng tất cả nội dung trong đề tài này đã được
                nghiên cứu, kiểm chứng và chỉnh sửa một cách nghiêm túc. Các
                công cụ AI được sử dụng như một phương tiện hỗ trợ, nhưng toàn
                bộ trách nhiệm về tính chính xác, độ tin cậy và chất lượng của
                nội dung thuộc về nhóm/cá nhân thực hiện.
              </p>
              <div className="flex items-center gap-2 rounded-lg bg-white p-4 border border-red-200">
                <Shield className="h-6 w-6 text-red-600 shrink-0" />
                <p className="font-semibold text-gray-800">
                  Mọi thông tin đều được kiểm chứng từ nguồn học thuật uy tín và
                  tài liệu chính thống.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
    </div>
  );
}
