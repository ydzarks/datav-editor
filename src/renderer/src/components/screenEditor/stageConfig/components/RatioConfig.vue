<script lang="ts" setup>
import type { ScreenContext } from '../../hooks/useScreenContext'

const screenContext = inject('ScreenContext', (() => {}) as ScreenContext)
const { config } = screenContext()
</script>

<template>
  <div>
    分辨率设置
    <n-popover trigger="hover">
      <template #trigger>
        <n-icon i-carbon-help-filled siz="14" vertical-middle />
      </template>
      <span>设置画布大小，决定100*100画布下的原始宽高</span>
    </n-popover>
  </div>
  <div flex flex-center gap-1>
    <n-input-number v-model:value="config.width" :show-button="false" :update-value-on-input="false" placeholder="宽度" />
    <span>*</span>
    <n-input-number v-model:value="config.height" :show-button="false" :update-value-on-input="false" placeholder="高度" />
  </div>
</template>
