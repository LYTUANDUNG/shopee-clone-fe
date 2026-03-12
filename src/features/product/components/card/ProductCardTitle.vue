<script setup lang="ts">
import Badge from '@/shared/components/atoms/Badge.vue';

defineProps<{
  name: string;
  isLiked?: boolean;
  isMall?: boolean;
  isAd?: boolean;
}>();
</script>

<template>
  <h3 class="product-title">
    <Badge v-if="isLiked" text="Yêu thích" type="favorite" class="mr-1 align-middle" />
    <Badge v-else-if="isMall" text="Mall" type="mall" class="mr-1 align-middle" />
    <Badge v-if="isAd" text="Tài trợ" type="ad" class="mr-1 align-middle" />
    <span class="align-middle">{{ name }}</span>
  </h3>
</template>

<style scoped>
.product-title {
  @apply text-xs line-clamp-2 min-h-[2rem] mb-1 leading-4 text-[#333] flex-shrink-0;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
