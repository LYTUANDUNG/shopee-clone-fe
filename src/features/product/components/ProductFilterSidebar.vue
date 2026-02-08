<script setup lang="ts">
import { Filter, ChevronDown } from 'lucide-vue-next';
import FilterCheckboxGroup from './filter/FilterCheckboxGroup.vue';
import FilterPriceRange from './filter/FilterPriceRange.vue';
import { useProductFilter } from '../composables/useProductFilter';

import type { FilterState } from '../types';

const props = defineProps<{
    filters: FilterState; 
}>();

const emit = defineEmits<{
  (e: 'filter-change', type: keyof FilterState, value: any): void;
  (e: 'load-more-locations'): void;
}>();

const {
  locations,
  categories,
  shippingOptions,
  selectedLocations,
  selectedCategories,
  selectedShipping,
  onLocationChange,
  onCategoryChange,
  onShippingChange,
  onPriceApply,
  onLoadMoreLocations,
} = useProductFilter(props.filters, emit);
</script>

<template>
    <div class="sidebar-container">
        <!-- Header -->
        <div class="header-container">
            <Filter class="header-icon" />
            <h2 class="header-title">Bộ lọc tìm kiếm</h2>
        </div>

        <!-- Filter Group: Location -->
        <FilterCheckboxGroup 
            v-model="selectedLocations"
            title="Nơi Bán" 
            :items="locations" 
            @update:model-value="onLocationChange"
        >
             <template #more>
                <div class="more-items-link" @click="onLoadMoreLocations">
                    Thêm <ChevronDown class="w-3 h-3" />
                </div>
             </template>
        </FilterCheckboxGroup>

        <!-- Filter Group: Category -->
        <FilterCheckboxGroup 
            v-model="selectedCategories"
            title="Theo Danh Mục" 
            :items="categories" 
            @update:model-value="onCategoryChange"
        />
        
         <!-- Filter Group: Price -->
        <FilterPriceRange @apply-price-range="onPriceApply" />

         <!-- Filter Group: Shipping -->
        <FilterCheckboxGroup 
            v-model="selectedShipping"
            title="Đơn Vị Vận Chuyển" 
            :items="shippingOptions" 
            @update:model-value="onShippingChange"
        />
    </div>
</template>

<style scoped>
.sidebar-container {
    @apply space-y-6;
}

.header-container {
    @apply flex items-center gap-2 mb-4;
}

.header-icon {
    @apply w-4 h-4;
}

.header-title {
    @apply font-bold text-base uppercase;
}

.more-items-link {
    @apply flex items-center gap-2 text-sm cursor-pointer pl-6 text-gray-500 hover:text-[#ee4d2d];
}
</style>
