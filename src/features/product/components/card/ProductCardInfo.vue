<script setup lang="ts">
import type { Product } from "@/features/product/types/index.ts";
import {
  ProductCardTitle,
  ProductCardPrice,
  ProductCardRatingSold,
  ProductCardLocation,
  ProductCardVoucher,
} from "@/features/product/components/card";

defineProps<{
  product: Product;
}>();
</script>

<template>
  <div class="info-container">
    <!-- Dòng 1: Tên sản phẩm -->
    <ProductCardTitle
      :name="product.name"
      :is-liked="product.isLiked"
      :is-mall="product.isMall"
      :is-ad="product.isAd"
    />

    <!-- Dòng 2: Giá -->
    <ProductCardPrice
      :price="product.price"
      :new-price="product.newPrice"
      :discount-percentage="product.discountPercentage"
    />

    <!-- Dòng 3: Voucher -->
    <ProductCardVoucher :vouchers="product.vouchers" />

    <!-- Dòng 4: Đánh giá & Đã bán -->
    <ProductCardRatingSold :rating="product.rating" :sold="product.sold" />

    <!-- Dòng 5: Địa điểm -->
    <ProductCardLocation :location="product.location" />
  </div>
</template>

<style scoped>
.info-container {
  @apply p-2 flex flex-col bg-white;
}
</style>
