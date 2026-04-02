<script setup lang="ts">
import CheckoutPage from '@/features/checkout/CheckoutPage.vue';
import {
  MOCK_ADDRESSES,
  MOCK_CHECKOUT_ITEMS,
  MOCK_SHIPPING_OPTIONS,
  MOCK_PAYMENT_METHODS,
  MOCK_SHOP_VOUCHERS,
  MOCK_SHOPEE_VOUCHERS,
  MOCK_CARD_PROMOTIONS
} from '@/features/checkout/constants/checkout.mock';
</script>

<template>
  <CheckoutPage
      :addresses="MOCK_ADDRESSES"
      :checkout-items="MOCK_CHECKOUT_ITEMS"
      :shipping-options="MOCK_SHIPPING_OPTIONS"
      :payment-methods="MOCK_PAYMENT_METHODS"
      :shop-vouchers="MOCK_SHOP_VOUCHERS"

      :shopee-vouchers="MOCK_SHOPEE_VOUCHERS"

      :card-promotions="MOCK_CARD_PROMOTIONS"
      :user-shopee-xu="5000"
  />
</template>