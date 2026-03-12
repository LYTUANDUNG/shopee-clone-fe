<script setup lang="ts">
import { computed } from 'vue';
import { type ClassValue } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva('cursor-pointer transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-foreground hover:text-[#ee4d2d] hover:underline',
      white: 'text-white hover:text-white/80',
      muted: 'text-muted-foreground hover:text-[#ee4d2d]',
      orange: 'text-[#ee4d2d] hover:text-[#ee4d2d]/80 hover:underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type LinkVariants = VariantProps<typeof linkVariants>;

const props = withDefaults(
    defineProps<{
      to?: string | object;
      href?: string;
      external?: boolean;
      variant?: LinkVariants['variant'];
      class?: ClassValue;
      target?: string;
    }>(),
    {
      variant: 'default',
      target: '_self',
    }
);

const componentType = computed(() => (props.to ? 'router-link' : 'a'));
const attrName = computed(() => (props.to ? 'to' : 'href'));
const link = computed(() => props.to || props.href);
const isExternal = computed(() => props.external || (typeof props.href === 'string' && props.href.startsWith('http')));

const targetValue = computed(() => (isExternal.value ? '_blank' : props.target));
</script>

<template>
  <component
      :is="componentType"
      :[attrName]="link"
      :target="targetValue"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      :class="cn(linkVariants({ variant: props.variant }), props.class)"
  >
    <slot />
  </component>
</template>