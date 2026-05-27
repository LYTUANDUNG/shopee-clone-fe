import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'
import { useAuthStore } from '@/stores/auth'
import { loginApi } from '@/features/auth/api/login.api'

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
            // Xác định payload là email hay số điện thoại (tạm thời gán vào email)
            const payload = {
                email: values.email,
                password: values.password
            };

            // Gọi API thật
            const response = await loginApi.login(payload);

            //  Cập nhật auth state vào Pinia (đồng thời lưu localStorage trong setAuth)
            authStore.setAuth(response.user, response.accessToken);

        } catch (error: any) {
            console.error('Đăng nhập thất bại:', error);
            // Có thể map lỗi từ error.response.data.message về form errors ở đây
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