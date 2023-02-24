import './PlayerProgress.scss'
import { Slider } from 'antd'
import { memo } from 'react'

interface Props {
  currentTime: number
  duration: number
  changeCurrentTime: (time: number) => void
}

function PlayerProgress(props: Props) {
  return (
    <div className="player-progress">
      <Slider
        value={props.currentTime}
        min={0}
        max={props.duration}
        tooltip={{ open: false }}
        onChange={props.changeCurrentTime}
      />
    </div>
  )
}

export default memo(PlayerProgress)
