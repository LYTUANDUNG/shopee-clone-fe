<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { HOME_BANNERS as banners, RIGHT_ADS as ads } from '../constants'

const currentIndex = ref(0)
let timer: ReturnType<typeof setInterval> | null = null

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % banners.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + banners.length) % banners.length
}

const setIndex = (index: number) => {
  currentIndex.value = index
}

const startTimer = () => {
  timer = setInterval(next, 5000)
}

const stopTimer = () => {
  if (timer) clearInterval(timer)
}

onMounted(() => {
  startTimer()
})

onUnmounted(() => {
  stopTimer()
})
</script>

<template>
  <div class="banner-wrapper flex mb-5 pt-7" @mouseenter="stopTimer" @mouseleave="startTimer">
    <!-- Main Carousel -->
    <div class="carousel-container relative w-[800px] h-[235px] rounded-sm overflow-hidden bg-white shadow-sm">
      <div 
        class="carousel-track flex h-full transition-transform duration-500 ease-in-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div v-for="(banner, index) in banners" :key="index" class="w-full flex-shrink-0 h-full">
          <img :src="banner" alt="Banner" class="w-full h-full object-cover cursor-pointer" />
        </div>
      </div>
      
      <!-- Controls -->
      <button 
        @click="prev" 
        class="absolute left-0 top-1/2 -translate-y-1/2 bg-black/20 text-white w-8 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button 
        @click="next" 
        class="absolute right-0 top-1/2 -translate-y-1/2 bg-black/20 text-white w-8 h-12 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/40 z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
      
      <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
        <button 
          v-for="(_, index) in banners" 
          :key="index"
          @click="setIndex(index)"
          :class="['w-2.5 h-2.5 rounded-full outline-none transition-colors border border-white/50', currentIndex === index ? 'bg-white border-transparent' : 'bg-white/40']"
        ></button>
      </div>
    </div>
    
    <!-- Right side static banners -->
    <div class="w-[400px] pl-1.5 flex flex-col gap-1.5 h-[235px]">
      <a v-for="(ad, index) in ads" :key="index" :href="ad.link" class="h-[114px] rounded-sm overflow-hidden flex-1 block">
        <img :src="ad.image" :alt="ad.alt" class="w-full h-full object-cover hover:opacity-90 transition-opacity" />
      </a>
    </div>
  </div>
</template>

<style scoped>
.carousel-container:hover button {
  opacity: 1;
}
</style>
