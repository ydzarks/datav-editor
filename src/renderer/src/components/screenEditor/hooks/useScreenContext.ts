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

/**
 * 根据ScreenId生成一个对应的上下文方法
 * @param screenId
 * @returns
 */
export function useScreenContext(screenId?: string) {
  const config: Ref<ScreenConfig> = screenId ? getScrrenConfig(screenId) : initDefaultConfig()

  // 布局舞台大小
  const contentWidth = computed(() => config.value.width + 1)
  const contentHeight = computed(() => config.value.height + 1)

  // 100*100舞台的宽高步长
  const rowWidth = computed(() => config.value.width / 100)
  const rowHeight = computed(() => config.value.height / 100)

  function addMaterial(material: Material) {
    config.value.materials.push(material)
  }

  function removeMaterial(i: number) {
    config.value.materials.splice(i, 1)
  }

  return () => {
    return { config, stageConfig: { contentWidth, contentHeight, rowWidth, rowHeight }, addMaterial, removeMaterial }
  }
}

export type ScreenContext = ReturnType<typeof useScreenContext>
