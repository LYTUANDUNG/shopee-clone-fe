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
}

const props = withDefaults(defineProps<VoucherCardProps>(), {
  isDisabled: false,
  isSaved: false
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
  if (!isExpired.value) {
    if (props.isSaved) {
      emit('use', props.code)
    } else {
      emit('save', props.code)
    }
  }
}
</script>

<template>
  <div class="voucher-card" :class="{ 'voucher-card--disabled': isExpired }">
    <div class="voucher-card__edge-left"></div>

    <div class="voucher-card__content">
      <div class="voucher-card__info">
        <h3 class="voucher-card__title">{{ title }}</h3>
        <p class="voucher-card__description">{{ description }}</p>
        <p class="voucher-card__expiry">HSD: {{ expiryDate }}</p>
      </div>

      <div class="voucher-card__action">
        <Button 
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
  @apply flex items-stretch bg-red-50 rounded overflow-hidden w-[400px];
}

.voucher-card--disabled {
  @apply opacity-60 pointer-events-none;
}

.voucher-card__edge-left {
  @apply w-3 flex-shrink-0;
  background: radial-gradient(circle at left center, transparent 6px, #fef2f2 6px);
  background-size: 12px 12px;
}

.voucher-card__edge-right {
  @apply w-3 flex-shrink-0;
  background: radial-gradient(circle at right center, transparent 6px, #fef2f2 6px);
  background-size: 12px 12px;
}

.voucher-card__content {
  @apply flex-1 flex items-center justify-between p-4 gap-4 min-w-0;
}

.voucher-card__info {
  @apply flex-1 min-w-0 overflow-hidden;
}

.voucher-card__title {
  @apply text-lg font-semibold text-red-600 m-0 mb-1 truncate;
}

.voucher-card__description {
  @apply text-sm text-red-600 m-0 mb-1 truncate;
}

.voucher-card__expiry {
  @apply text-xs text-gray-500 m-0;
}

.voucher-card__action {
  @apply flex-shrink-0 ml-auto;
}

.voucher-card__btn-use {
  @apply border-red-500 text-red-500 bg-transparent hover:bg-transparent hover:text-red-500 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:outline-none;
}
</style>
