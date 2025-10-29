# 🇻🇳 Trang Web Lịch Sử Việt Nam 1954-1975

Ứng dụng web tương tác cao về lịch sử Việt Nam trong giai đoạn lãnh đạo xây dựng CNXH ở miền Bắc và kháng chiến chống đế quốc Mỹ xâm lược (1954-1975).

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-ff0055)

## ✨ Tính năng nổi bật

### 🎯 Nội dung phong phú
- **Nội dung chi tiết**: Đầy đủ nội dung lịch sử từ 1954-1975
- **Phân chia rõ ràng**: Theo từng giai đoạn và khu vực (miền Bắc/Nam)
- **Dễ mở rộng**: ExpandableCard cho phép xem chi tiết
- **Tabs navigation**: Chuyển đổi nhanh giữa các nội dung

### 🎨 Giao diện đẹp mắt
- **Modern UI**: Thiết kế hiện đại với shadcn/ui
- **Gradient Colors**: Màu đỏ-vàng đặc trưng cờ Việt Nam
- **Smooth Animations**: Framer Motion cho trải nghiệm mượt mà
- **Responsive**: Hoàn hảo trên mọi thiết bị

### 🎮 Tính năng tương tác
- **Quiz**: 10 câu hỏi trắc nghiệm với giải thích
- **Timeline**: Dòng thời gian tương tác theo giai đoạn
- **Search**: Tìm kiếm nội dung (đang phát triển)
- **Resources**: Tài liệu, video, sách tham khảo

## 🚀 Cài đặt và chạy

### Yêu cầu
- Node.js 18+ và npm

### Cài đặt

```bash
# Clone repository
git clone <repo-url>
cd VNR202

# Cài đặt dependencies
npm install

# Chạy development server
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

### Build production

```bash
npm run build
npm start
```

## 📁 Cấu trúc dự án

```
VNR202/
├── app/                      # Next.js App Router
│   ├── page.tsx             # Trang chủ
│   ├── quiz/                # Trang trắc nghiệm
│   ├── timeline/            # Trang dòng thời gian
│   ├── resources/           # Trang tài liệu
│   ├── layout.tsx           # Root layout
│   └── globals.css          # Global styles
├── components/              # React components
│   ├── Hero.tsx            # Hero section
│   ├── Navigation.tsx      # Navigation menu
│   ├── Timeline.tsx        # Timeline component
│   ├── Section.tsx         # Section wrapper
│   ├── ExpandableCard.tsx  # Expandable content
│   ├── SearchBox.tsx       # Search input
│   ├── ScrollIndicator.tsx # Scroll progress
│   ├── BackToTop.tsx       # Back to top button
│   └── ui/                 # shadcn/ui components
│       ├── card.tsx
│       └── tabs.tsx
├── lib/                     # Utilities
│   └── utils.ts            # Helper functions
└── public/                  # Static assets
```

## 🎨 Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) - React framework
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type safety
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Animation library
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) - Re-usable components
- **Icons**: [Lucide React](https://lucide.dev/) - Beautiful icons

## 📚 Nội dung

### I. Sự lãnh đạo của Đảng (1954-1975)

#### Giai đoạn 1954-1960
- Khôi phục kinh tế miền Bắc
- Cải cách ruộng đất
- Chuyển cách mạng miền Nam sang thế tiến công
- Phong trào Đồng khởi

#### Giai đoạn 1961-1965
- Xây dựng CNXH ở miền Bắc
- Chống Chiến tranh đặc biệt
- Chiến thắng Ấp Bắc

### II. Kháng chiến chống Mỹ (1965-1975)

#### 1965-1968
- Chiến tranh cục bộ
- Tổng tiến công Tết Mậu Thân
- Hội nghị Paris

#### 1969-1975
- Việt Nam hóa chiến tranh
- Điện Biên Phủ trên không
- Chiến dịch Hồ Chí Minh
- Giải phóng miền Nam (30/4/1975)

### III. Ý nghĩa và Kinh nghiệm
- Ý nghĩa lịch sử vĩ đại
- Kinh nghiệm lãnh đạo của Đảng

## 🎯 Roadmap

- [ ] Hoàn thiện search functionality
- [ ] Thêm hình ảnh lịch sử
- [ ] Tích hợp bản đồ tương tác
- [ ] Video tư liệu
- [ ] Export PDF
- [ ] Dark mode
- [ ] Đa ngôn ngữ

## 📝 License

Dự án giáo dục, sử dụng cho mục đích học tập.

## 🙏 Acknowledgments

- Nội dung dựa trên giáo trình Lịch sử Đảng Cộng sản Việt Nam
- UI/UX lấy cảm hứng từ các trang web lịch sử hiện đại
- Icons từ Lucide React
- Components từ shadcn/ui

---

Được xây dựng với ❤️ cho giáo dục lịch sử Việt Nam
