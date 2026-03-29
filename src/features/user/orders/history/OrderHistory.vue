<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Tab Navigation -->
    <div class="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
      <div class="flex overflow-x-auto scrollbar-none">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="[
            'relative flex-shrink-0 px-5 py-4 text-sm font-medium transition-colors duration-200 whitespace-nowrap cursor-pointer border-0 bg-transparent',
            activeTab === tab.key
              ? 'text-shopee-orange'
              : 'text-gray-500 hover:text-gray-700'
          ]"
          @click="setActiveTab(tab.key)"
        >
          {{ tab.label }}
          <span
            v-if="tab.count"
            :class="['ml-1 text-xs', activeTab === tab.key ? 'text-shopee-orange' : 'text-gray-400']"
          >({{ tab.count }})</span>
          <span
            v-if="activeTab === tab.key"
            class="absolute bottom-0 left-0 right-0 h-[2px] bg-shopee-orange"
          />
        </button>
      </div>
    </div>

    <!-- Filtered order list (tab switching = filter, single component) -->
    <div class="py-3">
      <OrderList
        :orders="filteredOrders"
        @chat="handleChat"
        @view-shop="handleViewShop"
        @rate-order="handleRateOrder"
        @buy-again="handleBuyAgain"
        @contact-seller="handleContactSeller"
        @continue-payment="handleContinuePayment"
        @cancel-order="handleCancelOrder"
        @confirm-received="handleConfirmReceived"
        @request-return="handleRequestReturn"
        @view-refund-info="handleViewRefundInfo"
        @view-detail="handleViewDetail"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOrderHistory } from '@/features/user/orders/history/composables/useOrderHistory';
import OrderList from '@/features/user/orders/history/components/OrderList.vue';

const {
  activeTab,
  tabs,
  filteredOrders,
  setActiveTab,
  handleChat,
  handleViewShop,
  handleRateOrder,
  handleBuyAgain,
  handleContactSeller,
  handleContinuePayment,
  handleCancelOrder,
  handleConfirmReceived,
  handleRequestReturn,
  handleViewRefundInfo,
  handleViewDetail,
} = useOrderHistory();
</script>

<style scoped>
.scrollbar-none::-webkit-scrollbar { display: none; }
.scrollbar-none { -ms-overflow-style: none; scrollbar-width: none; }
</style>
