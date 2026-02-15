<script setup lang="ts">
import type { SortOption } from '@/features/product/types';
import { SortOptions, SortPriceDropdown, SortMiniPagination } from '@/features/product/components/sort';

defineProps<{
  sortBy: string;
  sortOptions: { label: string; value: SortOption }[];
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'sort-change', value: SortOption): void;
  (e: 'page-change', page: number): void;
}>();

const onSortChange = (value: SortOption) => emit('sort-change', value);
const onPageChange = (page: number) => emit('page-change', page);
</script>

<template>
    <div class="sort-bar">
        <div class="sort-controls">
            <span class="sort-label">Sắp xếp theo</span>
            
            <SortOptions 
                :sort-by="sortBy" 
                :sort-options="sortOptions" 
                @sort-change="onSortChange" 
            />

            <SortPriceDropdown 
                :sort-by="sortBy" 
                :sort-options="sortOptions" 
                @sort-change="onSortChange" 
            />
        </div>
        
        <!-- Phân trang nhỏ -->
        <SortMiniPagination 
            :current-page="currentPage" 
            :total-pages="totalPages" 
            @page-change="onPageChange" 
        />
    </div>
</template>

<style scoped>
/* Thanh sắp xếp */
.sort-bar {
    @apply flex items-center justify-between bg-[#ededed] py-3 px-5 text-sm mb-3 rounded-sm;
}

.sort-controls {
    @apply flex items-center gap-2;
}

.sort-label {
    @apply text-gray-600 mr-2;
}
</style>
