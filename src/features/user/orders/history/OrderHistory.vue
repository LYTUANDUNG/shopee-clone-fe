<template>
  <div class="page-wrapper">
    <!-- Tab Navigation -->
    <div class="tab-bar">
      <div class="tab-list">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="[
            'tab-item',
            activeTab === tab.key ? 'tab-item--active' : 'tab-item--inactive',
          ]"
          @click="setActiveTab(tab.key)"
        >
          {{ tab.label }}
          <span v-if="tab.count" :class="['tab-count']">
            ({{ tab.count }})
          </span>
          <span v-if="activeTab === tab.key" class="tab-indicator" />
        </button>
      </div>
    </div>

    <!-- Filtered order list (tab switching = filter, single component) -->
    <div class="order-list-wrapper">
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
import { useOrderHistory } from "@/features/user/orders/history/composables/useOrderHistory";
import OrderList from "@/features/user/orders/history/components/OrderList.vue";

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
/* Page layout */
.page-wrapper {
  @apply bg-gray-50 min-h-screen;
}

/* Tab bar container */
.tab-bar {
  @apply bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm;
}

/* Scrollable tab row – hides scrollbar cross-browser */
.tab-list {
  @apply flex overflow-x-auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.tab-list::-webkit-scrollbar {
  display: none;
}

/* Individual tab button – shared base */
.tab-item {
  @apply relative flex-shrink-0 px-5 py-4 text-sm font-medium
         transition-colors duration-200 whitespace-nowrap
         cursor-pointer border-0 bg-transparent;
}
.tab-item--active {
  @apply text-shopee-orange;
}
.tab-item--inactive {
  @apply text-gray-500 hover:text-gray-700;
}

/* Optional count badge next to tab label */
.tab-count {
  @apply ml-1 text-xs text-shopee-orange;
}
/* Active-tab underline indicator */
.tab-indicator {
  @apply absolute bottom-0 left-0 right-0 h-[2px] bg-shopee-orange;
}

/* Order list section padding */
.order-list-wrapper {
  @apply py-3;
}
</style>
