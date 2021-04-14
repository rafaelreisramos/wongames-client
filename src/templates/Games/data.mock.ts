import { QUERY_GAMES } from 'graphql/queries/games'

export const emptyGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: []
    }
  }
}

export const gamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
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
      ]
    }
  }
}

export const fetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
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
      ]
    }
  }
}
