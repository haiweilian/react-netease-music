import type { Action } from 'redux'

// 设置 Loading
export const SET_LOADING = 'SET_LOADING'

export interface ISpinState {
  loading: false
}

export interface ISpinAction extends Action {
  value: boolean
}

export function spinReducer(
  state: ISpinState = {
    loading: false,
  },
  action: ISpinAction
) {
  switch (action.type) {
    case SET_LOADING:
      return { loading: action.value }
    default:
      return state
  }
}
