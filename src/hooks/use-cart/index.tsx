import { createContext, useContext, useEffect, useState } from 'react'

import { getStorageItem, setStorageItem } from 'utils/localStorage'
import { cartMapper } from 'utils/mappers'
import formatPrice from 'utils/formatPrice'

import { useQueryGames } from 'graphql/queries/games'

const CART_KEY = 'cart'

export type CartItem = {
  id: string
  img: string
  title: string
  price: string
}

export type CartContextData = {
  loading: boolean
  items: CartItem[]
  quantity: number
  total: string
  isInCart: (id: string) => boolean
  addToCart: (id: string) => void
  removeFromCart: (id: string) => void
  clearCart: () => void
}

export const CartContextDefaultValues = {
  loading: false,
  items: [],
  quantity: 0,
  total: formatPrice(0),
  isInCart: () => false,
  addToCart: () => null,
  removeFromCart: () => null,
  clearCart: () => null
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

  const { data, loading } = useQueryGames({
    skip: !cartItems?.length,
    variables: { where: { id: cartItems } }
  })

  const cartTotal =
    data?.games.reduce((total, game) => {
      return total + game.price
    }, 0) || 0

  const isInCart = (id: string) => (id ? cartItems.includes(id) : false)

  const saveCart = (items: string[]) => {
    setCartItems(items)
    setStorageItem(CART_KEY, items)
  }

  const addToCart = (id: string) => saveCart([...cartItems, id])

  const removeFromCart = (id: string) => {
    const newCartItems = cartItems.filter((item) => item !== id)
    saveCart(newCartItems)
  }

  const clearCart = () => saveCart([])

  return (
    <CartContext.Provider
      value={{
        loading,
        items: cartMapper(data?.games),
        quantity: cartItems.length,
        total: formatPrice(cartTotal),
        isInCart,
        addToCart,
        removeFromCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart }
