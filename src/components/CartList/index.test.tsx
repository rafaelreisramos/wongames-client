import { render, screen } from 'utils/test-utils'

import { CartContextDefaultValues } from 'hooks/use-cart'

import CartList from '.'

import gamesMock from './data.mock'

describe('<CartList />', () => {
  it('should render the cart list', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: gamesMock,
      total: 'R$ 430,00'
    }

    const { container } = render(<CartList />, { cartProviderProps })

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText(/total/i)).toBeInTheDocument()
    expect(screen.getByText(/R\$ 430,00/)).toHaveStyle({ color: '#f231a5' })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the button', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: gamesMock
    }

    render(<CartList hasLink />, { cartProviderProps })

    expect(screen.getByText(/buy it now/i)).toBeInTheDocument()
  })

  it('should render Empty if there are no games', () => {
    render(<CartList hasLink />)

    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument()
    expect(screen.queryByText(/R\$ 430,00/)).not.toBeInTheDocument()
  })
})
