import { lazy } from 'react'
import { RouteObject } from 'react-router-dom'
import Layout from '~/layouts/default'
const Discovery = lazy(() => import('~/pages/discovery/index'))
const Playlist = lazy(() => import('~/pages/playlist/index'))
const PlaylistDetail = lazy(() => import('~/pages/playlist-detail/index'))
const Search = lazy(() => import('~/pages/search/index'))
const Song = lazy(() => import('~/pages/song/index'))

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
