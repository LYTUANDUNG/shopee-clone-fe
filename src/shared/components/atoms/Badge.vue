<script setup lang="ts">
import { computed } from 'vue';

// 1. Định nghĩa các loại Badge dựa trên ảnh mẫu
type BadgeType = 'mall' | 'favorite' | 'discount' | 'voucher' | 'trend';

interface Props {
  text: string;
  type?: BadgeType;
  isAbsolute?: boolean; // Yêu cầu: Đè lên ảnh (absolute position)
}

const props = withDefaults(defineProps<Props>(), {
  type: 'favorite',
  isAbsolute: false
});

// 2. Logic xử lý màu sắc và style (FE Rules: Tách biệt logic)
const badgeClasses = computed(() => {
  const base = 'inline-flex items-center px-1 py-0.5 text-[10px] font-medium rounded-sm leading-tight';
  const position = props.isAbsolute ? 'absolute top-0 left-0 z-10' : 'relative';
  
  const styles: Record<BadgeType, string> = {
    mall: 'bg-[#d0011b] text-white',
    favorite: 'bg-[#f25220] text-white',
    discount: 'bg-[#ffe91f] text-[#ee4d2d]',
    voucher: 'bg-[#ffce3d] text-[#ee4d2d] ring-1 ring-[#ee4d2d]', // Có thể dùng border/ring cho voucher
    trend: 'bg-[#4ea5ff] text-white'
  };

  return `${base} ${position} ${styles[props.type]}`;
});
</script>

<template>
  <div :class="badgeClasses">
    <svg v-if="type === 'mall'" class="w-2.5 h-2.5 mr-0.5 fill-current" viewBox="0 0 12 12">
       <path d="M10 3h-1v-1c0-1.1-.9-2-2-2s-2 .9-2 2v1h-1c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-5-1c0-.55.45-1 1-1s1 .45 1 1v1h-2v-1z" />
    </svg>

    <svg v-if="text.includes('%')" class="w-2.5 h-2.5 mr-0.5 fill-current" viewBox="0 0 32 32">
       <path d="M10 18h6.84L12 32l15-18h-8.24L23 0z" />
    </svg>

    <span>{{ text }}</span>
  </div>
</template>