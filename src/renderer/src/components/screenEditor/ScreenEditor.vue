<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenContext } from './hooks/useScreenContext'
import StageConfig from './stageConfig/StageConfig.vue'
import ScreenUtils from './screenUtils/ScreenUtils.vue'

const ScreenContext = useScreenContext()
const { stageConfig, config } = ScreenContext()
const { contentHeight, contentWidth } = stageConfig

// 大屏标题联动
watch(() => config.value.title, () => {
  useTitle(`${import.meta.env.VITE_APP_TITLE} - ${config.value.title}`)
}, { immediate: true })

const style = computed(() => {
  return [
    `width: ${contentWidth.value}px`,
    `height: ${contentHeight.value}px`,
    `background-color: ${config.value.background.color}`,
  ]
})

// 广播大屏上下文
provide('ScreenContext', ScreenContext)
</script>

<template>
  <n-layout has-sider flex-1>
    <StageConfig />
    <n-layout embedded content-class="flex flex-col">
      <ScreenUtils />
      <n-layout-content :native-scrollbar="true">
        <n-scrollbar x-scrollable>
          <section :style="style" relative>
            <Stage />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
