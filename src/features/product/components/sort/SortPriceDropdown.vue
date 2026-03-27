<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDown } from 'lucide-vue-next';
import type { SortOption } from '@/features/product/types/index.ts';

const props = defineProps<{
  sortBy: string;
  sortOptions: { label: string; value: SortOption }[];
}>();

const emit = defineEmits<{
  (e: 'sort-change', value: SortOption): void;
}>();

const isPriceDropdownOpen = ref(false);

const sortByPriceLabel = computed(() => {
    if (props.sortBy === 'price-asc') return 'Giá: Thấp đến Cao';
    if (props.sortBy === 'price-desc') return 'Giá: Cao đến Thấp';
    return 'Giá';
});

const handleSortChange = (value: SortOption) => {
    emit('sort-change', value);
    isPriceDropdownOpen.value = false;
};
</script>

<template>
    <div 
         class="dropdown-wrapper"
         @mouseenter="isPriceDropdownOpen = true"
         @mouseleave="isPriceDropdownOpen = false"
     >
        <button 
            class="dropdown-trigger"
            @click="isPriceDropdownOpen = !isPriceDropdownOpen"
        >
            <span :class="sortBy.includes('price') ? 'text-[#ee4d2d]' : ''">{{ sortByPriceLabel }}</span>
            <ChevronDown class="dropdown-icon" />
        </button>
         
        <!-- Menu dropdown giá -->
        <div v-show="isPriceDropdownOpen" class="dropdown-menu">
            <div 
                v-for="option in sortOptions.filter(opt => opt.value.includes('price'))"
                :key="option.value"
                class="dropdown-item"
                :class="{ 'text-[#ee4d2d]': sortBy === option.value }"
                @click="handleSortChange(option.value)"
            >
                {{ option.label }}
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Dropdown */
.dropdown-wrapper {
    @apply relative ml-2;
}

.dropdown-trigger {
    @apply flex items-center justify-between w-[200px] h-[34px] bg-white px-3 rounded-sm cursor-pointer outline-none;
}

.dropdown-icon {
    @apply w-4 h-4 text-gray-400;
}

.dropdown-menu {
    @apply absolute top-full left-0 w-full bg-white shadow-md rounded-sm z-30 mt-[1px] py-2;
}

.dropdown-item {
    @apply px-3 py-2 hover:text-[#ee4d2d] cursor-pointer text-sm;
}
</style>
