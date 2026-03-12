import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
    const user = ref<any>(null)
    const accessToken = ref<string | null>(null)
    const isAuthenticated = computed(() => !!accessToken.value)

    function setAuth(userData: any, token: string) {
        user.value = userData
        accessToken.value = token
    }

    function clearAuth() {
        user.value = null
        accessToken.value = null
    }

    return { user, accessToken, isAuthenticated, setAuth, clearAuth }
})