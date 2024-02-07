import { CssBaseline, ThemeProvider } from '@mui/material'
import { theme } from '@/themes/default'
import '@/assets/styles/app.scss'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main>
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}