<script setup lang="ts">
import Rating from '@/shared/components/atoms/Rating.vue';

defineProps<{
    ratingOptions: number[];
    selectedRating: number | null;
}>();

const emit = defineEmits<{
    (e: 'update:selectedRating', value: number | null): void;
}>();

const onRatingChange = (rating: number) => {
    emit('update:selectedRating', rating);
};
</script>

<template>
    <div class="filter-group">
        <h3 class="filter-title">Đánh Giá</h3>
        <div class="rating-list">
            <div 
                v-for="rating in ratingOptions" 
                :key="rating"
                class="rating-item"
                :class="{ 'active': selectedRating === rating }"
                @click="onRatingChange(rating)"
            >
                <div class="stars">
                    <Rating 
                        :rating="rating" 
                        :size="16"
                    />
                </div>
                <span v-if="rating < 5" class="rating-text">trở lên</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
.filter-group {
    @apply space-y-2;
}

.filter-title {
    @apply font-semibold text-sm mb-2;
}

.rating-list {
    @apply space-y-2 pl-2;
}

.rating-item {
    @apply flex items-center gap-2 cursor-pointer py-1 px-2 rounded hover:bg-gray-100;
}

.rating-item.active {
    @apply bg-gray-100;
}

.stars {
    @apply flex items-center;
}

.rating-text {
    @apply text-sm text-gray-600;
}
</style>
