<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useLoginForm } from '@/composables/useLoginForm';
import AuthLayout from '@/features/layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

const router = useRouter();

const {
  email,
  emailProps,
  password,
  passwordProps,
  onSubmit,
  isSubmitting,
  errors
} = useLoginForm();

const handleLoginSubmit = async () => {
  await onSubmit();

  if (Object.keys(errors.value).length === 0) {
    console.log('--- ĐĂNG NHẬP THÀNH CÔNG, ĐANG CHUYỂN HƯỚNG ---');
    router.push('/');
  }
};
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng nhập</template>

    <div class="flex justify-end w-full">
      <div class="bg-white p-8 rounded-sm shadow-lg w-[400px]">

        <div class="flex items-center justify-between mb-8">
          <h2 class="text-xl font-normal text-[#222]">Đăng nhập</h2>
          <div class="flex items-center gap-2">
            <div class="hidden md:block bg-[#fefaec] border border-[#ffbf00] px-3 py-2 rounded-sm text-xs text-[#ffbf00] relative font-medium">
              Đăng nhập với mã QR
              <div class="absolute -right-1 top-3 w-2 h-2 bg-[#fefaec] border-t border-r border-[#ffbf00] rotate-45"></div>
            </div>
            <a href="#" class="text-[#ee4d2d]">
              <svg width="40" height="40" fill="none" viewBox="0 0 40 40">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 0H0v18h18V0zM3 15V3h12v12H3zM18 22H0v18h18V22zm-3 15H3V25h12v12zM40 0H22v18h18V0zm-3 15H25V3h12v12z" fill="currentColor"></path>
                <path d="M37 37H22.5v3H40V22.5h-3V37z" fill="currentColor"></path>
                <path d="M27.5 32v-8h-3v8h3zM33.5 32v-8h-3v8h3zM6 6h6v6H6zM6 28h6v6H6zM28 6h6v6h-6z" fill="currentColor"></path>
              </svg>
            </a>
          </div>
        </div>

        <form class="space-y-4" @submit.prevent="handleLoginSubmit">
          <BaseInput
              v-model="email"
              v-bind="emailProps"
              :error="errors.email"
              placeholder="Email/Số điện thoại/Tên đăng nhập"
          />

          <BaseInput
              v-model="password"
              v-bind="passwordProps"
              :error="errors.password"
              type="password"
              placeholder="Mật khẩu"
          />

          <BaseButton
              type="submit"
              size="xl"
              :label="isSubmitting ? 'ĐANG XỬ LÝ...' : 'ĐĂNG NHẬP'"
              :disabled="isSubmitting"
              custom-classes="w-full bg-[#ee4d2d] text-white border-none hover:opacity-90 font-medium shadow-sm transition-opacity"
          />
        </form>

        <div class="mt-3 flex justify-between text-[12px]">
          <a href="#" class="text-[#0055aa] hover:opacity-80">Quên mật khẩu</a>
          <a href="#" class="text-[#0055aa] hover:opacity-80">Đăng nhập với SMS</a>
        </div>

        <div class="mt-8">
          <div class="flex items-center gap-4 mb-4">
            <div class="flex-grow border-t border-gray-200"></div>
            <span class="text-gray-400 text-[12px] uppercase">hoặc</span>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="grid grid-cols-2 gap-2">
            <button class="flex items-center justify-center border border-black/10 rounded-sm h-10 hover:bg-gray-50 text-[14px] transition-colors">
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_(2019).png" class="w-5 mr-2" alt="fb" />
              Facebook
            </button>
            <button class="flex items-center justify-center border border-black/10 rounded-sm h-10 hover:bg-gray-50 text-[14px] transition-colors">
              <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" class="w-5 mr-2" alt="google" />
              Google
            </button>
          </div>
        </div>

        <div class="mt-8 text-center text-[14px] text-gray-400">
          Bạn mới biết đến Shopee?
          <router-link to="/register" class="text-[#ee4d2d] font-medium hover:opacity-80 ml-1">Đăng ký</router-link>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>