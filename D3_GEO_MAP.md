# 🗺️ Bản đồ Việt Nam với D3-Geo

## Tổng quan

Bản đồ Việt Nam tương tác được xây dựng hoàn toàn bằng **D3-Geo** - thư viện mạnh mẽ cho geographic projections và path rendering.

## ✨ Tính năng mới với D3-Geo

### 1. **Hiệu suất cao hơn**
- ✅ Render trực tiếp lên SVG, không qua middleware
- ✅ Kiểm soát hoàn toàn projection và path
- ✅ Tối ưu cho large-scale maps

### 2. **Bản đồ Việt Nam chính xác**
- ✅ Sử dụng GeoJSON local (`/public/vietnam.geojson`)
- ✅ D3 Mercator Projection
- ✅ Scale và center tùy chỉnh hoàn toàn
- ✅ Vẽ Vĩ tuyến 17 (DMZ Line) với stroke-dasharray

### 3. **13 Địa điểm lịch sử**
Với markers tương tác:
- 🔴 10 sự kiện quan trọng cao
- 🟠 3 sự kiện quan trọng vừa
- Animation pulse cho sự kiện quan trọng
- Hover hiển thị tên
- Click hiển thị modal chi tiết

### 4. **Zoom & Pan**
- ✅ Zoom in/out với buttons
- ✅ Reset về vị trí ban đầu
- ✅ Smooth transition giữa các zoom levels

## 📦 Dependencies

```json
{
  "dependencies": {
    "d3-geo": "^3.1.1",
    "d3-zoom": "^3.0.0"
  },
  "devDependencies": {
    "@types/d3-geo": "^3.1.0",
    "@types/d3-zoom": "^3.0.8"
  }
}
```

## 🎯 Cách hoạt động

### 1. Projection Setup
```typescript
const projection = geoMercator()
  .center([106.5, 16.5])  // Trung tâm Việt Nam
  .scale(2500 * zoom)      // Scale với zoom factor
  .translate([width / 2, height / 2]);
```

### 2. Path Generator
```typescript
const path = geoPath().projection(projection);
```

### 3. Render Map
```typescript
<path
  d={path(feature) || ""}
  fill="#3b82f6"
  fillOpacity={0.2}
  stroke="#2563eb"
/>
```

### 4. Plot Markers
```typescript
const coords = projection(event.coordinates);
<circle
  cx={coords[0]}
  cy={coords[1]}
  r={size}
  fill={color}
/>
```

## 🎨 Visual Features

### Bản đồ Việt Nam
- **Fill**: Xanh dương nhạt (#3b82f6, opacity 0.2)
- **Stroke**: Xanh dương đậm (#2563eb, width 1.5px)
- **Hover**: Chuyển sang đỏ nhạt

### Vĩ tuyến 17
- **Color**: Vàng (#fbbf24)
- **Style**: Dashed line (8, 4)
- **Label**: "Vĩ tuyến 17 (1954-1975)"

### Markers
- **High**: 8px, đỏ (#dc2626)
- **Medium**: 6px, cam (#f97316)
- **Low**: 4px, vàng (#eab308)
- **Pulse**: Animation cho high importance

## 💡 Ưu điểm của D3-Geo

1. **Hiệu suất**
   - Render nhanh hơn
   - Ít dependencies hơn
   - Bundle size nhỏ hơn

2. **Tùy chỉnh**
   - Kiểm soát hoàn toàn projection
   - Custom path rendering
   - Flexible styling

3. **Chuyên nghiệp**
   - Industry standard cho maps
   - Nhiều projection types
   - Powerful geographic calculations

4. **TypeScript Support**
   - Full type definitions
   - Type-safe geographic operations
   - Better IDE support

## 🔧 Tùy chỉnh

### Thay đổi Projection
```typescript
// Mercator (default)
const projection = geoMercator()

// Hoặc dùng projection khác:
import { geoAlbers, geoConicEqualArea } from 'd3-geo';
const projection = geoAlbers()
```

### Thay đổi Center & Scale
```typescript
.center([longitude, latitude])  // Tâm bản đồ
.scale(scale)                    // Mức độ zoom
.translate([x, y])               // Vị trí trên SVG
```

### Thêm địa điểm mới
Thêm vào mảng `historicalEvents`:
```typescript
{
  id: "unique-id",
  name: "Tên địa điểm",
  coordinates: [longitude, latitude],
  year: "Năm",
  description: "Mô tả",
  importance: "high" | "medium" | "low",
  type: "battle" | "city" | "landmark",
}
```

### Vẽ thêm features
```typescript
// Thêm line, circle, hoặc path khác
<line
  x1={x1} y1={y1}
  x2={x2} y2={y2}
  stroke="color"
/>
```

## 📊 So sánh: D3-Geo vs React-Simple-Maps

| Feature | D3-Geo | React-Simple-Maps |
|---------|--------|-------------------|
| Bundle Size | ✅ Nhỏ (~50KB) | ❌ Lớn (~200KB) |
| Performance | ✅ Nhanh | ⚠️ Trung bình |
| Tùy chỉnh | ✅ Cao | ⚠️ Giới hạn |
| Learning Curve | ⚠️ Khó hơn | ✅ Dễ hơn |
| TypeScript | ✅ Tốt | ⚠️ OK |
| Flexibility | ✅ Rất cao | ⚠️ Trung bình |

## 🐛 Troubleshooting

### Bản đồ không hiển thị
1. Kiểm tra file `/public/vietnam.geojson` tồn tại
2. Xem Console logs (F12)
3. Kiểm tra fetch request thành công

### Markers không đúng vị trí
- Đảm bảo coordinates là `[longitude, latitude]`
- Kiểm tra projection center và scale

### Performance issues
- Giảm số lượng points trong GeoJSON
- Simplify polygon nếu cần
- Sử dụng `useMemo` cho expensive calculations

## 🚀 Next Steps

Tính năng có thể thêm:

1. **Zoom bằng mouse wheel**
```typescript
import { zoom } from 'd3-zoom';
// Implement zoom behavior
```

2. **Pan/Drag bản đồ**
```typescript
// Add drag behavior với d3-drag
```

3. **Tooltip animations**
- Smooth transitions
- Better positioning

4. **Multiple map layers**
- Thêm layer cho đường biên giới
- Layer cho sông, núi
- Historical boundaries

5. **Time-based filtering**
- Filter markers theo thời gian
- Animation timeline

## 📚 Resources

- [D3-Geo Documentation](https://github.com/d3/d3-geo)
- [D3-Zoom Documentation](https://github.com/d3/d3-zoom)
- [GeoJSON Specification](https://geojson.org/)
- [Map Projections](https://en.wikipedia.org/wiki/List_of_map_projections)

## ✅ Checklist

- [x] Install d3-geo và @types/d3-geo
- [x] Tạo VietnamMap component với D3
- [x] Load GeoJSON data
- [x] Setup projection và path
- [x] Render Vietnam map
- [x] Add 13 historical markers
- [x] Implement zoom controls
- [x] Add hover tooltips
- [x] Add click modal
- [x] Draw Vĩ tuyến 17
- [x] Add animations
- [x] Responsive design

---

**Note**: Bản đồ này sử dụng D3-Geo cho performance tốt hơn và flexibility cao hơn so với react-simple-maps.

