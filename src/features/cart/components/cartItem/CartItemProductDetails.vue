<script lang="ts" setup>
import type { Product } from "../../types/product.types";

defineProps<{ product: Product, variantImg: string }>();
const emit = defineEmits<{
  click: [productId: string]
}>();
</script>

<template>
    <div class="product-details cursor-pointer" @click="emit('click', product.id)">
        <img :src="variantImg" :alt="product.name" class="product-image" />
        <div class="product-meta">
             <div class="product-name">{{ product.name }}</div>
             <img 
               v-if="product.voucherLabel"
               :src="product.voucherLabel" 
               class="voucher-icon" 
               alt="voucher" 
             />
             <!-- TODO: Sẽ thay thế bằng component Image xử lý error sau -->
        </div>
    </div>
</template>

<style scoped>
.product-details {
  @apply flex items-start gap-3;
}

.product-image {
  @apply w-20 h-20 object-cover border border-gray-100 rounded-sm;
}

.product-meta {
  @apply flex flex-col gap-1 items-start;
}

.product-name {
  @apply text-sm line-clamp-2;
}

.voucher-icon {
  @apply h-4 w-auto object-contain;
}
</style>
