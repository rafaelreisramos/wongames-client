import { createContext, useContext, useEffect, useState } from 'react'

import { getStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'
import formatPrice from 'utils/formatPrice'

import { useQueryGames } from 'graphql/queries/games'

const CART_KEY = 'cart'

type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  items: CartItem[]
  quantity: number
  total: string
}

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: formatPrice(0)
}

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
)

export type CartProviderProps = {
  children: React.ReactNode
}

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([])

  useEffect(() => {
    const data = getStorageItem(CART_KEY)

    if (data) setCartItems(data)
  }, [])

  const { data } = useQueryGames({
    skip: !cartItems?.length,
    variables: { where: { id: cartItems } }
  })

  const cartTotal =
    data?.games.reduce((total, game) => {
      return total + game.price
    }, 0) || 0

  return (
    <CartContext.Provider
      value={{
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(cartTotal)
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
