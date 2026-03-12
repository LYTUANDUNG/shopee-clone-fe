<script setup lang="ts">
import Header from '@/shared/components/organisms/Header.vue'
import HomeBanner from '@/features/home/components/HomeBanner.vue'
import SmallCategories from '@/features/home/components/SmallCategories.vue'
</script>

<template>
  <div class="home-page min-h-screen bg-[#f5f5f5]">
    <Header />

    <main class="container mx-auto mt-8 w-[1200px] max-w-full">
      <HomeBanner />
      <SmallCategories />
    </main>
  </div>
</template>

<style scoped>
</style>