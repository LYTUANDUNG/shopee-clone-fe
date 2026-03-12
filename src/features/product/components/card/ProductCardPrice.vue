<script setup lang="ts">
import { formatNumber } from "@/shared/utils/format";

defineProps<{
  price: number;
  newPrice?: number;
  discountPercentage?: number;
}>();
</script>

<template>
  <div class="price-section">
    <div class="price-wrapper">
      <span class="current-price">
        {{ formatNumber(newPrice || price) }}<span class="currency-symbol">₫</span>
      </span>
      <span
        v-if="discountPercentage"
        class="discount-badge"
      >
        -{{ discountPercentage }}%
      </span>
    </div>
  </div>
</template>

<style scoped>
.price-section {
    @apply flex items-center min-h-[1.25rem] mt-1 flex-shrink-0;
}

.price-wrapper {
  @apply flex items-center flex-wrap gap-2;
}

.current-price {
  @apply text-[#ee4d2d] text-base font-medium relative;
}

.currency-symbol {
  @apply text-xs align-top underline ml-[1px];
}

.discount-badge {
  @apply bg-[#fef3ec] text-[#ee4d2d] text-[10px] h-[16px] px-1 flex items-center rounded-sm font-semibold;
}
</style>
