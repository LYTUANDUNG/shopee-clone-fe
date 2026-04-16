<template>
  <div class="actions-wrapper">
    <div class="actions-row">
      <!-- Left: status-specific note -->
      <div class="note-section">
        <template v-if="order.status === 'COMPLETED' && order.reviewDeadline">
          <p class="note-text">
            Đánh giá sản phẩm trước
            <span class="deadline-link">{{
              formatDeadline(order.reviewDeadline)
            }}</span>
          </p>
          <p v-if="order.reviewBonus" class="bonus-link">
            Đánh giá ngay và nhận {{ order.reviewBonus }} Xu
          </p>
        </template>

        <p
          v-if="order.status === 'CANCELLED' && order.cancelledBy"
          class="note-text"
        >
          Đã hủy bởi {{ order.cancelledBy }}
        </p>
      </div>

      <!-- Right: action buttons -->
      <div class="btn-group">
        <BaseButton
          v-for="action in currentActions"
          :key="action.eventName"
          v-bind="action.props"
          :label="action.label"
          @click="handleAction(action.eventName, order)"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Order } from "@/features/user/orders/history/types/order";
import BaseButton from "@/shared/components/atoms/BaseButton.vue";

const props = defineProps<{ order: Order }>();

const emit = defineEmits<{
  (e: "rate-order", order: Order): void;
  (e: "buy-again", order: Order): void;
  (e: "contact-seller", order: Order): void;
  (e: "continue-payment", order: Order): void;
  (e: "cancel-order", order: Order): void;
  (e: "confirm-received", order: Order): void;
  (e: "request-return", order: Order): void;
  (e: "view-refund-info", order: Order): void;
  (e: "view-detail", order: Order): void;
}>();

// Shared ghost button props — dùng v-bind để tái sử dụng
const ghostProps = {
  size: "sm" as const,
  bgColor: "bg-white",
  textColor: "text-gray-600",
  customClasses: "border border-gray-300 hover:bg-gray-200",
};

interface ActionConfig {
  label: string;
  eventName:
    | "rate-order"
    | "buy-again"
    | "contact-seller"
    | "continue-payment"
    | "cancel-order"
    | "confirm-received"
    | "request-return"
    | "view-refund-info"
    | "view-detail";
  props?: Record<string, any>;
}

const actionsMap: Record<string, ActionConfig[]> = {
  PENDING_PAYMENT: [
    { label: "Hủy Đơn", eventName: "cancel-order", props: ghostProps },
    { label: "Thanh Toán Lại", eventName: "continue-payment", props: { size: "sm" } },
  ],
  SHIPPING: [
    { label: "Xem Chi Tiết", eventName: "view-detail", props: { size: "sm" } },
  ],
  COMPLETED: [
    { label: "Mua Lại", eventName: "buy-again", props: { size: "sm" } },
    { label: "Đánh Giá", eventName: "rate-order", props: ghostProps },
  ],
  CANCELLED: [
    { label: "Mua Lại", eventName: "buy-again", props: { size: "sm" } },
  ],
};

const currentActions = computed(() => {
  return actionsMap[props.order.status] || [];
});

const handleAction = (eventName: string, order: Order) => {
  emit(eventName as any, order);
};

const formatDeadline = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};
</script>

<style scoped>
/* Outer padding wrapper */
.actions-wrapper {
  @apply px-4 py-3 border-t border-gray-100;
}

/* Main flex row: note (left) + buttons (right) */
.actions-row {
  @apply flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3;
}

/* Left note column */
.note-section {
  @apply flex-1;
}

/* Generic note / info text */
.note-text {
  @apply text-xs text-gray-500 leading-relaxed max-w-sm;
}

/* Review deadline link */
.deadline-link {
  @apply text-shopee-orange underline cursor-pointer;
}

/* Review bonus link */
.bonus-link {
  @apply text-xs text-shopee-orange mt-0.5 cursor-pointer hover:underline;
}

/* Button group (right side) */
.btn-group {
  @apply flex flex-wrap items-center justify-end gap-2 flex-shrink-0;
}

/* Chevron icon inside "Thêm" button */
.chevron-icon {
  @apply w-3.5 h-3.5;
}

/* Dropdown panel */
.dropdown-menu {
  @apply absolute right-0 bottom-full mb-1
         bg-white border border-gray-200 shadow-lg rounded-sm z-20 min-w-[160px];
}

/* Individual dropdown row */
.dropdown-item {
  @apply w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap;
}
</style>
