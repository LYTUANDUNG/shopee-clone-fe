<script lang="ts" setup>
import type { Product } from "../../types/product.types";
import type { Shop } from "../../types/shop.types";
import CartItemShopHeader from "./CartItemShopHeader.vue";
import CartItemProductDetails from "./CartItemProductDetails.vue";

defineProps<{ product: Product; shop: Shop, variantImg: string }>();

// Sự kiện click vào shop, sản phẩm hoặc chat
const emit = defineEmits<{
  clickShop: [shopId: string];
  clickProduct: [productId: string];
  chat: [shopId: string];
}>();
</script>

<template>
  <div class="cart-item-info select-none">
    <CartItemShopHeader 
      :shop="shop" 
      @click="(id) => emit('clickShop', id)"
      @chat="(id) => emit('chat', id)"
    />
    <CartItemProductDetails 
      :product="product" 
      :variant-img="variantImg"
      @click="(id) => emit('clickProduct', id)"
    />
  </div>
</template>

<style scoped>
.cart-item-info {
  @apply flex flex-col gap-2;
}
</style>
