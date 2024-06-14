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

export function useScreenData(screenId?: string) {
  const config: Ref<ScreenConfig> = screenId ? getScrrenConfig(screenId) : initDefaultConfig()

  const rowWidth = computed(() => config.value.width / 100)
  const rowHeight = computed(() => config.value.height / 100)

  function addMaterial(material: Material) {
    config.value.materials.push(material)
  }

  function removeMaterial(i: number) {
    config.value.materials.splice(i, 1)
  }

  return {
    config,
    stageConfig: {
      rowWidth,
      rowHeight,
    },
    addMaterial,
    removeMaterial,
  }
}
