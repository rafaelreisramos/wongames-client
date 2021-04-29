import 'session.mock'
import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'
import { MockedProvider } from '@apollo/client/testing'
import apolloCache from 'utils/apolloCache'

import { emptyGamesMock, fetchMoreMock, gamesMock } from './data.mock'
import filterItemsMock from 'components/ExploreSidebar/data.mock'
import { ItemProps } from 'components/ExploreSidebar'

import Games from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

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

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

describe('<Games />', () => {
  it('should render the sections', async () => {
    render(
      <MockedProvider mocks={[gamesMock]}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render <Empty /> when no games were found', async () => {
    render(
      <MockedProvider mocks={[emptyGamesMock]}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(await screen.findByTestId('Mock Empty')).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(screen.getByRole('button', { name: /show more/i }))
    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    render(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock as ItemProps[]} />
      </MockedProvider>
    )

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    userEvent.click(await screen.findByLabelText(/High to Low/i))
    expect(push).toHaveBeenCalledWith({
      pathname: '/games',
      query: { platforms: ['windows'], sort_by: 'high-to-low' }
    })
  })
})
