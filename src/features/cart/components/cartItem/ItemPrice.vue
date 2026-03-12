<script lang="ts" setup>
import { formatCurrency } from "../../../../shared/utils/format";

defineProps<{ price: number }>();
</script>
<template>
  <div>
    <p>{{ formatCurrency(price) }}</p>
  </div>
</template>