import MenuUser from './MenuUser'
import MenuSong from './MenuSong'
import './Menu.scss'

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
