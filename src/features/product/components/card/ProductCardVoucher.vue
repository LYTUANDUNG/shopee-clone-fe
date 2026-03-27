<script setup lang="ts">
import type { Voucher } from "@/features/product/types";
import VoucherBadge from "./VoucherBadge.vue";

defineProps<{
  vouchers?: Voucher[];
}>();
</script>

<template>
    <div class="vouchers-section">
        <div v-if="vouchers && vouchers.length > 0" class="vouchers-wrapper">
            <VoucherBadge 
            v-for="(voucher, index) in vouchers" 
            :key="index"
            :voucher="voucher"
            />
        </div>
    </div>
</template>

<style scoped>
.vouchers-section {
    @apply min-h-[1.25rem] flex items-center mt-0.5 flex-shrink-0;
}
.vouchers-wrapper {
  @apply flex items-center gap-1 flex-wrap;
}
</style>
