<script setup lang="ts">
import type { ScreenContext } from '../hooks/useScreenContext'

import TitleConfig from './components/TitleConfig.vue'
import RatioConfig from './components/RatioConfig.vue'
import BgConfig from './components/BgConfig.vue'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { addMaterial } = screenContext()

function handleAddMaterial() {
  addMaterial({ i: new Date().getTime(), component: 'DomChart', position: { x: 20, y: 20, w: 20, h: 20 } })
}
</script>

<template>
  <n-layout-sider
    :native-scrollbar="false"
    collapse-mode="width"
    :collapsed-width="0"
    :width="240"
    show-trigger="bar"
    content-class="px-2 py-3 min-h-full"
    bordered transition
  >
    <div flex flex-col items-stretch justify-start gap-2>
      <TitleConfig />
      <RatioConfig />
      <BgConfig />
      <n-button type="primary" @click="handleAddMaterial">
        添加物料组件
      </n-button>
    </div>
  </n-layout-sider>
</template>
