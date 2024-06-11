<script setup lang="ts">
import { GridLayout } from 'grid-layout-plus'
import MaterialItem from './MaterialItem.vue'
import DomChart from '~/components/materials/DomChart.vue'

const $props = defineProps<{
  config: ScreenConfig
}>()

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
  <GridLayout :layout="layout" :auto-size="false" :col-num="100" :max-rows="100" :row-height="$props.config.screenHeight / 100" :margin="[0, 0]" :vertical-compact="false" h-full w-full>
    <MaterialItem :is="item.component" v-for="(item) in layout" :key="item.i" :i="item.i" :x="item.x" :y="item.y" :w="item.w" :h="item.h" />
  </GridLayout>
</template>
