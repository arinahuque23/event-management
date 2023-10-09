import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import myCreatedRouter from './Router/myCreatedRouter'
import AuthProvider from './ProvidersPrivates/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
     <RouterProvider router={myCreatedRouter} />
     </AuthProvider>
  </React.StrictMode>,
)
