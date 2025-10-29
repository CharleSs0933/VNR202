# Trang Web Lịch Sử Việt Nam 1954-1975

Trang web tương tác cao về lịch sử Việt Nam giai đoạn 1954-1975, tập trung vào việc lãnh đạo xây dựng CNXH ở miền Bắc và kháng chiến chống đế quốc Mỹ xâm lược, giải phóng miền Nam, thống nhất đất nước.

## 🚀 Tính năng chính

### Tương tác cao

#### Navigation & UI
- **Navigation Menu**: Menu điều hướng cố định với 4 trang chính
- **Search Box**: Tìm kiếm nội dung lịch sử (đang phát triển)
- **Scroll Indicator**: Thanh tiến trình cuộn trang ở đầu trang
- **Back to Top**: Nút quay lại đầu trang xuất hiện khi cuộn xuống
- **Responsive Design**: Hoàn toàn tương thích mobile, tablet, desktop

#### Animations & Effects
- **Timeline Animation**: Dòng thời gian với hiệu ứng xuất hiện mượt mà
- **Section Animations**: Các phần nội dung fade-in khi cuộn
- **Expandable Cards**: Mở/đóng nội dung chi tiết với animation
- **Hover Effects**: Hiệu ứng hover trên các card và button

### Thiết kế đẹp mắt
- **Gradient Background**: Nền gradient đỏ-vàng đặc trưng
- **Card Components**: Sử dụng shadcn/ui cards với border animation
- **Tabs Navigation**: Dễ dàng chuyển đổi giữa nội dung miền Bắc và miền Nam
- **Responsive Design**: Tương thích với mọi kích thước màn hình
- **Color Scheme**: Màu đỏ chủ đạo tượng trưng cho cờ đỏ sao vàng

## 📦 Công nghệ sử dụng

- **Next.js 16** - Framework React với App Router
- **TypeScript** - Type safety và developer experience
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Thư viện animation mạnh mẽ
- **D3-Geo** - Geographic projections và bản đồ tương tác chuyên nghiệp
- **shadcn/ui** - UI Components library
- **Radix UI** - Accessible component primitives
- **Lucide React** - Icon library đẹp mắt

## 📄 Các trang

### 1. Trang chủ (`/`)
- Hero section với gradient background
- Search box tìm kiếm
- Timeline tổng quan
- Nội dung chi tiết với ExpandableCard và Tooltip
- Tabs navigation giữa miền Bắc/Nam
- Ý nghĩa lịch sử và kinh nghiệm
- Media placeholders cho hình ảnh/video

### 2. Bản đồ (`/map`)
- Bản đồ Việt Nam tương tác với react-simple-maps
- 13 địa điểm lịch sử quan trọng
- Zoom & Pan controls
- Click để xem chi tiết sự kiện
- Bao gồm Hoàng Sa và Trường Sa
- Hướng dẫn sử dụng bản đồ

### 3. Dòng thời gian (`/timeline`)
- Timeline tương tác theo từng giai đoạn
- Tabs lọc theo thời kỳ: 1954-1960, 1961-1965, 1965-1968, 1969-1975
- Animation khi xuất hiện
- Hiển thị chi tiết từng sự kiện

### 4. Trắc nghiệm (`/quiz`)
- 10 câu hỏi trắc nghiệm
- Hiển thị đáp án và giải thích
- Progress bar theo dõi tiến độ
- Animation chuyển câu hỏi
- Kết quả chi tiết và đánh giá
- Làm lại không giới hạn

### 5. Tài liệu (`/resources`)
- Văn kiện lịch sử
- Video tư liệu
- Sách tham khảo
- Liên kết ngoài hữu ích

## 🎨 Components chi tiết

### Layout Components
- **Navigation**: Menu điều hướng responsive với active state
- **Hero**: Hero section với gradient, pattern, animations
- **ScrollIndicator**: Progress bar fixed ở top
- **BackToTop**: Floating button quay lại đầu trang
- **SearchBox**: Input tìm kiếm với animations

### Content Components  
- **Timeline**: Dòng thời gian với calendar icons
- **VietnamMap**: Bản đồ Việt Nam tương tác với 13 địa điểm lịch sử
- **Section**: Card section với gradient header
- **SubSection**: Danh sách nội dung có bullet points
- **ExpandableCard**: Card mở/đóng nội dung
- **Tabs**: Tab navigation cho nội dung đa phần
- **InfoTooltip**: Tooltip hiển thị thông tin chi tiết khi hover
- **MediaPlaceholder**: Placeholder cho hình ảnh và video

### UI Components (shadcn/ui)
- **Card**: Container component
- **Tabs**: Tab navigation
- **Button**: Styled buttons (tương lai)
- **Input**: Form inputs (tương lai)

## 🎯 Cấu trúc nội dung

### I. Sự lãnh đạo của Đảng (1954-1975)
1. **1954-1960**: Khôi phục kinh tế, cải tạo XHCN
   - Bối cảnh lịch sử
   - Chủ trương miền Bắc
   - Thực hiện miền Bắc
   - Chủ trương miền Nam
   - Thực hiện miền Nam

2. **1961-1965**: Xây dựng CNXH ở miền Bắc
   - Chủ trương chung
   - Thực hiện miền Bắc
   - Thực hiện miền Nam

### II. Lãnh đạo cách mạng cả nước (1965-1975)
- Bối cảnh lịch sử
- Đường lối kháng chiến
- Quá trình thực hiện (với tabs miền Bắc/Nam)

### III. Khôi phục và giải phóng (1969-1975)
- Tabs navigation cho miền Bắc và miền Nam
- Kết thúc với thống nhất đất nước

### Ý nghĩa và Kinh nghiệm
- Ý nghĩa lịch sử
- Kinh nghiệm lãnh đạo của Đảng

## 🎨 Màu sắc

- **Primary**: `#dc2626` (Đỏ)
- **Yellow Accent**: `#eab308` (Vàng)
- **Background**: `#f9fafb` (Xám nhạt)
- **Text**: `#171717` (Xám đen)

## 📱 Responsive

Trang web hoạt động tốt trên:
- Desktop (>1024px)
- Tablet (768px - 1024px)
- Mobile (<768px)

## 🚀 Chạy dự án

```bash
# Development
npm run dev

# Build
npm run build

# Start production
npm start
```

Mở [http://localhost:3000](http://localhost:3000) để xem trang web.

## ✅ Đã hoàn thành

- [x] Navigation menu với multiple pages
- [x] Trang chủ với nội dung đầy đủ
- [x] Timeline tương tác theo giai đoạn
- [x] **Bản đồ Việt Nam tương tác** với 13 địa điểm lịch sử
- [x] Trắc nghiệm 10 câu hỏi
- [x] Trang tài liệu tham khảo
- [x] Search box UI
- [x] ExpandableCard component
- [x] InfoTooltip component (shadcn/ui)
- [x] MediaPlaceholder cho hình ảnh/video
- [x] Scroll animations
- [x] Responsive design
- [x] Tabs navigation

## 🎯 Cải tiến trong tương lai

- [ ] Hoàn thiện chức năng search
- [ ] Thêm hình ảnh lịch sử thực tế
- [x] Tích hợp bản đồ Việt Nam tương tác ✅
- [ ] Embed video tư liệu từ YouTube
- [ ] Export/Print nội dung PDF
- [ ] Dark mode toggle
- [ ] Đa ngôn ngữ (EN/VI)
- [ ] Thêm nhiều câu hỏi quiz
- [ ] Lưu kết quả quiz vào localStorage
- [ ] Comments/discussions
- [ ] Share social media

## 📝 Ghi chú

Dự án này được xây dựng với mục đích giáo dục, giúp người học hiểu rõ hơn về giai đoạn lịch sử quan trọng của Việt Nam từ 1954-1975.

