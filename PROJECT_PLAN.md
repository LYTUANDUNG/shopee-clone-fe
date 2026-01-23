# 📄 FE MASTER PLAN (Standard International Workflow)

**Phương pháp quản lý**: 8 Steps FE Standard.
**Mục tiêu**: Shopee Clone (Vue 3 + TS).

---

## 1️⃣ Giai đoạn Khởi động (Kickoff)

### 🎯 Scope Dự Án
*   **User**: End-user mua hàng (B2C).
*   **Core Features**: Home, Product Listing, Product Detail, Cart, Checkout, Auth.
*   **Design Reference**: Shopee.vn (Clone sát UI/UX).
*   **Backend**: Mock API (trong Phase đầu), sau đó connect Real API.

### 📋 Danh sách Modules (Features)
1.  **Auth**: Login, Register, Forgot Password, Profile.
2.  **Home**: Banner, Categories, Flash Sale.
3.  **Discovery**: Product List, Search, Filter, Sort.
4.  **Detail**: Product Info, Variants (Color/Size), Gallery, Ratings.
5.  **Cart**: Cart Items, Shop Grouping, Voucher.
6.  **Checkout**: Address, Shipping, Payment, Order Summary.

---

## 2️⃣ Kiến Trúc & Stack (Architecture)
*Xem chi tiết tại README.md*

*   **Stack**: Vue 3 (Composition API), Vite, Pinia, TailwindCSS, Axios.
*   **Structure**: `src/features/` (Domain Driven Design).

---

## 3️⃣ Phân Chia Task & Tiến Độ (Task Assignment)

**Quản lý**: Theo Feature (Trọn gói UI + Logic + API).

### 👥 Team Allocation

| Dev | Feature Zone | Trách nhiệm chi tiết |
|---|---|---|
| **Dev A** | **Core Base & Home** | - Shared Components (Button, Input, Modal)<br>- Feature: Home (Banner, Categories)<br>- Feature: Auth (Login UI & Logic) |
| **Dev B** | **Discovery (Listing)** | - Feature: Product List (Grid, Pagination)<br>- Components: ProductCard (Badge, Price)<br>- Filter & Search Logic |
| **Dev C** | **Conversion (Detail & Cart)** | - Feature: Product Detail (Gallery, Variant Selector)<br>- Feature: Cart (Logic tính tiền, Voucher)<br>- Feature: Checkout UI |
| **FE Lead**| **Architecture & Review** | - Setup Infra (Axios, Router, Pinia)<br>- Code Review (Quality Gate)<br>- Merge PR & Release |

---

## 4️⃣ Timeline Triển Khai

### 🗓️ Tuần 1: Setup & Base Components
*   **Lead**: Setup Project, Folder Structure, Git Rules.
*   **Dev A**: Xây dựng UI Kit (BaseButton, BaseInput) + Layout (Header/Footer).
*   **Dev B**: Dựng ProductCard (Component khó nhất) + Grid Layout.
*   **Dev C**: Dựng trang Product Detail (Skeleton + Gallery).

### 🗓️ Tuần 2: Feature Implementation (Happy Path)
*   **Dev A**: Auth Flow (Login/Register/Profile).
*   **Dev B**: Product Listing (Filter giả, Search giả).
*   **Dev C**: Variant Selector (Logic chọn size/màu) + Add to Cart UI.

### 🗓️ Tuần 3: Logic & State Management
*   **All**: Connect Mock API / Real API.
*   **Dev A**: User State (Pinia Auth Store).
*   **Dev B**: Fetching Data List (Loading/Error handling).
*   **Dev C**: Cart Store (Tính toán tiền, update số lượng).

### 🗓️ Tuần 4: Checkout & Polish
*   **Dev C**: Checkout Flow (Address -> Payment).
*   **All**: QA, Fix bugs, Mobile Responsive Check.

---

## 5️⃣ Quy Trình QA & Code Review
**Manager FE Check List:**
1.  Reload trang có giữ được State (giỏ hàng/login) không?
2.  Mạng chậm (Slow 3G) có hiện Loading Skeleton không?
3.  Token hết hạn có auto logout/refresh không?
4.  Code có tách logic ra `composables` không? (DRY principle).

**Definition of Done (DoD):**
*   [ ] UI giống Design > 95%.
*   [ ] Không lỗi Console Log.
*   [ ] Đã qua bài test Happy Case & Edge Case.
*   [ ] Code đã được Lead Approve.

---

## 6️⃣ Hướng Dẫn Git Flow Cho Team
*   **Bước 1**: `git checkout develop` -> `git pull`
*   **Bước 2**: `git checkout -b feature/product-card`
*   **Bước 3**: Code... -> `git commit -m "feat(product): implement card ui"`
*   **Bước 4**: `git push origin feature/product-card`
*   **Bước 5**: Tạo Pull Request (PR) về `develop`. **KHÔNG MERGE THẲNG**.
