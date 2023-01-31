import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { TransactionsProvider } from './contexts/ParticipantsContext'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'
import { Router } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <TransactionsProvider>
          <Router />
        </TransactionsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}
