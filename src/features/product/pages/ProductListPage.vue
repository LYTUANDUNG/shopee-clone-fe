<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import {
  ProductCard,
  ProductFilterSidebar,
  ProductListHeader,
  ProductSortBar,
  ProductPagination
} from "@/features/product/components";
import { useProductList } from "@/features/product/composables";
import type { FilterState, SortOption } from "@/features/product/types/index.ts";
import Header from "@/shared/components/organisms/Header.vue";

// Composables chính
const route = useRoute();
const {
  products,
  filters,
  sortBy,
  sortOptions,
  currentPage,
  totalPages,
  handleFilterChange,
  handleSortChange,
  goToPage
} = useProductList();

// Các thuộc tính tính toán (Computed)
const keyword = computed(() => {
  const q = route.query.keyword || route.query.q;
  return q ? String(q) : "áo thun";
});

// Xử lý sự kiện (Event Handlers)
const onFilterUpdate = (
  type: any,
  value: FilterState[keyof FilterState],
) => {
  if (typeof type === 'string') {
    handleFilterChange(type as keyof FilterState, value);
  }
};

const onSortChange = (value: SortOption) => {
  handleSortChange(value);
};

const onPageChange = (page: number) => {
  goToPage(page);
};

const onPageNumChange = (page: number) => {
    goToPage(page);
};
</script>

<template>
  <Header />

  <div class="page-container">
    <div class="content-wrapper">
      <!-- Sidebar bên trái -->
      <aside class="sidebar-wrapper">
        <ProductFilterSidebar
          :filters="filters"
          @filter-change="onFilterUpdate"
        />
      </aside>

      <!-- Nội dung chính -->
      <main class="main-content">
        <ProductListHeader :keyword="keyword" />

        <ProductSortBar
          :sort-by="sortBy"
          :sort-options="sortOptions"
          :current-page="currentPage"
          :total-pages="totalPages"
          @sort-change="onSortChange"
          @page-change="onPageChange"
        />

        <!-- Lưới sản phẩm -->
        <div class="product-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
          />
        </div>

        <!-- Phân trang dưới cùng -->
        <ProductPagination 
            :current-page="currentPage" 
            :total-pages="totalPages"
            @page-change="onPageNumChange"
        />
      </main>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  @apply container mx-auto px-4 py-6 bg-[#f5f5f5] min-h-screen;
}

.content-wrapper {
  @apply flex gap-4;
}

.sidebar-wrapper {
  @apply w-1/5 min-w-[190px] shrink-0;
}

.main-content {
  @apply flex-1 w-0;
}

.product-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3;
}
</style>
