<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import ScreenEditor from '~/components/screenEditor/ScreenEditor.vue'
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" abstract :theme="darkTheme">
    <ScreenEditor />
  </n-config-provider>
</template>
