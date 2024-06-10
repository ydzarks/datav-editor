<script setup lang="ts">
import { GridItem, GridLayout } from 'grid-layout-plus'
import DomChart from '~/components/materials/DomChart.vue'

const $props = defineProps<{
  config: ScreenConfig
}>()

const layout = shallowReactive([
  { x: 30, y: 30, w: 20, h: 20, i: '0', static: false, component: DomChart },
])

function handleMove(i: number | string, newX: number, newY: number) {
  layout[i].x = newX
  layout[i].y = newY
}

function handleMoved(i: number | string, newX: number, newY: number) {
  layout[i].x = newX
  layout[i].y = newY
}

function handleResize() {
}

function handleResized() {

}

function removeMaterial(i: number | string) {
  const index = layout.findIndex((item => item.i === i))
  if (index >= 0) {
    layout.splice(index, 1)
  }
}
</script>

<template>
  <GridLayout v-model:layout="layout" :auto-size="false" :col-num="100" :max-rows="100" :row-height="$props.config.screenHeight / 100" :margin="[0, 0]" :vertical-compact="false" h-full w-full>
    <GridItem
      v-for="(item) in layout" :key="item.i"
      :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i" bg-gray
      @move="handleMove"
      @moved="handleMoved"
      @resize="handleResize"
      @resized="handleResized"
    >
      <div absolute right-1 top-1 z-3 text-4 color-white hover:cursor-pointer>
        <i title="移除物料" i-carbon-trash-can block transition-transform hover:scale-110 hover:color-red-5 @click="removeMaterial(item.i)" />
      </div>
      <div relative h-full w-full overflow-hidden>
        <component :is="item.component" transform-origin-lt />
      </div>
    </GridItem>
  </GridLayout>
</template>
