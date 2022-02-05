import './PlayerProgress.scss'
import { Slider } from 'antd'

interface Props {
  currentTime: number
  duration: number
  changeCurrentTime: (time: number) => void
}

export default function PlayerProgress(props: Props) {
  return (
    <div className="player-progress">
      <Slider
        value={props.currentTime}
        min={0}
        max={props.duration}
        tooltipVisible={false}
        onChange={props.changeCurrentTime}
      />
    </div>
  )
}
