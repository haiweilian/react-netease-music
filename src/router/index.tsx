import type { RouteObject } from 'react-router-dom'
import Layout from '~/layouts/default'
import Discovery from '~/pages/discovery/index'
import Playlist from '~/pages/playlist/index'
import PlaylistDetail from '~/pages/playlist-detail/index'
import Search from '~/pages/search/index'
import Song from '~/pages/song/index'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        path: 'discovery',
        element: <Discovery />,
      },
      {
        path: 'playlist',
        element: <Playlist />,
      },
      {
        path: 'playlist/:id',
        element: <PlaylistDetail />,
      },
      {
        path: 'search/:keywords',
        element: <Search />,
      },
      {
        path: 'song',
        element: <Song />,
      },
    ],
  },
]

export default routes
