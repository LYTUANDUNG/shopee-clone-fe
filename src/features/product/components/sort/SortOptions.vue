<script setup lang="ts">
import type { SortOption } from '../../types';

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
    <button 
        v-for="option in sortOptions.filter(opt => !opt.value.includes('price'))"
        :key="option.value"
        class="sort-button"
        :class="sortBy === option.value ? 'active' : 'inactive'"
        @click="handleSortChange(option.value)"
    >
        {{ option.label }}
    </button>
</template>

<style scoped>
.sort-button {
    @apply px-4 py-2 rounded-sm capitalize outline-none;
}

.sort-button.active {
    @apply bg-[#ee4d2d] text-white hover:bg-[#d73211];
}

.sort-button.inactive {
    @apply bg-white text-black hover:bg-[rgba(0,0,0,0.02)];
}
</style>
