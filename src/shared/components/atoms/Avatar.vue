<script lang="ts" setup>
import { ref, computed } from 'vue'
import { User } from 'lucide-vue-next'
import {
  Avatar as AvatarRoot,
  AvatarImage,
  AvatarFallback,
} from '@/components/ui/avatar'

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'

interface Props {
  src?: string
  alt?: string
  fallbackText?: string
  size?: 'sm' | 'base' | 'lg'
}

const props = withDefaults(defineProps<Props>(), {
  src: '',
  alt: 'Avatar',
  fallbackText: '',
  size: 'sm',
})

const hasError = ref(false)

const initials = computed(() => {
  if (props.fallbackText) {
    return props.fallbackText
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('')
  }
  return ''
})

const showImage = computed(() => {
  return props.src && !hasError.value
})

function onLoadingStatusChange(status: ImageLoadingStatus) {
  if (status === 'error') {
    hasError.value = true
  }
}
</script>

<template>
  <AvatarRoot :size="size" shape="circle">
    <AvatarImage
      v-if="showImage"
      :src="src"
      :alt="alt"
      @loading-status-change="onLoadingStatusChange"
    />
    <AvatarFallback
      class="flex items-center justify-center"
    >
      <span v-if="initials">{{ initials }}</span>
      <User v-else class="h-full w-full" />
    </AvatarFallback>
  </AvatarRoot>
</template>
