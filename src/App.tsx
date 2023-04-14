import { ThemeProvider } from 'styled-components'
import { QueryClient, QueryClientProvider } from 'react-query'

import { Home } from './pages/Home'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

const queryClient = new QueryClient()

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <Home />
      </QueryClientProvider>      
    </ThemeProvider>    
  )
}
