<script setup lang="ts">
import { computed } from "vue";
import { useCartItem } from "../../composables/useCartItem";
import type { CartItem } from "../../types/cart.types";
import type { ProductVariant as ProductVariantType } from "../../types/product.types";
import {
  CartItemActions,
  CartItemCheckbox,
  CartItemInfo,
  CartItemPricing,
  ProductVariant,
} from "./index";

const props = defineProps<{
  item: CartItem;
  selected?: boolean;
}>();

const emit = defineEmits<{
  remove: [cartId: string];
  findSimilar: [productId: string];
  updateQuantity: [cartId: string, quantity: number];
  clickShop: [shopId: string];
  clickProduct: [productId: string];
  chat: [shopId: string];
  select: [cartId: string, selected: boolean];
  updateVariant: [cartId: string, variant: ProductVariantType];
}>();

const { price, isInStock } = useCartItem(computed(() => props.item));

const handleUpdateVariant = (variant: ProductVariantType | undefined) => {
  if (variant) {
    emit("updateVariant", props.item.id, variant);
  }
};
</script>

<template>
  <div class="cart-item-row">
    <!-- Checkbox (col-1) -->
    <div class="flex justify-center items-center">
      <CartItemCheckbox
        :is-in-stock="isInStock"
        :checked="selected"
        @update:checked="(val) => emit('select', item.id, !!val)"
      />
    </div>

    <!-- Product Info (col-2) -->
    <div>
      <CartItemInfo
        :product="item.product"
        :shop="item.shop"
        :variant-img="item.variant?.image"
        @click-shop="(id) => emit('clickShop', id)"
        @click-product="(id) => emit('clickProduct', id)"
        @chat="(id) => emit('chat', id)"
      />
    </div>

    <!-- Variant (col-3) -->
    <div class="text-sm text-gray-500 flex items-center">
      <ProductVariant
        :variants="item.product.variants"
        :selected-variant="item.variant"
        :is-in-stock="isInStock"
        class="w-full"
        @confirm="handleUpdateVariant"
      />
    </div>

    <!-- Pricing Group (col-4, 5, 6 - via display: contents) -->
    <CartItemPricing
      :unit-price="price"
      :quantity="item.quantity"
      :is-in-stock="isInStock"
      @update:quantity="(val: number) => emit('updateQuantity', item.id, val)"
    />

    <!-- Actions (col-7) -->
    <div class="flex justify-center items-center">
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
