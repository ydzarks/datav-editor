import process from 'node:process'
import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  login: (username: string, password: string) => ipcRenderer.invoke('login', username, password),
  checkLoginStatus: () => ipcRenderer.invoke('check-login-status'),
  logout: () => ipcRenderer.invoke('logout'),
  onLoginStatusChange: (callback: (isLoggedIn: boolean) => void) => {
    ipcRenderer.on('login-status-changed', (_, isLoggedIn) => callback(isLoggedIn))
  },
}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  }
  catch (error) {
    console.error(error)
  }
}
else {
  // @ts-expect-error (define in dts)
  window.electron = electronAPI
  // @ts-expect-error (define in dts)
  window.api = api
}
