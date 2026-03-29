<template>
  <div class="flex items-center justify-between px-4 py-3 border-b border-gray-100">
    <!-- Left: shop badges + name + action buttons -->
    <div class="flex items-center gap-2 min-w-0">
      <span
        v-if="order.isFavoriteShop"
        class="flex-shrink-0 px-1.5 py-0.5 bg-shopee-orange text-white text-[11px] font-medium rounded-sm leading-none"
      >
        Yêu thích
      </span>
      <span
        v-if="order.isMall"
        class="flex-shrink-0 px-1.5 py-0.5 bg-red-600 text-white text-[11px] font-medium rounded-sm leading-none"
      >
        Mall
      </span>

      <span class="text-sm font-medium text-gray-700 truncate max-w-[160px]">{{ order.shopName }}</span>

      <button
        class="flex-shrink-0 flex items-center gap-1 px-2.5 py-1 border border-gray-300 text-xs text-gray-600 rounded-sm hover:border-shopee-orange hover:text-shopee-orange transition-colors"
        @click="$emit('chat', order)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        Chat
      </button>

      <button
        class="flex-shrink-0 flex items-center gap-1 text-xs text-gray-600 hover:text-shopee-orange transition-colors"
        @click="$emit('view-shop', order)"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        Xem Shop
      </button>
    </div>

    <!-- Right: delivery status + order status badge -->
    <div class="flex items-center gap-1.5 flex-shrink-0 ml-3">
      <template v-if="order.deliveryStatus">
        <div class="h-4 w-px bg-gray-200"></div>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        <span class="text-xs text-gray-500">{{ order.deliveryStatus }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5 text-gray-400 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </template>
      <span :class="['text-xs font-medium uppercase ml-1', statusTextClass]">{{ statusLabel }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Order } from '@/features/user/orders/history/types/order';

const props = defineProps<{ order: Order }>();

defineEmits<{
  (e: 'chat', order: Order): void;
  (e: 'view-shop', order: Order): void;
}>();

const statusLabel = computed(() => {
  const labels: Record<string, string> = {
    pending_payment: 'CHỜ THANH TOÁN',
    shipping: 'VẬN CHUYỂN',
    delivering: 'CHỜ GIAO HÀNG',
    completed: 'HOÀN THÀNH',
    cancelled: 'ĐÃ HỦY',
    return_refund: 'TRẢ HÀNG/HOÀN TIỀN',
  };
  return labels[props.order.status] ?? '';
});

const statusTextClass = computed(() => {
  const classes: Record<string, string> = {
    pending_payment: 'text-yellow-500',
    shipping: 'text-blue-500',
    delivering: 'text-blue-500',
    completed: 'text-shopee-orange',
    cancelled: 'text-gray-400',
    return_refund: 'text-red-500',
  };
  return classes[props.order.status] ?? 'text-gray-500';
});
</script>
