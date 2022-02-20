import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { RecoilRoot } from 'recoil'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App'

import 'antd/dist/antd.css'
import 'virtual:svg-icons-register'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.())
