<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import type { ScreenContext } from '../hooks/useScreenContext'

import MaterialItem from './MaterialItem.vue'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { stageConfig, materials } = screenContext()
const { rowWidth, rowHeight } = stageConfig

const layout = computed(() => {
  return materials.value.map((material) => {
    return {
      i: material.i,
      x: material.position.x,
      y: material.position.y,
      w: material.position.w,
      h: material.position.h,
    }
  })
})
</script>

<template>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" absolute left-0 top-0>
    <defs>
      <pattern id="smallGrid" :width="rowWidth" :height="rowHeight" patternUnits="userSpaceOnUse">
        <path :d="`M ${rowWidth} 0 L 0 0 0 ${rowHeight}`" fill="none" stroke="rgba(207, 207, 207, 0.3)" stroke-width="1" stroke-dasharray="1" />
      </pattern>
      <pattern id="middleGrid" :width="rowWidth * 5" :height="rowHeight * 5" patternUnits="userSpaceOnUse">
        <rect :width="rowWidth * 5" :height="rowHeight * 5" fill="url(#smallGrid)" />
        <path :d="`M ${rowWidth * 5} 0 L 0 0 0 ${rowHeight * 5}`" fill="none" stroke="rgba(207, 207, 207, 0.3)" stroke-width="1" />
      </pattern>
      <pattern id="grid" :width="rowWidth * 10" :height="rowHeight * 10" patternUnits="userSpaceOnUse">
        <rect :width="rowWidth * 10" :height="rowHeight * 10" fill="url(#middleGrid)" />
        <path :d="`M ${rowWidth * 10} 0 L 0 0 0 ${rowHeight * 10}`" fill="none" stroke="rgba(207, 207, 207, 0.7)" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" />
  </svg>
  <GridLayout h-full w-full :layout="layout" :auto-size="false" :col-num="100" :max-rows="100" :row-height="rowHeight" :margin="[0, 0]" :vertical-compact="false">
    <MaterialItem v-for="(_material) in materials" :key="_material.i" :i="_material.i" preserve-aspect-ratio />
  </GridLayout>
</template>
