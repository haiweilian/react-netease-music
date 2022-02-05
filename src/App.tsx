import { useRoutes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { store } from './store'
import routes from './router/index'

function App() {
  const [spinning, setSpinning] = useState(false)
  useEffect(() => {
    const unSubscribe = store.subscribe(() => {
      setSpinning(store.getState().spin.loading)
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
