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
const $props = defineProps<{ i: string | number }>()

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { screenConfig, stageConfig, getMaterial, removeMaterial } = screenContext()
const { rowWidth, rowHeight } = stageConfig
const { preview } = screenConfig

const material = getMaterial($props.i)

const scaleX = computed(() => ((rowWidth.value ?? 0) * material.position.w) / 192)
const scaleY = computed(() => ((rowHeight.value ?? 0) * material.position.h) / 108)

function handleMove(_i: number | string, newX: number, newY: number) {
  material.position.x = newX
  material.position.y = newY
}

function handleResize(_i: number | string, newH: number, newW: number) {
  material.position.w = newW
  material.position.h = newH
}

function handleRemoveMaterial() {
  removeMaterial($props.i)
}
</script>

<template>
  <GridItem
    :bg="preview ? 'transparent' : 'gray'"
    :i="i" :x="material.position.x" :y="material.position.y" :w="material.position.w" :h="material.position.h"
    :is-draggable="!preview" :is-resizable="!preview"
    @move="handleMove" @resize="handleResize"
  >
    <div v-if="!preview" absolute right-1 top-1 z-3 text-4 color-white hover:cursor-pointer>
      <i title="移除物料" i-carbon-trash-can block transition-transform hover:scale-110 hover:color-red-5 @click="handleRemoveMaterial" />
    </div>
    <div relative h-full w-full overflow-hidden>
      <component
        :is="material.component" :i="i"
        transform-origin-lt :style="{ transform: `scale(${scaleX}, ${scaleY})` }" transition-transform
      />
    </div>
  </GridItem>
</template>
