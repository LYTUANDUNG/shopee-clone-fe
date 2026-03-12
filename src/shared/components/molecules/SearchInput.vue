<template>
  <div class="input-wrapper">
    <div v-if="$slots.prefix" class="prefix-icon">
      <slot name="prefix"></slot>
    </div>

    <input
        v-model="model"
        v-bind="$attrs"
        :type="props.type"
        class="base-input"
        @keyup.enter="handleSearch"
    />

    <div v-if="$slots.suffix" class="suffix-icon" @click="handleSearch">
      <slot name="suffix"></slot>
    </div>
  </div>
</template>

<script setup>
defineOptions({ inheritAttrs: false });

const model = defineModel({ type: String, default: '' });
const emit = defineEmits(['search', 'clear', 'focus']);

const props = defineProps({
  type: { type: String, default: 'text' },
  borderColor: { type: String, default: '#ee4d2d' }
});

const handleSearch = () => {
  const value = model.value ? model.value.trim() : '';
  if (value) {
    emit('search', value);
  }
};
</script>

<style scoped>
.input-wrapper {
  display: flex;
  align-items: center;
  border: 2px solid v-bind('props.borderColor');
  border-radius: 2px;
  background: #fff;
  transition: border-color 0.2s ease;
  width: 100%;
}

.base-input {
  flex: 1;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 14px;
  background: transparent;
  color: #333;
}

.prefix-icon, .suffix-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>