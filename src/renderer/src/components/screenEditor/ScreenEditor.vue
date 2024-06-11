<script lang="ts" setup>
import Stage from './components/Stage.vue'

const width = 1920
const height = 1080

const config = ref<ScreenConfig>({
  screenTitle: '大屏',
  screenWidth: 1920,
  screenHeight: 1080,
})
</script>

<template>
  <n-layout has-sider h-screen w-screen>
    <n-layout-sider
      :native-scrollbar="false"
      collapse-mode="width"
      :collapsed-width="0"
      :width="240"
      show-trigger="bar"
      content-style="padding: 24px;"
      bordered transition
    >
      <p>侧边栏图形列表区域</p>
    </n-layout-sider>
    <n-layout embedded content-class="flex flex-col">
      <n-layout-header bordered h-fit>
        <n-input v-model:value="config.screenTitle" type="text" placeholder="请输入大屏标题" />
      </n-layout-header>
      <n-layout-content :native-scrollbar="true">
        <n-scrollbar x-scrollable>
          <section :style="{ height: `${height + 1}px`, width: `${width + 1}px` }" relative>
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" absolute left-0 top-0>
              <defs>
                <pattern id="smallGrid" width="19.2" height="10.8" patternUnits="userSpaceOnUse">
                  <path d="M 19.2 0 L 0 0 0 10.8" fill="none" stroke="rgba(207, 207, 207, 0.3)" stroke-width="1" stroke-dasharray="1" />
                </pattern>
                <pattern id="middleGrid" width="96" height="54" patternUnits="userSpaceOnUse">
                  <rect width="96" height="54" fill="url(#smallGrid)" />
                  <path d="M 96 0 L 0 0 0 54" fill="none" stroke="rgba(207, 207, 207, 0.3)" stroke-width="1" />
                </pattern>
                <pattern id="grid" width="192" height="108" patternUnits="userSpaceOnUse">
                  <rect width="192" height="108" fill="url(#middleGrid)" />
                  <path d="M 192 0 L 0 0 0 108" fill="none" stroke="rgba(207, 207, 207, 0.7)" stroke-width="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <Stage :config="config" />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
