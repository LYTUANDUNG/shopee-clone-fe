<script setup lang="ts">
import { ref } from 'vue';

// Định nghĩa props
interface Props {
  images: string[];
}
const props = defineProps<Props>();

// State lưu ảnh đang active (mặc định là ảnh đầu tiên)
const activeImage = ref(props.images[0]);

const setActiveImage = (img: string) => {
  activeImage.value = img;
};
</script>

<template>
  <div class="flex flex-col gap-4">
    <div class="w-full aspect-square border border-gray-200 rounded-sm overflow-hidden cursor-pointer">
      <img :src="activeImage" alt="Product Image" class="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
    </div>

    <div class="grid grid-cols-5 gap-2">
      <div 
        v-for="(img, index) in images" 
        :key="index"
        @click="setActiveImage(img)"
        class="aspect-square border rounded-sm overflow-hidden cursor-pointer hover:border-orange-500 transition-colors"
        :class="{ 'border-orange-500': activeImage === img }"
      >
        <img :src="img" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>