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
  selected?: boolean;
  variantGroups?: { name: string; options: { name: string; value: string; disabled: boolean; active?: boolean }[] }[];
}>();

const emit = defineEmits<{
  remove: [cartId: string];
  findSimilar: [productId: string];
  updateQuantity: [cartId: string, quantity: number];
  clickShop: [shopId: string];
  clickProduct: [productId: string];
  'update:selected': [selected: boolean];
}>();
</script>

<template>
  <div class="cart-item-row">
    <!-- Checkbox (col-1) -->
    <div class="flex justify-center items-center">
       <CartItemCheckbox 
          :is-in-stock="item.isInStock" 
          :checked="selected"
          @update:checked="(val) => emit('update:selected', !!val)"
       />
    </div>

    <!-- Product Info (col-2) -->
    <div>
       <CartItemInfo 
        :product="item.product" 
        :shop="item.shop" 
        @click-shop="(id) => emit('clickShop', id)"
        @click-product="(id) => emit('clickProduct', id)"
      />
    </div>

    <!-- Variant (col-3) -->
    <div class="text-sm text-gray-500 flex items-center">
      <ProductVariant 
        :definitions="item.product.definitions"
        :variations="item.product.variations"
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
