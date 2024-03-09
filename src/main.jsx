import React from 'react'
import ReactDOM from 'react-dom/client'
import { Signin } from './pages/Signin'
import GlobalStyle from './styles/globals'
import { ThemeProvider } from "styled-components"

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signin />
    </ThemeProvider>
  </React.StrictMode>,
)
