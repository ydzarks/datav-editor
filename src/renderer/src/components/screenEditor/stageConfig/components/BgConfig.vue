<script lang="ts" setup>
import type { ScreenContext } from '../../hooks/useScreenContext'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { config } = screenContext()
</script>

<template>
  <div>
    背景设置
    <n-popover trigger="hover">
      <template #trigger>
        <n-icon i-carbon-help-filled siz="14" vertical-middle />
      </template>
      <span>支持背景图、背景颜色</span>
    </n-popover>
  </div>
  <div flex flex-center gap-1>
    <n-color-picker v-model:value="config.background.color" />
  </div>
</template>
