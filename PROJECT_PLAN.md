# 📄 KẾ HOẠCH TRIỂN KHAI FE (Vue.js – Shopee Clone)

**Mục tiêu**: Hoàn thành Shopee Clone FE trong 4–8 tuần với 4 nhân sự.

---

## 0️⃣ Nhân sự & Vai trò

### 👤 FE Lead (Antigravity)
**Trách nhiệm**:
* Thiết kế kiến trúc FE & Cấu trúc thư mục
* Quản lý Git (Branch, Review, PR)
* Core: Infrastructure, Auth, Shared Core Components
* Kiểm tra tiến độ hằng tuần

### 👥 Team FE Dev
| Dev | Vai trò | Domain |
|---|---|---|
| **Dev A** | UI + Shared Component | `shared` / `home` |
| **Dev B** | Business UI | `product` |
| **Dev C** | Business Flow | `cart` / `order` |

**Quy tắc**: Không code ngoài domain được giao khi chưa có sự đồng ý của Lead.

---

## 1️⃣ Timeline & Deadline Hằng Tuần

### 🗓️ Tuần 1 – Setup & Foundation
**Tasks**:
- [ ] **Lead**: Init Project, Setup Vue3+TS+Vite, ESLint/Prettier/Tailwind, Folder Structure, Git Flow.
- [ ] **Dev A**: Phân tích UI Shopee (Header, Footer, Layout).
- [ ] **Dev B**: Phân tích Product UI (list, card, detail).
- [ ] **Dev C**: Phân tích Cart / Checkout UI.

📌 **Output Tuần 1**: Project chạy được, Layout khung sẵn sàng, Danh sách Task đã chốt.

### 🗓️ Tuần 2 – Shared Components & Auth
**Tasks**:
- [ ] **Lead**: Setup Axios, Auth Flow, Token Refresh, Router Guard.
- [ ] **Dev A**: Buttons, Inputs, Modals, Badges, Pagination.
- [ ] **Dev B**: ProductCard Component.
- [ ] **Dev C**: CartItem Component.

📌 **Output Tuần 2**: Login flow hoạt động, Shared components dùng được.

### 🗓️ Tuần 3 – Home & Product
**Tasks**:
- [ ] **Lead**: Review & Refactor Shared, Định nghĩa Product use-cases.
- [ ] **Dev A**: HomePage, Banner, Category List.
- [ ] **Dev B**: ProductListPage, ProductDetailPage.
- [ ] **Dev C**: CartPage UI.

📌 **Output Tuần 3**: Duyệt sản phẩm, Add to Cart (UI + State).

### 🗓️ Tuần 4 – Cart & Order Flow
**Tasks**:
- [ ] **Lead**: Kiểm soát Business Flow, Review API mapping.
- [ ] **Dev A**: UI Polish + Responsive.
- [ ] **Dev B**: Xử lý Product State.
- [ ] **Dev C**: Checkout, Order Summary.

📌 **Output Tuần 4**: Luồng mua hàng hoàn chỉnh (Mock API).

---

## 2️⃣ Quy tắc Giao Việc (Task Assignment)
Mỗi task bắt buộc phải có:
* **Assignee** (Người phụ trách)
* **Deadline**
* **Output** (Kết quả bàn giao)

**Ví dụ**:
```
[FE][Product][Dev B] Create ProductCard component
- Path: src/domains/product/components/ProductCard.vue
- Deadline: Week 2
- PR required
```

## 3️⃣ Quy tắc Git
* **Branches**: `main`, `develop`, `feature/<domain>-<task>`
* **Commits**: `feat(product): ...`, `fix(auth): ...`
* **PRs**: < 500 dòng, Có Screenshot, Bắt buộc Lead approve.

---

## 4️⃣ Kiểm tra Hằng Tuần
* **Format**: Done (Xong) / Doing (Đang làm) / Blocker (Vướng mắc).
* **Lưu ý**: Trễ deadline phải có lý do. Code chất lượng kém phải sửa xong mới được nhận task mới.
