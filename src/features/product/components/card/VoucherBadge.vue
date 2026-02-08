<script setup lang="ts">
import type { Voucher } from "../../types";

defineProps<{
  voucher: Voucher;
}>();
</script>

<template>
    <!-- Discount Badge (SVG style) -->
    <div v-if="voucher.type === 'discount'" class="voucher-item discount-svg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="voucher-edge">
            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" stroke="#F69113" fill="#F69113"></path>
        </svg>
        <div class="voucher-content">{{ voucher.text }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-0.5 -0.5 4 16" class="voucher-edge rotate-180">
            <path d="M4 0h-3q-1 0 -1 1a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3v0.333a1.2 1.5 0 0 1 0 3q0 1 1 1h3" stroke-width="1" stroke="#F69113" fill="#F69113"></path>
        </svg>
    </div>

    <!-- Promotion/Other Badge -->
    <div v-else class="voucher-item" :class="voucher.type">
        {{ voucher.text }}
    </div>
</template>

<style scoped>
.voucher-item {
  @apply text-[10px] px-1 h-4 flex items-center leading-none;
}

/* Discount Badge (SVG based) */
.voucher-item.discount-svg {
    /* Removed ml-1 to ensure it can be left-aligned by parent control */
    @apply h-4 flex flex-row items-stretch justify-start overflow-hidden pointer-events-none text-[10px] leading-4 text-white px-0;
}

.voucher-edge {
    @apply flex-none h-full;
}

/* Adjust margins to connect the pieces perfectly */
.voucher-edge:first-child {
    @apply -mr-px; 
}
.voucher-edge:last-child {
    @apply -ml-px;
}

.voucher-content {
    @apply truncate bg-[#F69113] px-1;
}

/* Promotion Badge (Red Border - White/Transparent) */
.voucher-item.promotion {
  @apply border border-[#ee4d2d] text-[#ee4d2d] bg-transparent rounded-[2px];
}
</style>
