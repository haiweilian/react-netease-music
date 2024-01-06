import './SongCard.scss'
import dayjs from 'dayjs'
import LazyLoad from 'react-lazyload'
import { useSetRecoilState } from 'recoil'
import { songStore } from '~/store'
import type { ISong } from '~/types'
import { thumbnail, padZero } from '~/utils'

interface Props {
  song: ISong
}

export default function SongCard({ song }: Props) {
  const setSong = useSetRecoilState(songStore)

  return (
    <div className="song-card" onClick={() => setSong(song)}>
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
