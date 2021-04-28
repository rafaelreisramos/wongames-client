import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { useSession } from 'next-auth/client'

import { useMutation } from '@apollo/client'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'

import { gamesMapper } from 'utils/mappers'

import { GameCardProps } from 'components/GameCard'

export type WishlistContextData = {
  items: GameCardProps[]
  isInWishlist: (id: string) => boolean
  addToWishlist: (id: string) => void
  removeFromWishlist: (id: string) => void
  loading: boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  isInWishlist: () => false,
  addToWishlist: () => null,
  removeFromWishlist: () => null,
  loading: false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistId, setWishlistId] = useState<string | null>()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const [createWishlist, { loading: loadingCreate }] = useMutation(
    MUTATION_CREATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistId(data?.createWishlist?.wishlist?.id)
        setWishlistItems(data?.createWishlist?.wishlist?.games || [])
      }
    }
  )

  const [updateWishlist, { loading: loadingUpdate }] = useMutation(
    MUTATION_UPDATE_WISHLIST,
    {
      context: { session },
      onCompleted: (data) => {
        setWishlistItems(data?.updateWishlist?.wishlist?.games || [])
      }
    }
  )

  const { data, loading } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: {
      identifier: session?.user?.email as string
    }
  })

  useEffect(() => {
    setWishlistId(data?.wishlists[0]?.id)
    setWishlistItems(data?.wishlists[0]?.games || [])
  }, [data])

  const wishlistIds = useMemo(() => wishlistItems.map((game) => game.id), [
    wishlistItems
  ])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  const addToWishlist = (id: string) => {
    if (!wishlistId) {
      return createWishlist({
        variables: { input: { data: { games: [...wishlistIds, id] } } }
      })
    }

    return updateWishlist({
      variables: {
        input: {
          where: { id: wishlistId },
          data: { games: [...wishlistIds, id] }
        }
      }
    })
  }

  const removeFromWishlist = (id: string) => {
    updateWishlist({
      variables: {
        input: {
          where: { id: wishlistId },
          data: {
            games: [...wishlistIds.filter((gameId: string) => gameId !== id)]
          }
        }
      }
    })
  }

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        addToWishlist,
        removeFromWishlist,
        loading: loading || loadingCreate || loadingUpdate
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export { WishlistProvider, useWishlist }
