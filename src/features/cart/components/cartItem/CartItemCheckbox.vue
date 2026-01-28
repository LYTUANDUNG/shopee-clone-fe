<script lang="ts" setup>
import { Checkbox } from '@/components/ui/checkbox';

defineProps<{
  isInStock: boolean;
}>();

const checked = defineModel<boolean>('checked');
</script>

<template>
  <div class="flex items-center justify-center h-full select-none cursor-default">
    <Checkbox
      v-if="isInStock"
      v-model:checked="checked"
    />
    <span v-else class="text-[10px] text-gray-500 font-medium bg-gray-100 px-1 py-0.5 rounded-sm whitespace-nowrap">Hết hàng</span>
  </div>
</template>
