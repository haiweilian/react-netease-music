import { Pagination } from 'antd'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSearch } from '~/api/search'
import SongCard from '~/components/song/SongCard'
import type { ISong } from '~/types'
import { SearchType } from '~/utils/constant'

export default function SearchSong() {
  const { keywords } = useParams()
  const [total, setTotal] = useState(0)
  const [songs, setSongs] = useState<ISong[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    getSearch({
      keywords: keywords || '',
      type: SearchType.single,
      offset: currentPage - 1,
    }).then((res) => {
      setTotal(res?.total)
      setSongs(res?.songs || [])
    })
  }, [keywords, currentPage])

  return (
    <>
      {songs.map((song) => (
        <SongCard key={song.id} song={song} />
      ))}
      <Pagination total={total} current={currentPage} onChange={setCurrentPage} />
    </>
  )
}
