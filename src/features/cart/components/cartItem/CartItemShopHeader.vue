<script lang="ts" setup>
import { Shop } from "../../models/shop.model";
import { MessageCircle } from 'lucide-vue-next';

defineProps<{ shop: Shop }>();
</script>

<template>
    <div v-if="shop.isOfficial" class="shop-header">
       <div class="mall-badge">Mall</div>
       <span class="shop-name">{{ shop.name }}</span>
       <div class="chat-icon-wrapper">
          <MessageCircle class="chat-icon" />
       </div>
    </div>
</template>

<style scoped>
.shop-header {
  @apply flex items-center gap-2 mb-1;
}

.mall-badge {
  @apply bg-[#d0011b] text-white text-[10px] font-bold px-1 py-0.5 rounded-[2px];
}

.shop-name {
  @apply text-sm font-medium text-gray-800 uppercase;
}

.chat-icon-wrapper {
  @apply bg-[#d0011b] p-0.5 rounded-sm;
}

.chat-icon {
  @apply w-3 h-3 text-white;
}
</style>
