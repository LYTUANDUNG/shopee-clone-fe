<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { catalogApi } from '@/api/catalog.api'
import type { CategorySummaryDto } from '@/api/types'
import BaseLink from '@/shared/components/atoms/BaseLink.vue'

const categories = ref<CategorySummaryDto[]>([])
const loading = ref(true)

onMounted(async () => {
  try {
    categories.value = await catalogApi.getRootCategories()
  } catch (error) {
    console.error('Failed to fetch categories:', error)
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <div class="small-categories bg-white rounded-sm drop-shadow-sm p-4 mb-5">
    <div class="flex">
      <div v-if="loading" class="flex-1 flex justify-center items-center h-20 text-gray-400">
        Loading...
      </div>
      <BaseLink
        v-else
        v-for="cat in categories"
        :key="cat.id"
        :to="`/category/${cat.slug}`"
        class="flex-1 flex flex-col items-center group hover:-translate-y-0.5 transition-transform no-underline"
      >
        <div class="w-11 h-11 mb-2 bg-gray-100 rounded-full flex items-center justify-center overflow-hidden">
          <img v-if="cat.iconUrl" :src="cat.iconUrl" :alt="cat.name" class="w-full h-full object-contain" />
          <span v-else class="text-xs text-gray-400">No img</span>
        </div>
        <span class="text-[13px] text-gray-800 text-center leading-tight px-1 group-hover:text-[#ee4d2d] group-hover:font-medium">
          {{ cat.name }}
        </span>
      </BaseLink>
    </div>
  </div>
</template>

