import process from 'node:process'
import { resolve } from 'node:path'
import type { ConfigEnv } from 'vite'
import type { ElectronViteConfig } from 'electron-vite'
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite'

import Vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import VueMacros from 'unplugin-vue-macros/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { createHtmlPlugin } from 'vite-plugin-html'

export default defineConfig(({ mode }: ConfigEnv): ElectronViteConfig => {
  const env = loadEnv(mode, process.cwd())

  return {
    main: {
      plugins: [externalizeDepsPlugin()],
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
    },
    renderer: {
      resolve: {
        alias: {
          '~': resolve('src/renderer/src'),
        },
      },
      plugins: [
        VueMacros({
          defineOptions: false,
          defineModels: false,
          plugins: {
            vue: Vue({
              script: {
                propsDestructure: true,
                defineModel: true,
              },
            }),
          },
        }),
        AutoImport({
          vueTemplate: true,
          imports:
            [
              'vue',
              '@vueuse/core',
              {
                'naive-ui': [
                  'useDialog',
                  'useMessage',
                  'useNotification',
                  'useLoadingBar',
                ],
              },
            ],
          dts: resolve('src/renderer/src/auto-imports.d.ts'),
        }),
        Components({ dts: resolve('src/renderer/src/components.d.ts'), dirs: [], resolvers: [NaiveUiResolver()] }),
        UnoCSS(),
        createHtmlPlugin({
          inject: {
            data: {
              title: env.VITE_APP_TITLE,
            },
          },
        }),
      ],
    },
  }
})
