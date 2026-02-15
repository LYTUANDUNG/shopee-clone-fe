<script setup lang="ts">
import { computed } from 'vue';
import { formatCurrency } from '@/shared/utils/format';
import Badge from '@/shared/components/atoms/Badge.vue';
import Rating from '@/shared/components/atoms/Rating.vue';

export interface Product {
  id: number | string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  currency?: string; // e.g. 'đ'
  rating: number;
  sold: number;
  isMall?: boolean;
  isFavorite?: boolean;
  discountPercentage?: number; // e.g. 43 for -43%
  location?: string; // e.g. 'Hà Nội'
}

interface Props {
  product: Product;
}

const props = defineProps<Props>();

// Computed properties for display logic
const formattedPrice = computed(() => formatCurrency(props.product.price));
const formattedOriginalPrice = computed(() => 
  props.product.originalPrice ? formatCurrency(props.product.originalPrice) : ''
);
const soldText = computed(() => {
  if (props.product.sold >= 1000) {
    const kValue = (props.product.sold / 1000).toFixed(1);
    // Remove .0 if present, e.g., 10.0 -> 10
    return `Đã bán ${kValue.replace('.0', '')}k`;
  }
  return `Đã bán ${props.product.sold}`;
});

</script>

<template>
  <div class="group relative flex flex-col bg-white border border-transparent hover:border-shopee-orange hover:-translate-y-[1px] hover:shadow-[0_2px_4px_rgba(0,0,0,0.1)] hover:z-50 transition-transform duration-100 cursor-pointer rounded-sm select-none h-full box-border">
    
    <!-- Image Section -->
    <div class="relative w-full pt-[100%] overflow-hidden">
      <img 
        :src="product.image" 
        :alt="product.name" 
        class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
        loading="lazy"
      />

      <!-- Special Badges (Mall / Favorite (Absolute if Mall, Inline if Favorite logic usually varies but keeping consistent with request)) -->
       <!-- Note: Screenshot shows Favorite inline with text, but Mall is usually absolute. Keeping as is unless specified, but user asked about Find Similar. -->
      <div class="absolute top-0 left-0 flex flex-col items-start gap-1 z-10">
        <Badge v-if="product.isMall" text="Mall" type="mall" />
        <!-- Favorite is often inline in name, removing absolute favorite if user wants strict match to 'inline' style, 
             but for now focusing on 'Find Similar' position as requested. -->
      </div>

      <!-- Discount Badge (Right Top) -->
      <div v-if="product.discountPercentage" class="absolute top-0 right-0 bg-[rgba(255,212,36,0.9)] text-shopee-orange px-1 h-9 w-9 flex flex-col items-center justify-center text-xs font-semibold z-10">
          <span class="text-shopee-orange font-normal text-[10px] leading-tight">{{ product.discountPercentage }}%</span>
          <span class="text-white uppercase text-[10px] font-bold leading-tight">GIẢM</span>
      </div>
    </div>

    <!-- Content Section -->
    <div class="p-2 flex flex-col gap-1 flex-1 relative">
      <!-- Name -->
      <div class="text-xs text-[#333] line-clamp-2 min-h-[2rem] leading-4 mb-2 break-words">
        <span v-if="product.isFavorite" class="inline-block bg-shopee-orange text-white text-[9px] font-medium px-1 mr-1 rounded-[2px] align-middle leading-3 py-[1px]">Yêu thích</span>
        {{ product.name }}
      </div>

      <!-- Tags (Example: Rẻ Vô Địch) -->
      <div class="flex items-center gap-1 min-h-[16px] overflow-hidden mb-1">
        <div class="border border-shopee-orange text-shopee-orange text-[10px] px-1 h-3.5 flex items-center leading-none bg-white" v-if="product.discountPercentage">
          Rẻ Vô Địch
        </div>
      </div>

      <!-- Price -->
      <div class="flex items-center gap-1 mt-auto flex-wrap">
        <span v-if="product.originalPrice" class="text-gray-400 text-[10px] line-through truncate max-w-[40%]">
          {{ formattedOriginalPrice }}
        </span>
        <span class="text-shopee-orange text-base md:text-lg font-medium truncate">
          <span class="text-[0.5em] align-top">₫</span>{{ formattedPrice.replace('₫', '').trim() }}
        </span>
      </div>

      <!-- Rating & Sold -->
      <div class="flex items-center justify-between text-[10px] text-gray-500 mt-1">
        <div class="flex items-center gap-0.5">
          <Rating :rating="product.rating" size="10px" />
        </div>
        <span class="truncate">{{ soldText }}</span>
      </div>
      
       <!-- Location (Optional) -->
       <div v-if="product.location" class="text-[10px] text-gray-500 text-right truncate mt-1">
          {{ product.location }}
       </div>
    </div>

    <!-- Overlay: Find Similar Product (Hover Effect) - Moved outside image, absolute to card bottom -->
    <div class="absolute top-[100%] left-[-1px] w-[calc(100%+2px)] bg-shopee-orange text-white text-center py-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50 shadow-sm rounded-b-sm border-x border-b border-shopee-orange">
        <span class="text-xs md:text-sm font-normal">Tìm sản phẩm tương tự</span>
    </div>
  </div>
</template>

<style scoped>
/* Ensure line-clamp works standardly if Tailwind plugin is not sufficient, but tailwind line-clamp is usually standard */
</style>
