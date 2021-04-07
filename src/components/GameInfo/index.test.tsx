import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameInfo from '.'

const props = {
  title: 'Game title',
  description: 'Game description',
  price: 220
}

describe('<GameInfo />', () => {
  it('should render headind, description and price', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: /Game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/Game description/i)).toBeInTheDocument()
    expect(screen.getByText(/\$220\.00/)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /Add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /Whishlist/i })
    ).toBeInTheDocument()
  })
})
