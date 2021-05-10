import { render, screen } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined'

import Button from '.'

describe('<Heading />', () => {
  it('should render the medium size button by default', () => {
    const { container } = render(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size button', () => {
    render(<Button size="small">Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '3rem',
      padding: '0.8rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size button', () => {
    render(<Button size="large">Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      height: '5rem',
      padding: '0.8rem 4.8rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the full width button', () => {
    render(<Button fullWidth>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon button', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Button</Button>
    )

    expect(screen.getByText(/button/i)).toBeInTheDocument()
    expect(screen.getByTestId(/icon/i)).toBeInTheDocument()
  })

  it('should render a minimal version button', () => {
    render(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Button
      </Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      background: 'none',
      color: '#f231a5'
    })

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'background',
      'none',
      { modifier: ':hover' }
    )
  })

  it('should render a disabled button', () => {
    render(<Button disabled>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyleRule(
      'cursor',
      'not-allowed',
      { modifier: ':disabled' }
    )
  })

  it('should render button as a link', () => {
    render(
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
