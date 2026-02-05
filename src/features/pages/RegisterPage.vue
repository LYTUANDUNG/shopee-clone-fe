<script setup lang="ts">
import { ref } from 'vue';
import AuthLayout from '../layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

const phone = ref('');
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng ký</template>

    <template #banner>
      <div class="text-white text-center">
        <img
            src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/assets/7a2114399248fc51.png"
            alt="Shopee Register Banner"
            class="w-[450px]"
        />
        <p class="mt-4 text-2xl font-normal">Nền tảng thương mại điện tử<br/>yêu thích ở Đông Nam Á & Đài Loan</p>
      </div>
    </template>

    <div class="bg-white p-8 rounded-sm shadow-md w-full md:w-[400px]">
      <h2 class="text-xl font-normal text-[#222] mb-8">Đăng ký</h2>

      <div class="space-y-6">
        <BaseInput
            v-model="phone"
            type="tel"
            placeholder="Số điện thoại"
        />

        <BaseButton
            size="xl"
            label="TIẾP THEO"
            bg-color="bg-[#ee4d2d]"
            custom-classes="hover:bg-[#d73211] opacity-70 cursor-not-allowed"
        />
      </div>

      <div class="relative my-8">
        <div class="absolute inset-0 flex items-center"><span class="w-full border-t border-gray-200"></span></div>
        <div class="relative flex justify-center text-xs uppercase">
          <span class="bg-white px-4 text-gray-300 font-medium">Hoặc</span>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-2 mb-8">
        <button class="flex items-center justify-center border border-gray-300 p-2 gap-2 text-sm hover:bg-gray-50">
          <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_2023.png" class="w-5 h-5"  alt=""/> Facebook
        </button>
        <button class="flex items-center justify-center border border-gray-300 p-2 gap-2 text-sm hover:bg-gray-50">
          <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" class="w-5 h-5"  alt=""/> Google
        </button>
      </div>

      <div class="text-center text-xs px-4 text-[#222]">
        Bằng việc đăng ký, bạn đã đồng ý với Shopee về <br/>
        <a href="#" class="text-[#ee4d2d]">Điều khoản dịch vụ</a> & <a href="#" class="text-[#ee4d2d]">Chính sách bảo mật</a>
      </div>

      <p class="text-center text-sm text-gray-300 mt-8">
        Bạn đã có tài khoản?
        <router-link to="/login" class="text-[#ee4d2d] font-medium ml-1">Đăng nhập</router-link>
      </p>
    </div>
  </AuthLayout>
</template>