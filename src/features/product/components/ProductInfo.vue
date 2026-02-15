<script setup lang="ts">
import { ref } from 'vue';
import { formatCurrency } from '@/shared/utils/format';
import type { Product } from '../types';

interface Props {
  product: Product;
}

const props = defineProps<Props>();

const selectedVariant = ref<Record<string, string>>({});
const quantity = ref(1);

const handleVariantSelect = (type: string, option: string) => {
  selectedVariant.value = {
    ...selectedVariant.value,
    [type]: option,
  };
};

const decreaseQuantity = () => {
  if (quantity.value > 1) quantity.value--;
};

const increaseQuantity = () => {
  quantity.value++;
};
</script>

<template>
  <div class="flex flex-col gap-1">
    <!-- Title -->
    <h1 class="text-xl font-medium text-gray-800 leading-tight">
      <span class="bg-red-500 text-white text-xs font-bold px-1 py-0.5 rounded-[2px] mr-2 align-middle">Yêu thích</span>
      <span class="align-middle">{{ product.name }}</span>
    </h1>

    <!-- Rating & Sold -->
    <div class="flex items-center mt-2">
      <div class="flex items-center gap-1 pr-4 border-r border-gray-300">
        <span class="text-orange-500 border-b border-orange-500 font-medium text-base">{{ product.rating }}</span>
        <div class="flex text-orange-500 text-xs">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3" v-for="i in 5" :key="i">
            <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
      <div class="px-4 border-r border-gray-300">
        <span class="border-b border-black font-medium text-base text-gray-800">330</span>
        <span class="text-sm text-gray-500 ml-1">Đánh Giá</span>
      </div>
      <div class="pl-4">
        <span class="font-medium text-base text-gray-800">{{ product.sold }}</span>
        <span class="text-sm text-gray-500 ml-1">Đã bán</span>
      </div>
      <div class="ml-auto text-sm text-gray-500 cursor-pointer hover:text-gray-700">
        Tố cáo
      </div>
    </div>

    <!-- Price Section -->
    <div class="mt-4 bg-gray-50">
      <!-- Banner dành riêng bạn mới (Optional overlay or just top bar) -->
      <div class="flex items-center gap-2 px-4 py-2 bg-[#ff5722] text-white" v-if="true">
         <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" class="w-4 h-4 brightness-0 invert" alt="icon">
         <span class="text-sm font-medium">Giá dành riêng bạn mới</span>
      </div>
      <div class="p-4 flex items-end gap-3">
        <span v-if="product.originalPrice" class="text-gray-400 line-through text-base">
          {{ formatCurrency(product.originalPrice) }}
        </span>
        <span class="text-3xl font-medium text-orange-500">
          {{ formatCurrency(product.price) }}
        </span>
        <span v-if="product.originalPrice" class="bg-orange-500 text-white text-[10px] font-bold px-1 rounded-[2px] uppercase mb-1">
          {{ Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100) }}% GIẢM
        </span>
      </div>
    </div>

    <!-- Info Grid -->
    <div class="mt-6 flex flex-col gap-6 px-4">
       <!-- Voucher -->
       <div class="flex items-center">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">Voucher Của Shop</span>
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(voucher, index) in product.vouchers" 
              :key="index"
              class="bg-orange-100 text-orange-600 text-xs px-2 py-1 relative before:content-[''] before:absolute before:-left-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[4px] before:h-[4px] before:bg-white before:rounded-full after:content-[''] after:absolute after:-right-[2px] after:top-1/2 after:-translate-y-1/2 after:w-[4px] after:h-[4px] after:bg-white after:rounded-full"
            >
              {{ voucher }}
            </span>
          </div>
       </div>

       <!-- Shipping -->
       <div class="flex items-start">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0 pt-1">Vận Chuyển</span>
          <div class="flex flex-col gap-2 text-sm">
            <div class="flex items-center gap-2">
              <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/productdetailspage/d9e992985b18d96aab90.png" class="w-5 h-4 object-contain" />
              <span class="text-gray-800">Nhận từ 5 Th02 - 9 Th02, phí giao 0₫</span>
            </div>
            <div class="text-gray-500 text-xs ml-7">Tặng Voucher 15.000₫ nếu đơn giao sau thời gian trên.</div>
          </div>
       </div>

       <!-- Insurance -->
       <div class="flex items-center">
         <span class="text-gray-500 w-28 text-sm flex-shrink-0">An Tâm Mua Sắm Cùng Shopee</span>
         <div class="flex items-center text-sm text-gray-800 gap-2">
            <span class="text-orange-500 text-lg">🛡️</span>
            <span>Trả hàng miễn phí 15 ngày · Bảo hiểm Thời trang</span>
         </div>
       </div>

      <!-- Variants -->
      <div v-if="product.variants" class="flex flex-col gap-6 mt-2">
        <div v-for="variant in product.variants" :key="variant.type" class="flex flex-col sm:flex-row sm:items-baseline">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">{{ variant.type }}</span>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="option in variant.options"
              :key="option"
              class="px-4 py-2 border rounded-[2px] text-sm min-w-[5rem] transition-all relative overflow-hidden group"
              :class="selectedVariant[variant.type] === option 
                ? 'border-orange-500 text-orange-500' 
                : 'border-gray-200 hover:border-orange-500 text-gray-800 bg-white'"
              @click="handleVariantSelect(variant.type, option)"
            >
              {{ option }}
              <div v-if="selectedVariant[variant.type] === option" class="absolute bottom-0 right-0 w-3 h-3 bg-orange-500">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-2 h-2 absolute bottom-0 right-0">
                    <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
                 </svg>
              </div>
            </button>
          </div>
        </div>
        
        <!-- Quantity -->
        <div class="flex flex-col sm:flex-row sm:items-center">
          <span class="text-gray-500 w-28 text-sm flex-shrink-0">Số lượng</span>
          <div class="flex items-center">
            <div class="flex items-center border border-gray-300 rounded-[2px] overflow-hidden">
              <button class="px-3 py-2 border-r border-gray-300 hover:bg-gray-50" @click="decreaseQuantity">-</button>
              <input 
                type="text" 
                v-model="quantity" 
                class="w-14 text-center outline-none py-2 text-gray-600 font-medium" 
                readonly 
              />
              <button class="px-3 py-2 border-l border-gray-300 hover:bg-gray-50" @click="increaseQuantity">+</button>
            </div>
            <span class="ml-4 text-sm text-gray-500">{{ product.sold }} sản phẩm có sẵn</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Actions -->
    <div class="flex gap-4 mt-8 px-4">
      <button class="px-8 bg-orange-50 border border-orange-500 text-orange-500 py-3 rounded-[2px] hover:bg-orange-100 transition-colors flex items-center justify-center gap-2 shadow-sm min-w-[200px]">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
        Thêm Vào Giỏ Hàng
      </button>
      <button class="px-8 bg-orange-600 text-white py-3 rounded-[2px] hover:bg-orange-700 transition-colors shadow-sm min-w-[200px]">
        Mua Ngay
      </button>
    </div>
  </div>
</template>