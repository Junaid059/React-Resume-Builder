import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import SignInPage from './auth/sign-in/index.jsx'
import Dashboard from './dashboard/index.jsx'
import Home from './home/index.jsx' // Ensure you import Home component

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home /> // Ensure Home component is properly imported
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      }
    ]
  },
  {
    path: '/auth/sign-in',
    element: <SignInPage /> // Corrected `element` property
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
