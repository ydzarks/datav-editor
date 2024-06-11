<script setup lang="ts">
import { GridItem } from 'grid-layout-plus'

defineOptions({
  name: 'MaterialItem',
})

const $props = defineProps<{
  x: number
  y: number
  w: number
  h: number
  i: number | string
  static?: boolean
}>()

// TODO 此处模式需要优化
const rowWidth = inject<Ref<number>>('rowWidth', ref(0))
const rowHeight = inject<Ref<number>>('rowHeight', ref(0))

// TODO 物料组件的原始宽高应该通过props配置注入
const scaleX = computed(() => (rowWidth.value * $props.w) / 192)
const scaleY = computed(() => (rowHeight.value * $props.h) / 108)
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
      <component :is="$attrs.is" transform-origin-lt :style="{ transform: `scale(${scaleX}, ${scaleY})` }" transition-transform />
    </div>
  </GridItem>
</template>
