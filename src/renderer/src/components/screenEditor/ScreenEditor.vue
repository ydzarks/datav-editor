<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenContext } from './hooks/useScreenContext'
import StageConfig from './stageConfig/StageConfig.vue'

const ScreenContext = useScreenContext()
const { config, stageConfig } = ScreenContext()

provide('ScreenContext', ScreenContext)
</script>

<template>
  <n-layout has-sider h-screen w-screen>
    <StageConfig />
    <n-layout embedded content-class="flex flex-col">
      <n-layout-header bordered h-fit>
        <n-input v-model:value="config.title" type="text" placeholder="请输入大屏标题" />
      </n-layout-header>
      <n-layout-content :native-scrollbar="true">
        <n-scrollbar x-scrollable>
          <section :style="{ height: `${stageConfig.contentHeight.value}px`, width: `${stageConfig.contentWidth.value}px` }" relative>
            <Stage />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
