import { render, screen } from 'utils/test-utils'

import { CartContextDefaultValues } from 'hooks/use-cart'

import CartDropdown from '.'
import itemsMock from 'components/CartList/data.mock'

describe('<CartDropdown />', () => {
  beforeEach(() => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      items: itemsMock,
      quantity: itemsMock.length,
      total: 'R$ 430,00'
    }

    render(<CartDropdown />, { cartProviderProps })
  })

  it('should render <CartIcon /> and its badge', () => {
    expect(screen.getByLabelText(/shopping cart/i)).toBeInTheDocument()
    expect(screen.getByText(`${itemsMock.length}`)).toBeInTheDocument()
  })

  it('should render Dropdown content with cart items and total', () => {
    expect(screen.getByText(/R\$ 430,00/)).toBeInTheDocument()
    expect(screen.getByText(`${itemsMock[0].title}`)).toBeInTheDocument()
  })
})
