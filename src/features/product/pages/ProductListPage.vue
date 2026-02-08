<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import ProductCard from '../components/ProductCard.vue';
import ProductFilterSidebar from '../components/ProductFilterSidebar.vue';
import ProductListHeader from '../components/ProductListHeader.vue';
import ProductSortBar from '../components/ProductSortBar.vue';
import { useProductList } from '../composables/useProductList';
import type { FilterState, SortOption } from '../types';

// Core Composables
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
    nextPage, 
    prevPage 
} = useProductList();

// Computed Properties
const keyword = computed(() => {
    const q = route.query.keyword || route.query.q;
    return q ? String(q) : 'áo thun';
});

// Event Handlers
const onFilterUpdate = (type: string, value: FilterState[keyof FilterState]) => {
    // Basic validation to ensure type is a valid key of FilterState
    if (['locations', 'categories', 'priceRange', 'shipping'].includes(type)) {
        handleFilterChange(type as keyof FilterState, value);
    }
};

const onSortChange = (value: SortOption) => {
    handleSortChange(value);
};

const onPageChange = (direction: 'next' | 'prev') => {
    if (direction === 'next') nextPage();
    else prevPage();
};
</script>

<template>
    <div class="page-container">
        <div class="content-wrapper">
            <!-- Sidebar -->
            <aside class="sidebar-wrapper">
                <ProductFilterSidebar 
                    :filters="filters"
                    @filter-change="onFilterUpdate" 
                />
            </aside>

            <!-- Main Content -->
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

                <!-- Product Grid -->
                <div class="product-grid">
                    <ProductCard 
                        v-for="product in products" 
                        :key="product.id" 
                        :product="product"
                    />
                </div>
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

/* Grid */
.product-grid {
    @apply grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3;
}
</style>
