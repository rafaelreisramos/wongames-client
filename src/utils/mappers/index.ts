import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_popularGames_highlight
} from 'graphql/generated/QueryHome'

import formatPrice from 'utils/formatPrice'

export const bannersMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
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

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: QueryHome_sections_popularGames_highlight | null | undefined
) => {
  return highlight
    ? {
        backgroundImage: `http://localhost:1337${highlight?.background?.url}`,
        floatImage: `http://localhost:1337${highlight?.floatImage?.url}`,
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
        img: `http://localhost:1337${game.cover?.url}`,
        price: formatPrice(game.price)
      }))
    : []
}
