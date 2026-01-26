<script lang="ts" setup>
import { Checkbox } from '@/components/ui/checkbox';

defineProps<{
  isInStock: boolean;
}>();

const checked = defineModel<boolean>('checked');
</script>

<template>
  <div class="flex items-center justify-center h-full">
    <Checkbox
      v-if="isInStock"
      v-model:checked="checked"
    />
    <span v-else class="text-xs text-gray-400 font-medium">Hết hàng</span>
  </div>
</template>
