<script lang="ts" setup>
import { computed } from 'vue'
import { Button } from '@/components/ui/button'

export interface VoucherCardProps {
  code: string
  title: string
  description: string
  expiryDate: string
  isDisabled?: boolean
  isSaved?: boolean
  isOutOfStock?: boolean
}

const props = withDefaults(defineProps<VoucherCardProps>(), {
  isDisabled: false,
  isSaved: false,
  isOutOfStock: false
})

const emit = defineEmits<{
  (e: 'save', code: string): void
  (e: 'use', code: string): void
}>()

const isExpired = computed(() => {
  if (props.isDisabled) return true
  const expiry = new Date(props.expiryDate)
  return expiry < new Date()
})

const buttonText = computed(() => {
  return props.isSaved ? 'Dùng Ngay' : 'Lưu'
})

const handleClick = () => {
  if (!isExpired.value && !props.isOutOfStock) {
    if (props.isSaved) {
      emit('use', props.code)
    } else {
      emit('save', props.code)
    }
  }
}
</script>

<template>
  <div class="voucher-card" :class="{ 'voucher-card--disabled': isExpired || isOutOfStock }">
    <div class="voucher-card__edge-left"></div>

    <div class="voucher-card__content">
      <div class="voucher-card__info">
        <h3 class="voucher-card__title">{{ title }}</h3>
        <p class="voucher-card__description">{{ description }}</p>
        <p class="voucher-card__expiry">HSD: {{ expiryDate }}</p>
      </div>

      <div class="voucher-card__separator"></div>

      <div class="voucher-card__action">
        <div v-if="isOutOfStock" class="out-of-stock-badge">
           <span>Hết lượt sử dụng</span>
        </div>
        <Button 
          v-else
          :variant="isSaved ? 'outline' : 'destructive'" 
          :class="{ 'voucher-card__btn-use': isSaved }"
          :disabled="isExpired" 
          @click="handleClick"
        >
          {{ buttonText }}
        </Button>
      </div>
    </div>

    <div class="voucher-card__edge-right"></div>
  </div>
</template>

<style scoped>
.voucher-card {
  @apply flex items-stretch w-[400px] drop-shadow-sm filter bg-transparent;
}

.voucher-card--disabled {
  @apply opacity-60 pointer-events-none;
}

.voucher-card__edge-left {
  @apply w-3 flex-shrink-0 bg-transparent;
  background-image: 
    linear-gradient(to bottom right, transparent 50%, #fff7ed 50%),
    linear-gradient(to top right, transparent 50%, #fff7ed 50%);
  background-size: 100% 12px;
  background-repeat: repeat-y;
  background-position: left;
}

.voucher-card__edge-right {
  @apply w-3 flex-shrink-0 bg-transparent;
  background-image: 
    linear-gradient(to bottom left, transparent 50%, #fff7ed 50%),
    linear-gradient(to top left, transparent 50%, #fff7ed 50%);
  background-size: 100% 12px;
  background-repeat: repeat-y;
  background-position: right;
}

.voucher-card__content {
  @apply flex-1 flex items-center justify-between p-4 gap-4 min-w-0 bg-orange-50;
}

.voucher-card__info {
  @apply flex-1 min-w-0 overflow-hidden;
}

.voucher-card__title {
  @apply text-lg font-semibold text-orange-600 m-0 mb-1 truncate;
}

.voucher-card__description {
  @apply text-sm text-orange-600 m-0 mb-1 truncate;
}

.voucher-card__expiry {
  @apply text-xs text-gray-500 m-0;
}

.voucher-card__separator {
  @apply w-[1px] self-stretch border-l border-dashed border-gray-300 mx-2;
}

.voucher-card__action {
  @apply flex-shrink-0 ml-auto w-[100px] flex justify-center;
}

.voucher-card__btn-use {
  @apply border-orange-500 text-orange-500 bg-transparent hover:bg-transparent hover:text-orange-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none;
}

.out-of-stock-badge {
  @apply bg-gray-400 text-white text-xs text-center px-1 py-1 rounded w-full h-full flex items-center justify-center leading-tight;
}
</style>
