<script setup lang="ts">
import { ref } from 'vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
import { MOCK_PRODUCT } from '../constants';

const product = ref(MOCK_PRODUCT);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white p-6 rounded shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div class="md:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <div class="md:col-span-7">
          <ProductInfo :product="product" />
        </div>

      </div>
    </div>

    <div class="bg-white p-6 rounded shadow-sm mt-4">
      <h2 class="text-lg font-medium bg-gray-50 p-3 mb-4 uppercase text-gray-700">Mô tả sản phẩm</h2>
      <div class="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
        Chất liệu: Cotton 100% 2 chiều định lượng 250gsm
        Form áo: Oversize
        Công nghệ in: In lụa thủ công cao cấp
        ...
      </div>
    </div>
  </div>
</template>