<script setup lang="ts">
import { computed } from 'vue';


const MAX_STARS = 5;

interface Props {
  rating?: number;
  size?: number | string;
}

const props = withDefaults(defineProps<Props>(), {
  rating: 0,
  size: 16
});

/**
 * Tính toán độ rộng của phần "vàng" cho mỗi ngôi sao
 * @param index Thứ tự ngôi sao (1-5)
 */
const getStarWidth = (index: number): string => {
  const diff = props.rating - (index - 1);
  if (diff >= 1) return '100%'; // Sao đầy
  if (diff <= 0) return '0%';   // Sao trống
  return `${diff * 100}%`;      // Sao một nửa/số lẻ
};


const STAR_PATH = 'M7.5.8l2.26 4.58L14.8 6.1l-3.67 3.58.87 5.05L7.5 12.35 3 14.73l.87-5.05L.2 6.1l5.04-.72L7.5.8z';

const starStyle = computed(() => ({
  width: typeof props.size === 'number' ? `${props.size}px` : props.size,
  height: typeof props.size === 'number' ? `${props.size}px` : props.size
}));
</script>

<template>
  <div 
    class="flex items-center gap-[2px]"
    role="img"
    :aria-label="`Rating: ${props.rating} out of ${MAX_STARS} stars`"
  >
    <div 
      v-for="i in MAX_STARS" 
      :key="i"
      class="relative flex-shrink-0"
      :style="starStyle"
    >
      <!-- Background Star (Empty) -->
      <svg 
        viewBox="0 0 15 15" 
        class="absolute inset-0 w-full h-full text-shopee-gray"
        fill="currentColor"
      >
        <path :d="STAR_PATH" />
      </svg>

      <!-- Foreground Star (Filled) - Clipped -->
      <div 
        class="absolute inset-0 overflow-hidden" 
        :style="{ width: getStarWidth(i) }"
      >
        <svg 
          viewBox="0 0 15 15" 
          class="w-full h-full text-shopee-orange"
          fill="currentColor"
          :style="starStyle"
        >
          <path :d="STAR_PATH" />
        </svg>
      </div>
    </div>
  </div>
</template>