<script setup lang="ts">
import ProductReviewSection from './ProductReviewSection.vue';
import ReviewSkeleton from './ReviewSkeleton.vue'; // 1. Import Skeleton vào
import { useProductReviews } from '../composables/useProductReviews';

const props = defineProps<{ productId: string | number }>();

const {
  reviews,
  stats,
  currentPage,
  totalPage,
  loading, // Thêm em này vào
  fetchReviews
} = useProductReviews(props.productId);
</script>

<template>
  <div class="bg-white rounded-sm p-6 shadow-sm border border-gray-100 mt-4">

    <div class="text-lg uppercase mb-4 text-[#000000de] font-medium">
      Đánh giá sản phẩm
    </div>

    <div v-if="loading" class="space-y-2">
      <div class="animate-pulse bg-gray-50 h-[100px] rounded-sm mb-6 flex items-center p-5 gap-10">
        <div class="w-[140px] h-12 bg-gray-200 rounded mx-auto"></div>
        <div class="flex-grow h-12 bg-gray-200 rounded"></div>
      </div>

      <ReviewSkeleton v-for="i in 3" :key="i" />
    </div>

    <ProductReviewSection
        v-else-if="stats"
        :stats="stats"
        :reviews="reviews"
        :current-page="currentPage"
        :total-page="totalPage"
        @filter-change="(f) => fetchReviews(1, f)"
        @page-change="(p) => fetchReviews(p)"
    />

  </div>
</template>