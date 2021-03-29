import { screen } from '@testing-library/react'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Heading />', () => {
  it('should render the medium size button by default', () => {
    const { container } = renderWithTheme(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size button', () => {
    renderWithTheme(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size button', () => {
    renderWithTheme(<Button size="large">Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the full width button', () => {
    renderWithTheme(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon button', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render a minimal version button', () => {
    renderWithTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      background: 'none',
      color: '#f231a5'
    })

    expect(
      screen.getByRole('button', { name: /button/i })
    ).toHaveStyleRule('background', 'none', { modifier: ':hover' })
  })

  it('should render a disabled button', () => {
    renderWithTheme(<Button disabled>Button</Button>)

    expect(
      screen.getByRole('button', { name: /button/i })
    ).toHaveStyleRule('cursor', 'not-allowed', { modifier: ':disabled' })
  })

  it('should render button as a link', () => {
    renderWithTheme(
      <Button as="a" href="/link">
        Link
      </Button>
    )

    expect(screen.getByRole('link', { name: /link/i })).toHaveAttribute(
      'href',
      '/link'
    )
  })
})
