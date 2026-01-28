<script setup lang="ts">
import {
  ShoppingCart,
  ArrowRight,
  Plus,
  Send,
  Trash2,
  Heart,
  CheckCircle,
  Bell
} from 'lucide-vue-next';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

const handleAction = (msg: string) => console.log(`[Shopee Lab] Đã thực hiện: ${msg}`);
</script>

<template>
  <div class="p-10 bg-gray-50 min-h-screen space-y-12 pb-32">
    <header class="border-b-2 border-shopee-orange pb-4">
      <h1 class="text-3xl font-bold text-slate-800">Final Audit: BaseButton (No Disabled)</h1>
    </header>

    <section class="space-y-4">
      <h2 class="font-bold text-slate-600 uppercase text-sm">1. Content Priority</h2>
      <div class="flex gap-4 p-6 bg-white rounded shadow-sm">
        <BaseButton label="Dùng Prop Label" @click="handleAction('Click Prop')" />
        <BaseButton bgColor="bg-slate-800" @click="handleAction('Click Slot')">
          <span class="flex items-center gap-2 text-yellow-400">
            <CheckCircle :size="16" />
            <span class="font-bold underline italic">Nội dung từ SLOT</span>
          </span>
        </BaseButton>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="font-bold text-slate-600 uppercase text-sm">2. Shape & Icons</h2>
      <div class="flex items-center gap-6 p-6 bg-white rounded shadow-sm">
        <BaseButton label="ShoppingCart Left" :leftIcon="ShoppingCart" @click="handleAction('Giỏ hàng')" />
        <BaseButton label="Plus & Send" :leftIcon="Plus" :rightIcon="Send" bgColor="bg-emerald-600" @click="handleAction('Gửi')" />
        <BaseButton :leftIcon="Heart" rounded="rounded-full" customClasses="w-12 h-12 p-0 shadow-lg" bgColor="bg-pink-500" @click="handleAction('Thả tim')" />
        <BaseButton :leftIcon="Trash2" customClasses="w-10 h-10 p-0 border border-red-500" bgColor="bg-white" textColor="text-red-500" @click="handleAction('Xóa')" />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="font-bold text-slate-600 uppercase text-sm">3. Shopee Auth Style</h2>
      <div class="p-6 bg-white rounded shadow-sm space-y-4">
        <BaseButton label="ĐĂNG NHẬP" size="xl" bgColor="bg-shopee-orange-dark" @click="handleAction('Đăng nhập')" />
        <BaseButton label="THÔNG BÁO" size="lg" :leftIcon="Bell" customClasses="w-full" @click="handleAction('Mở thông báo')" />
        <BaseButton label="TIẾP THEO" size="xl" bgColor="bg-shopee-orange-dark" :rightIcon="ArrowRight" @click="handleAction('Tiếp tục')" />
      </div>
    </section>
  </div>
</template>