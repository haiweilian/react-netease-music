import { BrowserRouter as Router } from 'react-router-dom'
import Header from '~/components/header/Header'
import Menu from '~/components/menu/Menu'
import './default.scss'

export default function Layout() {
  return (
    <Router>
      <main className="layout">
        {/* <!-- 头部导航 --> */}
        <Header />
        {/* <!-- 左侧菜单 --> */}
        <Menu />
        {/* <!-- 播放器 --> */}
        {/* <Player /> */}
        {/* <!-- 内容区域 --> */}
      </main>
    </Router>
  )
}
