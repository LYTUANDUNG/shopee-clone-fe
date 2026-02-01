<script lang="ts" setup>
import { Minus, Plus } from "lucide-vue-next";

const quantity = defineModel<number>("quantity", { required: true });

const props = defineProps<{
  disabled?: boolean;
  max?: number;
}>();

// Giảm số lượng (tối thiểu là 1)
const handleDecrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

// Tăng số lượng (không vượt quá max nếu có)
const handleIncrease = () => {
  if (props.max && quantity.value >= props.max) return;
  quantity.value++;
};
</script>

<template>
  <div class="quantity-wrapper">
    <!-- Nút Giảm -->
    <button
      class="btn-quantity border-r border-gray-300"
      :disabled="disabled || quantity <= 1" 
      aria-label="Giảm số lượng"
      @click="handleDecrease"
      
    >
      <Minus class="w-2.5 h-2.5" />
    </button>
    <!-- Input Số lượng (Readonly - chỉ cho phép thay đổi qua nút tăng giảm) -->
    <input
      type="text"
      :value="quantity"
      class="input-quantity"
      readonly
      :disabled="disabled"
    />
    <!-- Nút Tăng -->
    <button
      class="btn-quantity border-l border-gray-300"
      :disabled="disabled || (max ? quantity >= max : false)"
      aria-label="Tăng số lượng"
      @click="handleIncrease"
    >
      <Plus class="w-2.5 h-2.5" />
    </button>
  </div>
</template>

<style scoped>
.quantity-wrapper {
  @apply flex items-center border border-gray-300 rounded-sm;
}

.btn-quantity {
  @apply px-2 py-2 text-gray-600 hover:bg-gray-100 disabled:bg-gray-50 disabled:text-gray-300 transition-colors flex items-center justify-center h-full;
}

.input-quantity {
  @apply w-10 text-center text-sm outline-none bg-white text-gray-800 font-medium;
}
</style>
