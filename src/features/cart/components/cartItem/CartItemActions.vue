<script lang="ts" setup>
import { ChevronDown } from 'lucide-vue-next';

const emit = defineEmits<{
  remove: []
  findSimilar: []
}>();
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <button class="action-btn text-black hover:text-[#ee4d2d]" @click="emit('remove')">
      Xóa
    </button>
    
    <button class="action-btn text-[#ee4d2d] flex items-center gap-0.5" @click="emit('findSimilar')">
      <span>Tìm sản phẩm tương tự</span>
      <ChevronDown :size="14" />
    </button>
  </div>
</template>

<style scoped>
.action-btn {
  @apply text-sm bg-transparent border-none cursor-pointer p-0 transition-colors bg-white;
}
</style>