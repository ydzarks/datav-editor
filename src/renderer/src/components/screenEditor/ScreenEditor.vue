<script lang="ts" setup>
import Stage from './components/Stage.vue'

const config = ref<ScreenConfig>({
  screenTitle: '大屏',
  screenWidth: 1920,
  screenHeight: 1080,
})

function handleClick() {
  config.value.screenHeight = 1280
}
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
      <n-button @click="handleClick">
        修改大屏分辨率
      </n-button>
    </n-layout-sider>
    <n-layout embedded content-class="flex flex-col">
      <n-layout-header bordered h-fit>
        <n-input v-model:value="config.screenTitle" type="text" placeholder="请输入大屏标题" />
      </n-layout-header>
      <n-layout-content :native-scrollbar="true">
        <n-scrollbar x-scrollable>
          <section :style="{ height: `${config.screenHeight + 1}px`, width: `${config.screenWidth + 1}px` }" relative>
            <Stage :config="config" />
          </section>
        </n-scrollbar>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>
