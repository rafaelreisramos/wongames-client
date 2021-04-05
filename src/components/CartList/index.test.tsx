import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import CartList from '.'

import gamesMock from './data.mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const { container } = renderWithTheme(
      <CartList items={gamesMock} total="R$ 430,00" />
    )

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 430,00/)).toHaveStyle({ color: '#f231a5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    renderWithTheme(<CartList items={gamesMock} total="R$ 430,00" hasLink />)

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render Empty if there are no games', () => {
    renderWithTheme(<CartList hasLink />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/R\$ 430,00/)).not.toBeInTheDocument()
  })
})
