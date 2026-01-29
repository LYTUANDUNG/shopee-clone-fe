<script setup lang="ts">
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import { ShoppingCart, ArrowRight, Trash2, Send, Plus } from 'lucide-vue-next';

// Hàm test sự kiện click cơ bản
const handleBuy = () => {
  alert('Sự kiện @click đã hoạt động: Đã thêm vào giỏ hàng!');
};

// Hàm test dữ liệu sự kiện (MouseEvent)
const handleCheckEvent = (e: MouseEvent) => {
  console.log('Thông tin sự kiện click:', e);
  alert(`Tọa độ click: X=${e.clientX}, Y=${e.clientY}`);
};
</script>

<template>
  <div class="p-8 space-y-10 bg-gray-50 min-h-screen text-gray-800">
    <section class="space-y-4">
      <h1 class="text-3xl font-extrabold text-shopee-orange">Test BaseButton Component</h1>
      <p class="text-gray-500 italic">Kiểm tra tính năng đẩy sự kiện (emit) và các kiểu hiển thị</p>
    </section>

    <div class="space-y-4 border-l-4 border-shopee-orange pl-4">
      <h2 class="text-xl font-semibold">1. Kích thước (Sizes)</h2>
      <div class="flex flex-wrap items-end gap-4">
        <BaseButton size="sm" label="Size SM" />
        <BaseButton size="md" label="Size MD (Default)" />
        <BaseButton size="lg" label="Size LG" />
      </div>
    </div>

    <div class="space-y-4 border-l-4 border-blue-500 pl-4">
      <h2 class="text-xl font-semibold text-blue-600">2. Đẩy sự kiện ra ngoài (Emits)</h2>
      <div class="flex flex-wrap gap-4">
        <BaseButton
            label="Bấm để Alert"
            @click="handleBuy"
        />
        <BaseButton
            label="Kiểm tra MouseEvent"
            bgColor="bg-gray-800"
            @click="handleCheckEvent"
        />
        <BaseButton
            label="Hover thử (Test $attrs)"
            bgColor="bg-green-600"
            @mouseenter="console.log('Sự kiện mouseenter tự động nhận nhờ $attrs!')"
        />
      </div>
    </div>

    <div class="space-y-4 border-l-4 border-purple-500 pl-4">
      <h2 class="text-xl font-semibold text-purple-600">3. Icon & Màu sắc</h2>
      <div class="flex flex-wrap gap-4">
        <BaseButton
            label="Giỏ hàng"
            :leftIcon="ShoppingCart"
            bgColor="bg-blue-600"
        />
        <BaseButton
            label="Gửi đi"
            :rightIcon="Send"
            bgColor="bg-teal-500"
        />
        <BaseButton
            :leftIcon="Plus"
            bgColor="bg-orange-500"
            rounded="rounded-full"
            size="sm"
        />
        <BaseButton
            :leftIcon="Trash2"
            bgColor="bg-red-500"
            rounded="rounded-md"
        />
      </div>
    </div>

    <div class="space-y-4 border-l-4 border-yellow-500 pl-4 max-w-md">
      <h2 class="text-xl font-semibold text-yellow-600">4. Full Width (Size XL)</h2>
      <BaseButton
          label="Thanh toán ngay"
          size="xl"
          :rightIcon="ArrowRight"
      />
    </div>
  </div>
</template>