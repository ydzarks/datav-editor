<script setup lang="ts">
defineProps<{ i: number }>()
</script>

<template>
  <div h-108px w-192px bg-red text-white>
    Demo {{ i }}
  </div>
</template>
