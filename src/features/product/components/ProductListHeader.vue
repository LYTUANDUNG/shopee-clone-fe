<script setup lang="ts">
import { Lightbulb } from 'lucide-vue-next';

defineProps<{
  keyword: string;
}>();
</script>

<template>
  <div class="breadcrumb-header">
     <span class="breadcrumb-text">
        <Lightbulb class="home-icon" />
        Kết quả tìm kiếm cho từ khoá '<span class="text-[#ee4d2d]">{{ keyword }}</span>'
     </span>
  </div>
</template>

<style scoped>
.breadcrumb-header {
    @apply flex items-center gap-2 mb-4 text-sm text-gray-500;
}

.breadcrumb-text {
    @apply text-gray-900 flex items-center gap-1;
}

.home-icon {
    @apply w-5 h-5 text-gray-400;
}
</style>
