<script setup lang="ts">
interface Props {
  to?: string;
  href?: string;
  target?: string;
  customClasses?: string;
}

withDefaults(defineProps<Props>(), {
  target: '_self',
  customClasses: ''
});
</script>

<template>
  <component
      :is="to ? 'router-link' : 'a'"
      :to="to"
      :href="href"
      :target="target"
      :class="['cursor-pointer hover:opacity-80 transition-opacity no-underline', customClasses]"
    :is="componentType"
    :[attrName]="link"
    :target="isExternal ? '_blank' : undefined"
    :rel="isExternal ? 'noopener noreferrer' : undefined"
    :class="cn(linkVariants({ variant, class: props.class }))"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type ClassValue } from 'clsx';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const linkVariants = cva('cursor-pointer transition-colors duration-200', {
  variants: {
    variant: {
      default: 'text-foreground hover:text-shopee-orange hover:underline',
      white: 'text-white hover:text-white/80',
      muted: 'text-muted-foreground hover:text-shopee-orange',
      orange: 'text-shopee-orange hover:text-shopee-orange/80 hover:underline',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

/* eslint-disable @typescript-eslint/no-explicit-any */
type LinkVariants = VariantProps<typeof linkVariants>;

const props = withDefaults(
  defineProps<{
    to?: string | object;
    href?: string;
    external?: boolean;
    variant?: LinkVariants['variant'];
    class?: ClassValue;
  }>(),
  {
    variant: 'default',
    class: undefined,
  }
);

const componentType = computed(() => (props.to ? 'router-link' : 'a'));
const attrName = computed(() => (props.to ? 'to' : 'href'));
const link = computed(() => props.to || props.href);
const isExternal = computed(() => props.external || !!props.href);
</script>