<script setup lang="ts">
import { ref, computed } from 'vue';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-vue-next';
import type { SortOption } from '../types';

const props = defineProps<{
  sortBy: string;
  sortOptions: { label: string; value: SortOption }[];
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'sort-change', value: SortOption): void;
  (e: 'page-change', direction: 'next' | 'prev'): void;
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

const nextPage = () => emit('page-change', 'next');
const prevPage = () => emit('page-change', 'prev');
</script>

<template>
    <div class="sort-bar">
        <div class="sort-controls">
            <span class="sort-label">Sắp xếp theo</span>
            <button 
                v-for="option in sortOptions.filter(opt => !opt.value.includes('price'))"
                :key="option.value"
                class="sort-button"
                :class="sortBy === option.value ? 'active' : 'inactive'"
                @click="handleSortChange(option.value)"
            >
                {{ option.label }}
            </button>
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
                 
                <!-- Dropdown Menu -->
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
        </div>
        
        <!-- Mini Pagination -->
         <div class="pagination-controls">
            <span class="pagination-text"><span class="text-[#ee4d2d]">{{ currentPage }}</span>/{{ totalPages }}</span>
            <div class="pagination-buttons">
                <button 
                    class="nav-button" 
                    :class="{ 'disabled': currentPage === 1, 'active': currentPage > 1 }"
                    :disabled="currentPage === 1"
                    @click="prevPage"
                >
                    <ChevronLeft class="w-3 h-3" />
                </button>
                <button 
                    class="nav-button" 
                    :class="{ 'disabled': currentPage === totalPages, 'active': currentPage < totalPages }"
                    :disabled="currentPage === totalPages"
                    @click="nextPage"
                >
                    <ChevronRight class="w-3 h-3" />
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Sort Bar */
.sort-bar {
    @apply flex items-center justify-between bg-[#ededed] py-3 px-5 text-sm mb-3 rounded-sm;
}

.sort-controls {
    @apply flex items-center gap-2;
}

.sort-label {
    @apply text-gray-600 mr-2;
}

.sort-button {
    @apply px-4 py-2 rounded-sm capitalize outline-none;
}

.sort-button.active {
    @apply bg-[#ee4d2d] text-white hover:bg-[#d73211];
}

.sort-button.inactive {
    @apply bg-white text-black hover:bg-[rgba(0,0,0,0.02)];
}

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

/* Pagination */
.pagination-controls {
    @apply flex items-center gap-3;
}

.pagination-text {
    @apply text-xs;
}

.pagination-buttons {
    @apply flex items-center;
}

.nav-button {
    @apply w-9 h-9 border border-gray-200 flex items-center justify-center;
}

.nav-button.disabled {
    @apply bg-white/60 text-gray-300 cursor-not-allowed;
}

.nav-button.active {
    @apply bg-white hover:bg-gray-50 text-gray-600;
}
</style>
