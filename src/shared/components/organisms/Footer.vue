<script setup lang="ts">
import { FOOTER_CATEGORIES } from '@/shared/constants/footer';

const columns = Array.from({ length: 5 }, (_, i) =>
    FOOTER_CATEGORIES.filter((_, index) => index % 5 === i)
);
</script>

<template>
  <footer class="w-full bg-[#f5f5f5] border-t border-black/10 pt-4 pb-10">
    <div class="max-w-[1200px] mx-auto px-4">

      <div class="text-sm font-bold text-black/87 mb-5 uppercase">
        Danh Mục
      </div>

      <div class="grid grid-cols-5 gap-6">
        <div v-for="(column, colIdx) in columns" :key="colIdx" class="space-y-6">

          <div v-for="cat in column" :key="cat.title">
            <div class="mb-2">
              <a :href="cat.link" class="text-[12px] font-bold text-black/87 no-underline hover:text-[#ee4d2d]">
                {{ cat.title }}
              </a>
            </div>

            <div class="flex flex-wrap text-[12px] leading-5 text-black/54">
              <template v-for="(item, itemIdx) in cat.items" :key="item.name">
                <a :href="item.link" class="no-underline hover:text-[#ee4d2d] hover:underline transition-colors">
                  {{ item.name }}
                </a>
                <span v-if="itemIdx < cat.items.length - 1" class="mx-1 text-black/10 select-none">|</span>
              </template>
            </div>
          </div>

        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
}
a {
  text-decoration: none;
}
</style>