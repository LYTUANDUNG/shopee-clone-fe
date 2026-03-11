<script setup lang="ts">
import ShopeeIcon from './ShopeeIcon.vue';
interface Props { title?: string; }
defineProps<Props>();
</script>

<template>
  <div class="ssCjSz">
    <router-link to="/" class="jsl9A1">
      <div class="header-with-search__logo-wrapper w-[110px] h-[34px] flex items-center">
        <ShopeeIcon class="text-[#ee4d2d]" />
      </div>
    </router-link>
    <div v-if="title || $slots.default" class="UBXZTM text-2xl font-normal text-[#222] ml-4 pt-1">
      <slot>{{ title }}</slot>
    </div>
  </div>
</template>

<style scoped>
.ssCjSz { display: flex; align-items: center; }
.jsl9A1 { display: flex; align-items: center; text-decoration: none; }
</style>