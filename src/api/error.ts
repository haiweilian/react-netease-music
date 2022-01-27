import { message } from 'antd'

export function showError(msg: any) {
  if (msg.response) {
    message.error(msg.response.data.message)
  } else {
    message.error(msg)
  }
}
