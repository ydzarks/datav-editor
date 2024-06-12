<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import MaterialItem from './MaterialItem.vue'
import DomChart from '~/components/materials/DomChart.vue'

const $props = defineProps<{
  config: ScreenConfig
}>()

const rowWidth = computed(() => $props.config.screenWidth / 100)
const rowHeight = computed(() => $props.config.screenHeight / 100)

provide('rowWidth', rowWidth)
provide('rowHeight', rowHeight)

const layout = shallowReactive([
  {
    i: '0',
    x: 30,
    y: 30,
    w: 20,
    h: 20,
    component: DomChart,
  },
])
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
  <GridLayout :layout="layout" :auto-size="false" :col-num="100" :max-rows="100" :row-height="rowHeight" :margin="[0, 0]" :vertical-compact="false" h-full w-full>
    <MaterialItem :is="item.component" v-for="(item) in layout" :key="item.i" :i="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" />
  </GridLayout>
</template>
