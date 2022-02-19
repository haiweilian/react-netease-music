import './PlayerVolume.scss'
import { Slider } from 'antd'
import { memo, useRef, useState } from 'react'
import Icon from '~/components/base/Icon'

interface Props {
  volume: number
  changeVolume: (volume: number) => void
}

function PlayerVolume(props: Props) {
  /**
   * 切换静音时保存现有音量
   */
  const volumeCache = useRef(0)
  const volumeStatus = useRef(true)
  const [volumeStatusName, setVolumeStatusName] = useState('volume-up')
  const changeVolumeStatus = () => {
    volumeStatus.current = !volumeStatus.current
    setVolumeStatusName(volumeStatus.current ? 'volume-up' : 'volume-off')
    if (volumeStatus.current) {
      props.changeVolume(volumeCache.current)
    } else {
      volumeCache.current = props.volume
      props.changeVolume(0)
    }
  }

  return (
    <div className="player-volume">
      <Icon name={volumeStatusName} size={20} onClick={changeVolumeStatus} />
      <Slider
        value={props.volume}
        min={0}
        max={1}
        step={0.01}
        tooltipVisible={false}
        onChange={props.changeVolume}
        className="player-volume__slider"
      />
    </div>
  )
}

export default memo(PlayerVolume)
