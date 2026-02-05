import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../features/pages/HomePage.vue'
import Footer from '@/shared/components/organisms/Footer.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomePage
        },
        {
            path: '/footer',
            name: 'footer-preview',
            component: Footer
        }
    ]
})

export default router