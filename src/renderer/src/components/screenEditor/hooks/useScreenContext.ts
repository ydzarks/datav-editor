import type { UnwrapNestedRefs } from 'vue'

// TODO: 远程获取屏幕配置
function getScrrenConfig(_screenId: string): UnwrapNestedRefs<ScreenConfig> {
  return reactive({
    title: '大屏',
    width: 1920,
    height: 1080,
    materials: [],
  })
}

function initDefaultConfig(): UnwrapNestedRefs<ScreenConfig> {
  return reactive({
    title: '大屏',
    width: 1920,
    height: 1080,
    materials: [],
  })
}

/**
 * 根据ScreenId生成一个对应的上下文方法
 * @param screenId
 * @returns
 */
export function useScreenContext(screenId?: string) {
  const preview = ref(false)
  const config: UnwrapNestedRefs<ScreenConfig> = screenId ? getScrrenConfig(screenId) : initDefaultConfig()

  // 布局舞台大小
  const contentWidth = computed(() => config.width + 1)
  const contentHeight = computed(() => config.height + 1)

  // 100*100舞台的宽高步长
  const rowWidth = computed(() => config.width / 100)
  const rowHeight = computed(() => config.height / 100)

  function addMaterial(material: Material) {
    config.materials.push(material)
  }

  function removeMaterial(i: number | string) {
    const index = config.materials.findIndex(material => material.i === i)
    if (index >= 0) {
      config.materials.splice(index, 1)
    }
  }

  function getMaterial(i: number | string) {
    const index = config.materials.findIndex(material => material.i === i)
    return config.materials[index]
  }

  return () => {
    return {
      preview,
      config,
      materials: config.materials,
      stageConfig: {
        contentWidth,
        contentHeight,
        rowWidth,
        rowHeight,
      },
      getMaterial,
      addMaterial,
      removeMaterial,
    }
  }
}

export type ScreenContext = ReturnType<typeof useScreenContext>
