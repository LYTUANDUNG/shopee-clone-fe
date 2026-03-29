<template>
  <div>
    <!-- Product rows -->
    <div class="px-4 divide-y divide-gray-50">
      <div
        v-for="product in order.products"
        :key="product.id"
        class="py-4 flex items-start gap-3"
      >
        <!-- Thumbnail -->
        <img
          :src="product.image"
          :alt="product.name"
          class="w-16 h-16 object-cover border border-gray-100 flex-shrink-0 rounded-sm"
        />

        <!-- Info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-start gap-1.5 mb-1">
            <!-- "Quà Tặng" badge -->
            <span
              v-if="product.isGift"
              class="flex-shrink-0 mt-0.5 px-1.5 py-0.5 border border-shopee-orange text-shopee-orange text-[10px] font-medium rounded-sm leading-none whitespace-nowrap"
            >
              Quà Tặng
            </span>
            <p class="text-sm text-gray-700 line-clamp-2">{{ product.name }}</p>
          </div>
          <p class="text-xs text-gray-400 mt-0.5">{{ product.variant }}</p>
          <p class="text-xs text-gray-400 mt-0.5">x{{ product.quantity }}</p>
        </div>

        <!-- Price -->
        <div class="text-right flex-shrink-0">
          <template v-if="!product.isGift">
            <p v-if="product.originalPrice" class="text-xs text-gray-400 line-through">
              {{ formatCurrency(product.originalPrice) }}
            </p>
            <p class="text-sm text-gray-700">{{ formatCurrency(product.price) }}</p>
          </template>
        </div>
      </div>
    </div>

    <!-- Order total -->
    <div class="px-4 py-3 border-t border-gray-100 flex justify-end">
      <p class="text-sm text-gray-600">
        Thành tiền:
        <span class="text-lg font-medium text-shopee-orange ml-1">
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
