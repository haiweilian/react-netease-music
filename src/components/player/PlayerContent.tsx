import './PlayerContent.scss'
import dayjs from 'dayjs'
import { useState } from 'react'
import { store, SET_LYRIC_PAGE_STATUS } from '~/store'
import { thumbnail } from '~/utils'
import { ISong } from '~/types'
import Icon from '~/components/base/Icon'

interface Props {
  currentSong: ISong
  currentTime: number
  duration: number
}

export default function PlayerContent(props: Props) {
  const [iconStatus, setIconStatus] = useState('expand')
  const togglePlayer = () => {
    store.dispatch({
      type: SET_LYRIC_PAGE_STATUS,
      value: null,
    })
  }
  store.subscribe(() => {
    setIconStatus(store.getState().player.lyricPageStatus ? 'shrink' : 'expand')
  })

  return (
    <>
      <div className="player-content__playimg" onClick={togglePlayer}>
        <img className="player-content__blur" src={thumbnail(props.currentSong.picUrl, 40)} />
        <div className="player-content__mask"></div>
        <Icon name={iconStatus} className="player-content__control" size={22} />
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
