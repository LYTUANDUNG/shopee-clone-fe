import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';
import { SORT_OPTIONS } from '@/features/product/constants/sortOptions';
import type { Product, FilterState, SortOption } from '@/features/product/types/index.ts';
import { catalogApi } from '@/api/catalog.api';
import type { SearchProductQuery, ProductCardDto } from '@/api/types';

/**
 * Map Backend ProductCardDto sang Frontend Product type
 */
const mapToProduct = (dto: ProductCardDto): Product => ({
    id: dto.id as unknown as number, // ProductCard dùng id: number
    name: dto.name,
    image: dto.thumbnailUrl || '',
    price: dto.minPrice || 0,
    originalPrice: dto.originalPrice,
    discountPercentage: dto.discountPercentage,
    rating: dto.rating || 0,
    sold: dto.sold || 0,
    location: dto.shopLocation || '',
    isAd: dto.isAd,
    isMall: dto.isMall,
    isLiked: dto.isLiked,
    vouchers: dto.vouchers?.map(v => ({ type: v.type as 'discount' | 'promotion', text: v.text })),
});

export const useProductList = () => {
    const route = useRoute();
    const products = ref<Product[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

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

    /**
     * Gọi API search sản phẩm từ Backend
     */
    const fetchProducts = async () => {
        isLoading.value = true;
        error.value = null;

        try {
            // Map sortBy FE sang sortBy BE
            let sortByParam: string | undefined;
            switch (sortBy.value) {
                case 'newest': sortByParam = 'newest'; break;
                case 'sales': sortByParam = 'sales'; break;
                case 'price-asc': sortByParam = 'price-asc'; break;
                case 'price-desc': sortByParam = 'price-desc'; break;
                default: sortByParam = undefined; // relevance = mặc định
            }

            const query: SearchProductQuery = {
                keyword: (route.query.keyword || route.query.q) as string || undefined,
                categoryIds: filters.value.categories.length > 0 ? filters.value.categories : undefined,
                minPrice: filters.value.priceRange.min ?? undefined,
                maxPrice: filters.value.priceRange.max ?? undefined,
                minRating: filters.value.rating ?? undefined,
                locations: filters.value.locations.length > 0 ? filters.value.locations : undefined,
                brands: filters.value.brands.length > 0 ? filters.value.brands : undefined,
                shopTypes: filters.value.shopTypes.length > 0 ? filters.value.shopTypes : undefined,
                conditions: filters.value.conditions.length > 0 ? filters.value.conditions : undefined,
                sortBy: sortByParam,
                page: currentPage.value,
                limit: limit.value,
            };

            const response = await catalogApi.searchProducts(query);

            products.value = response.items.map(mapToProduct);
            totalItems.value = response.total;
            totalPages.value = response.totalPages;

        } catch (err: any) {
            console.error('Failed to fetch products:', err);
            error.value = err.message || 'Lỗi khi tải sản phẩm';
            products.value = [];
        } finally {
            isLoading.value = false;
        }
    };

    // Gọi API lần đầu khi component mount
    fetchProducts();

    // Tự động fetch lại khi query URL thay đổi (ví dụ: ?keyword=...)
    watch(() => route.query, () => {
        currentPage.value = 1;
        fetchProducts();
    });

    const handleFilterChange = <K extends keyof FilterState>(filterType: K, value: FilterState[K]) => {
        filters.value[filterType] = value;
        currentPage.value = 1;
        fetchProducts();
    };

    const handleSortChange = (newSort: SortOption) => {
        sortBy.value = newSort;
        currentPage.value = 1;
        fetchProducts();
    };

    const nextPage = () => {
        if (currentPage.value < totalPages.value) {
            currentPage.value++;
            fetchProducts();
        }
    };

    const prevPage = () => {
        if (currentPage.value > 1) {
            currentPage.value--;
            fetchProducts();
        }
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages.value) {
            currentPage.value = page;
            fetchProducts();
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
        totalItems,
        isLoading,
        error,
        fetchProducts,
    };
};
