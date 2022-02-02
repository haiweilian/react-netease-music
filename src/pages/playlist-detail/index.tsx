import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs } from 'antd'
import SongCard from '~/components/song/SongCard'
import Comment from '~/components/comment/Comment'
import PlaylistHeader from './PlaylistHeader'
import { CommentType } from '~/utils/constant'
import { getPlaylistDetail } from '~/api/playlist'
import type { IPlaylistDetail } from '~/types'

export default function PlaylistDetail() {
  const { id } = useParams()
  const [playlist, setPlaylist] = useState<IPlaylistDetail>({} as IPlaylistDetail)

  useEffect(() => {
    getPlaylistDetail({ id: id as string }).then((res) => {
      setPlaylist(res)
    })
  }, [id])

  return (
    <>
      <PlaylistHeader playlist={playlist} />
      <Tabs>
        <Tabs.TabPane tab="歌曲列表" key="song">
          {(playlist.songs || []).map((song) => (
            <SongCard key={song.id} song={song} />
          ))}
        </Tabs.TabPane>
        <Tabs.TabPane tab={`评论(${playlist.commentCount || 0})`} key="comment">
          {id ? <Comment id={id} type={CommentType.playlist} /> : null}
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
