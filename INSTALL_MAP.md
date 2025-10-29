# 📦 Cài đặt Bản đồ Việt Nam Tương tác

## Bước 1: Cài đặt dependencies

Chạy lệnh sau để cài đặt các package cần thiết:

```bash
npm install
```

Hoặc nếu dùng yarn:

```bash
yarn install
```

## Bước 2: Khởi động server

```bash
npm run dev
```

Mở trình duyệt tại: `http://localhost:3000`

## 📦 Packages đã được thêm

### Dependencies:
- ✅ `react-simple-maps@^3.0.0` - Thư viện bản đồ tương tác chuyên nghiệp
- ✅ `@radix-ui/react-tooltip@^1.2.8` - Tooltip component

### Dev Dependencies:
- ✅ `@types/react-simple-maps@^3.0.6` - TypeScript definitions

## 🗺️ Tính năng Bản đồ

### ✨ Đã hoàn thành:
- [x] Bản đồ Việt Nam với dữ liệu GeoJSON thực tế
- [x] 13 địa điểm lịch sử quan trọng (1954-1975)
- [x] Phóng to/thu nhỏ tương tác
- [x] Hover để xem tên địa điểm
- [x] Click để xem thông tin chi tiết
- [x] Phân loại theo mức độ quan trọng (màu sắc)
- [x] Responsive design (Mobile/Tablet/Desktop)
- [x] Animation mượt mà
- [x] Popup modal chi tiết
- [x] Zoom controls (+, -, reset)

### 📍 Địa điểm trên bản đồ:

**Miền Bắc:**
1. Hà Nội - Thủ đô, Điện Biên Phủ trên không
2. Điện Biên Phủ - Chiến thắng lịch sử 7/5/1954
3. Vĩnh - Thành phố anh hùng

**Miền Trung:**
4. Quảng Trị - 81 ngày đêm kiên cường
5. Huế - Tết Mậu Thân 1968
6. Đà Nẵng - Quân Mỹ đổ bộ 8/3/1965
7. Khe Sanh - 77 ngày vây hãm

**Tây Nguyên:**
8. Pleiku - Căn cứ chiến lược

**Miền Nam:**
9. Bến Tre - Đồng Khởi 17/1/1960
10. Ấp Bắc - Chiến thắng 2/1/1963
11. Sài Gòn - Giải phóng 30/4/1975
12. Củ Chi - Địa đạo huyền thoại
13. Trường Sa - Chủ quyền biển đảo

## 🎯 Cách sử dụng

### Trên trang web:
1. Cuộn xuống phần "Bản đồ lịch sử Việt Nam"
2. Sử dụng nút +/- để phóng to/thu nhỏ
3. Di chuột vào các điểm đỏ để xem tên
4. Click vào điểm đỏ để xem thông tin chi tiết
5. Kéo thả để di chuyển bản đồ

### Màu sắc:
- 🔴 **Đỏ lớn**: Sự kiện cực kỳ quan trọng
- 🟠 **Cam vừa**: Sự kiện quan trọng
- 🟡 **Vàng nhỏ**: Địa danh lịch sử

## 🐛 Khắc phục lỗi

### Lỗi: "Module not found: Can't resolve 'react-simple-maps'"

**Giải pháp:**
```bash
npm install react-simple-maps
```

### Lỗi TypeScript: "Could not find declaration file"

**Giải pháp:**
```bash
npm install --save-dev @types/react-simple-maps
```

### Bản đồ không hiển thị

**Kiểm tra:**
1. Kết nối internet (cần tải GeoJSON)
2. Console logs trong DevTools (F12)
3. Xóa cache trình duyệt và reload

### Marker không xuất hiện

**Kiểm tra:**
- Tọa độ phải đúng định dạng: `[longitude, latitude]`
- Longitude: 102-110 (Việt Nam)
- Latitude: 8-24 (Việt Nam)

## 📁 File structure

```
components/
  └── VietnamMap.tsx          # Component bản đồ chính
  └── InfoTooltip.tsx         # Tooltip cho thông tin
  └── ImagePlaceholder.tsx    # Placeholder cho media

app/
  └── page.tsx                # Trang chủ có bản đồ

MAP_GUIDE.md                  # Hướng dẫn chi tiết
INSTALL_MAP.md               # File này
```

## 🎨 Tùy chỉnh

### Thêm địa điểm mới:

Mở `components/VietnamMap.tsx`, thêm vào mảng `historicalEvents`:

```typescript
{
  id: "unique-id",
  name: "Tên địa điểm",
  coordinates: [longitude, latitude],
  year: "Năm/Tháng",
  description: "Mô tả chi tiết",
  importance: "high", // hoặc "medium", "low"
  type: "battle", // hoặc "city", "landmark"
}
```

### Thay đổi vị trí ban đầu:

```typescript
const [center, setCenter] = useState<[number, number]>([106.5, 16.5]);
// [kinh độ, vĩ độ]
```

### Thay đổi zoom ban đầu:

```typescript
const [zoom, setZoom] = useState(1.2); // 1 = xa nhất, 4 = gần nhất
```

## 📚 Tài liệu tham khảo

- [react-simple-maps Documentation](https://www.react-simple-maps.io/)
- [GeoJSON Specification](https://geojson.org/)
- [Framer Motion](https://www.framer.com/motion/)

## ✅ Checklist hoàn thành

- [x] Cài đặt react-simple-maps
- [x] Tạo component VietnamMap
- [x] Thêm 13 địa điểm lịch sử
- [x] Tích hợp vào trang chủ
- [x] Responsive design
- [x] Animation và effects
- [x] Documentation

## 🚀 Tiếp theo

Hãy xem file `MAP_GUIDE.md` để biết thêm chi tiết về:
- Cách thức hoạt động
- Tùy chỉnh nâng cao
- Ý nghĩa giáo dục
- Cải tiến trong tương lai

---

**Chúc bạn khám phá lịch sử Việt Nam vui vẻ! 🇻🇳**

