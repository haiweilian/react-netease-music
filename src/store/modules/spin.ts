import { atom } from 'recoil'

/**
 * 设置 Loading 状态
 */
export const spinStore = atom({
  key: 'spin',
  default: false,
})
