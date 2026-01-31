<script lang="ts" setup>
import { ChevronDown } from 'lucide-vue-next';

const emit = defineEmits<{
  remove: []
  findSimilar: []
}>();
</script>
<template>
  <div class="flex flex-col items-center gap-2">
    <button class="action-btn text-black hover:text-[#ee4d2d]" aria-label="Xóa sản phẩm" title="Xóa" @click="emit('remove')">
      Xóa
    </button>
    <button class="action-btn text-[#ee4d2d] flex items-center gap-0.5" aria-label="Tìm sản phẩm tương tự" title="Tìm tương tự" @click="emit('findSimilar')" >
      <span class="pl-[24px]">Tìm sản phẩm tương tự</span>
      <ChevronDown :size="26" />
    </button>
  </div>
</template>

<style scoped>
.action-btn {
  @apply text-sm bg-transparent border-none cursor-pointer p-0 transition-colors bg-white;
}
</style>