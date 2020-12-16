import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import theme from '../../styles/theme'
import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Main />
      </ThemeProvider>
    )

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /next.js boilerplate/i })
    ).toHaveStyle({ color: '#fafafa' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
