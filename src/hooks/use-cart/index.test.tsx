import { renderHook } from '@testing-library/react-hooks'
import { MockedProvider } from '@apollo/client/testing'

import { setStorageItem } from 'utils/localStorage'

import { useCart, CartProvider, CartProviderProps } from '.'

import { cartItems, gamesMock } from './data.mock'

describe('useCart', () => {
  it('should return items and its info if there any in the cart', async () => {
    const wrapper = ({ children }: CartProviderProps) => (
      <MockedProvider mocks={[gamesMock]}>
        <CartProvider>{children}</CartProvider>
      </MockedProvider>
    )

    setStorageItem('cart', ['1', '2'])

    const { result, waitForNextUpdate } = renderHook(() => useCart(), {
      wrapper
    })

    await waitForNextUpdate()

    expect(result.current.items).toStrictEqual(cartItems)
  })
})
