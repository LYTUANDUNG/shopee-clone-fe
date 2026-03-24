<script lang="ts" setup>
import Breadcrumb from '@/shared/components/molecules/Breadcrumb.vue';
import type { ProductDescriptionProps } from '@/features/product/types/index';

withDefaults(defineProps<ProductDescriptionProps>(), {
  description: '',
  categories: () => [],
  attributes: () => [],
  showSizeInput: false,
  sizeGuide: undefined,
});
</script>

<template>
  <div class="space-y-4">
    <!-- Section 1: CHI TIẾT SẢN PHẨM -->
    <div class="bg-white p-6 shadow-sm rounded-sm">
      <div class="bg-gray-50 px-4 py-3 mb-6">
        <h2 class="text-base font-medium text-gray-800 uppercase">Chi tiết sản phẩm</h2>
      </div>

      <div class="space-y-4 px-4 text-sm">
        <!-- Categories -->
        <div v-if="categories && categories.length > 0" class="grid grid-cols-12 gap-4 items-center">
          <div class="col-span-12 md:col-span-3 lg:col-span-2 text-gray-500">Danh Mục</div>
          <div class="col-span-12 md:col-span-9 lg:col-span-10 text-gray-800">
            <Breadcrumb :items="categories" />
          </div>
        </div>

        <!-- Generic Attributes -->
        <div 
          v-for="(attr, index) in attributes" 
          :key="index"
          class="grid grid-cols-12 gap-4 items-center"
        >
          <div class="col-span-12 md:col-span-3 lg:col-span-2 text-gray-500">{{ attr.label }}</div>
          <div class="col-span-12 md:col-span-9 lg:col-span-10 text-gray-800">{{ attr.value }}</div>
        </div>
      </div>

      <!-- Size Guide Section -->
      <div v-if="showSizeInput || sizeGuide" class="mt-8">
        <div class="bg-gray-50 px-4 py-3 mb-6">
          <h2 class="text-base font-medium text-gray-800">Hướng Dẫn Chọn Size</h2>
        </div>
        
        <div class="px-4 text-sm space-y-4">
          <div class="text-gray-800">Số đo sản phẩm</div>

          <!-- Measurement Input Button Box -->
          <div 
            v-if="showSizeInput" 
            class="flex items-center justify-between px-4 py-3 bg-red-50 border border-red-200 rounded-sm cursor-pointer hover:bg-red-100 transition-colors"
          >
            <div class="flex items-center text-gray-700">
               <!-- Ruler icon -->
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Chưa có size đề xuất
            </div>
            <div class="text-red-600 flex items-center group">
              Nhập size 
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          <!-- Size Guide Table -->
          <div v-if="sizeGuide && sizeGuide.columns" class="overflow-x-auto rounded-sm border border-gray-100">
            <table class="w-full text-center text-sm">
              <thead class="bg-gray-50 text-gray-800 border-b border-gray-200">
                <tr>
                  <th 
                    v-for="(col, index) in sizeGuide.columns" 
                    :key="index" 
                    class="py-3 px-4 font-medium"
                  >
                    <div>{{ col.label }}</div>
                    <div v-if="col.subLabel" class="text-gray-500 font-normal mt-0.5 text-xs">{{ col.subLabel }}</div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr 
                  v-for="(row, rowIndex) in sizeGuide.rows" 
                  :key="rowIndex"
                  class="border-b border-gray-100 last:border-b-0 hover:bg-gray-50"
                >
                  <td class="py-4 px-4 text-gray-800">{{ row.size }}</td>
                  <td 
                    v-for="(val, valIndex) in row.measurements" 
                    :key="valIndex"
                    class="py-4 px-4 text-gray-600"
                  >
                    {{ val }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <div v-if="sizeGuide" class="text-xs text-gray-500 mt-2">
            Số đo có thể thay đổi nhẹ
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: MÔ TẢ SẢN PHẨM -->
    <div class="bg-white p-6 shadow-sm rounded-sm">
      <div class="bg-gray-50 px-4 py-3 mb-6">
        <h2 class="text-base font-medium text-gray-800 uppercase">Mô tả sản phẩm</h2>
      </div>

      <div class="px-4 text-sm text-gray-800 leading-relaxed whitespace-pre-wrap font-sans">
        {{ description }}
      </div>
    </div>
  </div>
</template>
