import React from 'react'
import { render, screen } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

import Cart from '.'

const props = {
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

jest.mock('components/PaymentForm', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock PaymentForm"></div>
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

describe('<Cart />', () => {
  it('should render the sections', () => {
    render(<Cart {...props} />)

    expect(
      screen.getByRole('heading', { name: /My cart/i })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock CartList')).toBeInTheDocument()
    expect(screen.getByTestId('Mock PaymentForm')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.queryByTestId('Mock Empty')).not.toBeInTheDocument()
  })
})
