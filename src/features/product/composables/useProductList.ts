import { ref } from 'vue';
import { SORT_OPTIONS } from '../constants/sortOptions';
import type { Product, FilterState, SortOption } from '../types';

export const useProductList = () => {
    const products = ref<Product[]>([]);
    
    // Initial Filter State
    const filters = ref<FilterState>({
        locations: [],
        categories: [],
        priceRange: { min: null, max: null },
        shipping: []
    });

    const sortBy = ref<SortOption>('relevance');

    // Pagination
    const currentPage = ref(1);
    const totalPages = ref(17); // Mock total pages

    const handleFilterChange = <K extends keyof FilterState>(filterType: K, value: FilterState[K]) => {
        // Mock logic for now
        // In a real app, you would probably update the filters state and trigger a fetch
        console.log('Filter changed:', filterType, value);
        
        // Update local state safely
        filters.value[filterType] = value;
        // Reset page on filter change
        currentPage.value = 1;
    };

    const handleSortChange = (newSort: SortOption) => {
        sortBy.value = newSort;
        console.log('Sort changed:', newSort);
        // Trigger fetch or sort logic here
        currentPage.value = 1;
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            console.log('Next page:', currentPage.value);
            // Trigger fetch
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
            console.log('Prev page:', currentPage.value);
            // Trigger fetch
        }
    };

    return {
        products,
        filters,
        sortBy,
        sortOptions: SORT_OPTIONS,
        currentPage,
        totalPages,
        handleFilterChange,
        handleSortChange,
        nextPage,
        prevPage
    };
};
