import './PlaylistIntro.scss'
import { useState, useEffect } from 'react'
import { getTopPlaylistHighquality } from '~/api/playlist'
import type { IPlaylist } from '~/types'

export default function PlaylistIntro() {
  const [playlist, setPlaylist] = useState<IPlaylist>({} as IPlaylist)

  useEffect(() => {
    getTopPlaylistHighquality({ limit: 1 }).then(({ playlists }) => {
      if (playlists.length) {
        setPlaylist(playlists[0])
      }
    })
  }, [])

  return playlist.id ? (
    <div v-show="playlist.id" className="intro-card">
      <div className="intro-card__wrapper">
        <div className="intro-card__cover">
          <img src={playlist.picUrl} />
        </div>
        <div className="intro-card__content">
          <div className="intro-card__tag">精品歌单</div>
          <p className="intro-card__name">{playlist.name}</p>
          <p className="intro-card__desc">{playlist.description}</p>
        </div>
      </div>
      <div className="intro-card__bg" style={{ backgroundImage: `url(${playlist.picUrl})` }}></div>
      <div className="intro-card__bgmask"></div>
    </div>
  ) : null
}
