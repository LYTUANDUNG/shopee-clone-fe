<script setup lang="ts">
import type { SortOption } from '@/features/product/types';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

defineProps<{
  sortBy: string;
  sortOptions: { label: string; value: SortOption }[];
}>();

const emit = defineEmits<{
  (e: 'sort-change', value: SortOption): void;
}>();

const handleSortChange = (value: SortOption) => {
    emit('sort-change', value);
};
</script>

<template>
    <BaseButton 
        v-for="option in sortOptions.filter(opt => !opt.value.includes('price'))"
        :key="option.value"
        :label="option.label"
        :bg-color="sortBy === option.value ? 'bg-[#ee4d2d]' : 'bg-white'"
        :text-color="sortBy === option.value ? 'text-white' : 'text-black'"
        class="sort-button"
        :class="sortBy === option.value ? 'active' : 'inactive'"
        @click="handleSortChange(option.value)"
    />
</template>

<style scoped>
.sort-button {
    @apply capitalize outline-none transition-colors;
}

.sort-button.active {
    @apply hover:bg-[#d73211];
}

.sort-button.inactive {
    @apply hover:bg-[rgba(0,0,0,0.02)];
}
</style>
