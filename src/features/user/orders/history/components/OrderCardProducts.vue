<template>
  <div>
    <!-- Product rows -->
    <div class="product-list">
      <div
        v-for="product in order.products"
        :key="product.id"
        :class="['product-row', product.isGift && 'product-row--gift']"
      >
        <!-- Thumbnail -->
        <img
          :src="product.image"
          :alt="product.name"
          class="product-thumbnail"
        />

        <!-- Info -->
        <div class="product-info">
          <div class="product-name-row">
            <!-- "Quà Tặng" badge -->
            <span v-if="product.isGift" class="gift-badge">Quà Tặng</span>
            <p class="product-name">{{ product.name }}</p>
          </div>
          <p class="product-meta">{{ product.variant }}</p>
          <p class="product-meta">x{{ product.quantity }}</p>
        </div>

        <!-- Price -->
        <div class="product-price">
          <template v-if="!product.isGift">
            <p v-if="product.originalPrice" class="price-original">
              {{ formatCurrency(product.originalPrice) }}
            </p>
            <p class="price-current">{{ formatCurrency(product.price) }}</p>
          </template>
        </div>
      </div>
    </div>

    <!-- Order total -->
    <div class="order-total">
      <p class="order-total-label">
        Thành tiền:
        <span class="order-total-amount">
          {{ formatCurrency(order.totalPrice) }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@/features/user/orders/history/types/order';
import { formatCurrency } from '@/shared/utils/format';

defineProps<{ order: Order }>();
</script>

<style scoped>
/* Product rows container */
.product-list {
  @apply px-4 divide-y divide-gray-50;
}

/* Single product row */
.product-row {
  @apply py-4 flex items-start gap-3;
}

/* Gift item: thêm padding-top và border-top rõ hơn để tách biệt */
.product-row--gift {
  @apply pt-5 mt-1 border-t border-gray-200;
}

/* Product thumbnail image */
.product-thumbnail {
  @apply w-16 h-16 object-cover border border-gray-100 flex-shrink-0 rounded-sm;
}

/* Info column */
.product-info {
  @apply flex-1 min-w-0;
}

/* Name + gift badge row */
.product-name-row {
  @apply flex items-start gap-1.5 mb-1;
}

/* "Quà Tặng" badge */
.gift-badge {
  @apply flex-shrink-0 mt-0.5 px-1.5 py-0.5
         border border-shopee-orange text-shopee-orange
         text-[10px] font-medium rounded-sm leading-none whitespace-nowrap;
}

/* Product name text */
.product-name {
  @apply text-sm text-gray-700 line-clamp-2;
}

/* Variant / quantity meta text */
.product-meta {
  @apply text-xs text-gray-400 mt-0.5;
}

/* Price column */
.product-price {
  @apply text-right flex-shrink-0;
}

/* Struck-through original price */
.price-original {
  @apply text-xs text-gray-400 line-through;
}

/* Current price */
.price-current {
  @apply text-sm text-gray-700;
}

/* Order total row */
.order-total {
  @apply px-4 py-3 border-t border-gray-100 flex justify-end;
}

/* Label text */
.order-total-label {
  @apply text-sm text-gray-600;
}

/* Price amount */
.order-total-amount {
  @apply text-lg font-medium text-shopee-orange ml-1;
}
</style>
