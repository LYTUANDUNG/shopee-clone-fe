import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import("@/features/pages/HomePage.vue"),
            meta: { title: 'Shopee Việt Nam | Mua sắm Online' }
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/features/auth/pages/LoginPage.vue'),
            meta: { title: 'Đăng nhập - Mua sắm ngay | Shopee Việt Nam' }
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: () => import('@/features/checkout/pages/CheckoutView.vue'),
            meta: { title: 'Thanh toán | Shopee Clone', requiresAuth: true }
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
        }
    ]
})

router.afterEach((to) => {
    document.title = (to.meta.title as string) || 'Shopee Clone';
});

export default router