import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSearch } from '~/api/search'
import PlaylistCard from '~/components/playlist/PlaylistCard'
import type { IPlaylist } from '~/types'
import { SearchType } from '~/utils/constant'

export default function SearchPlaylist() {
  const { keywords } = useParams()
  const [total, setTotal] = useState(0)
  const [playlist, setPlaylist] = useState<IPlaylist[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getSearch({
      keywords: keywords || '',
      type: SearchType.playlist,
      offset: currentPage - 1,
    }).then((res) => {
      setTotal(res?.total)
      setPlaylist(res?.playlists || [])
    })
  }, [keywords, currentPage])

  return (
    <>
      {playlist.map((song) => (
        <PlaylistCard key={song.id} playlist={song} />
      ))}
      <Pagination total={total} current={currentPage} onChange={setCurrentPage} />
    </>
  )
}
