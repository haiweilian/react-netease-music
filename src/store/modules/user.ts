import { atom } from 'recoil'
import type { IUser } from '~/types'

/**
 * 设置用户登录信息
 */
export const userStore = atom<IUser | null>({
  key: 'user',
  default: null,
})
