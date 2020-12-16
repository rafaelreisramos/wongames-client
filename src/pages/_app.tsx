import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Next app boilerplate</title>
        <link
          rel="shortcut icon"
          type="image/png"
          href="/img/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          type="image/png"
          href="/img/apple-touch-icon.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Next app boilerplate with Jest, Typescript and Styled Components"
        />
      </Head>

      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default App
