import React from 'react'
import ReactDOM from 'react-dom/client'
import { Signup } from './pages/Signup'
import GlobalStyle from './styles/globals'
import { ThemeProvider } from "styled-components"

import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Signup />
    </ThemeProvider>
  </React.StrictMode>,
)
