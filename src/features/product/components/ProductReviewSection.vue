<script setup lang="ts">
import { ref, computed, watch } from 'vue';
import Rating from '@/shared/components/atoms/Rating.vue';
import ReviewItem from '@/shared/components/molecules/ReviewItem.vue';
import ReviewFilter from '@/shared/components/molecules/ReviewFilter.vue';
import AppPagination from '@/shared/components/molecules/AppPagination.vue';
import type { ReviewComment, ReviewStats } from '../types/review';

const props = defineProps<{
  stats: ReviewStats;
  reviews: ReviewComment[];
  currentPage: number;
  totalPage: number;
}>();

const emit = defineEmits<{
  (e: 'filter-change', value: string | number): void;
  (e: 'page-change', page: number): void;
}>();

const activeFilter = ref<string | number>('all');

const filterOptions = computed(() => [
  { label: 'Tất cả', value: 'all', count: props.stats.total },
  { label: '5 Sao', value: 5, count: props.stats.starCounts[5] || 0 },
  { label: '4 Sao', value: 4, count: props.stats.starCounts[4] || 0 },
  { label: '3 Sao', value: 3, count: props.stats.starCounts[3] || 0 },
  { label: '2 Sao', value: 2, count: props.stats.starCounts[2] || 0 },
  { label: '1 Sao', value: 1, count: props.stats.starCounts[1] || 0 },
  { label: 'Có bình luận', value: 'comment', count: props.stats.withComment },
  { label: 'Có hình ảnh / video', value: 'media', count: props.stats.withMedia },
]);

const filteredReviews = computed(() => {
  const current = activeFilter.value;
  if (current === 'all') return props.reviews;
  return props.reviews.filter((review) => {
    if (typeof current === 'number') return review.rating === current;
    if (current === 'comment') return review.content.trim().length > 0;
    if (current === 'media') return (review.images?.length || 0) > 0;
    return true;
  });
});

// 3. UX Logic: Tự động cuộn lên khi đổi filter/trang
const sectionRef = ref<HTMLElement | null>(null);

const handlePageChange = (page: number) => {
  emit('page-change', page);
  scrollToHeader();
};

const handleFilterChange = (val: string | number) => {
  emit('filter-change', val);
  scrollToHeader();
};

const scrollToHeader = () => {
  sectionRef.value?.scrollIntoView({ behavior: 'smooth', block: 'start' });
};

watch(activeFilter, (newVal) => handleFilterChange(newVal));

</script>

<template>
  <div ref="sectionRef" class="product-reviews Q4TGvu">
    <div class="fdGpXY text-lg uppercase mb-4 text-[#000000de] font-medium">
      Đánh giá sản phẩm
    </div>

    <div class="rating-overview bg-[#fef6f5] border border-[#f9ede5] p-5 flex items-center gap-10 mb-6 rounded-sm">
      <div class="score-briefing text-center min-w-[140px]">
        <div class="text-shopee-orange mb-1">
          <span class="text-3xl font-medium">{{ stats.averageScore }}</span>
          <span class="text-lg"> trên 5</span>
        </div>
        <Rating :rating="stats.averageScore" :size="20" class="justify-center" />
      </div>

      <ReviewFilter v-model="activeFilter" :filters="filterOptions" />
    </div>

    <div class="reviews-list min-h-[300px]">
      <TransitionGroup
          name="list"
          tag="div"
          class="divide-y divide-gray-100"
      >
        <template v-if="filteredReviews.length > 0">
          <ReviewItem
              v-for="item in filteredReviews"
              :key="item.id"
              :review="item"
          />
        </template>

        <div v-else key="empty" class="py-20 flex flex-col items-center justify-center text-gray-500">
          <svg class="w-16 h-16 mb-2 opacity-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9.172 9.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p>Chưa có đánh giá nào cho bộ lọc này.</p>
        </div>
      </TransitionGroup>
    </div>

    <div v-if="totalPage > 1" class="flex justify-end mt-8">
      <AppPagination
          :current-page="currentPage"
          :total-page="totalPage"
          @change="handlePageChange"
      />
    </div>
  </div>
</template>

<style scoped>
.Q4TGvu {
  @apply bg-white rounded-sm p-6 shadow-sm border border-gray-100;
}

.text-shopee-orange { color: #ee4d2d; }

/* Animation mượt khi lọc danh sách */
.list-enter-active,
.list-leave-active {
  transition: all 0.4s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 1024px) {
  .rating-overview {
    @apply flex-col items-stretch gap-6;
  }
  .score-briefing {
    @apply border-b border-[#f9ede5] pb-4;
  }
}
</style>