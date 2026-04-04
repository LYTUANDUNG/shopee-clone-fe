<template>
  <div class="bg-white border border-gray-100 shadow-sm">
    <OrderCardHeader
      :order="order"
      @chat="$emit('chat', $event)"
      @view-shop="$emit('view-shop', $event)"
    />
    <OrderCardProducts :order="order" />
    <OrderCardActions
      :order="order"
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
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@/features/user/orders/history/types/order';
import OrderCardHeader from '@/features/user/orders/history/components/OrderCardHeader.vue';
import OrderCardProducts from '@/features/user/orders/history/components/OrderCardProducts.vue';
import OrderCardActions from '@/features/user/orders/history/components/OrderCardActions.vue';

defineProps<{ order: Order }>();

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
