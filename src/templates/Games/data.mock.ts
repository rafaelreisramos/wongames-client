import { QUERY_GAMES } from 'graphql/queries/games'

export const emptyGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GamesConnection'
      }
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample game',
          slug: 'sample-game',
          cover: {
            url: 'sample-game.jpg'
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

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {}, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more',
          cover: {
            url: 'sample-game.jpg'
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
