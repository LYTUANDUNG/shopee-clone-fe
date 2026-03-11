<script setup lang="ts">
defineProps<{
  name: string;
  isLiked?: boolean;
  isMall?: boolean;
  isAd?: boolean;
}>();
</script>

<template>
  <h3 class="product-title">
    <span v-if="isLiked" class="badge-liked">Yêu thích</span>
    <span v-else-if="isMall" class="badge-mall">Mall</span>
    <span v-if="isAd" class="badge-ad">Tài trợ</span>
    <span class="align-middle">{{ name }}</span>
  </h3>
</template>

<style scoped>
.product-title {
  @apply text-xs line-clamp-2 min-h-[2rem] mb-1 leading-4 text-[#333] flex-shrink-0;
}

.badge-liked {
  @apply inline-block bg-[#ee4d2d] text-white text-[10px] font-medium px-1 rounded-[2px] mr-1 align-middle leading-[1.1];
}

.badge-mall {
  @apply inline-block bg-[#d0011b] text-white text-[10px] font-medium px-1 rounded-[2px] mr-1 align-middle leading-[1.1];
}

.badge-ad {
  @apply inline-block text-[#ee4d2d] text-[10px] font-medium px-1 border border-[#ee4d2d] rounded-[2px] mr-1 align-middle leading-[1.1];
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
