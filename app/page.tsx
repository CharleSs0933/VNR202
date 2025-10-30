"use client";

import { Hero } from "@/components/Hero";
import { Section, SubSection } from "@/components/Section";
import { ScrollIndicator } from "@/components/ScrollIndicator";
import { BackToTop } from "@/components/BackToTop";
import { Navigation } from "@/components/Navigation";
import { InfoTooltip } from "@/components/InfoTooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import { useState } from "react";
import { Flag, Globe, Lightbulb, Target, TrendingUp } from "lucide-react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("section1");

  const timelineData = [
    {
      id: "section1",
      year: "1954-1960",
      title: "Khôi phục kinh tế, cải tạo XHCN ở miền Bắc",
      description:
        "Chuyển cách mạng miền Nam sang thế tiến công, khôi phục và phát triển kinh tế sau chiến tranh",
    },
    {
      id: "section2",
      year: "1961-1965",
      title: "Xây dựng CNXH ở miền Bắc",
      description:
        "Phát triển thế tiến công của cách mạng Việt Nam, xây dựng nền tảng CNXH",
    },
    {
      id: "section3",
      year: "1965-1968",
      title: "Kháng chiến chống Mỹ",
      description:
        "Triển khai đường lối kháng chiến chống Mỹ, cứu nước trên cả hai miền Nam - Bắc",
    },
    {
      id: "section4",
      year: "1969-1975",
      title: "Giải phóng miền Nam",
      description:
        "Khôi phục kinh tế miền Bắc, đẩy mạnh cuộc chiến đấu giải phóng miền Nam, thống nhất đất nước",
    },
  ];

  return (
    <div className="relative min-h-screen isolate bg-gray-50">
      <div className="absolute inset-0 bg-[url('https://hinhnenpowerpoint.com/wp-content/uploads/images/cach-tao-hinh-nen-powerpoint-dep-ve-lich-su-viet-nam.jpg')] bg-cover bg-center blur-md z-[-1]"></div>

      <Navigation />
      <ScrollIndicator />
      <BackToTop />
      <div className="pt-16">
        <Hero />
      </div>

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        {/* Timeline and Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Timeline Sidebar - Left */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4"
          >
            <div className="lg:sticky lg:top-24">
              <h2 className="mb-6 text-3xl font-bold text-gray-900">
                Dòng chảy lịch sử
              </h2>
              <div className="space-y-4">
                {timelineData.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    onClick={() => setActiveSection(item.id)}
                    className={`cursor-pointer rounded-lg border-l-4 p-4 transition-all ${
                      activeSection === item.id
                        ? "border-red-600 bg-red-50 shadow-lg"
                        : "border-gray-300 bg-white hover:border-red-400 hover:shadow-md"
                    }`}
                  >
                    <div className="mb-1 inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-800">
                      {item.year}
                    </div>
                    <h3
                      className={`text-base font-bold ${
                        activeSection === item.id
                          ? "text-red-900"
                          : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Content Area - Right */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-8"
          >
            {/* Section 1: 1954-1960 */}
            {activeSection === "section1" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Section
                  title="I. Khôi phục kinh tế, cải tạo XHCN ở miền Bắc – Chuyển cách mạng miền Nam sang thế tiến công (1954–1960)"
                  icon={<Flag className="h-6 w-6" />}
                >
                  <div className="mb-8">
                    <h3 className="mb-6 text-2xl font-bold text-gray-50 flex items-center">
                      Khôi phục kinh tế, cải tạo XHCN ở miền Bắc – Chuyển cách
                      mạng miền Nam sang thế tiến công (1954–1960)
                    </h3>

                    {/* Image Placeholder */}

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Bối cảnh lịch sử
                          <InfoTooltip
                            content={[
                              "Thế giới bước vào chiến tranh lạnh, chia làm hai cực XHCN và TBCN",
                              "Ba dòng thác cách mạng: phong trào giải phóng dân tộc, dân chủ – hòa bình, XHCN",
                              "Hệ thống XHCN lớn mạnh, Liên Xô là chỗ dựa chính trị – kinh tế",
                              "Mỹ can thiệp sâu vào Việt Nam, lập chính quyền Ngô Đình Diệm",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Thế giới chiến tranh lạnh, Mỹ can thiệp, miền Bắc giải
                          phóng (10/1954)
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-blue-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Chủ trương miền Bắc
                          <InfoTooltip
                            content={[
                              "Củng cố và xây dựng miền Bắc thành căn cứ địa XHCN vững mạnh",
                              "Khôi phục kinh tế, ổn định xã hội, đời sống nhân dân",
                              "Tranh thủ viện trợ từ Liên Xô và các nước XHCN",
                              "Cải tạo XHCN trong nông nghiệp, công thương nghiệp",
                              "Làm hậu phương cho cách mạng miền Nam",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Xây dựng căn cứ địa XHCN, khôi phục kinh tế, làm hậu
                          phương
                        </p>
                      </div>
                    </div>

                    <div className="bg-linear-to-r from-red-50 to-yellow-50 p-6 rounded-lg mb-6 border border-red-200">
                      <h4 className="font-bold text-red-700 mb-3 flex items-center">
                        ✓ Thành tựu miền Bắc (1954-1960)
                        <InfoTooltip
                          content={[
                            "Cải cách ruộng đất (1953–1956): 9 triệu người được chia hơn 810.000 ha đất",
                            "Đến 1957 sản lượng bằng và vượt mức 1939",
                            "Kế hoạch 3 năm (1958–1960): hoàn thành khôi phục kinh tế",
                            "Cải tạo công thương nghiệp: công – tư hợp doanh",
                          ]}
                        />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-red-600 font-bold">▸</span>
                          <span>
                            <strong>Cải cách ruộng đất:</strong> 9 triệu người
                            được chia 810.000 ha
                          </span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-red-600 font-bold">▸</span>
                          <span>
                            <strong>Kinh tế:</strong> Năm 1957 sản lượng vượt
                            mức 1939
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Video Placeholder */}

                    <div className="aspect-video mb-6">
                      <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://81alj862lj.ufs.sh/f/U2NdhfOiIc8a2fvyBH1oM4KEjfxrF2m7V5CLnpSePBDwuZXq"
                        title="Video lịch sử cải cách ruộng đất"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat"
                        allowFullScreen
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-green-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Chủ trương miền Nam
                          <InfoTooltip
                            content={[
                              "Mỹ - Diệm biến miền Nam thành thuộc địa kiểu mới",
                              "Đấu tranh đòi thi hành Hiệp định Giơnevơ",
                              "Chuyển hướng từ đấu tranh quân sự sang chính trị hòa bình",
                              "Xác định kẻ thù chính là đế quốc Mỹ",
                              "Đề cương cách mạng miền Nam (1956) do Lê Duẩn khởi thảo",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Đấu tranh chính trị, chống Mỹ - Diệm, chuẩn bị lực
                          lượng
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-orange-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Thực hiện miền Nam
                          <InfoTooltip
                            content={[
                              "Nghị quyết Trung ương 15 (1/1959): cho phép bạo lực cách mạng",
                              "Mở đường 559 (Trường Sơn) và đường 759 (Hồ Chí Minh trên biển)",
                              "Phong trào Đồng khởi (1960) nổ ra ở Bến Tre",
                              "20/12/1960: thành lập Mặt trận Dân tộc Giải phóng miền Nam",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Đồng khởi 1960, thành lập Mặt trận Giải phóng miền Nam
                        </p>
                      </div>
                    </div>

                    {/* Image Placeholder */}
                    <img
                      src="https://file3.qdnd.vn/data/images/0/2022/01/07/thanhhuong/doiquantocdai-1704h3.jpg?dpi=150&quality=100&w=870"
                      alt="Hình ảnh miền Bắc thời kỳ 1954-1960"
                      className="w-full rounded-lg shadow-lg mb-6"
                    />
                  </div>
                </Section>
              </motion.div>
            )}

            {/* Section 2: 1961-1965 */}
            {activeSection === "section2" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Section
                  title="II. Xây dựng CNXH ở miền Bắc – Phát triển thế tiến công của cách mạng Việt Nam (1961–1965)"
                  icon={<Target className="h-6 w-6" />}
                >
                  <div className="mb-8">
                    <h3 className="mb-6 text-2xl font-bold text-gray-50 flex items-center">
                      Xây dựng CNXH ở miền Bắc – Phát triển thế tiến công của
                      cách mạng Việt Nam (1961–1965)
                    </h3>

                    {/* Image Placeholder */}
                    <img
                      src="https://imgnvsk.vnanet.vn/MediaUpload/Org/2023/08/25/dh-3-125-10-54-14.jpg"
                      alt="Đại hội Đảng toàn quốc lần III tháng 9/1960, xây dựng CNXH ở miền Bắc"
                      className="w-full rounded-lg shadow-lg mb-6"
                    />

                    <div className="bg-blue-50 p-6 rounded-lg mb-6 border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-2 flex items-center">
                        🎯 Đại hội Đảng lần III (9/1960)
                        <InfoTooltip
                          content={[
                            "Miền Bắc - cách mạng XHCN",
                            "Miền Nam - cách mạng dân tộc dân chủ nhân dân",
                            "Hai chiến lược song song, hỗ trợ nhau, nhằm thống nhất đất nước",
                            "Xây dựng CNXH ở miền Bắc là nhiệm vụ quyết định toàn bộ cách mạng",
                          ]}
                        />
                      </h4>
                      <p className="text-gray-700">
                        Xác định hai chiến lược: Miền Bắc xây dựng CNXH, miền
                        Nam giải phóng dân tộc
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-indigo-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Miền Bắc (1961-1965)
                          <InfoTooltip
                            content={[
                              "Trở thành căn cứ địa vững chắc về chính trị, kinh tế, quốc phòng",
                              "Hoàn thiện quan hệ sản xuất XHCN",
                              "Xây dựng cơ sở vật chất – kỹ thuật cho CNXH",
                              "Cải thiện đời sống nhân dân",
                              "Tăng cường quốc phòng, chi viện cho miền Nam",
                              "Kết quả: đến 1965 chi viện tăng gấp nhiều lần so với 1961",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Xây dựng căn cứ địa vững chắc, chi viện cho miền Nam
                        </p>
                      </div>

                      <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-red-600">
                        <h4 className="font-bold text-gray-800 mb-2 flex items-center">
                          Miền Nam (1961-1965)
                          <InfoTooltip
                            content={[
                              "Mỹ thực hiện 'Chiến tranh đặc biệt' với Kế hoạch Staley – Taylor",
                              "Ấp chiến lược, trực thăng vận, rải chất độc hóa học",
                              "Chiến thắng Ấp Bắc (1/1963) mở đầu phong trào",
                              "Đầu 1965: 'Chiến tranh đặc biệt' phá sản hoàn toàn",
                            ]}
                          />
                        </h4>
                        <p className="text-gray-600 text-sm">
                          Chiến thắng Ấp Bắc 1963, phá sản "Chiến tranh đặc
                          biệt"
                        </p>
                      </div>
                    </div>

                    {/* Video Placeholder */}
                    <div className="aspect-video mb-6">
                      <iframe
                        className="w-full h-full rounded-lg shadow-lg"
                        src="https://90sj56vdp0.ufs.sh/f/rSQkHC8t0FOUnPB1XwOKPBjDCQWIU3154Sglasi2YFMAeZ0h"
                        title="Video lịch sử cải cách ruộng đất"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat"
                        allowFullScreen
                      />
                    </div>
                  </div>
                </Section>
              </motion.div>
            )}

            {/* Section 3: 1965-1968 */}
            {activeSection === "section3" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Section
                  title="III. Lãnh đạo cách mạng cả nước - Chiến tranh cục bộ (1965 - 1968)"
                  icon={<TrendingUp className="h-6 w-6" />}
                >
                  {/* Image Placeholder */}
                  <img
                    src="https://nghiencuuquocte.org/wp-content/uploads/2020/03/08.jpg"
                    alt="Quân Mỹ đổ bộ Đà Nẵng 8/3/1965"
                    className="w-full rounded-lg shadow-lg mb-6"
                  />

                  <div className="bg-red-50 p-6 rounded-lg mb-6 border-l-4 border-red-600">
                    <h4 className="font-bold text-red-800 mb-2 flex items-center">
                      ⚠️ Bối cảnh: Chiến tranh cục bộ (1965-1968)
                      <InfoTooltip
                        content={[
                          "Sau thất bại 'Chiến tranh đặc biệt', Mỹ chuyển sang 'Chiến tranh cục bộ'",
                          "8/3/1965: Quân Mỹ đổ bộ vào Đà Nẵng, tham chiến trực tiếp",
                          "Mỹ ồ ạt đưa quân viễn chinh và quân chư hầu (Úc, Hàn, Thái...)",
                          "Mở rộng chiến tranh phá hoại miền Bắc, mục tiêu 'đưa về thời đồ đá'",
                          "Nhân dân ta chống Mỹ, cứu nước trên phạm vi cả nước",
                        ]}
                      />
                    </h4>
                    <p className="text-gray-700">
                      Mỹ đưa quân trực tiếp vào miền Nam, ném bom phá hoại miền
                      Bắc
                    </p>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg mb-6 border-l-4 border-yellow-600">
                    <h4 className="font-bold text-yellow-900 mb-2 flex items-center">
                      🎯 Đường lối kháng chiến chống Mỹ, cứu nước
                      <InfoTooltip
                        content={[
                          "Hội nghị Trung ương 11 (3/1965) và 12 (12/1965) xác định đường lối",
                          "Toàn dân kháng chiến, quyết tâm đánh thắng giặc Mỹ",
                          "Mục tiêu: bảo vệ miền Bắc, giải phóng miền Nam, thống nhất Tổ quốc",
                          "Đánh lâu dài, dựa vào sức mình là chính",
                          "Càng đánh càng mạnh, vừa chiến đấu vừa sản xuất",
                          "Kết hợp: miền Bắc chi viện – miền Nam tiến công",
                        ]}
                      />
                    </h4>
                    <p className="text-gray-700">
                      Toàn dân kháng chiến, đánh lâu dài, miền Bắc chi viện cho
                      miền Nam
                    </p>
                  </div>

                  <h3 className="mb-4 text-xl font-bold text-gray-50 border-l-4 border-red-600 pl-4">
                    Quá trình thực hiện đường lối (1965 - 1968)
                  </h3>

                  <Tabs defaultValue="north" className="w-full mb-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="north">Miền Bắc</TabsTrigger>
                      <TabsTrigger value="south">Miền Nam</TabsTrigger>
                    </TabsList>
                    <TabsContent value="north" className="space-y-3">
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                          🏭 Kinh tế thời chiến
                          <InfoTooltip
                            content={[
                              "Chuyển hướng kinh tế từ thời bình sang thời chiến",
                              "Các nhà máy lớn sơ tán, phân tán thành xí nghiệp địa phương",
                              "Phong trào: Thanh niên 'Ba sẵn sàng'; Phụ nữ 'Ba đảm đang'",
                              "Đẩy mạnh phong trào 'tay cày, tay súng – tay búa, tay súng'",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-600 text-sm">
                          "Tay cày, tay súng" - vừa sản xuất, vừa chiến đấu
                        </p>
                      </div>
                      <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
                        <h5 className="font-bold text-green-800 mb-2">
                          ✓ Thành tích:
                        </h5>
                        <p className="text-gray-700">
                          <strong>1965-1968:</strong> Bắn rơi 3.200 máy bay,
                          đánh chìm 140 tàu chiến Mỹ
                        </p>
                        <p className="text-green-700 font-semibold mt-2">
                          → Mỹ buộc phải ngừng ném bom miền Bắc (1/11/1968)
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="south" className="space-y-3">
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                          ⚔️ Chiến lược chống Mỹ
                          <InfoTooltip
                            content={[
                              "Phương châm '4 bám, 3 mũi giáp công'",
                              "4 bám: cấp trên bám cấp dưới, Đảng bám dân, dân bám đất, bộ đội du kích bám địch",
                              "3 mũi giáp công: quân sự – chính trị – binh vận",
                              "Đến cuối 1967, ta kiểm soát khoảng 80% lãnh thổ miền Nam",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-600 text-sm">
                          "4 bám, 3 mũi giáp công" - Kiểm soát 80% lãnh thổ miền
                          Nam
                        </p>
                      </div>
                      <div className="bg-red-100 p-5 rounded-lg border-2 border-red-600">
                        <h5 className="font-bold text-red-800 mb-2">
                          ★ Tổng tiến công và nổi dậy Tết Mậu Thân (1968)
                        </h5>
                        <p className="text-gray-700 font-semibold">
                          → Buộc Mỹ ngồi vào bàn đàm phán Paris (13/5/1968)
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Video Placeholder */}
                  <div className="aspect-video mb-6">
                    <iframe
                      className="w-full h-full rounded-lg shadow-lg"
                      src="https://90sj56vdp0.ufs.sh/f/rSQkHC8t0FOUNFNIfHo28FwTmLpB5IJHaEYRUMtAsySq470k"
                      title="Video lịch sử cải cách ruộng đất"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat"
                      allowFullScreen
                    />
                  </div>
                </Section>
              </motion.div>
            )}

            {/* Section 4: 1969-1975 */}
            {activeSection === "section4" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <Section
                  title="IV. Khôi phục kinh tế, bảo vệ miền Bắc, đẩy mạnh cuộc chiến đấu giải phóng miền Nam (1969 - 1975)"
                  icon={<Flag className="h-6 w-6" />}
                >
                  {/* Image Placeholder */}
                  <img
                    src="https://file3.qdnd.vn/data/images/0/2023/12/22/upload_2049/b52.jpg?dpi=150&quality=100&w=870"
                    alt="Hình ảnh miền Bắc thời kỳ 1954-1960"
                    className="w-full rounded-lg shadow-lg mb-6"
                  />

                  <Tabs defaultValue="north2" className="w-full mb-6">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="north2">Miền Bắc</TabsTrigger>
                      <TabsTrigger value="south2">Miền Nam</TabsTrigger>
                    </TabsList>
                    <TabsContent value="north2" className="space-y-3">
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                          🔧 Khôi phục kinh tế (1969-1972)
                          <InfoTooltip
                            content={[
                              "Sau khi Mỹ ngừng ném bom (11/1968), tập trung khôi phục kinh tế",
                              "Hàn gắn hậu quả chiến tranh, xây dựng lại nhà máy, đường sá",
                              "Nông nghiệp được khôi phục và phát triển",
                              "Chăn nuôi phát triển mạnh",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Khôi phục kinh tế, hàn gắn hậu quả chiến tranh
                        </p>
                      </div>
                      <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
                        <h5 className="font-bold text-red-800 mb-2 flex items-center">
                          ✈️ Điện Biên Phủ trên không (12/1972)
                          <InfoTooltip
                            content={[
                              "Mỹ tái đánh phá miền Bắc từ 4/1972",
                              "Cuộc tập kích 'Hà Nội – 12 ngày đêm' (Linebacker II)",
                              "Bắn rơi 84 máy bay, trong đó có 34 B-52",
                              "Hiệp định Paris (27/1/1973) được ký, Mỹ buộc phải rút quân",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-700">
                          <strong>Kết quả:</strong> Bắn rơi 84 máy bay (34 B-52)
                        </p>
                        <p className="text-red-700 font-semibold mt-2">
                          → Hiệp định Paris 27/1/1973, Mỹ rút quân
                        </p>
                      </div>
                    </TabsContent>
                    <TabsContent value="south2" className="space-y-3">
                      <div className="bg-white p-5 rounded-lg shadow-md">
                        <h5 className="font-bold text-gray-800 mb-3 flex items-center">
                          🎯 Việt Nam hóa chiến tranh
                          <InfoTooltip
                            content={[
                              "Mỹ chuyển sang 'Việt Nam hóa chiến tranh' dưới thời Nixon",
                              "Nhằm 'dùng người Việt đánh người Việt'",
                              "Đảng chủ trương lấy nông thôn làm hướng tiến công chính",
                              "Phát triển ba thứ quân: chủ lực, địa phương, du kích",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-600 text-sm">
                          Chiến lược "dùng người Việt đánh người Việt"
                        </p>
                      </div>
                      <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
                        <h5 className="font-bold text-yellow-900 mb-2 flex items-center">
                          ⚔️ Các chiến dịch lớn
                          <InfoTooltip
                            content={[
                              "Chiến dịch phản công Đường 9 – Nam Lào (1971)",
                              "Cuộc tiến công chiến lược 1972",
                              "Sau Hiệp định Paris (1973), Mỹ – Ngụy vẫn phá hoại",
                              "Hội nghị Trung ương 21 xác định bạo lực cách mạng",
                            ]}
                          />
                        </h5>
                        <p className="text-gray-700">
                          Đường 9 - Nam Lào (1971), Tiến công chiến lược (1972)
                        </p>
                      </div>
                      <div className="bg-linear-to-r from-red-600 to-red-700 p-6 rounded-lg shadow-xl">
                        <h5 className="font-bold text-white text-xl mb-2">
                          ★ 30/4/1975 - Chiến dịch Hồ Chí Minh toàn thắng
                        </h5>
                        <p className="text-yellow-100 font-semibold text-lg">
                          → Miền Nam hoàn toàn giải phóng, thống nhất đất nước
                        </p>
                      </div>
                    </TabsContent>
                  </Tabs>

                  {/* Video Placeholder */}
                  <div className="aspect-video mb-6">
                    <iframe
                      className="w-full h-full rounded-lg shadow-lg"
                      src="https://90sj56vdp0.ufs.sh/f/rSQkHC8t0FOUxKXocOlDpgUu5KzdemliBTow39JPE10qj4Nn"
                      title="Video lịch sử cải cách ruộng đất"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat"
                      allowFullScreen
                    />
                  </div>

                  {/* Image Placeholder */}
                  <img
                    src="https://file3.qdnd.vn/data/images/0/2022/04/26/thuyanh/30-4.jpg"
                    alt="Hình ảnh miền Bắc thời kỳ 1954-1960"
                    className="w-full rounded-lg shadow-lg mb-6"
                  />
                </Section>

                {/* Ý nghĩa và Kinh nghiệm - Nested SubSection */}
                <div className="mt-8">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900 flex items-center">
                    <Lightbulb className="h-6 w-6 mr-2" />Ý nghĩa lịch sử và
                    kinh nghiệm lãnh đạo
                  </h3>
                  {/* Image Placeholder */}
                  <img
                    src="https://media-cdn-v2.laodong.vn/storage/newsportal/2025/4/29/1499512/Dieu-Binh-84.jpg"
                    alt="Hình ảnh miền Bắc thời kỳ 1954-1960"
                    className="w-full rounded-lg shadow-lg mb-6"
                  />

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-linear-to-br from-green-50 to-green-100 p-6 rounded-lg shadow-lg border-l-4 border-green-600">
                      <h4 className="font-bold text-green-800 mb-3 flex items-center text-lg">
                        🏆 Ý nghĩa lịch sử
                        <InfoTooltip
                          content={[
                            "Kết thúc 21 năm chống Mỹ, 30 năm chiến tranh cách mạng, 117 năm chống đế quốc",
                            "Hoàn thành cách mạng dân tộc dân chủ nhân dân, mở ra kỷ nguyên hòa bình, thống nhất",
                            "Làm thất bại hoàn toàn chiến lược xâm lược lớn nhất của Mỹ sau CTTG II",
                            "Khẳng định ý chí, trí tuệ, sức mạnh toàn dân tộc Việt Nam",
                            "Trở thành biểu tượng sáng ngời của chủ nghĩa anh hùng cách mạng",
                          ]}
                        />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-green-600 font-bold">
                            ✓
                          </span>
                          <span>Kết thúc 117 năm chống đế quốc xâm lược</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-green-600 font-bold">
                            ✓
                          </span>
                          <span>Thống nhất đất nước, đi lên CNXH</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-green-600 font-bold">
                            ✓
                          </span>
                          <span>Đánh bại chiến lược xâm lược của Mỹ</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-800 mb-3 flex items-center text-lg">
                        💡 Kinh nghiệm lãnh đạo
                        <InfoTooltip
                          content={[
                            "Giương cao ngọn cờ độc lập dân tộc và CNXH, tập hợp sức mạnh toàn dân",
                            "Tìm ra phương pháp đấu tranh đúng đắn, phù hợp từng giai đoạn",
                            "Tổ chức, chỉ đạo chiến đấu giỏi, phát huy vai trò cấp ủy Đảng và quân đội",
                            "Chú trọng xây dựng Đảng vững mạnh về chính trị, tư tưởng, tổ chức",
                            "Hạn chế: có thời điểm đánh giá chưa đầy đủ, còn nóng vội, chủ quan",
                          ]}
                        />
                      </h4>
                      <ul className="space-y-2">
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-blue-600 font-bold">
                            ▸
                          </span>
                          <span>Độc lập dân tộc và CNXH</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-blue-600 font-bold">
                            ▸
                          </span>
                          <span>Phương pháp đúng đắn từng giai đoạn</span>
                        </li>
                        <li className="flex items-start text-gray-700">
                          <span className="mr-2 text-blue-600 font-bold">
                            ▸
                          </span>
                          <span>Xây dựng Đảng vững mạnh</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 rounded-xl bg-linear-to-r from-red-900 to-red-700 p-8 text-center text-white shadow-xl"
        >
          <Globe className="mx-auto mb-4 h-12 w-12" />
          <h3 className="mb-2 text-2xl font-bold">
            Chiến thắng vĩ đại của dân tộc Việt Nam
          </h3>
          <p className="text-lg text-red-100">Độc lập - Tự do - Hạnh phúc</p>
        </motion.div>
      </main>
    </div>
  );
}
