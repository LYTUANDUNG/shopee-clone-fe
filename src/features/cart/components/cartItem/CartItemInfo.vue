<script lang="ts" setup>
import { Product } from "../../models/product.model";
import { Shop } from "../../models/shop.model";
import CartItemShopHeader from "./CartItemShopHeader.vue";
import CartItemProductDetails from "./CartItemProductDetails.vue";

defineProps<{ product: Product; shop: Shop }>();
</script>

<template>
  <div class="cart-item-info">
    <CartItemShopHeader :shop="shop" />
    <CartItemProductDetails :product="product" />
  </div>
</template>

<style scoped>
.cart-item-info {
  @apply flex flex-col gap-2;
}
</style>
