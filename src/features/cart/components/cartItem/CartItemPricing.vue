<script lang="ts" setup>
import { computed } from 'vue';
import ItemPrice from "./ItemPrice.vue";
import CartItemQuantity from "./CartItemQuantity.vue";

const props = defineProps<{
  unitPrice: number;
  isInStock: boolean;
  maxQuantity?: number; // Số lượng tồn kho tối đa
}>();

const quantity = defineModel<number>('quantity', { required: true });

// Tính thành tiền = Đơn giá * Số lượng
const totalPrice = computed(() => props.unitPrice * quantity.value);
</script>

<template>
  <div class="pricing-grid">
    <!-- Cột: Đơn giá -->
    <div class="col-unit-price">
      <ItemPrice :price="unitPrice" color="text-gray-800" />
    </div>

    <!-- Cột: Số lượng -->
    <div class="col-quantity">
      <CartItemQuantity
        v-model:quantity="quantity"
        :disabled="!isInStock"
        :max="maxQuantity"
      />
    </div>

    <!-- Cột: Thành tiền -->
    <div class="col-total-price">
      <ItemPrice :price="totalPrice" color="text-orange-500" />
    </div>
  </div>
</template>

<style scoped>
.pricing-grid {
  @apply contents;
}

.col-unit-price {
  @apply text-sm text-center;
}

.col-quantity {
  @apply flex justify-center;
}

.col-total-price {
  @apply text-center font-medium text-sm;
}
</style>
