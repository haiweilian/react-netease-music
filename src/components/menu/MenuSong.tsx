import './MenuSong.scss'

export default function MenuSong() {
  return (
    <div className="menu-scroll">
      {/* <div v-for="menus of menusList" :key="menus.name" class="menu-song">
      <p class="menu-song__title">
        {{ menus.name }}
      </p>
      <ul v-for="menu of menus.children" :key="menu.link" class="">
        <RouterLink v-slot="{navigate, isExactActive}" :to="menu.link" custom>
          <li class="menu-song__item" :class="{'is-active': isExactActive}" @click="navigate">
            <Icon :name="menu.icon" />
            <span class="menu-song__value">
              {{ menu.name }}
            </span>
          </li>
        </RouterLink>
      </ul>
    </div> */}
    </div>
  )
}
