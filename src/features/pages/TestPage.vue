<script setup lang="ts">
import {
  ShoppingCart,
  ArrowRight,
  Plus,
  Send,
  Trash2,
  Heart,
  CheckCircle
} from 'lucide-vue-next';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

// Hàm này bây giờ sẽ được gọi ở TẤT CẢ các nút bên dưới để hết lỗi ESLint
const handleAction = (btnName: string) => {
  console.log(`[Shopee Test] Đã kích hoạt: ${btnName}`);
};
</script>

<template>
  <div class="p-8 bg-gray-50 min-h-screen space-y-12 pb-20">
    <header class="border-b pb-4">
      <h1 class="text-2xl font-bold text-slate-800">Shopee Component Lab: BaseButton</h1>
      <p class="text-sm text-slate-500">Đang kiểm tra tính Reusable: Prop vs Slot và Custom Sizing</p>
    </header>

    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-slate-700">1. Content Priority (Ưu tiên nội dung)</h2>
      <div class="flex flex-wrap gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <BaseButton
            label="Dùng Prop Label"
            @click="handleAction('Nút dùng Prop')"
        />

        <BaseButton bgColor="bg-slate-800" @click="handleAction('Nút dùng Slot')">
          <span class="flex items-center gap-2">
            <span class="text-yellow-400 font-bold italic">SLOT:</span>
            <span>Nội dung tùy biến</span>
            <CheckCircle :size="16" class="text-emerald-400" />
          </span>
        </BaseButton>

        <p class="text-xs text-gray-400 italic w-full">
          * Lưu ý: Nếu Hùng truyền cả label và nội dung giữa cặp thẻ, SLOT sẽ được ưu tiên hiển thị.
        </p>
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-slate-700">2. Icon Placements (Vị trí Icon)</h2>
      <div class="flex flex-wrap items-center gap-4 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <BaseButton label="Icon Trái" :leftIcon="ShoppingCart" @click="handleAction('Icon Trái')" />
        <BaseButton label="Icon Phải" :rightIcon="ArrowRight" bgColor="bg-blue-600" @click="handleAction('Icon Phải')" />
        <BaseButton label="Cả 2 Icon" :leftIcon="Plus" :rightIcon="Send" bgColor="bg-emerald-600" @click="handleAction('2 Icon')" />

        <BaseButton :leftIcon="Trash2" bgColor="bg-red-50" textColor="text-red-500" customClasses="w-10 h-10 p-0 border-red-200" @click="handleAction('Nút xóa')" />
        <BaseButton :leftIcon="Heart" bgColor="bg-pink-50" textColor="text-pink-500" customClasses="w-12 h-12 rounded-full p-0 border-pink-200 shadow-sm" @click="handleAction('Nút tim')" />
      </div>
    </section>

    <section class="space-y-4">
      <h2 class="text-lg font-semibold text-slate-700">3. Sizing & Responsive (Kích thước)</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">
        <BaseButton label="Size SM" size="sm" bgColor="bg-gray-500" @click="handleAction('Size nhỏ')" />
        <BaseButton label="Size LG" size="lg" bgColor="bg-shopee-orange" @click="handleAction('Size lớn')" />

        <div class="col-span-full">
          <BaseButton
              label="ĐĂNG NHẬP"
              size="xl"
              bgColor="bg-shopee-orange-dark"
              @click="handleAction('Đăng nhập Shopee')"
          />
        </div>

        <div class="col-span-full">
          <BaseButton
              label="Custom Width 400px (Hòa tốc)"
              customClasses="w-full md:w-[400px] h-14 uppercase tracking-widest"
              bgColor="bg-indigo-700"
              :leftIcon="Plus"
              @click="handleAction('Nút custom 400px')"
          />
        </div>
      </div>
    </section>
    <section class="space-y-6">
      <h2 class="text-xl font-semibold text-slate-700 flex items-center gap-2">
        <div class="w-1 h-6 bg-purple-500"></div>
        4. Test Border & Radius
      </h2>
      <div class="flex flex-wrap items-center gap-6 p-6 bg-white rounded-lg shadow-sm border border-gray-100">

        <BaseButton
            label="Pill Shape & Thick Border"
            bgColor="bg-white"
            textColor="text-shopee-orange"
            customClasses="rounded-full border-2 border-shopee-orange shadow-md"
            @click="handleAction('Nút bo tròn viền dày')"
        />

        <BaseButton
            label="Sharp Corners & Heavy Border"
            bgColor="bg-white"
            textColor="text-slate-800"
            customClasses="rounded-none border-4 border-slate-800"
            @click="handleAction('Nút vuông viền dày')"
        />

        <BaseButton
            label="Custom Radius 15px"
            customClasses="rounded-[15px] bg-gradient-to-r from-orange-400 to-red-500"
            @click="handleAction('Nút bo 15px')"
        />
      </div>
    </section>
  </div>
</template>