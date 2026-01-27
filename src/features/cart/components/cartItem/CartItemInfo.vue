<script lang="ts" setup>
import { Product } from "../../models/product.model";
import { Shop } from "../../models/shop.model";
import CartItemShopHeader from "./CartItemShopHeader.vue";
import CartItemProductDetails from "./CartItemProductDetails.vue";

defineProps<{ product: Product; shop: Shop }>();

const emit = defineEmits<{
  clickShop: [shopId: string];
  clickProduct: [productId: string];
}>();
</script>

<template>
  <div class="cart-item-info select-none">
    <CartItemShopHeader 
      :shop="shop" 
      @click="(id) => emit('clickShop', id)"
    />
    <CartItemProductDetails 
      :product="product" 
      @click="(id) => emit('clickProduct', id)"
    />
  </div>
</template>

<style scoped>
.cart-item-info {
  @apply flex flex-col gap-2;
}
</style>
