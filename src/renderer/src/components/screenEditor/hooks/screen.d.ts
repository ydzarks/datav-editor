declare interface Material {
  i: number | string
  component: string
  position: {
    x: number
    y: number
    w: number
    h: number
  }
  data?: any
  styleOptions?: any
}

declare interface ScreenConfig {
  title: string // 大屏名称
  width: number // 大屏宽度
  height: number // 大屏高度
  background: {
    color: '#00000000'
  }
  materials: Material[]
}
