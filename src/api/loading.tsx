import ReactDOM from 'react-dom'
import { Spin } from 'antd'

let needLoadingRequestCount = 0

function startLoading() {
  ReactDOM.createPortal(<Spin tip="加载中..." size="large" />, document.querySelector('body')!)
}

function endLoading() {
  document.body.removeChild(document.getElementById('loading')!)
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
