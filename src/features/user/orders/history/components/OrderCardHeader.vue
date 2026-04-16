<template>
  <div class="card-header">
    <!-- Left: shop badges + name + action buttons -->
    <div class="header-left">
      <Badge v-if="order.isFavoriteShop" type="favorite" text="Yêu thích" />
      <Badge v-if="order.isMall" type="mall" text="Mall" />

      <span class="shop-name">{{ order.shopName }}</span>

      <BaseButton
        size="sm"
        bg-color="bg-white"
        text-color="text-gray-600"
        custom-classes="border border-gray-300 hover:border-shopee-orange hover:text-shopee-orange"
        :left-icon="ChatIcon"
        label="Chat"
        @click="$emit('chat', order)"
      />

      <BaseButton
        size="sm"
        bg-color="bg-transparent"
        text-color="text-gray-600"
        custom-classes="hover:text-shopee-orange px-0 border-0 shadow-none"
        :left-icon="ShopIcon"
        label="Xem Shop"
        @click="$emit('view-shop', order)"
      />
    </div>

    <!-- Right: delivery status + order status badge -->
    <div class="header-right">
      <template v-if="order.deliveryStatus">
        <div class="divider" />
        <svg xmlns="http://www.w3.org/2000/svg" class="delivery-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
        <span class="delivery-text">{{ order.deliveryStatus }}</span>
        <svg xmlns="http://www.w3.org/2000/svg" class="info-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </template>
      <span :class="['order-status', statusTextClass]">{{ statusLabel }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, defineComponent, h } from 'vue';
import type { Order } from '@/features/user/orders/history/types/order';
import Badge from '@/shared/components/atoms/Badge.vue';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

const props = defineProps<{ order: Order }>();

defineEmits<{
  (e: 'chat', order: Order): void;
  (e: 'view-shop', order: Order): void;
}>();

// Inline icon components (small SVG wrappers) for BaseButton's leftIcon prop
const ChatIcon = defineComponent({
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-3.5 h-3.5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z' }),
    ]),
});

const ShopIcon = defineComponent({
  render: () =>
    h('svg', { xmlns: 'http://www.w3.org/2000/svg', class: 'w-3.5 h-3.5', fill: 'none', viewBox: '0 0 24 24', stroke: 'currentColor' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z' }),
    ]),
});

const statusLabel = computed(() => {
  const labels: Record<string, string> = {
    PENDING_PAYMENT: 'Chờ thanh toán',
    SHIPPING: 'Vận chuyển',
    COMPLETED: 'Hoàn thành',
    CANCELLED: 'Đã hủy',
  };
  return labels[props.order.status] ?? '';
});

const statusTextClass = computed(() => {
  const classes: Record<string, string> = {
    PENDING_PAYMENT: 'text-shopee-orange',
    SHIPPING: 'text-blue-500',
    COMPLETED: 'text-shopee-orange',
    CANCELLED: 'text-gray-400',
  };
  return classes[props.order.status] ?? 'text-gray-500';
});
</script>

<style scoped>
/* Header row */
.card-header {
  @apply flex items-center justify-between px-4 py-3 border-b border-gray-100;
}

/* Left section: badges + shop name + buttons */
.header-left {
  @apply flex items-center gap-2 min-w-0;
}

/* Shop name */
.shop-name {
  @apply text-sm font-medium text-gray-700 truncate max-w-[160px];
}

/* Right section: delivery + status */
.header-right {
  @apply flex items-center gap-1.5 flex-shrink-0 ml-3;
}

/* Thin vertical divider */
.divider {
  @apply h-4 w-px bg-gray-200;
}

/* Delivery truck icon */
.delivery-icon {
  @apply w-4 h-4 text-gray-400;
}

/* Delivery status text */
.delivery-text {
  @apply text-xs text-gray-500;
}

/* Info icon next to delivery status */
.info-icon {
  @apply w-3.5 h-3.5 text-gray-400 cursor-pointer;
}

/* Order status label (HOÀN THÀNH, ĐÃ HỦY, …) */
.order-status {
  @apply text-xs font-medium uppercase ml-1;
}
</style>
