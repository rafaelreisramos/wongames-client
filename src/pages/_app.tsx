import NextNprogress from 'nextjs-progressbar'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Provider as AuthProvider } from 'next-auth/client'
import { ThemeProvider } from 'styled-components'
import { ApolloProvider } from '@apollo/client'
import { CartProvider } from 'hooks/use-cart'
import { WishlistProvider } from 'hooks/use-wishlist'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { useApollo } from 'utils/apollo'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <WishlistProvider>
              <Head>
                <title>Won Games</title>
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
                  content="The best game store in the world"
                />
              </Head>

              <Component {...pageProps} />
              <GlobalStyles />
              <NextNprogress
                color={theme.colors.primary}
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
              />
            </WishlistProvider>
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </AuthProvider>
  )
}

export default App
