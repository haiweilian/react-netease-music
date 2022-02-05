import type { Action } from 'redux'
import type { ISong } from '~/types'

// 设置当前播放歌曲的信息
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG'

// 设置歌词页打开状态
export const SET_LYRIC_PAGE_STATUS = 'SET_LYRIC_PAGE_STATUS'

export interface IPlayerState {
  currentSong: ISong
  lyricPageStatus: boolean
}

export interface IPlayerAction extends Action {
  value: any
}

export function playerReducer(
  state: IPlayerState = {
    currentSong: {} as ISong,
    lyricPageStatus: false,
  },
  action: IPlayerAction
): IPlayerState {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.value,
      }
    case SET_LYRIC_PAGE_STATUS:
      return {
        ...state,
        lyricPageStatus: action.value === null ? !state.lyricPageStatus : action.value,
      }
    default:
      return state
  }
}
