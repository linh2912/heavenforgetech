# HeavenForge Tech - Design System

Dựa trên triết lý của *Impeccable*, file này lưu trữ các Design Tokens và quy tắc thiết kế chung của hệ thống, giúp loại bỏ các khuôn mẫu "rẻ tiền" và nâng cao tính cao cấp của giao diện.

## 1. Typography

- **Primary Font**: `Plus Jakarta Sans` (thay thế cho các font phổ thông như Inter, Arial).
- **Fallback Fonts**: `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`.
- **Line Height**:
  - Headings: `1.2` - `1.3`
  - Body Text: `1.6` - `1.7` (tạo sự thông thoáng và dễ đọc).

## 2. Color Palette (Tinted Colors)

**Nguyên tắc cốt lõi**:
- **KHÔNG** dùng đen thuần (`#000000`) hay xám thuần (`#808080`).
- Mọi màu trung tính (neutral) đều phải được pha một chút sắc độ của màu chính (tint) để tạo sự hòa hợp.

### Tokens:
- **Background Base**: `#0a0c16` (Đen pha xanh navy đậm) - Thay thế cho các màu tối xám thông thường.
- **Card Background (Glassmorphism)**: `rgba(18, 24, 43, 0.6)` - Nền thẻ kính, có độ trong suốt và sắc độ xanh.
- **Text Primary**: `#f1f5f9` (Trắng hơi ngả xanh dương nhẹ).
- **Text Secondary**: `#94a3b8` (Xám ánh xanh) - Tuyệt đối không dùng xám mù.
- **Accent/Brand Primary**: `#3b82f6` (Xanh dương hiện đại) với các dải màu hover `#2563eb` hoặc gradient.
- **Borders/Dividers**: `rgba(255, 255, 255, 0.08)` hoặc `#1e293b`.

## 3. Shadows & Borders

- **Borders**: Sử dụng border mỏng (`1px`), màu rất nhạt, độ trong suốt cao (`rgba(255, 255, 255, 0.08)`). KHÔNG dùng các viền sáng màu, cứng cáp.
- **Shadows**:
  - Dùng shadow mềm, lan tỏa rộng thay vì shadow cứng.
  - Ví dụ: `box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.25);`

## 4. Animation & Micro-interactions

- **Easing**: Sử dụng các đường cong bezier mượt mà, ví dụ `cubic-bezier(0.4, 0, 0.2, 1)`.
- **Duration**: `0.3s` cho hover thông thường, `0.5s` - `0.8s` cho hiệu ứng fade in.
- **KHÔNG DÙNG**: Hiệu ứng nảy (bounce/elastic) vì chúng lỗi thời và làm mất đi sự sang trọng.

## 5. Layout (Chống "Card lồng Card")

- Tránh việc đặt các `div` có border và background màu khác lồng vào nhau quá sâu.
- Phân tách thông tin bằng **Whitespace** (margin/padding) và **Typography** (kích cỡ/màu sắc chữ) thay vì bằng các hộp (box).
- Các icon SVG nên sử dụng stroke với màu `currentColor` hoặc màu accent, không dùng màu xám.
