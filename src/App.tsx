import { useRoutes } from 'react-router-dom'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { Spin } from 'antd'
import { spinStore } from '~/store'
import routes from './router/index'
import emitter from '~/utils/emitter'

function App() {
  const [spinning, setSpinning] = useRecoilState(spinStore)

  useEffect(() => {
    emitter.on('spin', (val) => {
      setSpinning(val)
    })
    return () => {
      emitter.all.clear()
    }
  }, [setSpinning])

  return (
    <>
      {useRoutes(routes)}
      {spinning ? <Spin size="large" /> : null}
    </>
  )
}

export default App
