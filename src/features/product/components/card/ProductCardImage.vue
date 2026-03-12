<script setup lang="ts">
import type { Product } from "@/features/product/types";
import Badge from '@/shared/components/atoms/Badge.vue';

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="image-container">
    <img :src="product.image" :alt="product.name" class="product-image" />

    <!-- Badge overlay: Giảm giá % hoặc Mall -->
    <Badge
      v-if="product.discountPercentage"
      :text="'-' + product.discountPercentage + '%'"
      type="discount"
      :is-absolute="true"
    />
    <Badge
      v-else-if="product.isMall"
      text="Mall"
      type="mall"
      :is-absolute="true"
    />
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
