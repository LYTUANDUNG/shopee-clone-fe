<script setup lang="ts">
import Rating from '../../../shared/components/atoms/Rating.vue';
</script>

<template>
  <div class="space-y-6 max-w-md mx-auto bg-white p-6 rounded shadow">
    <h1 class="text-2xl font-bold mb-4">Rating Component Demo (Home Page)</h1>
    
    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span>5.0 Stars:</span>
        <Rating :rating="5" />
      </div>

      <div class="flex justify-between items-center">
        <span>4.5 Stars:</span>
        <Rating :rating="4.5" />
      </div>

      <div class="flex justify-between items-center">
        <span>3.7 Stars:</span>
        <Rating :rating="3.7" />
      </div>
      
      <div class="flex justify-between items-center">
        <span>3.2 Stars:</span>
        <Rating :rating="3.2" />
      </div>

      <div class="flex justify-between items-center">
        <span>0 Stars:</span>
        <Rating :rating="0" />
      </div>
      
      <hr class="my-4">

      <div class="flex justify-between items-center">
        <span>Large (24px):</span>
        <Rating :rating="4.8" :size="24" />
      </div>
    </div>
  </div>
</template>