import './MenuSong.scss'
import Icon from '../base/Icon'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userStore } from '~/store'
import { localMenus } from '~/utils/local'
import { getUserPlaylist } from '~/api/user'
import type { IMenu } from '~/types'

export default function MenuSong() {
  const user = useRecoilValue(userStore)

  const [menusList, setMenus] = useState<IMenu[]>([])
  useEffect(() => {
    if (user) {
      getUserPlaylist({ uid: user.userId }).then((res) => {
        setMenus(localMenus.concat(res))
      })
    } else {
      setMenus(localMenus)
    }
  }, [user])

  return (
    <div className="menu-scroll">
      {menusList.map((menus) => (
        <div key={menus.name} className="menu-song">
          <p className="menu-song__title">{menus.name}</p>
          <ul>
            {menus.children.map((menu) => (
              <NavLink
                to={menu.link}
                key={menu.name}
                className={({ isActive }) => 'menu-song__item' + (isActive ? ' is-active' : '')}
              >
                <Icon name={menu.icon} />
                <span className="menu-song__value">{menu.name}</span>
              </NavLink>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
