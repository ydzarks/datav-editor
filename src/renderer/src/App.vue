<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'
import ScreenEditor from '~/components/screenEditor/ScreenEditor.vue'
import Login from '~/components/Login.vue'

const isLoggedIn = ref(false)
const isLoading = ref(true)

async function checkLoginStatus() {
  try {
    isLoggedIn.value = await window.api.checkLoginStatus()
  }
  catch (error) {
    console.error('Failed to check login status:', error)
  }
  finally {
    isLoading.value = false
  }
}

async function handleLogout() {
  try {
    await window.api.logout()
  }
  catch (error) {
    console.error('Logout failed:', error)
  }
}

onMounted(() => {
  checkLoginStatus()
  window.api.onLoginStatusChange((status) => {
    isLoggedIn.value = status
  })
})
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" abstract :theme="darkTheme">
    <n-message-provider>
      <n-dialog-provider>
        <div v-if="isLoading" class="loading-container">
          <n-spin size="large" />
        </div>
        <Login v-else-if="!isLoggedIn" />
        <div v-else class="editor-container">
          <div class="editor-header">
            <h1>大屏编辑器</h1>
            <n-button type="error" @click="handleLogout">
              退出登录
            </n-button>
          </div>
          <ScreenEditor />
        </div>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
}

.editor-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 24px;
  background: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.editor-header h1 {
  margin: 0;
  font-size: 18px;
  font-weight: 500;
  color: #fff;
}
</style>
