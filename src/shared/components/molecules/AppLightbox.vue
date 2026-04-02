<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';

const props = defineProps<{
  show: boolean;
  url: string;
  type: 'image' | 'video';
}>();

const emit = defineEmits(['close']);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  document.body.style.overflow = 'auto';
});
</script>

<template>
  <Teleport to="body">
    <div
        v-if="show"
        class="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4 transition-opacity duration-300"
        @click.self="emit('close')"
    >
      <button
          @click="emit('close')"
          class="absolute top-6 right-6 text-white hover:scale-110 transition-transform z-10"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
      </button>

      <div class="max-w-4xl max-h-[90vh] flex items-center justify-center">
        <video
            v-if="type === 'video'"
            :src="url"
            controls
            autoplay
            class="max-w-full max-h-full shadow-2xl"
        ></video>

        <img
            v-else
            :src="url"
            class="max-w-full max-h-full object-contain shadow-2xl select-none"
            alt="Review Image"
        />
      </div>
    </div>
  </Teleport>
</template>