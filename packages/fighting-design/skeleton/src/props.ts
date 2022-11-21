import type { PropType, ExtractPropTypes } from 'vue'
import type { SkeletonSizeType } from './interface'

export const Props = {
  /**
   * @zh 是否带圆角的
   */
  round: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 是否展示波浪动画
   */
  animated: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 渲染多行占位图
   */
  rows: {
    type: Number,
    default: (): number => 1
  },
  /**
   * @zh 为 true 时，显示占位图。false 展示子组件
   */
  loading: {
    type: Boolean,
    default: (): boolean => false
  },
  /**
   * @zh 设置尺寸，提供三个属性值，默认 default
   */
  size: {
    type: String as PropType<SkeletonSizeType>,
    default: (): SkeletonSizeType => 'middle',
    validator: (val: SkeletonSizeType): boolean => {
      return (['large', 'middle', 'small', 'mini'] as const).includes(val)
    }
  }
} as const

export type SkeletonPropsType = ExtractPropTypes<typeof Props>
