<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// Components từ develop
import ProductGallery from '../components/ProductGallery.vue';
import ProductMetaInfo from '../components/ProductMetaInfo.vue';
import ShopInfo from '../components/ShopInfo.vue';
import Breadcrumb from '@/shared/components/molecules/Breadcrumb.vue';
// Component Review của Hùng
import ProductReviewContainer from '../components/ProductReviewContainer.vue';
// Sử dụng đường dẫn constants từ branch develop cho đồng bộ
import { MOCK_PRODUCT } from '../constants/mockData';
import { catalogApi } from '@/api/catalog.api';
import type { ProductDetailResponseDto } from '@/api/types';

const route = useRoute();
const productId = route.params.id as string;

// Khởi tạo product với MOCK data để tránh lỗi undefined template
const product = ref<any>(MOCK_PRODUCT);
const loading = ref(true);

const isUUID = (str: string) => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
  return uuidRegex.test(str);
};

onMounted(async () => {
  if (isUUID(productId)) {
    try {
      const data = await catalogApi.getProductDetail(productId);
      // Ánh xạ DTO sang cấu trúc FE
      product.value = {
        id: data.id,
        name: data.name,
        price: data.minPrice || data.variants?.[0]?.price || 0,
        originalPrice: data.originalPrice,
        rating: data.rating || 0,
        sold: data.soldCount || 0,
        images: data.images?.length ? data.images : MOCK_PRODUCT.images, // Dùng mock images nếu BE chưa trả về
        vouchers: data.vouchers || [],
        variants: data.variantGroups || MOCK_PRODUCT.variants
      };
    } catch (error) {
      console.error('Failed to fetch product detail:', error);
      product.value = MOCK_PRODUCT; // Fallback to mock on error
    }
  } else {
    // ID không phải UUID (ví dụ: '1'), đây là data mock từ trang list
    product.value = MOCK_PRODUCT;
  }
  loading.value = false;
});

const breadcrumbItems = computed(() => [
  { label: 'Shopee', to: '/' },
  { label: 'Danh mục', to: '/category' },
  { label: product.value?.categoryName || 'Sản phẩm' },
  { label: product.value?.name || 'Chi tiết' }
]);
</script>

<template>
  <div v-if="loading" class="flex justify-center items-center py-20 text-gray-500">
    Đang tải thông tin sản phẩm...
  </div>
  <div v-else class="container mx-auto px-4 py-8 space-y-4">
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