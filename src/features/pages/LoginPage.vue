<script setup lang="ts">
import { ref } from 'vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

// Khởi tạo các biến ref trống hoàn toàn
const username = ref('');
const password = ref('');

const handleLogin = () => {
  console.log('Login with:', username.value, password.value);
};
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng nhập</template>

    <div class="VAy83y mylGx2 flex justify-end w-full">

      <div class="_92W8Vw bg-white p-8 rounded-sm shadow-lg w-[400px]">

        <div class="KhSVKK flex items-center justify-between mb-8">
          <div class="EbRIaX text-xl font-normal text-[#222]">Đăng nhập</div>
          <div class="ZJ5g1O flex items-center gap-2">
            <div class="YqPlXG hidden md:block bg-[#fefaec] border border-[#ffbf00] px-3 py-2 rounded-sm text-xs text-[#ffbf00] relative">
              Đăng nhập với mã QR
              <div class="absolute -right-1 top-3 w-2 h-2 bg-[#fefaec] border-t border-r border-[#ffbf00] rotate-45"></div>
            </div>
            <a class="EbRO8C" href="#">
              <svg width="40" height="40" fill="none"><g clip-path="url(#clip0)"><path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="#EE4D2D"></path><path d="M37 37H22.5v3H40V22.5h-3V37z" fill="#EE4D2D"></path><path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="#EE4D2D"></path><path fill="#fff" d="M-4.3 4l44 43.9-22.8 22.7-43.9-44z"></path></g><defs><clipPath id="clip0"><path fill="#fff" d="M0 0h40v40H0z"></path></clipPath></defs></svg>
            </a>
          </div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-4">
          <BaseInput v-model="username" placeholder="Email/Số điện thoại/Tên đăng nhập" />
          <BaseInput v-model="password" type="password" placeholder="Mật khẩu" />

          <BaseButton
              type="submit"
              size="xl"
              label="ĐĂNG NHẬP"
              custom-classes="hover:opacity-90 shadow-sm"
          />
        </form>

        <div class="mt-3 text-right">
          <a href="#" class="text-xs text-[#0055aa] no-underline hover:opacity-80">Quên mật khẩu</a>
        </div>

        <div class="tctXCO mt-8">
          <div class="flex items-center gap-4">
            <div class="flex-grow border-t border-gray-200"></div>
            <span class="text-gray-400 text-xs uppercase">hoặc</span>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-4">

            <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm"
            >
              <svg width="22" height="22" viewBox="0 0 48 48" class="mr-2">
                <path d="M48 24C48 10.7 37.3 0 24 0S0 10.7 0 24c0 12 8.8 22 20.3 23.7V30.9h-6.1v-6.9h6.1V18.7c0-6 3.6-9.4 8.8-9.4 2.5 0 5.1.5 5.1.5v5.6h-2.9c-3 0-3.9 1.9-3.9 3.8v4.5h6.3l-1 6.9H27.5v16.8C39.2 46 48 36 48 24z" fill="#1877F2"/>
                <path d="M33.3 30.9l1-6.9H27.8V19.5c0-1.9.9-3.8 3.9-3.8h2.9V9.8s-2.6-.5-5.1-.5c-5.2 0-8.8 3.4-8.8 9.4V24h-6.1v6.9h6.1v16.8c1.2.2 2.5.3 3.8.3s2.6-.1 3.8-.3V30.9h5.6z" fill="white"/>
              </svg>
              Facebook
            </BaseButton>

            <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm"
            >
              <svg width="22" height="22" viewBox="0 0 48 48" class="mr-2">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              Google
            </BaseButton>

          </div>
        </div>

        <div class="mt-8 text-center text-sm text-gray-400">
          Bạn mới biết đến Shopee?
          <router-link to="/register" class="text-[#ee4d2d] font-medium hover:opacity-80 ml-1">Đăng ký</router-link>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style scoped>
.VAy83y {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
</style>