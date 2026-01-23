# 📄 FE DEPLOYMENT PLAN (Vue.js – Shopee Clone)

**Goal**: Complete Shopee Clone FE in 4–8 weeks with 4 personnel.

---

## 0️⃣ Personnel & Roles

### 👤 FE Lead (Antigravity)
**Responsibilities**:
* FE Architecture & Folder Structure
* Git Management (Branch, Review, PR)
* Core: Infrastructure, Auth, Shared Core Components
* Weekly Progress Check

### 👥 FE Dev Team
| Dev | Role | Domain |
|---|---|---|
| **Dev A** | UI + Shared Component | `shared` / `home` |
| **Dev B** | Business UI | `product` |
| **Dev C** | Business Flow | `cart` / `order` |

**Rule**: Do not work outside assigned domain without Lead approval.

---

## 1️⃣ Timeline & Weekly Deadlines

### 🗓️ Week 1 – Setup & Foundation
**Tasks**:
- [ ] **Lead**: Init Project, Setup Vue3+TS+Vite, ESLint/Prettier/Tailwind, Folder Structure, Git Flow.
- [ ] **Dev A**: Analyze UI Shopee (Header, Footer, Layout).
- [ ] **Dev B**: Analyze Product UI (list, card, detail).
- [ ] **Dev C**: Analyze Cart / Checkout UI.

📌 **Week 1 Output**: Project runnable, Layout skeleton ready, Task list defined.

### 🗓️ Week 2 – Shared Components & Auth
**Tasks**:
- [ ] **Lead**: Axios Setup, Auth Flow, Token Refresh, Router Guard.
- [ ] **Dev A**: Buttons, Inputs, Modals, Badges, Pagination.
- [ ] **Dev B**: ProductCard Component.
- [ ] **Dev C**: CartItem Component.

📌 **Week 2 Output**: Login flow working, Shared components usable.

### 🗓️ Week 3 – Home & Product
**Tasks**:
- [ ] **Lead**: Review & Refactor Shared, Define Product Use-cases.
- [ ] **Dev A**: HomePage, Banner, Category List.
- [ ] **Dev B**: ProductListPage, ProductDetailPage.
- [ ] **Dev C**: CartPage UI.

📌 **Week 3 Output**: Product browsing, Add to Cart (UI + State).

### 🗓️ Week 4 – Cart & Order Flow
**Tasks**:
- [ ] **Lead**: Business Flow Control, API Layout Review.
- [ ] **Dev A**: UI Polish + Responsive.
- [ ] **Dev B**: Product State Handling.
- [ ] **Dev C**: Checkout, Order Summary.

📌 **Week 4 Output**: Complete Purchase Flow (Mock API).

---

## 2️⃣ Task Assignment Rules
Each task must have:
* **Assignee**
* **Deadline**
* **Output**

**Example**:
```
[FE][Product][Dev B] Create ProductCard component
- Path: src/domains/product/components/ProductCard.vue
- Deadline: Week 2
- PR required
```

## 3️⃣ Git Rules
* **Branches**: `main`, `develop`, `feature/<domain>-<task>`
* **Commits**: `feat(product): ...`, `fix(auth): ...`
* **PRs**: < 500 lines, Screenshot included, Lead approval required.

---

## 4️⃣ Weekly Check
* **Format**: Done / Doing / Blocker.
* **Failure**: Late task must have reason. Poor code must be fixed before new task.

