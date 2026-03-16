<script setup lang="ts">
import { HOME_CATEGORIES as categories } from '../constants/constants'
import BaseLink from '@/shared/components/atoms/BaseLink.vue'
</script>

<template>
  <div class="small-categories bg-white rounded-sm drop-shadow-sm p-4 mb-5">
    <div class="flex">
      <BaseLink
        v-for="cat in categories"
        :key="cat.id"
        :to="cat.path"
        class="flex-1 flex flex-col items-center group hover:-translate-y-0.5 transition-transform no-underline"
      >
        <div class="w-11 h-11 mb-2">
          <img :src="cat.icon" :alt="cat.name" class="w-full h-full object-contain" />
        </div>
        <span class="text-[13px] text-gray-800 text-center leading-tight px-1 group-hover:text-[#ee4d2d] group-hover:font-medium">
          {{ cat.name }}
        </span>
      </BaseLink>
    </div>
  </div>
</template>

