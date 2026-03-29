import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/features/pages/HomePage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage,
            meta: { title: 'Shopee Việt Nam | Mua sắm Online' }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/features/auth/pages/LoginPage.vue'),
            meta: { title: 'Đăng nhập - Mua sắm ngay | Shopee Việt Nam' }
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/features/auth/pages/RegisterPage.vue'),
            meta: { title: 'Đăng ký | Shopee Clone' }
        },
        {
            path: '/product/:id',
            name: 'product',
            component: () => import('@/features/product/pages/ProductDetailPage.vue')
        },
        {
            path: '/orders',
            name: 'orders',
            component: () => import('@/features/user/orders/history/OrderHistory.vue')

        }
    ]
})

router.afterEach((to) => {
    document.title = (to.meta.title as string) || 'Shopee Clone';
});

export default router