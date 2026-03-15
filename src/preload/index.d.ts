import type { ElectronAPI } from '@electron-toolkit/preload'

interface API {
  login: (username: string, password: string) => Promise<void>
  checkLoginStatus: () => Promise<boolean>
  logout: () => Promise<void>
  onLoginStatusChange: (callback: (isLoggedIn: boolean) => void) => void
}

declare global {
  interface Window {
    electron: ElectronAPI
    api: API
  }
}
