<script setup lang="ts">
import { ChevronLeft, ChevronRight } from 'lucide-vue-next';
import BaseButton from '@/shared/components/atoms/BaseButton.vue';

const props = defineProps<{
  currentPage: number;
  totalPages: number;
}>();

const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>();

const nextPage = () => {
    if (props.currentPage < props.totalPages) {
        emit('page-change', props.currentPage + 1);
    }
};

const prevPage = () => {
    if (props.currentPage > 1) {
        emit('page-change', props.currentPage - 1);
    }
};
</script>

<template>
    <div class="pagination-controls">
        <span class="pagination-text"><span class="text-[#ee4d2d]">{{ currentPage }}</span>/{{ totalPages }}</span>
        <div class="pagination-buttons">
            <BaseButton 
                class="nav-button" 
                :class="{ 'disabled': currentPage === 1, 'active': currentPage > 1 }"
                :disabled="currentPage === 1"
                @click="prevPage"
            >
                <ChevronLeft class="w-3 h-3" />
            </BaseButton>
            <BaseButton 
                class="nav-button" 
                :class="{ 'disabled': currentPage === totalPages, 'active': currentPage < totalPages }"
                :disabled="currentPage === totalPages"
                @click="nextPage"
            >
                <ChevronRight class="w-3 h-3" />
            </BaseButton>
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
    @apply w-9 h-9 border border-gray-200 p-0 rounded-none;
}

.nav-button.disabled {
    @apply bg-white/60 text-gray-300 cursor-not-allowed border-gray-100;
}

.nav-button.active {
    @apply bg-white hover:bg-gray-50 text-gray-600;
}
</style>
