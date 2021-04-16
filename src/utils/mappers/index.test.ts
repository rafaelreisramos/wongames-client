import { QueryGames_games } from 'graphql/generated/QueryGames'
import {
  QueryHome_banners,
  QueryHome_sections_newGames_highlight
} from 'graphql/generated/QueryHome'

import { bannersMapper, gamesMapper, highlightMapper } from '.'

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
