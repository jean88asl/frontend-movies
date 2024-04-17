import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globals'
import { ThemeProvider } from "styled-components"
// import { Toaster } from "sonner"
{/* <Toaster richColors position="top-center"/> */}

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <AuthProvider>
         <Routes />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
