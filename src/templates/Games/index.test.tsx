import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import { ItemProps } from 'components/ExploreSidebar'
import gamesMock from 'components/GameCardSlider/data.mock'
import filterItemsMock from 'components/ExploreSidebar/data.mock'

import Games from '.'

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

jest.mock('components/GameCard', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameCard"></div>
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
  it('should render the sections', () => {
    renderWithTheme(
      <Games
        games={[gamesMock[0]]}
        filterItems={filterItemsMock as ItemProps[]}
      />
    )

    expect(screen.getByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameCard')).toBeInTheDocument()

    expect(
      screen.getByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render <Empty /> when no games were found', () => {
    renderWithTheme(<Games filterItems={filterItemsMock as ItemProps[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
