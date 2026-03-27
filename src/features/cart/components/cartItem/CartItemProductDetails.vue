<script lang="ts" setup>
import type { Product } from "../../types/product.types";
import ProductReviewContainer from '@/features/product/components/ProductReviewContainer.vue';

defineProps<{ product: Product, variantImg: string }>();
const emit = defineEmits<{
  click: [productId: string]
}>();
</script>

<template>
  <div class="product-item-wrapper"> <div class="product-details cursor-pointer" @click="emit('click', product.id)">
    <img :src="variantImg" :alt="product.name" class="product-image" />
    <div class="product-meta">
      <div class="product-name">{{ product.name }}</div>
      <img
          v-if="product.voucherLabel"
          :src="product.voucherLabel"
          class="voucher-icon"
          alt="voucher"
      />
    </div>
  </div>

    <div class="mt-6 border-t border-gray-100 pt-4">
      <ProductReviewContainer :product-id="product.id" />
    </div>

  </div>
</template>

<style scoped>
.product-item-wrapper {
  @apply flex flex-col;
}

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
  @apply text-sm line-clamp-2 font-medium;
}

.voucher-icon {
  @apply h-4 w-auto object-contain;
}
</style>