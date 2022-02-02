import { useEffect, useState } from 'react'
import { Pagination } from 'antd'
import PlaylistIntro from './PlaylistIntro'
import Tabs from '~/components/base/Tabs'
import PlaylistCard from '~/components/playlist/PlaylistCard'
import { getTopPlaylist } from '~/api/playlist'
import { localPlaylistTabs } from '~/utils/local'
import type { IPlaylist } from '~/types'

export default function Playlist() {
  const [total, setTotal] = useState(0)
  const [playlists, setPlaylists] = useState<IPlaylist[]>([])
  const [currentTab, setCurrentTab] = useState<string | number>(localPlaylistTabs[0]?.value)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getTopPlaylist({
      cat: currentTab,
      offset: currentPage - 1,
    }).then((topPlaylist) => {
      setTotal(topPlaylist.total)
      setPlaylists(topPlaylist.playlists)
    })
  }, [currentTab, currentPage])

  return (
    <>
      <PlaylistIntro />
      <Tabs value={currentTab} tabs={localPlaylistTabs} onChange={setCurrentTab} />
      <div className="result">
        {playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlist={playlist} />
        ))}
      </div>
      <Pagination total={total} current={currentPage} onChange={setCurrentPage} />
    </>
  )
}
