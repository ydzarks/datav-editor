<script lang="ts" setup>
import type { ScreenContext } from '../hooks/useScreenContext'

const dialog = useDialog()
const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { resetConfig, screenConfig } = screenContext()
const { useAxis } = screenConfig

function handleReset() {
  dialog.success({
    title: '重置配置',
    content: '是否重置配置？',
    positiveText: '重置',
    negativeText: '取消',
    maskClosable: false,
    closeOnEsc: false,
    onPositiveClick: () => {
      resetConfig()
    },
  })
}
</script>

<template>
  <n-layout-header bordered h-fit>
    <div flex items-center gap-2 px-4 py-2>
      <n-button type="error" text-color="white" size="small" @click="handleReset">
        <n-icon size="16" i-carbon-reset mr-1 />
        重置
      </n-button>
      <n-checkbox v-model:checked="useAxis" size="small">
        辅助网格
      </n-checkbox>
    </div>
  </n-layout-header>
</template>
