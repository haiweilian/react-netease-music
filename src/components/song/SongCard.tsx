import './SongCard.scss'
import dayjs from 'dayjs'
import LazyLoad from 'react-lazyload'
import { store, SET_CURRENT_SONG } from '~/store'
import { thumbnail, padZero } from '~/utils'
import type { ISong } from '~/types'

interface Props {
  song: ISong
}

export default function SongCard({ song }: Props) {
  const setCurrentPlaySong = () => {
    store.dispatch({
      type: SET_CURRENT_SONG,
      value: song,
    })
  }

  return (
    <div className="song-card" onClick={setCurrentPlaySong}>
      <div className="song-card__order">
        <span className="order">{padZero(song.order)}</span>
      </div>
      {song.picUrl ? (
        <div className="song-card__cover">
          <LazyLoad height={60} scrollContainer=".layout">
            <img src={thumbnail(song.picUrl, 60)} className="" />
          </LazyLoad>
        </div>
      ) : null}
      <div className="song-card__text">{song.name}</div>
      <div className="song-card__text">{song.artists}</div>
      <div className="song-card__text">{song.album}</div>
      <div className="song-card__time">{dayjs.duration(song.duration).format('mm:ss')}</div>
    </div>
  )
}
