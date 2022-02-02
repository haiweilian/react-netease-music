import './PlaylistHeader.scss'
import type { IPlaylistDetail } from '~/types'

interface Props {
  playlist: IPlaylistDetail
}

export default function PlaylistHeader({ playlist }: Props) {
  return (
    <>
      <div className="detail-header">
        <div className="detail-header__cover">
          <img src={playlist.coverImgUrl} />
        </div>
        <div className="detail-header__content">
          <div>
            <div className="detail-header__title">{playlist.name}</div>
            <div className="detail-header__creator">
              <img className="avatar" src={playlist.avatarUrl} />
              <p className="creator">{playlist.name}</p>
              <p className="time">{playlist.createTime} 创建</p>
            </div>
          </div>
          <div className="detail-header__desc">
            <p className="desc">标签：{playlist.tags}</p>
            <p className="desc">简介：{playlist.description}</p>
          </div>
        </div>
      </div>
    </>
  )
}
