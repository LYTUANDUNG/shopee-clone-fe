<script lang="ts" setup>
import { Product } from "../../models/product.model";

defineProps<{ product: Product }>();
</script>

<template>
    <div class="product-details">
        <img :src="product.image" :alt="product.name" class="product-image" />
        <div class="product-meta">
             <div class="product-name">{{ product.name }}</div>
             <img src="https://down-vn.img.susercontent.com/file/vn-50009109-90696f8c7e0c8326eae0747f0d0e6533" class="voucher-icon" alt="voucher" />
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
  @apply flex flex-col gap-1;
}

.product-name {
  @apply text-sm line-clamp-2;
}

.voucher-icon {
  @apply h-4 w-auto object-contain;
}
</style>
