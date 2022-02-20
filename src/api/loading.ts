import emitter from '~/utils/emitter'

let needLoadingRequestCount = 0

function startLoading() {
  emitter.emit('spin', true)
}

function endLoading() {
  emitter.emit('spin', false)
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
