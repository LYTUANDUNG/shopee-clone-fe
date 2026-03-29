<template>
  <div class="space-y-3">
    <template v-if="orders.length">
      <OrderCard
        v-for="order in orders"
        :key="order.id"
        :order="order"
        @chat="$emit('chat', $event)"
        @view-shop="$emit('view-shop', $event)"
        @rate-order="$emit('rate-order', $event)"
        @buy-again="$emit('buy-again', $event)"
        @contact-seller="$emit('contact-seller', $event)"
        @continue-payment="$emit('continue-payment', $event)"
        @cancel-order="$emit('cancel-order', $event)"
        @confirm-received="$emit('confirm-received', $event)"
        @request-return="$emit('request-return', $event)"
        @view-refund-info="$emit('view-refund-info', $event)"
        @view-detail="$emit('view-detail', $event)"
      />
    </template>

    <div v-else class="flex flex-col items-center justify-center py-20 text-gray-400 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-24 h-24 mb-4 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
      <p class="text-sm">Không có đơn hàng nào</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@/features/user/orders/history/types/order';
import OrderCard from '@/features/user/orders/history/components/OrderCard.vue';

defineProps<{ orders: Order[] }>();

defineEmits<{
  (e: 'chat', order: Order): void;
  (e: 'view-shop', order: Order): void;
  (e: 'rate-order', order: Order): void;
  (e: 'buy-again', order: Order): void;
  (e: 'contact-seller', order: Order): void;
  (e: 'continue-payment', order: Order): void;
  (e: 'cancel-order', order: Order): void;
  (e: 'confirm-received', order: Order): void;
  (e: 'request-return', order: Order): void;
  (e: 'view-refund-info', order: Order): void;
  (e: 'view-detail', order: Order): void;
}>();
</script>
