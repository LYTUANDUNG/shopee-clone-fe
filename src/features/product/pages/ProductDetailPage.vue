<script setup lang="ts">
import { ref, computed } from 'vue';
import ProductGallery from '../components/ProductGallery.vue';
import ProductMetaInfo from '../components/ProductMetaInfo.vue';
import ShopInfoBox from '../components/ShopInfoBox.vue';
import ProductReviews from '../components/ProductReviews.vue';
import Breadcrumb from '@/shared/components/molecules/Breadcrumb.vue';
import { MOCK_PRODUCT } from '../constants/mockData';

const product = ref(MOCK_PRODUCT);

const breadcrumbItems = computed(() => [
  { label: 'Shopee', to: '/' },
  { label: 'Thời Trang Nữ', to: '/category/thoi-trang-nu' },
  { label: 'Áo', to: '/category/thoi-trang-nu/ao' },
  { label: 'Áo thun', to: '/category/thoi-trang-nu/ao-thun' },
  { label: product.value.name }
]);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="mb-4">
      <Breadcrumb :items="breadcrumbItems" />
    </div>

    <div class="bg-white p-6 rounded shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        
        <div class="md:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <div class="md:col-span-7">
          <ProductMetaInfo :product="product" />
        </div>

      </div>
    </div>
    
    <div class="mt-4">
      <ShopInfoBox />
    </div>

    <div class="mt-4">
      <ProductReviews />
    </div>

  </div>
</template>