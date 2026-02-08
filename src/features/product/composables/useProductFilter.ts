import { ref } from 'vue';
import type { FilterState } from '../types'; 

export const useProductFilter = (
    currentFilters: FilterState, 
    emit: {
        (e: 'filter-change', type: keyof FilterState, value: any): void;
        (e: 'load-more-locations'): void;
    }
) => {
    const locationOptions: string[] = [];   
    const categoryOptions: string[] = [];
    const shippingOptions: string[] = [];
    const selectedLocations = ref<string[]>(currentFilters.locations || []);
    const selectedCategories = ref<string[]>(currentFilters.categories || []);
    const selectedShipping = ref<string[]>(currentFilters.shipping || []);

    const onLocationChange = (val: string[]) => {
        emit('filter-change', 'locations', val);
    };

    const onCategoryChange = (val: string[]) => {
        emit('filter-change', 'categories', val);
    };

    const onShippingChange = (val: string[]) => {
        emit('filter-change', 'shipping', val);
    };

    const onPriceApply = (range: { min: number | null; max: number | null }) => {
        emit('filter-change', 'priceRange', range);
    };

    const onLoadMoreLocations = () => {
        emit('load-more-locations');
    };

    return {
      // Options
      locations: locationOptions,
      categories: categoryOptions,
      shippingOptions: shippingOptions,

      // State
      selectedLocations,
      selectedCategories,
      selectedShipping,

      // Actions
      onLocationChange,
      onCategoryChange,
      onShippingChange,
      onPriceApply,
      onLoadMoreLocations,
    };
};
