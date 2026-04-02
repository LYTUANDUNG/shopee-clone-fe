<script setup lang="ts">
import { computed, ref } from 'vue';
import { Eye, EyeOff } from 'lucide-vue-next';
import type { Component } from 'vue';

interface InputProps {
  modelValue?: string | number;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  placeholder?: string;
  error?: string; // Đây là prop nhận lỗi từ bên ngoài (Zod)
  isNumberOnly?: boolean;
  leftIcon?: Component | object;
  rightIcon?: Component | object;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  isNumberOnly: false,
  placeholder: '',
  error: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const isPasswordVisible = ref(false);

// 1. Thêm lại các biến Computed để Template có cái mà dùng
const hasError = computed(() => !!props.error);
const errorMessage = computed(() => props.error);

const inputType = computed(() => {
  if (props.type === 'password') return isPasswordVisible.value ? 'text' : 'password';
  return props.type;
});

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let value = target.value;

  if (props.isNumberOnly || props.type === 'tel') {
    value = value.replace(/\D/g, '');
  }

  emit('update:modelValue', value);
};
</script>

<template>
  <div class="w-full space-y-1.5 text-left">
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative group">

      <input
      :value="modelValue"
      :type="inputType"
      :placeholder="placeholder"
      @input="onInput"
      v-bind="$attrs"
      class="w-full py-3 bg-white border transition-all rounded-sm text-sm outline-none"
      :class="[
      leftIcon ? 'pl-10' : 'pl-4',
      (type === 'password' || rightIcon) ? 'pr-10' : 'pr-4',
      hasError ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-orange-500'
      ]"
      />

      <div v-if="type === 'password' || rightIcon"
           class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600 select-none"
           @click.stop.prevent="type === 'password' ? (isPasswordVisible = !isPasswordVisible) : null">
        <component :is="type === 'password' ? (isPasswordVisible ? EyeOff : Eye) : rightIcon" :size="20"/>
      </div>
    </div>

    <p v-if="hasError" class="text-xs text-red-500 mt-1 min-h-[1rem]">{{ errorMessage }}</p>
  </div>
</template>