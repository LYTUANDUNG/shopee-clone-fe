<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router'; // 1. Thêm router để lấy ID
import ProductGallery from '../components/ProductGallery.vue';
import ProductInfo from '../components/ProductInfo.vue';
// 2. Thêm "cái hộp" Review của Hùng vào
import ProductReviewContainer from '../components/ProductReviewContainer.vue';
import { MOCK_PRODUCT } from '../constants';

const route = useRoute();
const productId = route.params.id as string; // Lấy ID từ URL (/product/123)

// Giả sử sau này Hùng fetch product theo ID, hiện tại vẫn dùng Mock
const product = ref(MOCK_PRODUCT);
</script>

<template>
  <div class="container mx-auto px-4 py-8 space-y-4">
    <div class="bg-white p-6 rounded shadow-sm border border-gray-100">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <div class="md:col-span-7">
          <ProductInfo :product="product" />
        </div>
      </div>
    </div>

    <ProductReviewContainer :product-id="productId" />

  </div>
</template>

<style scoped>
.container {
  max-width: 1200px;
}
</style>