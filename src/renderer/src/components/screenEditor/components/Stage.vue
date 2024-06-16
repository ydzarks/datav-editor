<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import { convertColor } from 'naive-ui/es/color-picker/src/utils'
import type { ScreenContext } from '../hooks/useScreenContext'

import MaterialItem from './MaterialItem.vue'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { config, stageConfig, materials, screenConfig } = screenContext()
const { rowWidth, rowHeight } = stageConfig
const { useAxis } = screenConfig

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

const axisColor = computed(() => {
  return (convertColor(config.value.background.color, 'hex') as string).substring(0, 7)
})
</script>

<template>
  <svg v-show="useAxis" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" absolute left-0 top-0 :color="axisColor">
    <defs>
      <pattern id="smallGrid" :width="rowWidth" :height="rowHeight" patternUnits="userSpaceOnUse">
        <path :d="`M ${rowWidth} 0 L 0 0 0 ${rowHeight}`" fill="none" stroke="currentColor" stroke-width="1" stroke-dasharray="1" />
      </pattern>
      <pattern id="middleGrid" :width="rowWidth * 5" :height="rowHeight * 5" patternUnits="userSpaceOnUse">
        <rect :width="rowWidth * 5" :height="rowHeight * 5" fill="url(#smallGrid)" />
        <path :d="`M ${rowWidth * 5} 0 L 0 0 0 ${rowHeight * 5}`" fill="none" stroke="currentColor" stroke-width="1" />
      </pattern>
      <pattern id="grid" :width="rowWidth * 10" :height="rowHeight * 10" patternUnits="userSpaceOnUse">
        <rect :width="rowWidth * 10" :height="rowHeight * 10" fill="url(#middleGrid)" />
        <path :d="`M ${rowWidth * 10} 0 L 0 0 0 ${rowHeight * 10}`" fill="none" stroke="currentColor" stroke-width="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#grid)" filter-invert-100 />
  </svg>
  <GridLayout
    h-full w-full
    :layout="layout" :auto-size="false" :col-num="100" :max-rows="100" :row-height="rowHeight" :margin="[0, 0]" :vertical-compact="false"
  >
    <MaterialItem v-for="(_material) in materials" :key="_material.i" :i="_material.i" preserve-aspect-ratio />
  </GridLayout>
</template>
