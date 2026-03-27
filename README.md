# Shopee Clone (Frontend) - Standard International Workflow 🌏

> **Role**: FE Lead & 3 Devs
> **Standard**: Feature-based Architecture, Strict Git Flow, High Quality QA.

---

## 🏗 Architecture (Kiến Trúc)

Áp dụng cấu trúc **Feature-based** (Best Practice cho dự án lớn):

```txt
src/
 ├─ features/           # 📦 Modules tính năng (Quan trọng nhất)
 │   ├─ auth/           # Module xác thực
 │   │   ├─ components/ # Components nội bộ của feature
 │   │   ├─ pages/      # Các screens (Login, Register...)
 │   │   ├─ api.ts      # API riêng của feature
 │   │   └─ store.ts    # State riêng của feature
 │   ├─ product/        # Module sản phẩm
 │   ├─ cart/           # Module giỏ hàng
 │   └─ checkout/       # Module thanh toán
 ├─ shared/             # ♻️ Reusable Global
 │   ├─ components/     # UI Kit (Button, Modal, Input...)
 │   ├─ utils/          # Hàm helper (formatPrice, formatDate...)
 │   └─ constants/      # Hằng số toàn cục
 ├─ services/           # 🔌 Global API Services (Axios instance...)
 ├─ stores/             # 🏪 Global Stores (Pinia)
 ├─ router/             # 🚦 Global Routing
 └─ styles/             # 🎨 Tailwind & Global CSS
```

---

## 📜 Coding Conventions (Quy Tắc Code)

### 1. Naming
| Loại | Quy tắc | Ví dụ |
|---|---|---|
| **File .vue** | PascalCase | `ProductCard.vue`, `UserProfile.vue` |
| **Composable** | camelCase (prefix `use`) | `useAuth.ts`, `useCart.ts` |
| **Component Name** | PascalCase | `defineComponent({ name: 'ProductCard' })` |
| **Variables/Func** | camelCase | `isLoggedIn`, `fetchProducts()` |
| **Constants** | SCREAMING_SNAKE_CASE | `MAX_UPLOAD_SIZE`, `API_URL` |

### 2. FE Rules
*   ⛔ **NO** call API trực tiếp trong component `.vue`. Phải qua file `api.ts` hoặc `service`.
*   ⛔ **NO** hardcode strings/numbers. Dùng `constants` hoặc `i18n`.
*   ✅ Logic phức tạp tách ra `composables` (VD: `useProductFilter`).
*   ✅ Luôn xử lý state: `loading`, `error`, `empty`.

---

## 🌿 Git Strategy (Chiến Lược Nhánh)

### Branch Model
*   `main`: Production only (Protected).
*   `develop`: Development integration (Protected - Merge ONLY).
*   `feature/<name>`: Các task cụ thể.

### Quy Trình Làm Việc (Task Life Cycle)
1.  **Start**: Checkout từ `develop` ra `feature/product-list`.
2.  **Code**: Tuân thủ rules, commit nhỏ.
3.  **Commit Standard**:
    *   `feat(scope): message` (e.g., `feat(product): add filter sidebar`)
    *   `fix(scope): message` (e.g., `fix(cart): update total price calculation`)
    *   `refactor(scope): message`
4.  **Pull Request (PR)**:
    *   Target: `develop`
    *   Content: Screenshot UI + Mô tả log.
    *   **Review**: FE Lead approve mới được merge.

---

## 🛠 Tech Stack
*   **Core**: Vue 3 + TypeScript + Vite
*   **State**: Pinia
*   **Routing**: Vue Router 4
*   **Styling**: TailwindCSS
*   **HTTP**: Axios + Interceptors

---

## 🚀 Getting Started

```bash
# 1. Clone
git clone ...
cd shopee-fe

# 2. Install
npm install

# 3. Dev
npm run dev
```
