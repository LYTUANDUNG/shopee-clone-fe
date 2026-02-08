<script setup lang="ts">
import { Check } from "lucide-vue-next";

defineProps<{
  title: string;
  items: string[];
}>();

const model = defineModel<string[]>({ required: true });

const onChange = (item: string, event: Event) => {
  const isChecked = (event.target as HTMLInputElement).checked;
  const newValue = [...model.value];

  if (isChecked) {
    newValue.push(item);
  } else {
    const index = newValue.indexOf(item);
    if (index > -1) {
      newValue.splice(index, 1);
    }
  }

  model.value = newValue;
};
</script>

<template>
  <div>
    <h3 class="filter-header">{{ title }}</h3>
    <div class="filter-content">
      <label v-for="item in items" :key="item" class="checkbox-label group">
        <div class="checkbox-container">
          <input
            type="checkbox"
            class="checkbox-input peer"
            :value="item"
            :checked="model.includes(item)"
            @change="onChange(item, $event)"
          />
          <div class="checkbox-visual">
            <Check
              v-show="model.includes(item)"
              class="checkbox-icon"
              stroke-width="3"
            />
          </div>
        </div>
        <span>{{ item }}</span>
      </label>
      <slot name="more"></slot>
    </div>
  </div>
</template>

<style scoped>
.filter-header {
  @apply font-medium text-sm mb-2;
}

.filter-content {
  @apply space-y-2;
}

.checkbox-label {
  @apply flex items-center gap-2 text-sm cursor-pointer hover:opacity-80;
}

.checkbox-container {
  @apply relative flex items-center;
}

.checkbox-visual {
  @apply w-4 h-4 border border-gray-300 rounded-[2px] bg-white peer-checked:bg-[#ee4d2d] peer-checked:border-[#ee4d2d] flex items-center justify-center transition-colors;
}

.checkbox-input {
  @apply sr-only;
}

.checkbox-icon {
  @apply w-3 h-3 text-white;
}
</style>
