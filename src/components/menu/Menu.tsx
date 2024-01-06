import './Menu.scss'
import MenuSong from './MenuSong'
import MenuUser from './MenuUser'

export default function Menu() {
  return (
    <div className="menu">
      {/* <!-- 用户信息 --> */}
      <MenuUser />
      {/* <!-- 用户歌单 --> */}
      <MenuSong />
    </div>
  )
}
