<template>
  <button
      :class="[
      'inline-flex items-center justify-center transition-all duration-200 active:scale-95 border border-transparent cursor-pointer',
      sizeClasses,
      bgColor,
      textColor,
      rounded,
      customClasses
    ]"
      v-bind="$attrs"
      @click="handleClick"
  >
    <component :is="leftIcon" v-if="leftIcon" :size="iconSize" class="flex-shrink-0 stroke-current" />

    <span v-if="label || $slots.default" :class="labelClasses">
      <slot>{{ label }}</slot>
    </span>

    <component :is="rightIcon" v-if="rightIcon" :size="iconSize" class="flex-shrink-0 stroke-current" />
  </button>
</template>

<script setup lang="ts">
import { computed, useSlots } from 'vue';

interface ButtonProps {
  label?: string;
  leftIcon?: any;
  rightIcon?: any;
  iconSize?: number;
  bgColor?: string;
  textColor?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  rounded?: string;
  customClasses?: string;
}

const props = withDefaults(defineProps<ButtonProps>(), {
  label: '',
  iconSize: 18,
  bgColor: 'bg-shopee-orange',
  textColor: 'text-white',
  size: 'md',
  rounded: '',
  customClasses: ''
});

const emit = defineEmits<{
  (e: 'click', event: MouseEvent): void;
}>();

const slots = useSlots();

const handleClick = (event: MouseEvent) => {
  emit('click', event);
};

const labelClasses = computed(() => ({
  'ml-2': props.leftIcon && (props.label || slots.default),
  'mr-2': props.rightIcon && (props.label || slots.default),
  'font-medium': true
}));

const sizeClasses = computed(() => {
  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5 text-base',
    lg: 'px-8 py-3.5 text-lg',
    xl: 'w-full py-4 text-xl uppercase'
  };
  return sizes[props.size] || sizes.md;
});
</script>