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

    const { handleSubmit, errors, isSubmitting, defineField } = useForm({
        validationSchema: loginSchema,
        initialValues: {
            email: '',
            password: ''
        }
    })

    const [email, emailProps] = defineField('email')
    const [password, passwordProps] = defineField('password')

    const onSubmit = handleSubmit(async (values) => {
        try {

            await new Promise((resolve) => setTimeout(resolve, 1500))


            const mockResponse = {
                user: {
                    id: 'user_01',
                    name: 'Tuan Dung',
                    email: values.email
                },
                accessToken: 'shopee_clone_token_2026'
            }

            //  Cập nhật auth state vào Pinia
            authStore.setAuth(mockResponse.user, mockResponse.accessToken)

            // Lưu token vào localStorage
            localStorage.setItem('access_token', mockResponse.accessToken)

        } catch (error) {
            console.error('Đăng nhập thất bại:', error)
        }
    })

    return {
        email,
        emailProps,
        password,
        passwordProps,
        onSubmit,
        errors,
        isSubmitting
    }
}