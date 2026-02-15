<script setup lang="ts">
import Rating from '@/shared/components/atoms/Rating.vue';
import { formatSold } from "@/shared/utils/format";

defineProps<{
  rating: number;
  sold: number;
}>();
</script>

<template>
  <div class="rating-sold-section">
    <div class="star-wrapper">
      <Rating :rating="rating" :size="10" />
      <span class="ml-1">{{ rating.toFixed(1) }}</span>
    </div>
    <div class="separator">|</div>
    <div class="sold-text">Đã bán {{ formatSold(sold) }}</div>
  </div>
</template>

<style scoped>
.rating-sold-section {
    @apply flex items-center text-[10px] text-[#757575] mt-1 min-h-[0.875rem] flex-shrink-0;
}

.star-wrapper {
  @apply flex items-center;
}

.star-wrapper span {
  @apply text-black;
}

.separator {
    @apply mx-1 text-gray-300;
}

.sold-text {
    @apply text-[#757575] truncate;
}
</style>
