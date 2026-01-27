<script lang="ts" setup>
import { ref, computed } from "vue";
import { Variant } from "../../models/variant.model";
import { ChevronDown } from "lucide-vue-next";
import VariantPopup from "./VariantPopup.vue";

interface VariantUIOption {
  name: string;
  value: string;
  disabled: boolean;
}

const props = withDefaults(
  defineProps<{
    variant: Variant;
    options?: VariantUIOption[];
  }>(),
  {
    options: () => [],
  }
);

const isReadOnly = computed(() => props.options.length <= 1);

const selectedOption = ref("");

const handleSelect = (opt: VariantUIOption) => {
  if (opt.disabled) return;
  selectedOption.value = opt.value;
};

const emit = defineEmits<{
  confirm: [];
}>();

const handleConfirm = () => {
  emit("confirm");
};
</script>

<template>
  <div class="variant-container">
    <VariantPopup
      v-if="!isReadOnly"
      :options="options"
      :selected-option="selectedOption"
      @confirm="handleConfirm"
      @select="handleSelect"
    >
      <template #trigger>
        <div class="variant-trigger group">
          <div class="flex items-center justify-between w-full">
            <span class="label-text">Phân Loại:</span>
            <ChevronDown class="icon-arrow group-hover:text-gray-600" />
          </div>
          <div class="variant-value mt-1">{{ variant.optionValues }}</div>
        </div>
      </template>
    </VariantPopup>
    <div v-else class="variant-trigger-readonly">
      <div class="flex items-center justify-between w-full">
        <span class="label-text">Phân Loại:</span>
      </div>
      <div class="variant-value mt-1">{{ variant.optionValues }}</div>
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
