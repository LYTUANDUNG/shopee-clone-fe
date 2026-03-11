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
  >
    <slot />
  </component>
</template>