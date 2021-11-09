import '../.jest/nextImageMock'
import { ThemeProvider } from 'styled-components'
import { RouterContext } from 'next/dist/next-server/lib/router-context'
import { CartContext, CartContextDefaultValues } from 'hooks/use-cart'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'won-light',
    values: [
      {
        name: 'won-light',
        value: theme.colors.white
      },
      {
        name: 'won-dark',
        value: theme.colors.mainBg
      }
    ]
  },
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
          }}
      >
        <GlobalStyles />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  ),
]
