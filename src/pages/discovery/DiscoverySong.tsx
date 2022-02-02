import { useState, useEffect } from 'react'
import SongCard from '~/components/song/SongCard'
import { getPersonalizedNewsong } from '~/api/playlist'
import { ISong } from '~/types'

export default function DiscoverySong() {
  const [songs, setSongs] = useState<ISong[]>([])

  useEffect(() => {
    getPersonalizedNewsong({ limit: 10 }).then((res) => {
      setSongs(res)
    })
  }, [])

  return (
    <>
      <h6 className="title">最新音乐</h6>
      <div className="content">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </>
  )
}
