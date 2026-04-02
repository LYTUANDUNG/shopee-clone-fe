<script setup lang="ts">
import { ref, computed } from 'vue';
import AuthLayout from '@/features/layouts/AuthLayout.vue';
import BaseInput from '@/shared/components/atoms/BaseInput.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import BaseLink from '@/shared/components/atoms/BaseLink.vue';

const phone = ref('');

const isPhoneValid = computed(() => phone.value.length === 10);

const handleRegister = () => {
  if (isPhoneValid.value) {
    console.log('Register with phone:', phone.value);


    alert('Hệ thống sẽ gửi mã OTP đến số: ' + phone.value);
  }
};
</script>

<template>
  <AuthLayout>
    <template #header-title>Đăng ký</template>

    <div class="VAy83y mylGx2 flex justify-end w-full">
      <div class="_92W8Vw bg-white p-8 rounded-sm shadow-lg w-[400px]">

        <div class="KhSVKK mb-8">
          <h2 class="text-xl font-normal text-[#222]">Đăng ký</h2>
        </div>

        <form class="space-y-4" @submit.prevent="handleRegister">
          <BaseInput
              v-model="phone"
              placeholder="Số điện thoại"
              :is-number-only="true"
              maxlength="10"
          />

          <BaseButton
              type="submit"
              size="xl"
              label="TIẾP THEO"
              :disabled="!isPhoneValid"
              :custom-classes="[
                'w-full text-white font-medium transition-all',
                isPhoneValid ? 'bg-[#ee4d2d] hover:opacity-90' : 'bg-gray-300 cursor-not-allowed'
              ]"
          />
        </form>

        <div class="tctXCO mt-4">
          <div class="flex items-center gap-4">
            <div class="flex-grow border-t border-gray-200"></div>
            <span class="text-gray-400 text-[10px] uppercase font-medium">hoặc</span>
            <div class="flex-grow border-t border-gray-200"></div>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-4">
            <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm flex items-center justify-center h-10"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                   class="w-5 h-5 mr-2" alt="FB"/>
              Facebook
            </BaseButton>

            <BaseButton
                bg-color="bg-white"
                text-color="text-[#222]"
                custom-classes="border !border-black/10 hover:bg-gray-50 font-normal shadow-sm flex items-center justify-center h-10"
            >
              <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                   class="w-5 h-5 mr-2" alt="GG"/>
              Google
            </BaseButton>
          </div>
        </div>

        <div class="mt-6 text-center text-[12px] text-[#222] leading-relaxed px-2">
          Bằng việc đăng ký, bạn đã đồng ý với Shopee về
          <BaseLink to="/terms" variant="orange" class="font-bold no-underline mx-1">Điều khoản dịch vụ</BaseLink> &
          <BaseLink to="/privacy" variant="orange" class="font-bold no-underline mx-1">Chính sách bảo mật</BaseLink>
        </div>

        <div class="mt-8 text-center text-sm text-gray-400 border-t pt-6 border-gray-100">
          Bạn đã có tài khoản?
          <BaseLink to="/login" variant="orange" class="font-bold ml-1 no-underline">Đăng nhập</BaseLink>
        </div>
      </div>
    </div>
  </AuthLayout>
</template>

<style scoped>
.VAy83y {
  display: flex;
  justify-content: flex-end;
}
</style>