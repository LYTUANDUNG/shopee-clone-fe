import { ref, computed } from 'vue';
import type { OrderStatus, OrderTab, Order } from '@/features/user/orders/history/types/order';
import { mockOrders } from '@/features/user/orders/history/mocks/orders';

export function useOrderHistory() {
  const activeTab = ref<OrderStatus>('ALL');

  const tabs: OrderTab[] = [
    { key: 'ALL', label: 'Tất cả' },
    { key: 'PENDING_PAYMENT', label: 'Chờ thanh toán' },
    { key: 'SHIPPING', label: 'Vận chuyển' },
    { key: 'COMPLETED', label: 'Hoàn thành' },
    { key: 'CANCELLED', label: 'Đã hủy' },
  ];

  const tabsWithCount = computed<OrderTab[]>(() =>
    tabs.map((tab) => {
      if (tab.key === 'ALL') return tab;
      const count = mockOrders.filter((o) => o.status === tab.key).length;
      return { ...tab, count: count > 0 ? count : undefined };
    })
  );

  // Tab switching = filtering orders
  const filteredOrders = computed<Order[]>(() => {
    if (activeTab.value === 'ALL') return mockOrders;
    return mockOrders.filter((o) => o.status === activeTab.value);
  });

  const setActiveTab = (key: OrderStatus) => {
    activeTab.value = key;
  };

  // --- Action handlers (called by tabs via emitted events) ---

  const handleChat = (order: Order) => {
    console.log('[useOrderHistory] Chat with shop:', order.shopName, '| orderId:', order.id);
    // TODO: open chat with shop
  };

  const handleViewShop = (order: Order) => {
    console.log('[useOrderHistory] View shop:', order.shopName);
    // TODO: navigate to shop page
  };

  const handleBuyAgain = (order: Order) => {
    console.log('[useOrderHistory] Buy again | orderId:', order.id);
    // TODO: add products to cart
  };

  const handleContactSeller = (order: Order) => {
    console.log('[useOrderHistory] Contact seller | orderId:', order.id);
    // TODO: navigate to chat / contact form
  };

  const handleContinuePayment = (order: Order) => {
    console.log('[useOrderHistory] Continue payment | orderId:', order.id);
    // TODO: redirect to checkout
  };

  const handleCancelOrder = (order: Order) => {
    console.log('[useOrderHistory] Cancel order | orderId:', order.id);
    // TODO: call cancel API
  };

  const handleConfirmReceived = (order: Order) => {
    console.log('[useOrderHistory] Confirm received | orderId:', order.id);
    // TODO: call confirm-received API
  };

  const handleRateOrder = (order: Order) => {
    console.log('[useOrderHistory] Rate order | orderId:', order.id);
    // TODO: open rating dialog
  };

  const handleRequestReturn = (order: Order) => {
    console.log('[useOrderHistory] Request return | orderId:', order.id);
    // TODO: navigate to return request page
  };

  const handleViewRefundInfo = (order: Order) => {
    console.log('[useOrderHistory] View refund info | orderId:', order.id);
    // TODO: navigate to refund info page
  };

  const handleViewDetail = (order: Order) => {
    console.log('[useOrderHistory] View detail | orderId:', order.id);
    // TODO: navigate to order detail page
  };

  return {
    activeTab,
    tabs: tabsWithCount,
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
  };
}
