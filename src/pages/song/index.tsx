import { useState, useEffect } from 'react'
import Tabs from '~/components/base/Tabs'
import SongCard from '~/components/song/SongCard'
import { getTopSong } from '~/api/playlist'
import { localSongTabs } from '~/utils/local'
import type { ISong } from '~/types'

export default function Song() {
  const [songs, setSongs] = useState<ISong[]>([])
  const [currentTab, setCurrentTab] = useState<string | number>(localSongTabs[0]?.value)

  useEffect(() => {
    getTopSong({ type: currentTab }).then((songs) => {
      setSongs(songs)
    })
  }, [currentTab])

  return (
    <>
      <Tabs value={currentTab} tabs={localSongTabs} onChange={setCurrentTab} />
      <div className="content">
        {songs.map((song) => (
          <SongCard key={song.id} song={song} />
        ))}
      </div>
    </>
  )
}
