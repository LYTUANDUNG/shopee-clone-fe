<script setup lang="ts">
import { ref } from "vue";

const minPrice = ref<string>("");
const maxPrice = ref<string>("");

const emit = defineEmits(["apply-price-range"]);

const applyPriceFilter = () => {
  emit("apply-price-range", {
    min: minPrice.value ? Number(minPrice.value) : null,
    max: maxPrice.value ? Number(maxPrice.value) : null,
  });
};
</script>

<template>
  <div>
    <h3 class="filter-header">Khoảng Giá</h3>
    <div class="price-input-container">
      <input
        v-model="minPrice"
        type="number"
        placeholder="₫ TỪ"
        class="price-input"
      />
      <span class="range-separator">-</span>
      <input
        v-model="maxPrice"
        type="number"
        placeholder="₫ ĐẾN"
        class="price-input"
      />
    </div>
    <button class="apply-button" @click="applyPriceFilter">Áp dụng</button>
  </div>
</template>

<style scoped>
.filter-header {
  @apply font-medium text-sm mb-2;
}

.price-input-container {
  @apply flex items-center gap-2 mb-2;
}

.price-input {
  @apply w-full text-xs p-1 border border-gray-300 rounded-sm outline-none focus:border-gray-500;
}

.range-separator {
  @apply text-gray-400;
}

.apply-button {
  @apply w-full bg-[#ee4d2d] text-white text-xs font-medium py-1.5 rounded-sm uppercase hover:opacity-90 transition-opacity;
}
</style>
