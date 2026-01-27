<script lang="ts" setup>
import { computed } from "vue";
import type { VariantDefinition, VariantItem } from "../../models/variant.model";
import { ChevronDown } from "lucide-vue-next";
import VariantPopup from "./VariantPopup.vue";
import { useProductVariant } from "../../composables/useProductVariant";

const props = defineProps<{
  definitions: VariantDefinition[];
  variations: VariantItem[];
  isInStock?: boolean;
}>();

const emit = defineEmits<{
  confirm: [];
}>();

const { 
  selectedAttributes, 
  currentVariantText, 
  popupGroups, 
  selectOption 
} = useProductVariant(props);

const handleSelect = (groupName: string, opt: { value: string }) => {
  selectOption(groupName, opt.value);
};

const handleConfirm = () => {
    emit('confirm');
};

const isReadOnly = computed(() => props.definitions.length === 0);
</script>

<template>
  <div class="variant-container select-none">
    <VariantPopup
      v-if="!isReadOnly"
      :groups="popupGroups"
      :selected-options="selectedAttributes"
      @confirm="handleConfirm"
      @select="handleSelect"
    >
      <template #trigger="{ isOpen }">
        <div 
           class="variant-trigger group cursor-pointer"
           :class="{ 'border-orange-500': isOpen }"
        >
          <div class="flex items-center justify-between w-full">
            <span class="label-text">Phân Loại:</span>
            <ChevronDown 
              class="icon-arrow group-hover:text-gray-600 transition-transform duration-200" 
              :class="{ 'rotate-180': isOpen }"
            />
          </div>
          <div class="variant-value mt-1">{{ currentVariantText }}</div>
        </div>
      </template>
    </VariantPopup>
    <div v-else class="variant-trigger-readonly">
      <div class="flex items-center justify-between w-full">
        <span class="label-text">Phân Loại:</span>
      </div>

      <div class="variant-value mt-1">{{ currentVariantText }}</div>
    </div>
  </div>
</template>

<style scoped>
.variant-container {
  @apply relative;
}

.variant-trigger {
  @apply flex flex-col gap-1 cursor-pointer relative border border-gray-200 p-2 rounded-sm bg-white hover:border-gray-300 transition-all;
}

.trigger-label {
  @apply flex items-center justify-between;
}

.label-text {
  @apply text-gray-500 text-xs;
}

.icon-arrow {
  @apply w-3 h-3 text-gray-400 transition-colors;
}

.variant-value {
  @apply font-medium text-gray-700 truncate text-sm;
}

.variant-trigger-readonly {
  @apply flex flex-col gap-1 relative text-gray-400 cursor-not-allowed;
}
</style>
