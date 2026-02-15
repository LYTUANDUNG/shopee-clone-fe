<script setup lang="ts">
import { usePagination } from "@/features/product/composables";

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: "page-change", page: number): void;
}>();

const handlePageClick = (page: number | string) => {
  if (typeof page === "number") {
    emit("page-change", page);
  }
};

const { visiblePages } = usePagination(
  () => props.currentPage,
  () => props.totalPages
);
</script>
<template>
  <div class="pagination-container">
    <!-- Prev Button -->
    <button
      class="pagination-btn prev-btn"
      :disabled="currentPage === 1"
      @click="$emit('page-change', currentPage - 1)"
    >
      <ChevronLeft class="w-4 h-4" />
    </button>

    <!-- Page Numbers -->
    <template v-for="(page, index) in visiblePages" :key="index">
      <span v-if="page === '...'" class="dots">...</span>

      <button
        v-else
        class="pagination-btn number-btn"
        :class="{ active: currentPage === page }"
        @click="handlePageClick(page)"
      >
        {{ page }}
      </button>
    </template>

    <!-- Next Button -->
    <button
      class="pagination-btn next-btn"
      :disabled="currentPage === totalPages"
      @click="$emit('page-change', currentPage + 1)"
    >
      <ChevronRight class="w-4 h-4" />
    </button>
  </div>
</template>

<style scoped>
.pagination-container {
  @apply flex items-center justify-center gap-4 mt-10 mb-8;
}

.pagination-btn {
  @apply min-w-[40px] h-[30px] flex items-center justify-center rounded-sm text-base text-gray-500 font-light hover:text-shopee-orange transition-colors duration-200 bg-transparent border-none cursor-pointer p-0;
}

.pagination-btn.disabled {
  @apply opacity-40 cursor-not-allowed hover:text-gray-500;
}

.number-btn {
  @apply text-xl;
}

.number-btn.active {
  @apply bg-shopee-orange text-white hover:bg-opacity-90 hover:text-white rounded-[2px];
}

.dots {
  @apply text-gray-500 px-1 select-none flex items-end pb-1;
}

.prev-btn,
.next-btn {
  @apply text-gray-400;
}
</style>
