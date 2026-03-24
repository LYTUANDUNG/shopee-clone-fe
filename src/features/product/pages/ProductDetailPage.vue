<script setup lang="ts">
import { ref } from "vue";
import ProductDescription from "../components/ProductDescription.vue";
import ProductGallery from "../components/ProductGallery.vue";
import ProductInfo from "../components/ProductInfo.vue";
import { MOCK_PRODUCT, MOCK_PRODUCT_DESCRIPTION } from "../constants";

const product = ref(MOCK_PRODUCT);
const description = ref(MOCK_PRODUCT_DESCRIPTION);
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="bg-white p-6 rounded shadow-sm">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div class="md:col-span-5">
          <ProductGallery :images="product.images" />
        </div>

        <div class="md:col-span-7">
          <ProductInfo :product="product" />
        </div>
      </div>
    </div>

    <div class="mt-8">
      <ProductDescription
        :description="description.description"
        :categories="description.categories"
        :attributes="description.attributes"
        :showSizeInput="description.showSizeInput"
        :sizeGuide="description.sizeGuide"
      />
    </div>
  </div>
</template>
