import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'
import { QUERY_GAMES } from 'graphql/queries/games'

import { ItemProps } from 'components/ExploreSidebar'
import filterItemsMock from 'components/ExploreSidebar/data.mock'

import Games from '.'

jest.mock('next/link', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return children
    }
  }
})

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/ExploreSidebar', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock ExploreSidebar">{children}</div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render the sections', async () => {
    const queryMocks = [
      {
        request: {
          query: QUERY_GAMES,
          variables: {
            limit: 15
          }
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
    ]

    renderWithTheme(
      <MockedProvider mocks={queryMocks} addTypename={false}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(await screen.findByText(/Sample game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render <Empty /> when no games were found', async () => {
    const queryMocks = [
      {
        request: {
          query: QUERY_GAMES,
          variables: {
            limit: 15
          }
        },
        result: {
          data: {
            games: []
          }
        }
      }
    ]

    renderWithTheme(
      <MockedProvider mocks={queryMocks} addTypename={false}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock Empty')).toBeInTheDocument()
  })
})
