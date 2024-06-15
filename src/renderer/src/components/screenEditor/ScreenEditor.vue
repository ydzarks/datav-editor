<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenContext } from './hooks/useScreenContext'
import StageConfig from './stageConfig/StageConfig.vue'
import ScreenUtils from './screenUtils/ScreenUtils.vue'

const ScreenContext = useScreenContext()
const { stageConfig } = ScreenContext()
const { contentHeight, contentWidth } = stageConfig

provide('ScreenContext', ScreenContext)
</script>

<template>
  <n-dialog-provider>
    <n-layout has-sider h-screen w-screen>
      <StageConfig />
      <n-layout embedded content-class="flex flex-col">
        <ScreenUtils />
        <n-layout-content :native-scrollbar="true">
          <n-scrollbar x-scrollable>
            <section :style="{ height: `${contentHeight}px`, width: `${contentWidth}px` }" relative>
              <Stage />
            </section>
          </n-scrollbar>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-dialog-provider>
</template>
