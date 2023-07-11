import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './App'
import { AppLayout } from './layouts/AppLayout'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App>
      <AppLayout />
    </App>
  </React.StrictMode>,
)
