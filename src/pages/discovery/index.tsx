import './index.scss'
import DiscoveryBanner from './DiscoveryBanner'
import DiscoveryPlaylist from './DiscoveryPlaylist'
import DiscoverySong from './DiscoverySong'

export default function Discovery() {
  return (
    <>
      {/* <!-- Banner --> */}
      <DiscoveryBanner />
      {/* <!-- 推荐歌单 --> */}
      <DiscoveryPlaylist />
      {/* <!-- 最新音乐 --> */}
      <DiscoverySong />
    </>
  )
}
