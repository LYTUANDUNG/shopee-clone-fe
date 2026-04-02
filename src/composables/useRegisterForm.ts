import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

export function useRegisterForm() {
    const registerSchema = toTypedSchema(
        z.object({
            phone: z.string().min(10, 'Số điện thoại phải đủ 10 số').max(10, 'Số điện thoại không quá 10 số'),
            email: z.string().min(1, 'Email là bắt buộc').email('Email không hợp lệ'),
            password: z.string().min(6, 'Mật khẩu ít nhất 6 ký tự'),
            confirmPassword: z.string().min(1, 'Vui lòng xác nhận mật khẩu')
        }).refine((data) => data.password === data.confirmPassword, {
            message: "Mật khẩu không khớp",
            path: ["confirmPassword"],
        })
    )

    const { handleSubmit, errors, isSubmitting, defineField } = useForm({
        validationSchema: registerSchema
    })

    const [phone, phoneProps] = defineField('phone')
    const [email, emailProps] = defineField('email')
    const [password, passwordProps] = defineField('password')
    const [confirmPassword, confirmPasswordProps] = defineField('confirmPassword')

    return {
        phone, phoneProps, email, emailProps,
        password, passwordProps, confirmPassword, confirmPasswordProps,
        onSubmit: handleSubmit((values) => console.log('Đăng ký thành công:', values)),
        errors, isSubmitting
    }
}