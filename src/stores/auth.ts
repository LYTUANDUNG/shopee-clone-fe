import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
    id: string
    name: string
    email?: string
    phone?: string
}

export const useAuthStore = defineStore('auth', () => {
    // Thử lấy user từ localStorage khi khởi tạo app (hydration)
    const storedUser = localStorage.getItem('user_info')
    const user = ref<User | null>(storedUser ? JSON.parse(storedUser) : null)

    // Lấy token từ localStorage
    const accessToken = ref<string | null>(localStorage.getItem('access_token'))

    const isAuthenticated = computed(() => !!accessToken.value)

    function setAuth(userData: User, token: string) {
        user.value = userData
        accessToken.value = token

        // Lưu session vào localStorage để chống mất data khi F5
        localStorage.setItem('access_token', token)
        localStorage.setItem('user_info', JSON.stringify(userData))
    }

    function clearAuth() {
        user.value = null
        accessToken.value = null

        // Xóa hoàn toàn khỏi localStorage khi logout
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_info')
    }

    function logout() {
        clearAuth()
        // Các logic redirect (ví dụ: router.push('/login')) nên để ở phía component 
        // hoặc xử lý bằng watch(isAuthenticated) ở App.vue
    }

    return { user, accessToken, isAuthenticated, setAuth, clearAuth, logout }
})