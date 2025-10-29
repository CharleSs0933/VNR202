# 🗺️ Hướng dẫn sử dụng Bản đồ Lịch sử Việt Nam Tương tác

## Tổng quan

Bản đồ Việt Nam tương tác được xây dựng bằng **react-simple-maps**, hiển thị 13 địa điểm lịch sử quan trọng từ 1954-1975.

## 🎯 Tính năng

### 1. Bản đồ địa lý thực tế
- ✅ Sử dụng dữ liệu GeoJSON chính thức
- ✅ Hiển thị chính xác ranh giới Việt Nam
- ✅ Phóng to/thu nhỏ tương tác
- ✅ Kéo thả để di chuyển

### 2. Điểm đánh dấu lịch sử
**13 địa điểm được đánh dấu:**

#### Miền Bắc (1954-1975)
1. **Hà Nội** (10/10/1954)
   - Tiếp quản Thủ đô
   - Chiến thắng "Điện Biên Phủ trên không" (12/1972)
   
2. **Điện Biên Phủ** (7/5/1954)
   - Chiến thắng lịch sử kết thúc ách thống trị Pháp
   
3. **Vĩnh** (1965-1972)
   - Thành phố anh hùng, chịu 5.000+ lần không kích

#### Miền Trung
4. **Quảng Trị** (Hè 1972)
   - 81 ngày đêm kiên cường bảo vệ thành phố
   
5. **Huế** (Tết 1968)
   - Tổng tiến công Tết Mậu Thân 1968
   
6. **Đà Nẵng** (8/3/1965)
   - Nơi quân Mỹ đổ bộ đầu tiên
   
7. **Khe Sanh** (1968)
   - 77 ngày đêm vây hãm khốc liệt

#### Tây Nguyên
8. **Pleiku** (1965-1975)
   - Căn cứ quân sự chiến lược của Mỹ

#### Miền Nam
9. **Bến Tre** (17/1/1960)
   - Phong trào Đồng Khởi bùng nổ
   
10. **Ấp Bắc** (2/1/1963)
    - Chiến thắng đầu tiên chống trực thăng vận
    
11. **Sài Gòn** (30/4/1975)
    - Giải phóng hoàn toàn miền Nam, thống nhất đất nước
    
12. **Củ Chi** (1960-1975)
    - Địa đạo huyền thoại 250km
    
13. **Trường Sa** (Hiện nay)
    - Chủ quyền biển đảo Tổ quốc

### 3. Phân loại sự kiện

#### Màu sắc theo mức độ quan trọng:
- 🔴 **Đỏ (Lớn)**: Sự kiện cực kỳ quan trọng
  - Hà Nội, Điện Biên Phủ, Vĩnh, Quảng Trị, Huế, Đà Nẵng, Bến Tre, Ấp Bắc, Sài Gòn, Củ Chi
  
- 🟠 **Cam (Vừa)**: Sự kiện quan trọng
  - Pleiku, Khe Sanh, Trường Sa
  
- 🟡 **Vàng (Nhỏ)**: Địa danh lịch sử khác

#### Loại sự kiện:
- ⚔️ **Chiến trường**: Nơi diễn ra các trận đánh lớn
- 🏙️ **Thành phố**: Các thành phố quan trọng
- 🗺️ **Địa danh**: Địa danh đặc biệt

### 4. Tính năng tương tác

#### Điều khiển bản đồ:
- **Phóng to**: Click nút ➕ hoặc scroll chuột
- **Thu nhỏ**: Click nút ➖ hoặc scroll chuột
- **Đặt lại**: Click nút 🔄 để về vị trí ban đầu
- **Di chuyển**: Kéo thả bản đồ

#### Xem thông tin:
- **Hover**: Di chuột vào điểm đánh dấu → hiện tên địa điểm
- **Click**: Click vào điểm đánh dấu → mở popup chi tiết

### 5. Popup thông tin chi tiết

Khi click vào một địa điểm, sẽ hiển thị:
- 📍 Tên địa điểm
- 📅 Thời gian sự kiện
- 📝 Mô tả chi tiết
- ⭐ Mức độ quan trọng
- 🏷️ Loại sự kiện
- 🌐 Tọa độ địa lý chính xác

## 🎨 Thiết kế

### Màu sắc khu vực:
- **Miền Bắc**: Nền đỏ - Căn cứ địa XHCN
- **Miền Nam**: Nền xanh - Chiến trường chính
- **Đường Trường Sơn**: Nền xanh lá - Huyết mạch chi viện

### Hiệu ứng:
- ✨ Animation xuất hiện các marker theo thứ tự
- 🎯 Hiệu ứng pulse cho sự kiện quan trọng cao
- 🔍 Scale lên khi hover
- 🌊 Blur background cho popup

## 💻 Công nghệ

### Thư viện sử dụng:
- **react-simple-maps**: Thư viện bản đồ chuyên nghiệp
- **framer-motion**: Animation mượt mà
- **lucide-react**: Icon đẹp, hiện đại
- **Tailwind CSS**: Styling nhanh, responsive

### Dữ liệu:
- **GeoJSON**: Dữ liệu địa lý chính thức của Việt Nam
- **Tọa độ GPS**: Chính xác cho từng địa điểm

## 📱 Responsive Design

Bản đồ hoạt động tốt trên mọi thiết bị:
- 💻 **Desktop**: Hiển thị đầy đủ tính năng
- 📱 **Mobile**: Tối ưu cho màn hình nhỏ
- 🖥️ **Tablet**: Layout linh hoạt

## 🔧 Tùy chỉnh

### Thêm địa điểm mới:

```typescript
{
  id: "id-unique",
  name: "Tên địa điểm",
  coordinates: [longitude, latitude], // Kinh độ, Vĩ độ
  year: "Năm/Tháng",
  description: "Mô tả chi tiết sự kiện",
  importance: "high" | "medium" | "low",
  type: "battle" | "city" | "landmark",
}
```

### Thay đổi màu sắc:

Chỉnh sửa hàm `getMarkerColor()` trong `VietnamMap.tsx`:
```typescript
const getMarkerColor = (importance: string) => {
  switch (importance) {
    case "high": return "#dc2626"; // Màu đỏ
    case "medium": return "#f97316"; // Màu cam
    default: return "#eab308"; // Màu vàng
  }
};
```

### Thay đổi zoom mặc định:

```typescript
const [zoom, setZoom] = useState(1.5); // Tăng zoom ban đầu
const [center, setCenter] = useState<[number, number]>([106.5, 16.5]);
```

## 🎯 Ý nghĩa giáo dục

Bản đồ tương tác giúp:
1. **Trực quan hóa** các sự kiện lịch sử
2. **Hiểu rõ vị trí** địa lý các chiến trường
3. **Kết nối** kiến thức lịch sử với không gian thực tế
4. **Tăng hứng thú** học tập qua tính tương tác
5. **Dễ nhớ** các sự kiện quan trọng

## 📚 Tham khảo

### Dữ liệu lịch sử:
- Sách Lịch sử Việt Nam 12
- Bảo tàng Lịch sử Việt Nam
- Tư liệu TTXVN

### Tọa độ địa lý:
- Google Maps
- OpenStreetMap
- GeoNames Database

## 🐛 Xử lý lỗi

### Nếu bản đồ không hiển thị:
1. Kiểm tra kết nối internet (cần tải GeoJSON)
2. Xóa cache trình duyệt
3. Kiểm tra console logs

### Nếu marker không xuất hiện:
- Kiểm tra tọa độ coordinates [longitude, latitude]
- Đảm bảo tọa độ nằm trong phạm vi Việt Nam

## 🚀 Cải tiến trong tương lai

- [ ] Thêm filter theo thời kỳ (1954-1960, 1961-1965...)
- [ ] Animation đường di chuyển quân đội
- [ ] Hiển thị đường Trường Sơn chi tiết
- [ ] Thêm hình ảnh lịch sử cho mỗi địa điểm
- [ ] Export bản đồ thành hình ảnh
- [ ] Chế độ 3D terrain
- [ ] Hiển thị biên giới theo thời gian
- [ ] Thêm video tư liệu cho sự kiện

---

**Lưu ý**: Bản đồ này được tạo cho mục đích giáo dục, giúp học sinh hiểu rõ hơn về lịch sử Việt Nam 1954-1975.

