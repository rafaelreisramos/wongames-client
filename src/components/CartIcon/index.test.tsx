import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import CartIcon from '.'

describe('<CartIcon />', () => {
  it('should render the cart icon without badge', () => {
    renderWithTheme(<CartIcon />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByLabelText(/cart items/i)).not.toBeInTheDocument()
  })

  it('should render the cart icon with a badge', () => {
    renderWithTheme(<CartIcon quantity={10} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(/10/i)).toBeInTheDocument()
  })

  it('should not render a badge if quantity is negative', () => {
    renderWithTheme(<CartIcon quantity={-1} />)

    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.queryByText(/-1/i)).not.toBeInTheDocument()
  })
})
