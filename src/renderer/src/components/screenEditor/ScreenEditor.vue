<script lang="ts" setup>
import Stage from './components/Stage.vue'
import { useScreenData } from './hooks/screenData'
import StageConfig from './stageConfig/StageConfig.vue'

const { config, stageConfig, addMaterial } = useScreenData()

const contentWidth = computed(() => config.value.width + 1)
const contentHeight = computed(() => config.value.height + 1)

provide('config', config)
provide('stageConfig', stageConfig)
provide('addMaterial', addMaterial)
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
          <section :style="{ height: `${contentHeight}px`, width: `${contentWidth}px` }" relative>
            <Stage />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
