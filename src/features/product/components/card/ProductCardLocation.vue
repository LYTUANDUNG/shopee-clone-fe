<script setup lang="ts">
import { MapPin } from "lucide-vue-next";

defineProps<{
  location: string;
}>();
</script>

<template>
  <div class="location-section">
    <div class="location-container">
      <MapPin class="w-2.5 h-2.5 mr-0.5" />
      <span class="location-text">
        {{ location }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.location-section {
    @apply flex items-center justify-start mt-1 min-h-[0.75rem] flex-shrink-0;
}

.location-container {
   @apply flex items-center text-[#757575] overflow-hidden flex-shrink-0;
}

.location-text {
  @apply text-left text-xs font-light truncate uppercase text-[10px];
}
</style>
