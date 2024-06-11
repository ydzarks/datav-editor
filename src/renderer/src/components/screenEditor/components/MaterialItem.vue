<script setup lang="ts">
import { GridItem } from 'grid-layout-plus'

defineOptions({
  name: 'MaterialItem',
})

defineProps<{
  x: number
  y: number
  w: number
  h: number
  i: number | string
  static?: boolean
}>()

onMounted(() => {})
</script>

<template>
  <GridItem
    bg-gray
    :i="i" :x="x" :y="y" :w="w" :h="h" :static="static"
  >
    <div absolute right-1 top-1 z-3 text-4 color-white hover:cursor-pointer>
      <i title="移除物料" i-carbon-trash-can block transition-transform hover:scale-110 hover:color-red-5 />
    </div>
    <div relative h-full w-full overflow-hidden>
      <component :is="$attrs.is" transform-origin-lt />
    </div>
  </GridItem>
</template>
