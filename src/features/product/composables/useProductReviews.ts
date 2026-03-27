import {onMounted, ref} from "vue";
import {MOCK_REVIEWS, MOCK_STATS} from "@/features/product/constants/mockReviews";
import type {ReviewComment, ReviewStats} from "@/features/product/types/review";

export function useProductReviews(_productId: string | number) {
    const reviews = ref<ReviewComment[]>([]);
    const stats = ref<ReviewStats | null>(null);
    const loading = ref(false);
    const currentPage = ref(1);

    const totalPage = ref(10);

    const fetchReviews = async (page: number = 1, filter: any = 'all') => {
        loading.value = true;
        try {
            await new Promise(resolve => setTimeout(resolve, 600));
            let data = [...MOCK_REVIEWS];

            if (filter !== 'all') {
                if (typeof filter === 'number') {
                    data = data.filter(r => r.rating === filter);
                } else if (filter === 'comment') {
                    data = data.filter(r => r.content.trim().length > 0);
                } else if (filter === 'media') {
                    data = data.filter(r => r.images.length > 0 || r.video);
                }
            }

            reviews.value = data;
            stats.value = MOCK_STATS;
            currentPage.value = page;

        } finally {
            loading.value = false;
        }
    };

    onMounted(() => fetchReviews());

    return {
        reviews,
        stats,
        loading,
        currentPage,
        totalPage,
        fetchReviews
    };
}