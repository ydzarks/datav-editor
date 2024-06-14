<script lang="ts" setup>
import Stage from './components/Stage.vue'
import StageConfig from './stageConfig/StageConfig.vue'

const config = ref<ScreenConfig>({
  title: '大屏',
  width: 1920,
  height: 1080,
  materials: [
    {
      component: 'DomChart',
      position: {
        x: 30,
        y: 30,
        w: 20,
        h: 20,
      },
    },
  ],
})
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
          <section :style="{ height: `${config.height + 1}px`, width: `${config.width + 1}px` }" relative>
            <Stage :config="config" />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
