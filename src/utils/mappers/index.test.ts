import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGames_highlight
} from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'

import {
  bannersMapper,
  cartMapper,
  gamesMapper,
  highlightMapper,
  ordersMapper
} from '.'

describe('bannersMapper()', () => {
  it('should map banners data to the right format', () => {
    const banner = {
      title: 'Banner title',
      subtitle: 'Banner subtitle',
      image: {
        url: '/image.jpg'
      },
      button: {
        label: 'button label',
        link: 'button link'
      },
      ribbon: {
        text: 'ribbon text',
        color: 'primary',
        size: 'normal'
      }
    } as QueryHome_banners

    expect(bannersMapper([banner])).toStrictEqual([
      {
        img: 'http://localhost:1337/image.jpg',
        title: 'Banner title',
        subtitle: 'Banner subtitle',
        buttonLabel: 'button label',
        buttonLink: 'button link',
        ribbon: 'ribbon text',
        ribbonSize: 'normal',
        ribbonColor: 'primary'
      }
    ])
  })
})

describe('gamesMapper()', () => {
  it('should return an empty array if there are no games', () => {
    expect(gamesMapper(null)).toStrictEqual([])
  })

  it('should map games data to the right format', () => {
    const game = {
      id: '1',
      name: 'Game name',
      slug: 'game_slug',
      cover: {
        url: '/cover.jpg'
      },
      developers: [{ name: 'Game developer' }],
      price: 100
    } as QueryGames_games

    expect(gamesMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game name',
        slug: 'game_slug',
        developer: 'Game developer',
        img: 'http://localhost:1337/cover.jpg',
        price: 100
      }
    ])
  })
})

describe('highlighMapper()', () => {
  it('should return empty object if no highlight', () => {
    expect(highlightMapper(null)).toStrictEqual({})
  })

  it('should map highlight data to the right format', () => {
    const highlight = {
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      background: {
        url: '/background.jpg'
      },
      floatImage: {
        url: '/floatImage.jpg'
      },
      alignment: 'left',
      buttonLabel: 'button label',
      buttonLink: 'button link'
    } as QueryHome_sections_newGames_highlight

    expect(highlightMapper(highlight)).toStrictEqual({
      backgroundImage: 'http://localhost:1337/background.jpg',
      floatImage: 'http://localhost:1337/floatImage.jpg',
      alignment: 'left',
      title: 'Highlight title',
      subtitle: 'Highlight subtitle',
      buttonLabel: 'button label',
      buttonLink: 'button link'
    })
  })
})

describe('cartMapper()', () => {
  it('should return empty object if no games', () => {
    expect(cartMapper(undefined)).toStrictEqual([])
  })

  it('should map cart games data to the right format', () => {
    const game = {
      id: '1',
      name: 'Game name',
      cover: {
        url: '/cover.jpg'
      },
      price: 100
    } as QueryGames_games

    expect(cartMapper([game])).toStrictEqual([
      {
        id: '1',
        title: 'Game name',
        img: 'http://localhost:1337/cover.jpg',
        price: '$100.00'
      }
    ])
  })
})

describe('ordersMapper()', () => {
  it('should return empty object if no orders', () => {
    expect(ordersMapper(undefined)).toStrictEqual([])
  })

  it('should map orders data to the right format', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        created_at: '2021-05-05T19:13:50.961Z',
        card_brand: 'mastercard',
        card_last4: '1234',
        games: [
          {
            id: '1',
            name: 'Game title',
            price: 215.0,
            cover: {
              url: '/image.jpg'
            }
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: 'mastercard',
          img: '/img/cards/mastercard.png',
          number: '**** **** **** 1234',
          purchaseDate: 'Purchase made on May 5, 2021'
        },
        games: [
          {
            id: '1',
            title: 'Game title',
            downloadLink: 'https://wongames.com/game/download/gamelink1',
            img: 'http://localhost:1337/image.jpg',
            price: '$215.00'
          }
        ]
      }
    ])
  })

  it('should return free game when its free', () => {
    const orders = [
      {
        __typename: 'Order',
        id: '1',
        created_at: '2021-05-05T19:13:50.961Z',
        card_brand: null,
        card_last4: null,
        games: [
          {
            id: '1',
            name: 'Game title',
            price: 0,
            cover: {
              url: '/image.jpg'
            }
          }
        ]
      }
    ] as QueryOrders_orders[]

    expect(ordersMapper(orders)).toStrictEqual([
      {
        id: '1',
        paymentInfo: {
          flag: null,
          img: null,
          number: 'Free Game',
          purchaseDate: 'Purchase made on May 5, 2021'
        },
        games: [
          {
            id: '1',
            title: 'Game title',
            downloadLink: 'https://wongames.com/game/download/gamelink1',
            img: 'http://localhost:1337/image.jpg',
            price: '$0.00'
          }
        ]
      }
    ])
  })
})
