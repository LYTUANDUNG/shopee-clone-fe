<template>
  <div class="animate-pulse flex gap-3 py-4 border-b border-gray-100 last:border-0">
    <div class="flex-shrink-0">
      <div class="w-10 h-10 rounded-full bg-gray-200"></div>
    </div>

    <div class="flex-grow flex flex-col gap-2">
      <div class="h-3 bg-gray-200 rounded w-1/4"></div>
      <div class="flex gap-1">
        <div v-for="i in 5" :key="i" class="w-3 h-3 bg-gray-200 rounded-sm"></div>
      </div>

      <div class="h-2.5 bg-gray-100 rounded w-1/3 mt-1 mb-2"></div>

      <div class="space-y-2 mb-3">
        <div class="h-3 bg-gray-200 rounded w-full"></div>
        <div class="h-3 bg-gray-200 rounded w-5/6"></div>
        <div class="h-3 bg-gray-200 rounded w-2/3"></div>
      </div>

      <div class="flex gap-2 mb-3">
        <div v-for="i in 3" :key="i" class="w-[72px] h-[72px] bg-gray-100 rounded-sm"></div>
      </div>
    </div>
  </div>
</template>