import React from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { RecoilRoot } from 'recoil'
import zhCN from 'antd/lib/locale/zh_CN'
import App from './App'

import 'virtual:svg-icons-register'
import './styles/index.scss'

const root = createRoot(document.getElementById('root')!)
root.render(
  <React.StrictMode>
    <ConfigProvider locale={zhCN}>
      <HashRouter>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </HashRouter>
    </ConfigProvider>
  </React.StrictMode>
)

// install all modules under `modules/`
Object.values(import.meta.glob('./modules/*.ts', { eager: true })).map((i: any) => i.install?.())
