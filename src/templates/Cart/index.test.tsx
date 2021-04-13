import { screen } from '@testing-library/react'
import React from 'react'

import { renderWithTheme } from 'utils/tests/helpers'

import itemsMock from 'components/CartList/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import cardsMock from 'components/PaymentOptions/data.mock'

import Cart from '.'

const props = {
  cards: cardsMock,
  items: itemsMock,
  total: 'R$ 430,00',
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/CartList', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock CartList"></div>
    }
  }
})

jest.mock('components/PaymentOptions', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentOptions"></div>
    }
  }
})

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
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

describe('<Cart />', () => {
  it('should render the sections', () => {
    renderWithTheme(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /My cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentOptions')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })

  it('should render <Empty /> if there are no items in the cart', () => {
    renderWithTheme(<Cart {...props} items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
