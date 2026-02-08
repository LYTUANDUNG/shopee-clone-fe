<script setup lang="ts">
import { Star } from "lucide-vue-next";

defineProps<{
  rating: number;
  sold: number;
}>();

const formatSold = (num: number) => {
    if (num >= 1000) {
        return (num / 1000).toFixed(1).replace('.0', '') + 'k';
    }
    return num.toString();
};
</script>

<template>
  <div class="rating-sold-section">
    <div class="star-wrapper">
      <Star class="w-2.5 h-2.5 fill-current" />
      <span class="ml-0.5">{{ rating.toFixed(1) }}</span>
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
  @apply flex text-[#ffce3d] text-[10px] items-center;
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
