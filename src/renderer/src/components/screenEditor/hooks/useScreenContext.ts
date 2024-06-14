import type { UnwrapNestedRefs } from 'vue'

// TODO: 远程获取屏幕配置
function getScrrenConfig(_screenId: string): Ref<ScreenConfig> {
  return ref({
    title: '大屏',
    width: 1920,
    height: 1080,
    materials: [],
  })
}

function initDefaultConfig(): Ref<ScreenConfig> {
  return ref({
    title: '大屏',
    width: 1920,
    height: 1080,
    materials: [],
  })
}

function initConfig(screenId?: string) {
  return screenId ? getScrrenConfig(screenId) : initDefaultConfig()
}

/**
 * 根据ScreenId生成一个对应的上下文方法
 * @param screenId
 */
export function useScreenContext(screenId?: string) {
  const preview = ref(false)
  // 用Ref而不用Reactive的主要原因是需要重置时只需要config.value = initConfig(screenId)
  // 用Reactive则需要将内部的值一个个覆盖，而直接config = initConfig(screenId)则不会触发视图更新，因为这是一个引用类型的赋值
  const config: Ref<ScreenConfig> = initConfig(screenId)

  function resetConfig() {
    preview.value = !preview.value
    config.value = initConfig(screenId).value
  }

  const materials = computed(() => config.value.materials)

  // 布局舞台大小
  const contentWidth = computed(() => config.value.width + 1)
  const contentHeight = computed(() => config.value.height + 1)

  // 100*100舞台的宽高步长
  const rowWidth = computed(() => config.value.width / 100)
  const rowHeight = computed(() => config.value.height / 100)

  function addMaterial(material: Material) {
    config.value.materials.push(material)
  }

  function removeMaterial(i: number | string) {
    const index = config.value.materials.findIndex(material => material.i === i)
    if (index >= 0) {
      config.value.materials.splice(index, 1)
    }
  }

  function getMaterial(i: number | string) {
    const index = config.value.materials.findIndex(material => material.i === i)
    return config.value.materials[index]
  }

  return () => {
    return {
      preview,
      config,
      materials,
      stageConfig: {
        contentWidth,
        contentHeight,
        rowWidth,
        rowHeight,
      },
      resetConfig,
      getMaterial,
      addMaterial,
      removeMaterial,
    }
  }
}

export type ScreenContext = ReturnType<typeof useScreenContext>
