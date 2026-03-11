import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'

export function useLoginForm() {
    const authStore = useAuthStore()

    const loginSchema = toTypedSchema(
        z.object({
            email: z
                .string()
                .min(1, 'Email là bắt buộc')
                .email('Email không hợp lệ'),
            password: z
                .string()
                .min(1, 'Mật khẩu là bắt buộc')
                .min(6, 'Mật khẩu phải có ít nhất 6 ký tự')
        })
    )

    const { handleSubmit, errors, isSubmitting } = useForm({
        validationSchema: loginSchema,
        initialValues: {
            email: '',
            password: ''
        }
    })

    const onSubmit = handleSubmit(async (values) => {
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500))

            console.log('Dữ liệu đăng nhập:', values)

            const mockResponse = {
                user: { id: 'user_01', name: 'Tuan Dung', email: values.email },
                accessToken: 'shopee_clone_token_2026'
            }

            authStore.setAuth(mockResponse.user, mockResponse.accessToken)

            console.log('Đăng nhập thành công! isAuthenticated:', authStore.isAuthenticated)
        } catch (error) {
            console.error('Đăng nhập thất bại:', error)
        }
    })

    return {
        onSubmit,
        errors,
        isSubmitting,
        isAuthenticated: authStore.isAuthenticated
    }
}