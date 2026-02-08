<script setup lang="ts">
import type { Product } from "../../types";
import ProductCardTitle from "./ProductCardTitle.vue";
import ProductCardPrice from "./ProductCardPrice.vue";
import ProductCardRatingSold from "./ProductCardRatingSold.vue";
import ProductCardLocation from "./ProductCardLocation.vue";
import VoucherBadge from "./VoucherBadge.vue";

defineProps<{
  product: Product;
}>();


</script>

<template>
  <div class="info-container">
    <!-- Row 1: Title (Fixed 2 lines) -->
    <ProductCardTitle 
      :name="product.name"
      :is-liked="product.isLiked"
      :is-mall="product.isMall"
      :is-ad="product.isAd"
    />

    <!-- Row 2: Price -->
    <ProductCardPrice 
      :price="product.price"
      :new-price="product.newPrice"
      :discount-percentage="product.discountPercentage"
    />
      
    <!-- Row 3: Vouchers (Fixed height placeholder) -->
    <div class="vouchers-section">
        <div v-if="product.vouchers && product.vouchers.length > 0" class="vouchers-wrapper">
            <VoucherBadge 
            v-for="(voucher, index) in product.vouchers" 
            :key="index"
            :voucher="voucher"
            />
        </div>
    </div>

    <!-- Row 4: Rating | Sold -->
    <ProductCardRatingSold 
      :rating="product.rating"
      :sold="product.sold"
    />
    
    <!-- Row 5: Location (Pinned to bottom) -->
    <ProductCardLocation 
      :location="product.location"
    />
  </div>
</template>

<style scoped>
/* Main Container */
.info-container {
  @apply p-2 flex flex-col bg-white;
}

/* Row 3: Vouchers */
.vouchers-section {
    @apply min-h-[1.25rem] flex items-center mt-0.5 flex-shrink-0; /* Fixed height for voucher row */
}
.vouchers-wrapper {
  @apply flex items-center gap-1 flex-wrap;
}
</style>
