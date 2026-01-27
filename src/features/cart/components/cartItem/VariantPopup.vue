<script lang="ts" setup>
import { ref } from 'vue';
import { Check } from 'lucide-vue-next';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { PopoverArrow } from 'reka-ui'

interface VariantUIOption {
  name: string;
  value: string;
  disabled: boolean;
}

defineProps<{
  options: VariantUIOption[];
  selectedOption: string;
}>();

const emit = defineEmits<{
  confirm: [];
  select: [option: VariantUIOption];
}>();

const isOpen = ref(false);

const handleSelect = (opt: VariantUIOption) => {
  if (opt.disabled) return;
  emit('select', opt);
};

const handleConfirm = () => {
  emit('confirm');
  isOpen.value = false;
};
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <slot name="trigger" />
    </PopoverTrigger>
    <PopoverContent class="w-80 p-0 shadow-xl overflow-visible" align="end" :side-offset="10">
      <PopoverArrow class="fill-white w-4 h-2" />
      <div class="p-4">
        <div class="mb-3 text-gray-500 text-sm">
          <span class="header-label">Phân Loại:</span>
        </div>

        <div class="flex flex-wrap gap-2 mb-6">
          <button
            v-for="opt in options"
            :key="opt.value"
            class="option-btn"
            :class="{
              'active': selectedOption === opt.value,
              'disabled': opt.disabled
            }"
            :disabled="opt.disabled"
            @click="handleSelect(opt)"
          >
            {{ opt.name }}
            <div v-if="selectedOption === opt.value" class="check-mark">
              <Check :size="10" stroke-width="4" />
            </div>
          </button>
        </div>

        <div class="flex justify-end gap-2 mt-4 pt-4 border-t border-gray-50">
          <button class="btn-cancel" @click="isOpen = false">TRỞ LẠI</button>
          <button class="btn-confirm" @click="handleConfirm">XÁC NHẬN</button>
        </div>
      </div>
    </PopoverContent>
  </Popover>
</template>

<style scoped>
.option-btn {
  @apply px-3 py-1.5 text-sm border border-gray-200 rounded-sm text-gray-600 bg-white hover:border-orange-500 relative cursor-pointer transition-colors;
}

.option-btn.active {
  @apply border-orange-500 text-orange-500;
}

.option-btn.disabled {
  @apply text-gray-300 border-gray-100 bg-gray-50 cursor-not-allowed hover:border-gray-100;
}

.check-mark {
  @apply absolute bottom-0 right-0 w-4 h-4 bg-orange-500 text-white flex items-center justify-center rounded-tl-sm;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.btn-cancel {
  @apply px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-sm uppercase transition-colors;
}

.btn-confirm {
  @apply px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-sm uppercase transition-colors;
}
</style>
