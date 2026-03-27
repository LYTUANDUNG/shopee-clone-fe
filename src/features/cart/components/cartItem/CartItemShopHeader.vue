<script lang="ts" setup>
import type { Shop } from "../../types/shop.types";
import IconShopeeChat from './IconShopeeChat.vue';

defineProps<{ shop: Shop }>();
const emit = defineEmits<{
  click: [shopId: string];
  chat: [shopId: string];
}>();
</script>

<template>
    <!-- Chỉ hiển thị Header nếu Shop là Official (Mall) -->
    <div v-if="shop.isOfficial" class="shop-header cursor-pointer" @click="emit('click', shop.id)">
       <div class="mall-badge">Mall</div>
       <span class="shop-name">{{ shop.name }}</span>
       <div class="chat-icon-wrapper" aria-label="Chat với Shop" @click.stop="emit('chat', shop.id)" >
          <IconShopeeChat class="chat-icon" style="font-size: 20px;" />
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

.chat-icon {
  @apply text-[#ee4d2d];
}
</style>
