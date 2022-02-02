import type { Action } from 'redux'
import type { IUser } from '~/types'

// 设置用户登录
export const SET_LOGIN = 'SET_LOGIN'

// 设置用户退出
export const SET_LOGOUT = 'SET_LOGOUT'

// 设置用户登录信息
export const SET_USER = 'SET_USER'

export interface IUserState {
  user: IUser
}

export interface IUserAction extends Action {
  value: Partial<IUser>
}

export function userReducer(
  state: IUserState = {
    user: {} as IUser,
  },
  action: IUserAction
) {
  switch (action.type) {
    case SET_USER:
      return { user: action.value }
    default:
      return state
  }
}
