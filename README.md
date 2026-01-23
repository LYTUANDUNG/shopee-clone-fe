# Shopee Clone (Frontend)

## 📌 Giới thiệu
Đây là repository Frontend cho dự án Shopee Clone, được xây dựng bằng **Vue 3**, **TypeScript**, và **Vite**.

## 🚀 Tech Stack
- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: TailwindCSS
- **HTTP Client**: Axios

## 🛠 Cài đặt Dự án

### Yêu cầu
- Node.js (Khuyên dùng bản LTS mới nhất)
- npm

### Cài đặt
```bash
git clone git@github.com:<org>/shopee-fe.git
cd shopee-fe
npm install
```

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 🌿 Quy trình Git (Git Flow)

### Chiến lược Branch
- `main`: Code production (Được bảo vệ).
- `develop`: Branch tích hợp (Nền tảng cho các tính năng).
- `feature/<domain>-<task>`: Branch tính năng (Ví dụ: `feature/auth-login`, `feature/product-card`).

### Quy tắc Commit
Format: `<type>(<scope>): <subject>`
Ví dụ: 
- `feat(product): add product card component`
- `fix(cart): update total calculation`
- `chore: update dependencies`

## 📂 Cấu trúc Dự án
```txt
src/
 ├─ domains/       # Logic theo nghiệp vụ (clean architecture)
 ├─ shared/        # Các component và tiện ích dùng chung
 ├─ infrastructure/# API clients, cấu hình global
 ├─ router/        # Cấu hình Routing
 ├─ assets/        # Tài nguyên tĩnh (ảnh, fonts)
 ├─ styles/        # Global styles
```

## 👥 Nhóm phát triển
- **FE Lead**: Antigravity
- **FE Devs**: Dev A, Dev B, Dev C

---
**Happy Coding! 🚀**
