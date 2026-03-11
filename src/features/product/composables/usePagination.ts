import { computed, type MaybeRefOrGetter, toValue } from 'vue';

export const usePagination = (
    currentPage: MaybeRefOrGetter<number>,
    totalPages: MaybeRefOrGetter<number>,
    delta: number = 2
) => {
    const visiblePages = computed(() => {
        const pages: (number | string)[] = [];
        const current = toValue(currentPage);
        const total = toValue(totalPages);

        if (total <= 7) {
            for (let i = 1; i <= total; i++) {
                pages.push(i);
            }
            return pages;
        }

        const rangeStart = Math.max(2, current - delta);
        const rangeEnd = Math.min(total - 1, current + delta);

        pages.push(1);

        if (rangeStart > 2) {
            pages.push('...');
        }

        for (let i = rangeStart; i <= rangeEnd; i++) {
            pages.push(i);
        }

        if (rangeEnd < total - 1) {
            pages.push('...');
        }

        pages.push(total);

        return pages;
    });

    return {
        visiblePages
    };
};
