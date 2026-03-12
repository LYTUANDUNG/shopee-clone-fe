<script setup lang="ts">
import { ref } from "vue";
import BaseButton from "@/shared/components/atoms/BaseButton.vue";

const props = defineProps<{
  minPrice: number | null;
  maxPrice: number | null;
}>();

const emit = defineEmits(["apply-price-range"]);

const localMin = ref<string>(props.minPrice ? String(props.minPrice) : "");
const localMax = ref<string>(props.maxPrice ? String(props.maxPrice) : "");

const applyPriceFilter = () => {
  emit("apply-price-range", {
    min: localMin.value ? Number(localMin.value) : null,
    max: localMax.value ? Number(localMax.value) : null,
  });
};
</script>

<template>
  <div>
    <h3 class="filter-header">Khoảng Giá</h3>
    <div class="price-input-container">
      <input
        v-model="localMin"
        type="number"
        placeholder="₫ TỪ"
        class="price-input"
      />
      <span class="range-separator">-</span>
      <input
        v-model="localMax"
        type="number"
        placeholder="₫ ĐẾN"
        class="price-input"
      />
    </div>
    <BaseButton 
      label="Áp dụng" 
      bg-color="bg-[#ee4d2d]" 
      text-color="text-white" 
      size="sm" 
      class="w-full uppercase"
      @click="applyPriceFilter"
    />
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
</style>
