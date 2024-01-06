import './PlaylistCard.scss'
import LazyLoad from 'react-lazyload'
import { useNavigate } from 'react-router-dom'
import Icon from '~/components/base/Icon'
import type { IPlaylist } from '~/types'
import { thumbnail, formatCount } from '~/utils'

interface Props {
  playlist: IPlaylist
}

export default function PlaylistCard({ playlist }: Props) {
  const navigate = useNavigate()
  const goPlaylist = () => {
    navigate(`/playlist/${playlist.id}`)
  }

  return (
    <div className="playlist-card" onClick={goPlaylist}>
      <div className="playlist-card__inner">
        <LazyLoad height={190} scrollContainer=".layout">
          <img src={thumbnail(playlist.picUrl, 190)} className="playlist-card__cover" />
        </LazyLoad>
        <div className="playlist-card__desc">
          <span className="desc">播放量：{formatCount(playlist.playCount)}</span>
        </div>
        <div className="playlist-card__play">
          <Icon name="round-play-arrow" />
        </div>
      </div>
      <p className="playlist-card__name">{playlist.name}</p>
    </div>
  )
}
