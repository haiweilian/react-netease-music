import './PlayerContent.scss'
import dayjs from 'dayjs'
import { memo } from 'react'
import { useRecoilState } from 'recoil'
import { lyricStatusStore } from '~/store'
import { thumbnail } from '~/utils'
import { ISong } from '~/types'
import Icon from '~/components/base/Icon'

interface Props {
  currentSong: ISong
  currentTime: number
  duration: number
}

function PlayerContent(props: Props) {
  const [lyricStatus, setLyricStatus] = useRecoilState(lyricStatusStore)
  const togglePlayer = () => {
    setLyricStatus(!lyricStatus)
  }

  return (
    <>
      <div className="player-content__playimg" onClick={togglePlayer}>
        <img className="player-content__blur" src={thumbnail(props.currentSong.picUrl, 40)} />
        <div className="player-content__mask"></div>
        <Icon name={lyricStatus ? 'shrink' : 'expand'} className="player-content__control" size={22} />
      </div>
      <div className="player-content__playcon" onClick={togglePlayer}>
        <div className="player-content__name">
          <span>{props.currentSong.name}</span>
          <span>-</span>
          <span>{props.currentSong.artists}</span>
        </div>
        <div className="player-content__time">
          <span>{dayjs.duration(props.currentTime, 'seconds').format('mm:ss')}</span>
          <span>/</span>
          <span>{dayjs.duration(props.duration, 'seconds').format('mm:ss')}</span>
        </div>
      </div>
    </>
  )
}

export default memo(PlayerContent)
