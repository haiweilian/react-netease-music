import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { userReducer } from './modules/user'
import { playerReducer } from './modules/player'
import { spinReducer } from './modules/spin'

export * from './modules/spin'
export * from './modules/user'
export * from './modules/player'

const store = createStore(
  combineReducers({
    spin: spinReducer,
    user: userReducer,
    player: playerReducer,
  }),
  applyMiddleware(logger)
)

export { store }
