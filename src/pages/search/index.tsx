import './index.scss'
import { useParams } from 'react-router-dom'
import { Tabs } from 'antd'
import SearchSong from './SearchSong'
import SearchPlaylist from './SearchPlaylist'

export default function Search() {
  const { keywords } = useParams()
  return (
    <>
      <div className="search-header">
        <span className="search-header__keywords">{keywords}</span>
      </div>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="歌曲" key="1">
          <SearchSong />
        </Tabs.TabPane>
        <Tabs.TabPane tab="歌单" key="2">
          <SearchPlaylist />
        </Tabs.TabPane>
      </Tabs>
    </>
  )
}
