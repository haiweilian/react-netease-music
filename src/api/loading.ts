import { store, SET_LOADING } from '~/store'

let needLoadingRequestCount = 0

function startLoading() {
  store.dispatch({
    type: SET_LOADING,
    value: true,
  })
}

function endLoading() {
  store.dispatch({
    type: SET_LOADING,
    value: false,
  })
}

function tryCloseLoading() {
  if (needLoadingRequestCount === 0) {
    endLoading()
  }
}

export function showFullScreenLoading() {
  if (needLoadingRequestCount === 0) {
    startLoading()
  }
  needLoadingRequestCount++
}

export function tryHideFullScreenLoading() {
  if (needLoadingRequestCount <= 0) return
  needLoadingRequestCount--
  if (needLoadingRequestCount === 0) {
    setTimeout(() => {
      tryCloseLoading()
    })
  }
}
