<script setup lang="ts">
import {computed, ref} from 'vue';
import {Eye, EyeOff} from 'lucide-vue-next';
import type {Component} from 'vue';

interface InputProps {
  modelValue?: string | number;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'tel';
  placeholder?: string;
  externalError?: string;
  isNumberOnly?: boolean;
  leftIcon?: Component | object;
  rightIcon?: Component | object;
}

const props = withDefaults(defineProps<InputProps>(), {
  modelValue: '',
  type: 'text',
  isNumberOnly: false,
  placeholder: '',
  externalError: ''
});

const emit = defineEmits<{
  (e: 'update:modelValue', value: string | number): void;
}>();

const internalError = ref('');
const isPasswordVisible = ref(false);

const hasError = computed(() => !!props.externalError || !!internalError.value);
const errorMessage = computed(() => props.externalError || internalError.value);

const inputType = computed(() => {
  if (props.type === 'password') return isPasswordVisible.value ? 'text' : 'password';
  return props.type;
});

const validate = (val: string) => {
  if (props.type === 'email' && val.length > 0) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    internalError.value = emailRegex.test(val) ? '' : 'Email không đúng định dạng';
  } else if (props.type === 'tel' && val.length > 0) {
    internalError.value = val.length === 10 ? '' : 'Số điện thoại phải nhập đủ 10 chữ số';
  } else {
    internalError.value = '';
  }
};

const onInput = (e: Event) => {
  const target = e.target as HTMLInputElement;
  let value = target.value;

  if (props.isNumberOnly || props.type === 'tel') {
    value = value.replace(/\D/g, '');
    if (value.length > 10) {
      value = value.slice(0, 10);
    }

    target.value = value;
  }

  validate(value);
  emit('update:modelValue', value);
};
</script>

<template>
  <div class="w-full space-y-1.5 text-left">
    <label v-if="label" class="block text-sm font-medium text-gray-700">{{ label }}</label>
    <div class="relative group">
      <div v-if="leftIcon"
           class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-shopee-orange transition-colors">
        <component :is="leftIcon" :size="20"/>
      </div>

      <input
          :value="modelValue"
          :type="inputType"
          :placeholder="placeholder"
          :class="[
          'w-full py-3 bg-white border transition-all rounded-sm text-sm outline-none',
          leftIcon ? 'pl-10' : 'pl-4',
          (type === 'password' || rightIcon) ? 'pr-10' : 'pr-4',
          hasError ? 'border-red-500 bg-red-50' : 'border-gray-200 focus:border-shopee-orange'
        ]"
          @input="onInput"
          v-bind="$attrs"
      />
      <div v-if="type === 'password' || rightIcon"
           class="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600"
           @click="type === 'password' ? (isPasswordVisible = !isPasswordVisible) : null">
        <component :is="type === 'password' ? (isPasswordVisible ? EyeOff : Eye) : rightIcon" :size="20"/>
      </div>
    </div>
    <p v-if="hasError" class="text-xs text-red-500 mt-1 min-h-[1rem]">{{ errorMessage }}</p>
  </div>
</template>