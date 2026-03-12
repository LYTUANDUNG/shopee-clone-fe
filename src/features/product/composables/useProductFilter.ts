import { ref } from 'vue';
import type { FilterState } from '@/features/product/types/index.ts';
import { STATIC_FILTER_OPTIONS } from '@/features/product/constants/sortOptions';

export const useProductFilter = (
    currentFilters: FilterState, 
    emit: {
        (e: 'filter-change', type: keyof FilterState, value: FilterState[keyof FilterState]): void;
        (e: 'load-more-locations'): void;
    }
) => {
    const locationOptions: string[] =[];
    const categoryOptions: string[] = [];
    const shippingOptions: string[] = STATIC_FILTER_OPTIONS.shipping;
    const brandOptions: string[] = [];
    const shopTypeOptions: string[] = STATIC_FILTER_OPTIONS.shopTypes;
    const conditionOptions: string[] = STATIC_FILTER_OPTIONS.conditions;
    const paymentOptions: string[] = [];
    const serviceOptions: string[] = STATIC_FILTER_OPTIONS.services;
    const ratingOptions: number[] = STATIC_FILTER_OPTIONS.ratings;
    
    const selectedLocations = ref<string[]>(currentFilters.locations || []);
    const selectedCategories = ref<string[]>(currentFilters.categories || []);
    const selectedShipping = ref<string[]>(currentFilters.shipping || []);
    const selectedBrands = ref<string[]>(currentFilters.brands || []);
    const selectedShopTypes = ref<string[]>(currentFilters.shopTypes || []);
    const selectedConditions = ref<string[]>(currentFilters.conditions || []);
    const selectedPayment = ref<string[]>(currentFilters.paymentOptions || []);
    const selectedServices = ref<string[]>(currentFilters.services || []);
    const selectedRating = ref<number | null>(currentFilters.rating || null);

    const onLocationChange = (val: string[]) => {
        emit('filter-change', 'locations', val);
    };

    const onCategoryChange = (val: string[]) => {
        emit('filter-change', 'categories', val);
    };

    const onShippingChange = (val: string[]) => {
        emit('filter-change', 'shipping', val);
    };

    const onBrandChange = (val: string[]) => {
        emit('filter-change', 'brands', val);
    };

    const onShopTypeChange = (val: string[]) => {
        emit('filter-change', 'shopTypes', val);
    };

    const onConditionChange = (val: string[]) => {
        emit('filter-change', 'conditions', val);
    };

    const onPaymentChange = (val: string[]) => {
        emit('filter-change', 'paymentOptions', val);
    };

    const onServiceChange = (val: string[]) => {
        emit('filter-change', 'services', val);
    };

    const onRatingChange = (val: number | null) => {
        emit('filter-change', 'rating', val);
    };

    const resetFilters = () => {
        selectedLocations.value = [];
        emit('filter-change', 'locations', []);

        selectedCategories.value = [];
        emit('filter-change', 'categories', []);

        selectedShipping.value = [];
        emit('filter-change', 'shipping', []);

        selectedBrands.value = [];
        emit('filter-change', 'brands', []);

        selectedShopTypes.value = [];
        emit('filter-change', 'shopTypes', []);

        selectedConditions.value = [];
        emit('filter-change', 'conditions', []);

        selectedPayment.value = [];
        emit('filter-change', 'paymentOptions', []);

        selectedServices.value = [];
        emit('filter-change', 'services', []);
        
        selectedRating.value = null;
        emit('filter-change', 'rating', null);

        emit('filter-change', 'priceRange', { min: null, max: null });
    };

    const onPriceApply = (range: { min: number | null; max: number | null }) => {
        emit('filter-change', 'priceRange', range);
    };

    const onLoadMoreLocations = () => {
        emit('load-more-locations');
    };

    return {

      // Các tùy chọn (Options)
      locations: locationOptions,
      categories: categoryOptions,
      shippingOptions: shippingOptions,


      // Trạng thái (State)
      selectedLocations,
      selectedCategories,
      selectedShipping,


      // Hành động (Actions)
      onLocationChange,
      onCategoryChange,
      onShippingChange,
      onPriceApply,
      onLoadMoreLocations,
      
      brandOptions,
      shopTypeOptions,
      conditionOptions,
      paymentOptions,
      serviceOptions,
      ratingOptions,
      
      selectedBrands,
      selectedShopTypes,
      selectedConditions,
      selectedPayment,
      selectedServices,
      selectedRating,
      
      onBrandChange,
      onShopTypeChange,
      onConditionChange,
      onPaymentChange,
      onServiceChange,
      onRatingChange,
      resetFilters,
    };
};
