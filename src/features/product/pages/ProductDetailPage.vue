<script setup lang="ts">
import { ref } from 'vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
import ShopInfo from '../components/ShopInfo.vue';
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

    <ShopInfo />

  </div>
</template>