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
    expect(screen.getByText(/R\$ 430,00/i)).toHaveStyle({ color: '#f231a5' })

    expect(container.firstChild).toMatchSnapshot()
  })
})
