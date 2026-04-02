<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
// Components from develop
import ProductGallery from '../components/ProductGallery.vue';
import ProductMetaInfo from '../components/ProductMetaInfo.vue';
import ShopInfo from '../components/ShopInfo.vue';
import Breadcrumb from '@/shared/components/molecules/Breadcrumb.vue';
// Components from feat/product-reviews
import ProductReviewContainer from '../components/ProductReviewContainer.vue';
// Constants (Assuming mockData is the updated path from develop)
import { MOCK_PRODUCT } from '../constants/mockData';

const route = useRoute();
const productId = route.params.id as string;

// State
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
  <div class="container mx-auto px-4 py-8 space-y-4">
    <div class="mb-4">
      <Breadcrumb :items="breadcrumbItems" />
    </div>

    <div class="bg-white p-6 rounded shadow-sm border border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <div class="md:col-span-7">
          <ProductMetaInfo :product="product" />
        </div>
      </div>
    </div>

    <ShopInfo />

    <ProductReviewContainer :product-id="productId" />
  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>