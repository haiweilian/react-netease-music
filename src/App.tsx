import { Spin } from 'antd'
import { useEffect } from 'react'
import { useRoutes } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { spinStore } from '~/store'
import emitter from '~/utils/emitter'
import routes from './router/index'

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
