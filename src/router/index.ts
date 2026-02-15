import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/features/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('@/features/product/pages/ProductDetailPage.vue')
        }
    ]
})

export default router
