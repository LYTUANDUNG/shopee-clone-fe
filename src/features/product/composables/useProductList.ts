import { ref } from 'vue';
import { SORT_OPTIONS } from '@/features/product/constants/sortOptions';
import type { Product, FilterState, SortOption } from '@/features/product/types/index.ts';

export const useProductList = () => {
    const products = ref<Product[]>([]);
    

    // Trạng thái bộ lọc ban đầu
    const filters = ref<FilterState>({
        locations: [],
        categories: [],
        priceRange: { min: null, max: null },
        shipping: [],
        brands: [],
        shopTypes: [],
        conditions: [],
        paymentOptions: [],
        rating: null,
        services: []
    });

    const sortBy = ref<SortOption>('relevance');



    // Phân trang
    const currentPage = ref(1);
    const limit = ref(20);
    const totalItems = ref(0);
    const totalPages = ref(0);

    const handleFilterChange = <K extends keyof FilterState>(filterType: K, value: FilterState[K]) => {
        // Logic giả lập (thay thế bằng API call thực tế)
        console.log('Filter changed:', filterType, value);
        
        filters.value[filterType] = value;

        currentPage.value = 1;
    };

    const handleSortChange = (newSort: SortOption) => {
        sortBy.value = newSort;
        console.log('Sort changed:', newSort);

        currentPage.value = 1;
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            console.log('Next page:', currentPage.value);
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
            console.log('Prev page:', currentPage.value);
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
            console.log('Go to page:', page);
            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
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
        prevPage,
        goToPage,
        limit,
        totalItems
    };
};
