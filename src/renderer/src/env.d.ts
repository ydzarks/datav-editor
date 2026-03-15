/// <reference types="vite/client" />

interface ImportMetaEnv extends Readonly<Record<string, string>> {
  readonly VITE_APP_TITLE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface Window {
  api: {
    login: (username: string, password: string) => Promise<void>
    checkLoginStatus: () => Promise<boolean>
    logout: () => Promise<void>
    onLoginStatusChange: (callback: (isLoggedIn: boolean) => void) => void
  }
}
