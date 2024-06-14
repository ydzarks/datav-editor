<script setup>
function handleClick() {
}
</script>

<template>
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
</template>
