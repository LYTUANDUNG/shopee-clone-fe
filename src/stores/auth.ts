import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export interface User {
    id: string
    name: string
    email: string
}

export const useAuthStore = defineStore('auth', () => {
    const user = ref<User | null>(null)

    //  tạo token từ localStorage
    const accessToken = ref<string | null>(localStorage.getItem('access_token'))

    const isAuthenticated = computed(() => !!accessToken.value)

    function setAuth(userData: User, token: string) {
        user.value = userData
        accessToken.value = token

        // Lưu token vào localStorage
        localStorage.setItem('access_token', token)

        localStorage.setItem('user_info', JSON.stringify(userData))
    }

    function clearAuth() {
        user.value = null
        accessToken.value = null

        // Xóa khi logout
        localStorage.removeItem('access_token')
        localStorage.removeItem('user_info')
    }

    return { user, accessToken, isAuthenticated, setAuth, clearAuth }
})