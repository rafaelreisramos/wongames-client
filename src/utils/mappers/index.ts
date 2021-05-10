import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_popularGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

import formatPrice from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `${getImageUrl(banner.image?.url)}`,
    title: banner.title,
    subtitle: banner.subtitle,
    ...(banner.button && {
      buttonLabel: banner.button?.label,
      buttonLink: banner.button?.link
    }),
    ...(banner.ribbon && {
      ribbon: banner.ribbon?.text,
      ribbonColor: banner.ribbon?.color,
      ribbonSize: banner.ribbon?.size
    })
  }))
}

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `${getImageUrl(game.cover?.url)}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_popularGames_highlight | null | undefined
) => {
  return highlight
    ? {
        backgroundImage: `${getImageUrl(highlight?.background?.url)}`,
        floatImage: `${getImageUrl(highlight?.floatImage?.url)}`,
        alignment: highlight?.alignment,
        title: highlight?.title,
        subtitle: highlight?.subtitle,
        buttonLabel: highlight?.buttonLabel,
        buttonLink: highlight?.buttonLink
      }
    : {}
}

export const cartMapper = (games: QueryGames_games[] | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        img: `${getImageUrl(game.cover?.url)}`,
        price: formatPrice(game.price)
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => ({
        id: order.id,
        paymentInfo: {
          flag: order.card_brand,
          img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
          number: order.card_last4
            ? `**** **** **** ${order.card_last4}`
            : 'Free Game',
          purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date(order.created_at))}`
        },
        games: order.games.map((game) => ({
          id: game.id,
          title: game.name,
          downloadLink: 'https://wongames.com/game/download/gamelink1',
          img: `${getImageUrl(game.cover?.url)}`,
          price: formatPrice(game.price)
        }))
      }))
    : []
}
