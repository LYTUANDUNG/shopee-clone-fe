<script lang="ts" setup>
import { Minus, Plus } from "lucide-vue-next";

const quantity = defineModel<number>("quantity", { required: true });

defineProps<{
  disabled?: boolean;
}>();

const handleDecrease = () => {
  if (quantity.value > 1) {
    quantity.value--;
  }
};

const handleIncrease = () => {
  quantity.value++;
};
</script>

<template>
  <div class="quantity-wrapper">
    <!-- Minus -->
    <button
      class="btn-quantity border-r border-gray-300"
      :disabled="disabled"
      @click="handleDecrease"
    >
      <Minus class="w-2.5 h-2.5" />
    </button>
    <!-- Quantity -->
    <input
      type="text"
      :value="quantity"
      class="input-quantity"
      readonly
      :disabled="disabled"
    />
    <!-- Plus -->
    <button
      class="btn-quantity border-l border-gray-300"
      :disabled="disabled"
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
