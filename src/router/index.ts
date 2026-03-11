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
            path: '/login',
            name: 'login',
            component: () => import('@/features/pages/LoginPage.vue'),
            meta: {
                title: 'Đăng nhập - Mua sắm ngay | Shopee Việt Nam'
            }
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('@/features/product/pages/ProductDetailPage.vue')
        }
    ]
})

router.beforeEach((to) => {
    document.title = (to.meta.title as string) || 'Shopee Clone';
});

export default router