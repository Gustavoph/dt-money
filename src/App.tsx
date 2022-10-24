import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/TransactionsContext'
import { Transactions } from './pages/Transactions'
import { defaultTheme, GlobalStyle } from './styles'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <TransactionsProvider>
        <Transactions />
        <GlobalStyle />
      </TransactionsProvider>
    </ThemeProvider>
  )
}
