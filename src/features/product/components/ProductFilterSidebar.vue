<script setup lang="ts">
import { Filter } from 'lucide-vue-next';
import {FilterCheckboxGroup, FilterPriceRange, FilterRating} from '@/features/product/components/filter';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';
import { useProductFilter } from '@/features/product/composables/useProductFilter';

import type { FilterState } from '@/features/product/types';

const props = defineProps<{
    filters: FilterState; 
}>();

const emit = defineEmits<{
  (e: 'filter-change', type: keyof FilterState, value: FilterState[keyof FilterState]): void;
  (e: 'load-more-locations'): void;
}>();

const {
  locations,
  categories,
  shippingOptions,
  brandOptions,
  shopTypeOptions,
  conditionOptions,
  paymentOptions,
  serviceOptions,
  ratingOptions,
  
  selectedLocations,
  selectedCategories,
  selectedShipping,
  selectedBrands,
  selectedShopTypes,
  selectedConditions,
  selectedPayment,
  selectedServices,
  selectedRating,
  
  onLocationChange,
  onCategoryChange,
  onShippingChange,
  onBrandChange,
  onShopTypeChange,
  onConditionChange,
  onPaymentChange,
  onServiceChange,
  onRatingChange,
  onPriceApply,
  resetFilters,
} = useProductFilter(props.filters, emit);
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
            v-model="selectedLocations"
            title="Nơi Bán" 
            :items="locations" 
            @update:model-value="onLocationChange"
        />

        <!-- Bộ lọc: Đánh Giá -->
        <FilterRating 
            :rating-options="ratingOptions"
            :selected-rating="selectedRating"
            @update:selected-rating="onRatingChange"
        />

        <!-- Bộ lọc: Danh mục -->
        <FilterCheckboxGroup 
            v-model="selectedCategories"
            title="Theo Danh Mục" 
            :items="categories" 
            @update:model-value="onCategoryChange"
        />
        
        <!-- Bộ lọc: Khoảng giá -->
        <FilterPriceRange @apply-price-range="onPriceApply" />

        <!-- Bộ lọc: Vận chuyển -->
        <FilterCheckboxGroup 
            v-model="selectedShipping"
            title="Đơn Vị Vận Chuyển" 
            :items="shippingOptions" 
            @update:model-value="onShippingChange"
        />

        <!-- Bộ lọc: Thương Hiệu -->
        <FilterCheckboxGroup 
            v-model="selectedBrands"
            title="Thương Hiệu" 
            :items="brandOptions" 
            @update:model-value="onBrandChange"
        />

        <!-- Bộ lọc: Loại Shop -->
        <FilterCheckboxGroup 
            v-model="selectedShopTypes"
            title="Loại Shop" 
            :items="shopTypeOptions" 
            @update:model-value="onShopTypeChange"
        />

        <!-- Bộ lọc: Tình Trạng -->
        <FilterCheckboxGroup 
            v-model="selectedConditions"
            title="Tình Trạng" 
            :items="conditionOptions" 
            @update:model-value="onConditionChange"
        />

        <!-- Bộ lọc: Các lựa chọn thanh toán -->
        <FilterCheckboxGroup 
            v-model="selectedPayment"
            title="Các lựa chọn thanh toán" 
            :items="paymentOptions" 
            @update:model-value="onPaymentChange"
        />

        <!-- Bộ lọc: Dịch Vụ & Khuyến Mãi -->
        <FilterCheckboxGroup 
            v-model="selectedServices"
            title="Dịch Vụ & Khuyến Mãi" 
            :items="serviceOptions" 
            @update:model-value="onServiceChange"
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
