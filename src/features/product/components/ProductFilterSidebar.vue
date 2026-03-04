<script setup lang="ts">
import { Filter } from 'lucide-vue-next';
import { FilterCheckboxGroup, FilterPriceRange, FilterRating } from '@/features/product/components/filter';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import { STATIC_FILTER_OPTIONS } from '@/features/product/constants/sortOptions';

import type { FilterState } from '@/features/product/types/index.ts';

const props = defineProps<{
    filters: FilterState; 
}>();

const emit = defineEmits<{
  (e: 'filter-change', type: keyof FilterState, value: FilterState[keyof FilterState]): void;
  (e: 'load-more-locations'): void;
}>();

// Thêm options
const locations = [] as string[];
const categories = [] as string[];
const brandOptions = [] as string[];
const paymentOptions = [] as string[];

const {
  shipping: shippingOptions,
  shopTypes: shopTypeOptions,
  conditions: conditionOptions,
  services: serviceOptions,
  ratings: ratingOptions,
} = STATIC_FILTER_OPTIONS;

// Methods Update Filters
const onFilterChange = (type: keyof FilterState, value: FilterState[keyof FilterState]) => {
  emit('filter-change', type, value);
};

// Handle Price Range Submit
const onPriceApply = (range: { min: number | null; max: number | null }) => {
  emit('filter-change', 'priceRange', range);
};

// Reset All Filters
const resetFilters = () => {
    emit('filter-change', 'locations', []);
    emit('filter-change', 'categories', []);
    emit('filter-change', 'shipping', []);
    emit('filter-change', 'brands', []);
    emit('filter-change', 'shopTypes', []);
    emit('filter-change', 'conditions', []);
    emit('filter-change', 'paymentOptions', []);
    emit('filter-change', 'services', []);
    emit('filter-change', 'rating', null);
    emit('filter-change', 'priceRange', { min: null, max: null });
};
</script>

<template>
    <div class="sidebar-container">

        <!-- Header -->
        <div class="header-container">
            <Filter class="header-icon" />
            <h2 class="header-title">Bộ lọc tìm kiếm</h2>
        </div>

        <!-- Bộ lọc: Nơi bán -->
        <FilterCheckboxGroup 
            :model-value="props.filters.locations"
            title="Nơi Bán" 
            :items="locations" 
            @update:model-value="val => onFilterChange('locations', val)"
        />

        <!-- Bộ lọc: Đánh Giá -->
        <FilterRating 
            :rating-options="ratingOptions"
            :selected-rating="props.filters.rating"
            @update:selected-rating="val => onFilterChange('rating', val)"
        />

        <!-- Bộ lọc: Danh mục -->
        <FilterCheckboxGroup 
            :model-value="props.filters.categories"
            title="Theo Danh Mục" 
            :items="categories" 
            @update:model-value="val => onFilterChange('categories', val)"
        />
        
        <!-- Bộ lọc: Khoảng giá -->
        <FilterPriceRange 
            :min-price="props.filters.priceRange.min"
            :max-price="props.filters.priceRange.max"
            @apply-price-range="onPriceApply" 
        />

        <!-- Bộ lọc: Vận chuyển -->
        <FilterCheckboxGroup 
            :model-value="props.filters.shipping"
            title="Đơn Vị Vận Chuyển" 
            :items="shippingOptions" 
            @update:model-value="val => onFilterChange('shipping', val)"
        />

        <!-- Bộ lọc: Thương Hiệu -->
        <FilterCheckboxGroup 
            :model-value="props.filters.brands"
            title="Thương Hiệu" 
            :items="brandOptions" 
            @update:model-value="val => onFilterChange('brands', val)"
        />

        <!-- Bộ lọc: Loại Shop -->
        <FilterCheckboxGroup 
            :model-value="props.filters.shopTypes"
            title="Loại Shop" 
            :items="shopTypeOptions" 
            @update:model-value="val => onFilterChange('shopTypes', val)"
        />

        <!-- Bộ lọc: Tình Trạng -->
        <FilterCheckboxGroup 
            :model-value="props.filters.conditions"
            title="Tình Trạng" 
            :items="conditionOptions" 
            @update:model-value="val => onFilterChange('conditions', val)"
        />

        <!-- Bộ lọc: Các lựa chọn thanh toán -->
        <FilterCheckboxGroup 
            :model-value="props.filters.paymentOptions"
            title="Các lựa chọn thanh toán" 
            :items="paymentOptions" 
            @update:model-value="val => onFilterChange('paymentOptions', val)"
        />

        <!-- Bộ lọc: Dịch Vụ & Khuyến Mãi -->
        <FilterCheckboxGroup 
            :model-value="props.filters.services"
            title="Dịch Vụ & Khuyến Mãi" 
            :items="serviceOptions" 
            @update:model-value="val => onFilterChange('services', val)"
        />

        <!-- Button Xóa Tất Cả -->
        <BaseButton 
            class="w-full mt-6"
            label="XÓA TẤT CẢ"
            bg-color="bg-[#ee4d2d]"
            text-color="text-white"
            size="md"
            @click="resetFilters"
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

</style>
