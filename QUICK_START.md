# ⚡ Quick Start - Bản đồ Việt Nam Tương tác

## 🚀 Chạy ngay trong 2 bước

### Bước 1: Cài đặt packages mới
```bash
npm install
```

### Bước 2: Khởi động server
```bash
npm run dev
```

Mở trình duyệt: **http://localhost:3000**

## ✨ Tính năng mới vừa thêm

### 🗺️ Bản đồ Việt Nam tương tác với react-simple-maps

**Vị trí trên trang:** Cuộn xuống phần "Bản đồ lịch sử Việt Nam"

**Tính năng:**
- ✅ Bản đồ Việt Nam với dữ liệu địa lý thực tế (GeoJSON)
- ✅ 13 địa điểm lịch sử quan trọng (1954-1975)
- ✅ Phóng to/thu nhỏ bằng nút hoặc scroll
- ✅ Kéo thả để di chuyển bản đồ
- ✅ Hover chuột → hiện tên địa điểm
- ✅ Click → popup thông tin chi tiết
- ✅ Animation mượt mà với Framer Motion
- ✅ Responsive (Mobile/Tablet/Desktop)

**13 địa điểm được đánh dấu:**
1. 🔴 Hà Nội - Điện Biên Phủ trên không
2. 🔴 Điện Biên Phủ - Chiến thắng 7/5/1954
3. 🔴 Vĩnh - Thành phố anh hùng
4. 🔴 Quảng Trị - 81 ngày kiên cường
5. 🔴 Huế - Tết Mậu Thân 1968
6. 🔴 Đà Nẵng - Quân Mỹ đổ bộ
7. 🟠 Khe Sanh - 77 ngày vây hãm
8. 🟠 Pleiku - Căn cứ Tây Nguyên
9. 🔴 Bến Tre - Đồng Khởi 1960
10. 🔴 Ấp Bắc - Chiến thắng 1963
11. 🔴 Sài Gòn - Giải phóng 30/4/1975
12. 🔴 Củ Chi - Địa đạo huyền thoại
13. 🟠 Trường Sa - Chủ quyền biển đảo

## 📦 Package mới

```json
{
  "dependencies": {
    "react-simple-maps": "^3.0.0"
  },
  "devDependencies": {
    "@types/react-simple-maps": "^3.0.6"
  }
}
```

## 🎮 Cách sử dụng bản đồ

1. **Phóng to/Thu nhỏ:**
   - Click nút ➕ ➖ ở góc phải
   - Hoặc scroll chuột khi hover vào bản đồ

2. **Di chuyển:**
   - Kéo thả bản đồ

3. **Đặt lại về vị trí ban đầu:**
   - Click nút 🔄

4. **Xem thông tin:**
   - Hover vào điểm đỏ → hiện tên
   - Click vào điểm đỏ → popup chi tiết

## 📁 Files mới tạo

```
components/
  └── VietnamMap.tsx          ← Component bản đồ chính

Documentation:
  ├── MAP_GUIDE.md            ← Hướng dẫn chi tiết
  ├── INSTALL_MAP.md          ← Hướng dẫn cài đặt
  └── QUICK_START.md          ← File này
```

## 🎨 Tính năng khác đã có

- ✅ **Tooltip (shadcn/ui)**: Hover vào icon ℹ️ để xem chi tiết
- ✅ **Media Placeholders**: 12 vị trí cho hình ảnh/video
- ✅ **Timeline**: Dòng thời gian tương tác
- ✅ **Navigation**: Menu điều hướng 4 trang
- ✅ **Quiz**: 10 câu hỏi trắc nghiệm
- ✅ **Resources**: Trang tài liệu tham khảo

## 🐛 Gặp lỗi?

### Lỗi: Module not found
```bash
npm install react-simple-maps @types/react-simple-maps
```

### Bản đồ không hiển thị
- Kiểm tra kết nối internet (cần tải GeoJSON)
- Xóa cache: Ctrl + Shift + R
- Kiểm tra Console (F12)

### Port 3000 đang được sử dụng
```bash
# Dừng process cũ hoặc dùng port khác
npm run dev
# Sẽ tự động chuyển sang port 3001
```

## 📚 Đọc thêm

- `MAP_GUIDE.md` - Hướng dẫn chi tiết về bản đồ
- `INSTALL_MAP.md` - Hướng dẫn cài đặt và troubleshooting
- `MEDIA_NOTES.md` - Ghi chú về hình ảnh/video cần thêm
- `HISTORY_PROJECT.md` - Tổng quan dự án

## 🎯 Tiếp theo

Bạn có thể:
1. ✏️ Thêm hình ảnh/video theo `MEDIA_NOTES.md`
2. 🗺️ Thêm địa điểm lịch sử khác vào bản đồ
3. 🎨 Tùy chỉnh màu sắc, animation
4. 📱 Test trên mobile/tablet
5. 🚀 Deploy lên Vercel/Netlify

---

**Enjoy! 🇻🇳 🎉**

