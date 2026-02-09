<script setup lang="ts">
import type { Product } from '@/features/product/types';
import {ProductCardImage, ProductCardInfo} from '@/features/product/components/card';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

defineProps<{
  product: Product
}>();

const emit = defineEmits<{
  (e: 'select-product', productId: Product['id']): void;
  (e: 'find-similar-products', productId: Product['id']): void;
}>();
</script>

<template>
    <div class="product-card group" @click="emit('select-product', product.id)">
        <ProductCardImage :product="product" />
        <ProductCardInfo :product="product" />

        <BaseButton
            label="Tìm sản phẩm tương tự"
            bg-color="bg-[#ee4d2d]"
            text-color="text-white"
            class="find-similar-btn"
            @click.stop="emit('find-similar-products', product.id)"
        />
    </div>
</template>

<style scoped>
.product-card {
    @apply bg-white hover:shadow-[0_0.0625rem_20px_0_rgba(0,0,0,0.05)] hover:-translate-y-[1px] transition-transform duration-100 ease-linear cursor-pointer border border-transparent hover:border-[#ee4d2d] relative hover:z-20;
}

.find-similar-btn {
    @apply hidden group-hover:flex absolute bottom-0 left-0 w-full text-sm font-medium items-center justify-center py-2 translate-y-[100%] z-20 shadow-md rounded-none;
}
</style>
