<script setup lang="ts">
import { computed } from "vue";
import { useRoute, useRouter } from "vue-router";
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
import Breadcrumb from "@/shared/components/molecules/Breadcrumb.vue";
import type { BreadcrumbItemData } from "@/shared/components/molecules/Breadcrumb.vue";

// Composables chính
const route = useRoute();
const {
  products,
  filters,
  sortBy,
  sortOptions,
  currentPage,
  totalPages,
  totalItems,
  handleFilterChange,
  handleSortChange,
  goToPage,
  isLoading,
  error
} = useProductList();

// Các thuộc tính tính toán (Computed)
const keyword = computed(() => {
  const q = route.query.keyword || route.query.q;
  return q ? String(q) : "";
});

const breadcrumbItems = computed<BreadcrumbItemData[]>(() => [
  { label: 'Shopee', to: '/' },
  { label: 'Tìm kiếm' },
  ...(keyword.value ? [{ label: keyword.value }] : [])
]);

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

const router = useRouter();
const onSelectProduct = (productId: string | number) => {
  router.push(`/product/${productId}`);
};
</script>

<template>
  <Header />

  <div class="page-container">
    <!-- Breadcrumb điều hướng -->
    <Breadcrumb :items="breadcrumbItems" class="mb-4" />

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

        <!-- Loading state -->
        <div v-if="isLoading" class="loading-state">
          <div class="loading-grid">
            <div v-for="i in 10" :key="i" class="loading-card">
              <div class="loading-image animate-pulse"></div>
              <div class="loading-info">
                <div class="loading-line w-full animate-pulse"></div>
                <div class="loading-line w-2/3 animate-pulse"></div>
                <div class="loading-line w-1/2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Error state -->
        <div v-else-if="error" class="error-state">
          <p class="text-red-500">{{ error }}</p>
        </div>

        <!-- Empty state -->
        <div v-else-if="products.length === 0" class="empty-state">
          <img src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/search/a60759ad1dabe909c46a817ecbf71878.png" alt="Không tìm thấy" class="empty-image" />
          <p class="empty-text">
            Hix. Không có sản phẩm nào. Bạn thử tắt điều kiện lọc và tìm lại nhé?
          </p>
        </div>

        <!-- Lưới sản phẩm -->
        <div v-else class="product-grid">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :product="product"
            @select-product="onSelectProduct"
          />
        </div>

        <!-- Phân trang dưới cùng -->
        <ProductPagination
            v-if="!isLoading && products.length > 0"
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

/* Loading skeleton */
.loading-grid {
  @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3;
}

.loading-card {
  @apply bg-white rounded overflow-hidden;
}

.loading-image {
  @apply pt-[100%] bg-gray-200;
}

.loading-info {
  @apply p-3 space-y-2;
}

.loading-line {
  @apply h-3 bg-gray-200 rounded;
}

/* Empty & Error states */
.empty-state {
  @apply flex flex-col items-center justify-center py-20;
}

.empty-image {
  @apply w-[134px] h-[134px] mb-4;
}

.empty-text {
  @apply text-gray-500 text-sm text-center;
}

.error-state {
  @apply flex items-center justify-center py-20;
}
</style>
