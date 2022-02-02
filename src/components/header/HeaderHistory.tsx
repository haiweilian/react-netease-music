import './HeaderHistory.scss'
import { Tooltip } from 'antd'
import Icon from '../base/Icon'

export default function HeaderHistory() {
  return (
    <div className="history">
      <span className="history__item history__item--back">
        <Tooltip title="暂未开发" placement="bottom">
          <span>
            <Icon name="arrow-back" />
          </span>
        </Tooltip>
      </span>
      <span className="history__item history__item--forward">
        <Tooltip title="暂未开发" placement="bottom">
          <span>
            <Icon name="arrow-forward" />
          </span>
        </Tooltip>
      </span>
    </div>
  )
}
