# Shopee Clone (Frontend)

## 📌 Introduction
This is the Frontend repository for the Shopee Clone project, built with **Vue 3**, **TypeScript**, and **Vite**.

## 🚀 Tech Stack
- **Framework**: Vue 3 (Composition API)
- **Language**: TypeScript
- **Build Tool**: Vite
- **State Management**: Pinia
- **Routing**: Vue Router 4
- **Styling**: TailwindCSS
- **HTTP Client**: Axios

## 🛠 Project Setup

### Prerequisites
- Node.js (Latest LTS recommended)
- npm

### Installation
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

## 🌿 Git Workflow

### Branching Strategy
- `main`: Production-ready code (Protected).
- `develop`: Integration branch (Base for features).
- `feature/<domain>-<task>`: Feature branches (e.g., `feature/auth-login`, `feature/product-card`).

### Commit Convention
Format: `<type>(<scope>): <subject>`
Example: 
- `feat(product): add product card component`
- `fix(cart): update total calculation`
- `chore: update dependencies`

## 📂 Project Structure
```txt
src/
 ├─ domains/       # Domain-specific logic (clean architecture)
 ├─ shared/        # Shared components and utilities
 ├─ infrastructure/# API clients, global configurations
 ├─ router/        # Routing configuration
 ├─ assets/        # Static assets
 ├─ styles/        # Global styles
```

## 👥 Team
- **FE Lead**: Antigravity
- **FE Devs**: Dev A, Dev B, Dev C

---
**Happy Coding! 🚀**
