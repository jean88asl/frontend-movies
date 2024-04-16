import React from 'react'
import ReactDOM from 'react-dom/client'
import GlobalStyle from './styles/globals'
import { ThemeProvider } from "styled-components"
import { Toaster } from "sonner"

import { Routes } from './routes'

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      <Toaster richColors position="top-center"/>
    </ThemeProvider>
  </React.StrictMode>,
)
