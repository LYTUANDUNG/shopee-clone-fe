<script setup lang="ts">
import { HOME_CATEGORIES as categories } from '../constants/constants'
</script>

<template>
  <div class="small-categories bg-white rounded-sm drop-shadow-sm p-4 mb-5">
    <div class="flex">
      <div 
        v-for="cat in categories" 
        :key="cat.id" 
        class="flex-1 flex flex-col items-center cursor-pointer group hover:-translate-y-0.5 transition-transform"
      >
        <div class="w-11 h-11 mb-2">
          <img :src="cat.icon" :alt="cat.name" class="w-full h-full object-contain" />
        </div>
        <div class="text-[13px] text-gray-800 text-center leading-tight px-1 group-hover:text-shopee group-hover:font-medium">
          {{ cat.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-shopee {
  color: #ee4d2d;
}
</style>
