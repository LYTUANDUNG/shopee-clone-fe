<script lang="ts" setup>
const emit = defineEmits<{
  remove: []
  findSimilar: []
}>();
</script>
<template>
  <div>
    <button @click="emit('remove')">Xóa</button>
    <button @click="emit('findSimilar')">Tìm hàng tương tự</button>
  </div>
</template>

<style scoped></style>