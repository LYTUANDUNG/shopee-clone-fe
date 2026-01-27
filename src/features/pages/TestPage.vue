<script setup lang="ts">
import { ref, watch } from 'vue';
// Đảm bảo mọi icon import ở đây đều xuất hiện trong template bên dưới
import { Mail, Lock, Phone, User } from 'lucide-vue-next';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';

const email = ref('');
const password = ref('');
const phone = ref('');
const username = ref('');
const emailError = ref('');

// Regex kiểm tra định dạng email tiêu chuẩn cho báo cáo
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Theo dõi thay đổi để kiểm tra email thời gian thực
watch(email, (newValue) => {
  if (newValue.length > 0 && !emailRegex.test(newValue)) {
    emailError.value = 'Định dạng email không hợp lệ (ví dụ: user@shopee.vn)';
  } else {
    emailError.value = '';
  }
});
</script>

<template>
  <div class="p-10 bg-gray-50 min-h-screen space-y-6">
    <div class="max-w-md mx-auto bg-white p-8 rounded-lg shadow-sm space-y-6">
      <header class="border-b pb-4">
        <h2 class="text-xl font-bold text-gray-800">Final Validation Audit</h2>
        <p class="text-sm text-gray-500">Kiểm thử Atom Input trên nhánh feature/atom-input</p>
      </header>

      <BaseInput
          v-model="email"
          label="Địa chỉ Email"
          placeholder="nhập email..."
          :leftIcon="Mail"
          :error="emailError"
      />

      <BaseInput
          v-model="phone"
          label="Số điện thoại"
          placeholder="Chỉ được nhập số..."
          :leftIcon="Phone"
          :isNumberOnly="true"
      />

      <BaseInput
          v-model="password"
          type="password"
          label="Mật khẩu"
          :leftIcon="Lock"
          placeholder="Nhập mật khẩu bảo mật"
      />

      <BaseInput
          v-model="username"
          label="Tên đăng nhập"
          :leftIcon="User"
          placeholder="Nhập username..."
      />
    </div>
  </div>
</template>