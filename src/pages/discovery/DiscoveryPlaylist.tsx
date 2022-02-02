import { useState, useEffect } from 'react'
import PlaylistCard from '~/components/playlist/PlaylistCard'
import { getPersonalizedPlaylist } from '~/api/playlist'
import type { IPlaylist } from '~/types'

export default function DiscoveryPlaylist() {
  const [playlists, setPlaylists] = useState<IPlaylist[]>([])

  useEffect(() => {
    getPersonalizedPlaylist({ limit: 10 }).then((res) => {
      setPlaylists(res)
    })
  }, [])

  return (
    <>
      <h6 className="title">推荐歌单</h6>
      <div className="content">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
    </>
  )
}
