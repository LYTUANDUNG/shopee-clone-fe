<template>
  <button
      v-bind="$attrs"
      :type="type"
      :class="[
      'inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98] border border-transparent cursor-pointer',
      sizeClasses,
      bgColor,
      textColor,
      rounded,
      customClasses
    ]"
      @click="handleClick"
  >
    <component
        :is="leftIcon"
        v-if="leftIcon"
        :size="iconSize"
        class="flex-shrink-0 stroke-current mr-2"
    />

    <span :class="['flex items-center justify-center', labelClasses]">
      <slot>{{ label }}</slot>
    </span>

    <component
        :is="rightIcon"
        v-if="rightIcon"
        :size="iconSize"
        class="flex-shrink-0 stroke-current ml-2"
    />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { Component } from 'vue';

interface ButtonProps {
  label?: string;
  leftIcon?: Component | object;
  rightIcon?: Component | object;
  iconSize?: number;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: string;
  customClasses?: string;
  type?: 'button' | 'submit' | 'reset';
  labelClasses?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  iconSize: 18,
  bgColor: 'bg-[#ee4d2d]',
  textColor: 'text-white',
  size: 'md',
  rounded: 'rounded-sm',
  customClasses: '',
  type: 'button',
  labelClasses: ''
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 h-8 text-xs',
    md: 'px-4 h-10 text-sm',
    lg: 'px-8 h-12 text-base',
    xl: 'w-full h-12 text-base uppercase font-medium'
  };
  return sizes[props.size] || sizes.md;
});
</script>