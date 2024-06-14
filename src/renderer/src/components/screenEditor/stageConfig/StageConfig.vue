<script setup lang="ts">
import type { ScreenContext } from '../hooks/useScreenContext'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { addMaterial } = screenContext()

function handleAddMaterial() {
  addMaterial({ i: new Date().getTime(), component: 'DomChart', position: { x: 20, y: 20, w: 20, h: 20 } })
}

function handleClick() {}
</script>

<template>
  <n-layout-sider
    :native-scrollbar="false"
    collapse-mode="width"
    :collapsed-width="0"
    :width="240"
    show-trigger="bar"
    content-style="padding: 24px;"
    bordered transition
  >
    <p>侧边栏图形列表区域</p>
    <n-button @click="handleClick">
      修改大屏分辨率
    </n-button>
    <n-button type="primary" @click="handleAddMaterial">
      添加物料组件
    </n-button>
  </n-layout-sider>
</template>
