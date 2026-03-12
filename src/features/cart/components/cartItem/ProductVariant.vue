<script lang="ts" setup>
import { computed } from "vue";
import type { ProductVariant } from "../../types/product.types";
import { ChevronDown } from "lucide-vue-next";
import VariantPopup from "./VariantPopup.vue";
import { useProductVariant } from "../../composables/useProductVariant";

const props = defineProps<{
  variants: ProductVariant[];
  selectedVariant?: ProductVariant;
  isInStock?: boolean;
}>();

const emit = defineEmits<{
  confirm: [variant: ProductVariant | undefined];
}>();

const productContext = computed(() => ({
  variants: props.variants
}));

const initialSelected = computed(() => props.selectedVariant?.attributes);

// Sử dụng composable để quản lý logic chọn phân loại
const { 
  selectedAttributes, 
  popupGroups, 
  selectOption,
  currentVariant
} = useProductVariant(productContext, initialSelected);

// Text hiển thị trên nút chọn (ví dụ: "Size: M, Màu: Đỏ")
const triggerText = computed(() => {
  if (!props.selectedVariant) return "Chọn Phân Loại";
  return Object.values(props.selectedVariant.attributes).join(", ");
});

const handleSelect = (groupName: string, opt: { value: string }) => {
  selectOption(groupName, opt.value);
};

// Xác nhận chọn biến thể mới
const handleConfirm = () => {
    emit('confirm', currentVariant.value);
};

// Mở popup: reset lại state chọn dựa trên variant hiện tại
const handleOpen = () => {
  if (props.selectedVariant) {
    selectedAttributes.value = { ...props.selectedVariant.attributes };
  } else {
    selectedAttributes.value = {};
  }
};

const isReadOnly = computed(() => props.variants.length === 0);
</script>

<template>
  <div class="variant-container select-none">
    <VariantPopup
      v-if="!isReadOnly"
      :groups="popupGroups"
      :selected-options="selectedAttributes"
      @confirm="handleConfirm"
      @select="handleSelect"
      @open="handleOpen"
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
          <div class="variant-value mt-1">{{ triggerText }}</div>
        </div>
      </template>
    </VariantPopup>
    <div v-else class="variant-trigger-readonly">
      <div class="flex items-center justify-between w-full">
        <span class="label-text">Phân Loại:</span>
      </div>

      <div class="variant-value mt-1">{{ triggerText }}</div>
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
  @apply font-medium text-gray-700 text-sm line-clamp-2 leading-tight;
}

.variant-trigger-readonly {
  @apply flex flex-col gap-1 relative text-gray-400 cursor-not-allowed;
}
</style>
