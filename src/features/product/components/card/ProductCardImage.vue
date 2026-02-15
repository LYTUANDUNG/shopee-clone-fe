<script setup lang="ts">
import type { Product } from "@/features/product/types";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="image-container">
    <img :src="product.image" :alt="product.name" class="product-image" />
  </div>
</template>

<style scoped>
.image-container {
  @apply relative pt-[100%] overflow-hidden;
}

.product-image {
  @apply absolute top-0 left-0 w-full h-full object-cover;
}
</style>
