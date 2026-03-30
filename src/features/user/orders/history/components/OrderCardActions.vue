<template>
  <div class="actions-wrapper">
    <div class="actions-row">
      <!-- Left: status-specific note -->
      <div class="note-section">
        <p v-if="order.status === 'delivering'" class="note-text">
          Vui lòng chỉ nhấn "Đã nhận được hàng" khi đơn hàng đã được giao đến
          bạn và sản phẩm nhận được không có vấn đề nào.
        </p>

        <template v-if="order.status === 'completed' && order.reviewDeadline">
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
          v-if="order.status === 'cancelled' && order.cancelledBy"
          class="note-text"
        >
          Đã hủy bởi {{ order.cancelledBy }}
        </p>
      </div>

      <!-- Right: action buttons -->
      <div class="btn-group">
        <!-- completed - chưa đánh giá -->
        <template v-if="order.status === 'completed' && !order.isReviewed">
          <BaseButton
            size="sm"
            label="Đánh Giá"
            @click="$emit('rate-order', order)"
          />
          <BaseButton
            v-bind="ghostProps"
            label="Yêu Cầu Trả Hàng/Hoàn Tiền"
            @click="$emit('request-return', order)"
          />
          <div class="relative">
            <BaseButton
              v-bind="ghostProps"
              custom-classes="border border-gray-300 flex items-center gap-1"
              @click="toggleMore"
            >
              Thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="chevron-icon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </BaseButton>
            <div v-if="showMore" class="dropdown-menu">
              <button
                class="dropdown-item"
                @click="
                  emit('buy-again', order);
                  showMore = false;
                "
              >
                Mua Lại
              </button>
              <button
                class="dropdown-item"
                @click="
                  emit('contact-seller', order);
                  showMore = false;
                "
              >
                Liên Hệ Người Bán
              </button>
              <button
                class="dropdown-item"
                @click="
                  emit('view-detail', order);
                  showMore = false;
                "
              >
                Xem Chi Tiết Đơn Hàng
              </button>
            </div>
          </div>
        </template>

        <!-- completed - đã đánh giá -->
        <template v-else-if="order.status === 'completed' && order.isReviewed">
          <BaseButton
            size="sm"
            label="Mua Lại"
            @click="$emit('buy-again', order)"
          />
          <BaseButton
            v-bind="ghostProps"
            label="Liên Hệ Người Bán"
            @click="$emit('contact-seller', order)"
          />
        </template>

        <!-- pending_payment -->
        <template v-else-if="order.status === 'pending_payment'">
          <BaseButton
            v-bind="ghostProps"
            label="Hủy Đơn Hàng"
            @click="$emit('cancel-order', order)"
          />
          <BaseButton
            size="sm"
            label="Tiếp Tục Thanh Toán"
            @click="$emit('continue-payment', order)"
          />
        </template>

        <!-- shipping -->
        <template v-else-if="order.status === 'shipping'">
          <BaseButton
            v-bind="ghostProps"
            label="Liên Hệ Người Bán"
            @click="$emit('contact-seller', order)"
          />
          <BaseButton
            size="sm"
            label="Đã Nhận Được Hàng"
            @click="$emit('confirm-received', order)"
          />
        </template>

        <!-- delivering -->
        <template v-else-if="order.status === 'delivering'">
          <BaseButton
            v-bind="ghostGrayProps"
            label="Đã Nhận Hàng"
            @click="$emit('confirm-received', order)"
          />
          <BaseButton
            v-bind="ghostGrayProps"
            label="Yêu Cầu Trả Hàng/Hoàn Tiền"
            @click="$emit('request-return', order)"
          />
          <BaseButton
            v-bind="ghostProps"
            label="Liên Hệ Người Bán"
            @click="$emit('contact-seller', order)"
          />
        </template>

        <!-- cancelled -->
        <template v-else-if="order.status === 'cancelled'">
          <BaseButton
            size="sm"
            label="Mua Lại"
            @click="$emit('buy-again', order)"
          />
          <BaseButton
            v-bind="ghostProps"
            label="Xem Thông Tin Hoàn Tiền"
            @click="$emit('view-refund-info', order)"
          />
          <BaseButton
            v-bind="ghostProps"
            label="Liên Hệ Người Bán"
            @click="$emit('contact-seller', order)"
          />
        </template>

        <!-- return_refund: không có button -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
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

const showMore = ref(false);

const toggleMore = () => {
  showMore.value = !showMore.value;
};

// Shared ghost button props — dùng v-bind để tái sử dụng
const ghostProps = {
  size: "sm" as const,
  bgColor: "bg-white",
  textColor: "text-gray-600",
  customClasses: "border border-gray-300 hover:bg-gray-200",
};

const ghostGrayProps = {
  ...ghostProps,
  customClasses:
    "!bg-gray-300 border border-gray-300 cursor-not-allowed !text-gray-700",
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
