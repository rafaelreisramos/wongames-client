import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import { CartContextDefaultValues } from 'hooks/use-cart'

import CartButton from '.'

describe('<CartButton />', () => {
  it('should render the add button and call addToCart when clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => false,
      addToCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/add to cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.addToCart).toHaveBeenCalledTimes(1)
  })

  it('should render the remove button and call removeFromCart when clicked', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<CartButton id="1" />, { cartProviderProps })

    const button = screen.getByLabelText(/remove from cart/i)
    expect(button).toBeInTheDocument()

    userEvent.click(button)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledTimes(1)
  })
})
