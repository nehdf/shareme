import { StrictMode } from 'react'
import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { GoogleOAuthProvider } from '@react-oauth/google'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId={import.meta.env.REACT_APP_GOOGLE_API_TOKEN}>
      <StrictMode>
        <App />
      </StrictMode>
    </GoogleOAuthProvider>
  </BrowserRouter>
)
