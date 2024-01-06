import './Header.scss'
import HeaderHistory from './HeaderHistory'
import HeaderMac from './HeaderMac'
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
