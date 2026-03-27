<script setup lang="ts">
interface FilterItem { label: string; value: string | number; count: number }

defineProps<{
  filters: FilterItem[];
  modelValue: string | number;
}>();

defineEmits(['update:modelValue']);
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <button
        v-for="f in filters" :key="f.value"
        class="px-4 py-1.5 border text-sm transition-all rounded-sm"
        :class="modelValue === f.value ? 'border-shopee-orange text-shopee-orange' : 'bg-white border-gray-200 hover:border-shopee-orange'"
        @click="$emit('update:modelValue', f.value)"
    >
      {{ f.label }} ({{ f.count }})
    </button>
  </div>
</template>