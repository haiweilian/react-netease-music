import './Header.scss'
import HeaderMac from './HeaderMac'
import HeaderHistory from './HeaderHistory'
import HeaderSearch from './HeaderSearch'

export default function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <HeaderMac />
        <HeaderHistory />
      </div>
      <div className="header__right">
        <HeaderSearch />
      </div>
    </div>
  )
}
