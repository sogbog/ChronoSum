import React from 'react'
import ReactDOM from 'react-dom/client'
// import { AppRoutes } from "./routes"
// import theme from './styles/theme'
// import GlobalStyle from './styles/global'
// import { ThemeProvider } from 'styled-components'
import { ThemeSwitcher } from './styles/ThemeSwitcher'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <AppRoutes/>
    </ThemeProvider>   */}
    <ThemeSwitcher/>
  </React.StrictMode>,
)