<script setup lang="ts">
import { ref } from 'vue';
import Rating from '@/shared/components/atoms/Rating.vue';
import AppLightbox from '@/shared/components/molecules/AppLightbox.vue'; // Giả định Hùng đã tạo file này ở bước trước
import type { ReviewComment } from '@/features/product/types/review';

defineProps<{ review: ReviewComment }>();

const maskName = (name: string) => {
  if (name.length <= 2) return name;
  return name.charAt(0) + '*'.repeat(5) + name.slice(-1);
};

// --- Logic xử lý Lightbox ---
const lightbox = ref({
  show: false,
  url: '',
  type: 'image' as 'image' | 'video'
});

const openLightbox = (url: string, type: 'image' | 'video') => {
  lightbox.value = { show: true, url, type };
};

const closeLightbox = () => {
  lightbox.value.show = false;
};
</script>

<template>
  <div class="flex gap-3 py-4 border-b border-gray-100 last:border-0">
    <div class="flex-shrink-0">
      <div class="w-10 h-10 rounded-full bg-gray-100 overflow-hidden border border-gray-50">
        <img v-if="review.avatar" :src="review.avatar" class="w-full h-full object-cover" alt="avatar" />
        <svg v-else viewBox="0 0 15 15" class="w-full h-full text-gray-400 p-2">
          <path d="m1.5 14.2c0-3.3 2.7-6 6-6s6 2.7 6 6" fill="none" stroke="currentColor" />
        </svg>
      </div>
    </div>

    <div class="flex-grow flex flex-col gap-1">
      <div class="text-[12px] text-[#000000de] leading-none mb-1">{{ maskName(review.username) }}</div>
      <Rating :rating="review.rating" :size="10" />

      <div class="text-[11px] text-[#0000008a] mt-2 mb-3">
        {{ review.createdAt }} | Phân loại hàng: {{ review.variant }}
      </div>

      <div class="text-sm leading-relaxed text-[#000000de] mb-3 whitespace-pre-wrap">
        {{ review.content }}
      </div>

      <div v-if="review.images.length || review.video" class="flex flex-wrap gap-2 mb-4">
        <div
            v-if="review.video"
            class="relative w-[72px] h-[72px] border border-gray-100 cursor-pointer overflow-hidden group"
            @click="openLightbox(review.video.url, 'video')"
        >
          <img :src="review.video.thumbnail" class="w-full h-full object-cover opacity-90 group-hover:opacity-100" />
          <div class="absolute inset-0 flex items-center justify-center bg-black/10 group-hover:bg-black/20 transition-all">
            <svg class="w-6 h-6 text-white fill-current drop-shadow-md" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </div>
          <span class="absolute bottom-1 right-1 text-[10px] text-white bg-black/50 px-1 rounded-sm">
            {{ review.video.duration }}
          </span>
        </div>

        <img
            v-for="(img, idx) in review.images"
            :key="idx"
            :src="img"
            class="w-[72px] h-[72px] border border-gray-100 object-cover cursor-zoom-in hover:border-shopee-orange transition-all"
            @click="openLightbox(img, 'image')"
        />
      </div>

      <div class="flex items-center justify-between mt-1">
        <div class="flex items-center gap-1.5 cursor-pointer group">
          <svg width="14" height="13" class="text-gray-400 group-hover:text-shopee-orange fill-current transition-colors">
            <path d="M0,12.7 L2.5,12.7 L2.5,5.1 L0,5.1 L0,12.7 Z M14,5.7 C14,5 13.4,4.4 12.7,4.4 L8.7,4.4 L9.3,1.5 L9.3,1.3 C9.3,1.1 9.2,0.8 9.1,0.6 L8.4,0 L4.2,4.2 C3.9,4.4 3.8,4.7 3.8,5.1 L3.8,11.4 C3.8,12.1 4.4,12.7 5.1,12.7 L10.8,12.7 C11.3,12.7 11.8,12.4 12,11.9 L13.9,7.4 C14,7.3 14,7.1 14,7 L14,5.7 Z" />
          </svg>
          <span class="text-xs text-gray-400 group-hover:text-shopee-orange select-none">
            {{ review.likedCount > 0 ? review.likedCount : 'Hữu ích?' }}
          </span>
        </div>

        <button class="text-gray-300 hover:text-shopee-orange transition-colors">
          <svg width="4" height="16" class="fill-current"><path d="M2 4c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
        </button>
      </div>

      <div v-if="review.reply" class="bg-[#f5f5f5] p-3 rounded-sm mt-4 relative">
        <div class="absolute -top-2 left-4 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#f5f5f5]"></div>
        <div class="text-[11px] font-medium mb-1 uppercase text-[#0000008a]">Phản Hồi Của Người Bán</div>
        <div class="text-sm text-[#000000de] italic leading-relaxed">{{ review.reply }}</div>
      </div>
    </div>

    <AppLightbox
        v-if="lightbox.show"
        :show="lightbox.show"
        :url="lightbox.url"
        :type="lightbox.type"
        @close="closeLightbox"
    />
  </div>
</template>

<style scoped>
.text-shopee-orange { color: #ee4d2d; }
.hover\:border-shopee-orange:hover { border-color: #ee4d2d; }
</style>