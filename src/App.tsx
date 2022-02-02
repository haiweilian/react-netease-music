import { useRoutes } from 'react-router-dom'
import { Spin } from 'antd'
import routes from './router/index'
import { useEffect, useState } from 'react'
import { store } from './store'

function App() {
  const [spinning, setSpinning] = useState(false)
  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setSpinning((store.getState().spin as any).loading)
    })
    return unSubscribe
  }, [])

  return (
    <>
      {useRoutes(routes)}
      {spinning ? <Spin size="large" /> : null}
    </>
  )
}

export default App
