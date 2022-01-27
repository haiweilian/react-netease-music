import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

import 'antd/dist/antd.css'
import 'virtual:svg-icons-register'
import './styles/index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// install all modules under `modules/`
Object.values(import.meta.globEager('./modules/*.ts')).map((i) => i.install?.())
