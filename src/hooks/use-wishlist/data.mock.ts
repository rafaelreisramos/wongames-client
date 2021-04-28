import {
  MUTATION_CREATE_WISHLIST,
  MUTATION_UPDATE_WISHLIST
} from 'graphql/mutations/wishlist'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'

const gameMock = (id: string) => ({
  id,
  name: `Game name ${id}`,
  slug: `game-slug-${id}`,
  cover: {
    url: '/cover.jpg'
  },
  developers: [{ name: 'Game developer' }],
  price: 100,
  __typename: 'Game'
})

export const createWishlistMock = {
  request: {
    query: MUTATION_CREATE_WISHLIST,
    context: { session: { accessToken: 'token' } },
    variables: {
      input: {
        data: {
          games: ['3']
        }
      }
    }
  },
  result: {
    data: {
      createWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('3')]
        }
      }
    }
  }
}

export const updateWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { accessToken: 'token' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['1', '2', '3'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('1'), gameMock('2'), gameMock('3')]
        }
      }
    }
  }
}

export const removeWishlistMock = {
  request: {
    query: MUTATION_UPDATE_WISHLIST,
    context: { session: { accessToken: 'token' } },
    variables: {
      input: {
        where: { id: 1 },
        data: { games: ['2'] }
      }
    }
  },
  result: {
    data: {
      updateWishlist: {
        wishlist: {
          id: 1,
          games: [gameMock('2')]
        }
      }
    }
  }
}

export const wishlistMock = {
  request: {
    query: QUERY_WISHLIST,
    context: { session: { accessToken: 'token' } },
    variables: {
      identifier: 'joe.doe@email.com'
    }
  },
  result: {
    data: {
      wishlists: [
        {
          id: 1,
          games: [gameMock('1'), gameMock('2')]
        }
      ]
    }
  }
}

export const wishlistItems = [
  {
    id: '1',
    title: 'Game name 1',
    slug: 'game-slug-1',
    developer: 'Game developer',
    img: 'http://localhost:1337/cover.jpg',
    price: 100
  },
  {
    id: '2',
    title: 'Game name 2',
    slug: 'game-slug-2',
    developer: 'Game developer',
    img: 'http://localhost:1337/cover.jpg',
    price: 100
  },
  {
    id: '3',
    title: 'Game name 3',
    slug: 'game-slug-3',
    developer: 'Game developer',
    img: 'http://localhost:1337/cover.jpg',
    price: 100
  }
]
