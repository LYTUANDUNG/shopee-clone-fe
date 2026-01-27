<script lang="ts" setup>
import { ref } from 'vue';
import { Check } from 'lucide-vue-next';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import type { VariantUIGroup, VariantUIOption } from '../../types/variant-ui.types';

defineProps<{
  groups: VariantUIGroup[];
  selectedOptions: Record<string, string>; // Map<GroupName, SelectedValue>
}>();

const emit = defineEmits<{
  confirm: [];
  select: [groupName: string, option: VariantUIOption];
}>();

const isOpen = ref(false);

const handleSelect = (groupName: string, opt: VariantUIOption) => {
  if (opt.disabled) return;
  emit('select', groupName, opt);
};

const handleConfirm = () => {
  emit('confirm');
  isOpen.value = false;
};
</script>

<template>
  <Popover v-model:open="isOpen">
    <PopoverTrigger as-child>
      <slot name="trigger" :is-open="isOpen" />
    </PopoverTrigger>
    <PopoverContent class="w-80 p-0 shadow-xl overflow-visible bg-white text-white relative" align="end" :side-offset="10">
      <div class="popup-arrow" />
      <div class="p-4 text-gray-900">
        
        <div v-for="group in groups" :key="group.name" class="mb-4 last:mb-0">
          <div class="mb-3 text-gray-500 text-sm">
            <span class="header-label">{{ group.name }}</span>
          </div>

          <div class="flex flex-wrap gap-2">
            <button
              v-for="opt in group.options"
              :key="opt.value"
              class="option-btn"
              :class="{
                'active': selectedOptions[group.name] === opt.value,
                'disabled': opt.disabled
              }"
              :disabled="opt.disabled"
              @click="handleSelect(group.name, opt)"
            >
              {{ opt.name }}
              <div v-if="selectedOptions[group.name] === opt.value" class="check-mark">
                <Check :size="10" stroke-width="4" />
              </div>
            </button>
          </div>
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
  @apply border-[#ee4d2d] text-[#ee4d2d];
}

.option-btn.disabled {
  @apply text-gray-300 border-gray-100 bg-gray-50 cursor-not-allowed hover:border-gray-100;
}

.check-mark {
  @apply absolute bottom-0 right-0 w-4 h-4 bg-[#ee4d2d] text-white flex items-center justify-center rounded-tl-sm;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
}

.btn-cancel {
  @apply px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-sm uppercase transition-colors;
}

.btn-confirm {
  @apply px-4 py-2 text-sm text-white bg-orange-500 hover:bg-orange-600 rounded-sm uppercase transition-colors;
}

.popup-arrow {
  width: 14px;
  height: 14px;
  background-color: white;
  position: absolute;
  top: -7px;
  right: 28px;
  transform: rotate(45deg);
  border-top: 1px solid #e5e7eb;
  border-left: 1px solid #e5e7eb;
  z-index: 10;
}
</style>
