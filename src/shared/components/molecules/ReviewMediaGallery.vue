<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
  images: string[];
  video?: { thumbnail: string; url: string };
}>();

const selectedMedia = ref<string | null>(null);
const isVideoSelected = ref(false);

const selectImage = (url: string) => {
  if (selectedMedia.value === url && !isVideoSelected.value) {
    selectedMedia.value = null; // Đóng nếu nhấn lại lần nữa
  } else {
    selectedMedia.value = url;
    isVideoSelected.value = false;
  }
};

const selectVideo = () => {
  if (isVideoSelected.value) {
    selectedMedia.value = null;
    isVideoSelected.value = false;
  } else {
    selectedMedia.value = props.video?.url || null;
    isVideoSelected.value = true;
  }
};
</script>

<template>
  <div class="review-media">
    <div class="flex flex-wrap gap-2 mb-3">
      <div
          v-if="video"
          class="relative w-[72px] h-[72px] border-2 cursor-pointer transition-all"
          :class="isVideoSelected ? 'border-shopee-orange' : 'border-transparent'"
          @click="selectVideo"
      >
        <img :src="video.thumbnail" class="w-full h-full object-cover" />
        <div class="absolute inset-0 flex items-center justify-center bg-black/20">
          <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>

      <div
          v-for="(img, idx) in images" :key="idx"
          class="w-[72px] h-[72px] border-2 cursor-pointer transition-all"
          :class="selectedMedia === img && !isVideoSelected ? 'border-shopee-orange' : 'border-transparent'"
          @click="selectImage(img)"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>

    <div v-if="selectedMedia" class="relative mt-2 p-2 bg-[#f5f5f5] border border-gray-200 animate-in fade-in duration-300">
      <div class="max-w-[450px] mx-auto bg-white shadow-sm">
        <video
            v-if="isVideoSelected"
            :src="selectedMedia"
            controls
            autoplay
            class="w-full h-auto"
        ></video>
        <img
            v-else
            :src="selectedMedia"
            class="w-full h-auto object-contain"
        />
      </div>

      <button @click="selectedMedia = null" class="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M6 18L18 6M6 6l12 12"/></svg>
      </button>
    </div>
  </div>
</template>

<style scoped>
.border-shopee-orange { border-color: #ee4d2d !important; }
</style>