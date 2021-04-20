import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { where: { id: ['1', '2'] } }
  },
  result: {
    data: {
      games: [
        {
          id: '1',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'Sample short description',
          cover: {
            url: '/sample-game.jpg'
          },
          developers: [{ name: 'Sample Developer' }],
          price: 120.09,
          __typename: 'Game'
        },
        {
          id: '2',
          name: 'Sample Game',
          slug: 'sample-game',
          short_description: 'Sample short description',
          cover: {
            url: '/sample-game.jpg'
          },
          developers: [{ name: 'Sample Developer' }],
          price: 120.09,
          __typename: 'Game'
        }
      ],
      gamesConnection: {
        values: [{ id: '1' }, { id: '2' }],
        __typename: 'GamesConnection'
      }
    }
  }
}

export const cartItems = [
  {
    id: '1',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$120.09',
    title: 'Sample Game'
  },
  {
    id: '2',
    img: 'http://localhost:1337/sample-game.jpg',
    price: '$120.09',
    title: 'Sample Game'
  }
]
