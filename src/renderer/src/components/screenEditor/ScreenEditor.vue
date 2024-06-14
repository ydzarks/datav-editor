<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenContext } from './hooks/useScreenContext'
import StageConfig from './stageConfig/StageConfig.vue'

const ScreenContext = useScreenContext()
const { stageConfig, resetConfig, preview } = ScreenContext()
const { contentHeight, contentWidth } = stageConfig

provide('ScreenContext', ScreenContext)

function handleReset() {
  resetConfig()
}
</script>

<template>
  <n-layout has-sider h-screen w-screen>
    <StageConfig />
    <n-layout embedded content-class="flex flex-col">
      <n-layout-header bordered h-fit>
        <div h-60px>
          <n-button type="primary" @click="handleReset">
            重置
          </n-button>
          {{ preview }}
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
