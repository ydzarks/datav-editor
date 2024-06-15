<script setup lang="ts">
defineProps<{ i: number }>()
</script>

<template>
  <div h-108px w-192px bg-red text-white>
    测试用物料组件 {{ i }}
  </div>
</template>
