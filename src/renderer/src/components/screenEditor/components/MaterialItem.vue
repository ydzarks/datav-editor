<script setup lang="ts">
import { GridItem } from 'grid-layout-plus'
import type { ScreenContext } from '../hooks/useScreenContext'

defineOptions({
  name: 'MaterialItem',
  components: {
    DomChart: defineAsyncComponent(() =>
      import('~/components/materials/DomChart.vue')),
  },
})
const $props = defineProps<{
  i: number | string
  x: number
  y: number
  w: number
  h: number
  static?: boolean
  component: string
}>()
const preview = inject<boolean>('preivew', false)
const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { stageConfig } = screenContext()

const scaleX = computed(() => ((stageConfig?.rowWidth.value ?? 0) * $props.w) / 192)
const scaleY = computed(() => ((stageConfig?.rowWidth.value ?? 0) * $props.h) / 108)

onMounted(() => {})
</script>

<template>
  <GridItem
    :bg="preview ? 'transparent' : 'gray'"
    :i="i" :x="x" :y="y" :w="w" :h="h" :static="static"
  >
    <div absolute right-1 top-1 z-3 text-4 color-white hover:cursor-pointer>
      <i title="移除物料" i-carbon-trash-can block transition-transform hover:scale-110 hover:color-red-5 />
    </div>
    <div relative h-full w-full overflow-hidden>
      <component :is="component" transform-origin-lt :style="{ transform: `scale(${scaleX}, ${scaleY})` }" transition-transform />
    </div>
  </GridItem>
</template>
