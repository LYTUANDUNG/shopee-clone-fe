<script setup lang="ts">
import { ref, computed } from 'vue';
import { Check, ChevronDown, ChevronUp } from "lucide-vue-next";

const props = withDefaults(defineProps<{
  title: string;
  items: string[];
  maxVisible?: number;
}>(), {
  maxVisible: 4
});

const model = defineModel<string[]>({ required: true });
const isExpanded = ref(false);

const displayedItems = computed(() => {
  if (isExpanded.value) return props.items;
  return props.items.slice(0, props.maxVisible);
});

const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

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
      <label v-for="item in displayedItems" :key="item" class="checkbox-label group">
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

      <!-- Toggle Button -->
      <div 
        v-if="items.length > maxVisible" 
        class="more-items-link" 
        @click="toggleExpand"
      >
        <template v-if="!isExpanded">
          Thêm <ChevronDown class="w-3 h-3" />
        </template>
        <template v-else>
          Thu Gọn <ChevronUp class="w-3 h-3" />
        </template>
      </div>

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

.more-items-link {
  @apply flex items-center gap-2 text-sm cursor-pointer pl-6 text-gray-500 hover:text-[#ee4d2d] mt-1;
}
</style>
