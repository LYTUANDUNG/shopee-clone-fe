<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';

defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'page-change', direction: 'next' | 'prev'): void;
}>();

const nextPage = () => emit('page-change', 'next');
const prevPage = () => emit('page-change', 'prev');
</script>

<template>
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
</template>

<style scoped>
/* Phân trang */
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
