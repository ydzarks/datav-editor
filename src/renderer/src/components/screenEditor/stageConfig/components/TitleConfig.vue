<script lang="ts" setup>
import type { ScreenContext } from '../../hooks/useScreenContext'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { config } = screenContext()

const title = ref(config.value.title)

const $mesage = useMessage()

function handleConfirm() {
  if (title.value) {
    config.value.title = title.value
  }
  else {
    title.value = config.value.title
    $mesage.warning('请输入大屏标题')
  }
}
</script>

<template>
  <div>
    大屏标题设置
    <n-popover trigger="hover">
      <template #trigger>
        <n-icon i-carbon-help-filled siz="14" vertical-middle />
      </template>
      <span>决定浏览器标签标题</span>
    </n-popover>
  </div>
  <div flex flex-center gap-1>
    <n-input v-model:value="title" placeholder="请输入大屏标题" @blur="handleConfirm" />
  </div>
</template>
