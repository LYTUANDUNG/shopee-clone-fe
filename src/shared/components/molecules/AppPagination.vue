<script setup lang="ts">
interface Props {
  currentPage: number
  totalPage: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  (e: 'change', page: number): void
}>()

const goToPage = (page: number) => {
  if (page >= 1 && page <= props.totalPage && page !== props.currentPage) {
    emit('change', page)
  }
}
</script>

<template>
  <div class="flex justify-center items-center gap-4 mt-8 py-4">
    <button
        class="pagination-btn"
        :disabled="currentPage === 1"
        @click="goToPage(currentPage - 1)"
    >
      <svg class="w-3 h-3 fill-current" viewBox="0 0 11 11"><path d="m8.5 11c-.1 0-.2 0-.3-.1l-6-5c-.1-.1-.2-.3-.2-.4s.1-.3.2-.4l6-5c .2-.2.5-.1.7.1s.1.5-.1.7l-5.5 4.6 5.5 4.6c.2.2.2.5.1.7-.1.1-.3.2-.4.2z"></path></svg>
    </button>

    <div class="flex gap-2">
      <button
          v-for="page in totalPage"
          :key="page"
          class="page-number"
          :class="{ 'active': page === currentPage }"
          @click="goToPage(page)"
      >
        {{ page }}
      </button>
    </div>

    <button
        class="pagination-btn"
        :disabled="currentPage === totalPage"
        @click="goToPage(currentPage + 1)"
    >
      <svg class="w-3 h-3 fill-current" viewBox="0 0 11 11"><path d="m2.5 11c .1 0 .2 0 .3-.1l6-5c .1-.1.2-.3.2-.4s-.1-.3-.2-.4l-6-5c-.2-.2-.5-.1-.7.1s-.1.5.1.7l5.5 4.6-5.5 4.6c-.2.2-.2.5-.1.7.1.1.3.2.4.2z"></path></svg>
    </button>
  </div>
</template>

<style scoped>
.pagination-btn {
  @apply p-2 text-gray-400 disabled:opacity-30 disabled:cursor-not-allowed hover:text-shopee-orange transition-colors;
}

.page-number {
  @apply w-10 h-8 flex items-center justify-center text-lg text-gray-500 rounded-sm transition-all;
}

.page-number.active {
  @apply bg-shopee-orange text-white border-shopee-orange;
}

.page-number:not(.active):hover {
  @apply text-shopee-orange;
}

.bg-shopee-orange { background-color: #ee4d2d; }
.text-shopee-orange { color: #ee4d2d; }
.border-shopee-orange { border-color: #ee4d2d; }
</style>