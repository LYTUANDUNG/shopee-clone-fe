<script setup lang="ts">
import { CartItem } from "../../models/cart-item.model";
import {
  CartItemInfo,
  ProductVariant,
  CartItemActions,
  CartItemCheckbox,
  CartItemPricing,
} from "./index";

defineProps<{
  item: CartItem;
}>();

const emit = defineEmits<{
  remove: [cartId: string];
  findSimilar: [productId: string];
  updateQuantity: [cartId: string, quantity: number];
}>();

// Mock Data for Variants
const mockVariantOptions = [
  { name: 'Green', value: 'green', active: false, disabled: false },
  { name: 'Gray', value: 'gray', active: true, disabled: false },
  { name: 'Black', value: 'black', active: false, disabled: false },
  { name: 'Green+Tainghe+Sạc25W', value: 'green_combo', active: false, disabled: true },
  { name: 'Gray+Tai nghe+Sạc25W', value: 'gray_combo', active: false, disabled: true },
  { name: 'Black+Tainghe+Sạc25W', value: 'black_combo', active: false, disabled: true },
];
</script>

<template>
  <div class="cart-item-row">
    <!-- Checkbox (col-1) -->
    <div class="flex justify-center items-center">
       <CartItemCheckbox :is-in-stock="item.isInStock" />
    </div>

    <!-- Product Info (col-2) -->
    <div>
       <CartItemInfo 
        :product="item.product" 
        :shop="item.shop" 
      />
    </div>

    <!-- Variant (col-3) -->
    <div class="text-sm text-gray-500 flex items-center">
      <ProductVariant 
        :variant="item.product.variant" 
        :options="mockVariantOptions"
        :is-in-stock="item.isInStock"
        class="w-full"
      />
    </div>

    <!-- Pricing Group (col-4, 5, 6 - via display: contents) -->
    <CartItemPricing 
       :unit-price="item.product.price"
       :quantity="item.quantity"
       :is-in-stock="item.isInStock"
       @update:quantity="(val: number) => emit('updateQuantity', item.id, val)"
    />

    <!-- Actions (col-7) -->
    <div class="flex justify-end items-center">
      <CartItemActions
        @remove="emit('remove', item.id)"
        @find-similar="emit('findSimilar', item.product.id)"
      />
    </div>
  </div>
</template>

<style scoped>
.cart-item-row {
  @apply grid gap-4 items-center py-4 px-4 bg-white border-b border-gray-100 last:border-none;
  grid-template-columns: 50px 4fr 1.5fr 1fr 1fr 1fr 100px;
}
</style>
