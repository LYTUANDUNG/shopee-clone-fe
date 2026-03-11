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
            component: () => import('@/features/auth/pages/LoginPage.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/features/auth/pages/RegisterPage.vue'),
            meta: { title: 'Đăng ký | Shopee Clone' }
        },

    ]
})

router.beforeEach((to) => {
    document.title = (to.meta.title as string) || 'Shopee Clone';
});

export default router