import { atom } from 'recoil'
import type { ISong } from '~/types'

/**
 * 设置当前播放歌曲的信息
 */
export const songStore = atom<ISong | null>({
  key: 'song',
  default: null,
})

/**
 * 设置歌词页打开状态
 */
export const lyricStatusStore = atom({
  key: 'lyric-status',
  default: false,
})
