import './PlayerControl.scss'
import { Tooltip } from 'antd'
import { useMemo, memo } from 'react'
import Icon from '~/components/base/Icon'

interface Props {
  playing: boolean
  togglePlaying: () => void
}

function PlayerControl(props: Props) {
  const status = useMemo(() => {
    return props.playing ? 'player-pause' : 'player-play'
  }, [props.playing])

  return (
    <>
      <div className="player-control__prev">
        <Tooltip title="暂未开发" placement="top">
          <span>
            <Icon name="player-prev" size={22} />
          </span>
        </Tooltip>
      </div>
      <div className="player-control__play" onClick={props.togglePlaying}>
        <Icon name={status} size={50} />
      </div>
      <div className="player-control__next">
        <Tooltip title="暂未开发" placement="top">
          <span>
            <Icon name="player-next" size={22} />
          </span>
        </Tooltip>
      </div>
    </>
  )
}

export default memo(PlayerControl)
