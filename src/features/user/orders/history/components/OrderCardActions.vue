<template>
  <div class="px-4 py-3 border-t border-gray-100">
    <!-- Note row (left side text based on status) -->
    <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">

      <!-- Left: status-specific note -->
      <div class="flex-1">
        <!-- Delivering: warning note -->
        <p v-if="order.status === 'delivering'" class="text-xs text-gray-500 leading-relaxed max-w-sm">
          Vui lòng chỉ nhấn "Đã nhận được hàng" khi đơn hàng đã được giao đến bạn và sản phẩm nhận được không có vấn đề nào.
        </p>

        <!-- Completed: review deadline + bonus -->
        <template v-if="order.status === 'completed' && order.reviewDeadline">
          <p class="text-xs text-gray-500">
            Đánh giá sản phẩm trước
            <span class="text-shopee-orange underline cursor-pointer">{{ formatDeadline(order.reviewDeadline) }}</span>
          </p>
          <p v-if="order.reviewBonus" class="text-xs text-shopee-orange mt-0.5 cursor-pointer hover:underline">
            Đánh giá ngay và nhận {{ order.reviewBonus }} Xu
          </p>
        </template>

        <!-- Cancelled: cancelled by notice -->
        <p v-if="order.status === 'cancelled' && order.cancelledBy" class="text-xs text-gray-500">
          Đã hủy bởi {{ order.cancelledBy }}
        </p>
      </div>

      <!-- Right: action buttons -->
      <div class="flex flex-wrap items-center justify-end gap-2 flex-shrink-0">

        <!-- completed -->
        <template v-if="order.status === 'completed'">
          <button class="btn-primary" @click="$emit('rate-order', order)">Đánh Giá</button>
          <button class="btn-ghost" @click="$emit('request-return', order)">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
          <div class="relative">
            <button class="btn-ghost flex items-center gap-1" @click="toggleMore">
              Thêm
              <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <!-- Dropdown -->
            <div v-if="showMore" class="absolute right-0 bottom-full mb-1 bg-white border border-gray-200 shadow-lg rounded-sm z-20 min-w-[160px]">
              <button class="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap" @click="emit('buy-again', order); showMore = false">Mua Lại</button>
              <button class="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap" @click="emit('contact-seller', order); showMore = false">Liên Hệ Người Bán</button>
              <button class="w-full text-left px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 whitespace-nowrap" @click="emit('view-detail', order); showMore = false">Xem Chi Tiết Đơn Hàng</button>
            </div>
          </div>
        </template>

        <!-- pending_payment -->
        <template v-else-if="order.status === 'pending_payment'">
          <button class="btn-ghost" @click="$emit('cancel-order', order)">Hủy Đơn Hàng</button>
          <button class="btn-primary" @click="$emit('continue-payment', order)">Tiếp Tục Thanh Toán</button>
        </template>

        <!-- shipping -->
        <template v-else-if="order.status === 'shipping'">
          <button class="btn-ghost" @click="$emit('contact-seller', order)">Liên Hệ Người Bán</button>
          <button class="btn-primary" @click="$emit('confirm-received', order)">Đã Nhận Được Hàng</button>
        </template>

        <!-- delivering -->
        <template v-else-if="order.status === 'delivering'">
          <button class="btn-primary" @click="$emit('confirm-received', order)">Đã Nhận Hàng</button>
          <button class="btn-ghost" @click="$emit('request-return', order)">Yêu Cầu Trả Hàng/Hoàn Tiền</button>
          <button class="btn-ghost" @click="$emit('contact-seller', order)">Liên Hệ Người Bán</button>
        </template>

        <!-- cancelled -->
        <template v-else-if="order.status === 'cancelled'">
          <button class="btn-primary" @click="$emit('buy-again', order)">Mua Lại</button>
          <button class="btn-ghost" @click="$emit('view-refund-info', order)">Xem Thông Tin Hoàn Tiền</button>
          <button class="btn-ghost" @click="$emit('contact-seller', order)">Liên Hệ Người Bán</button>
        </template>

        <!-- return_refund -->
        <template v-else-if="order.status === 'return_refund'">
          <button class="btn-ghost" @click="$emit('view-detail', order)">Xem Chi Tiết</button>
          <button class="btn-ghost" @click="$emit('contact-seller', order)">Liên Hệ Người Bán</button>
        </template>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { Order } from '@/features/user/orders/history/types/order';

const props = defineProps<{ order: Order }>();

const emit = defineEmits<{
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

const showMore = ref(false);

const toggleMore = () => {
  showMore.value = !showMore.value;
};

const formatDeadline = (iso: string) => {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};
</script>

<style scoped>
.btn-primary {
  @apply px-5 py-2 bg-shopee-orange text-white text-sm rounded-sm hover:bg-opacity-90 transition-colors whitespace-nowrap;
}
.btn-ghost {
  @apply px-4 py-2 border border-gray-300 text-gray-600 text-sm rounded-sm hover:border-gray-400 transition-colors whitespace-nowrap;
}
</style>
