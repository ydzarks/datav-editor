<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenContext } from './hooks/useScreenContext'
import StageConfig from './stageConfig/StageConfig.vue'

const ScreenContext = useScreenContext()
const { stageConfig } = ScreenContext()
const { contentHeight, contentWidth } = stageConfig

provide('ScreenContext', ScreenContext)
</script>

<template>
  <n-layout has-sider h-screen w-screen>
    <StageConfig />
    <n-layout embedded content-class="flex flex-col">
      <n-layout-header bordered h-fit>
        <div h-60px>
          头部工具栏区域
        </div>
      </n-layout-header>
      <n-layout-content :native-scrollbar="true">
        <n-scrollbar x-scrollable>
          <section :style="{ height: `${contentHeight}px`, width: `${contentWidth}px` }" relative>
            <Stage />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
