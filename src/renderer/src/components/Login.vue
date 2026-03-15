<script setup lang="ts">
import { darkTheme, dateZhCN, zhCN } from 'naive-ui'

const username = ref('')
const password = ref('')
const loading = ref(false)
const message = useMessage()

async function handleLogin() {
  if (!username.value || !password.value) {
    message.warning('请输入用户名和密码')
    return
  }

  loading.value = true
  try {
    await window.api.login(username.value, password.value)
    message.success('登录成功')
  }
  catch (error: any) {
    message.error(error.message || '登录失败')
  }
  finally {
    loading.value = false
  }
}
</script>

<template>
  <n-config-provider :locale="zhCN" :date-locale="dateZhCN" :theme="darkTheme">
    <div class="login-container">
      <div class="login-card">
        <div class="login-header">
          <h1>大屏编辑器</h1>
          <p>请登录以继续</p>
        </div>
        <div class="login-form">
          <n-form :model="{ username, password }" size="large">
            <n-form-item label="用户名">
              <n-input
                v-model:value="username"
                placeholder="请输入用户名"
                @keyup.enter="handleLogin"
              />
            </n-form-item>
            <n-form-item label="密码">
              <n-input
                v-model:value="password"
                type="password"
                placeholder="请输入密码"
                show-password-on="click"
                @keyup.enter="handleLogin"
              />
            </n-form-item>
            <n-button
              type="primary"
              block
              size="large"
              :loading="loading"
              @click="handleLogin"
            >
              登录
            </n-button>
          </n-form>
        </div>
        <div class="login-footer">
          <p>默认账号: admin / admin</p>
        </div>
      </div>
    </div>
  </n-config-provider>
</template>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.login-card {
  width: 400px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.login-header {
  text-align: center;
  margin-bottom: 32px;
}

.login-header h1 {
  margin: 0 0 8px 0;
  font-size: 28px;
  font-weight: 600;
  color: #fff;
}

.login-header p {
  margin: 0;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.login-form {
  margin-bottom: 24px;
}

.login-footer {
  text-align: center;
  padding-top: 16px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.login-footer p {
  margin: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}
</style>
