import { render, screen } from 'utils/test-utils'
import React from 'react'

import OrdersList from '.'
import ordersMock from './data.mock'

jest.mock('components/GameItem', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock GameItem">{children}</div>
    }
  }
})

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty" />
    }
  }
})

describe('<OrdersList />', () => {
  it('should render the orders list', () => {
    render(<OrdersList items={ordersMock} />)

    expect(
      screen.getByRole('heading', { name: /My orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock GameItem')).toHaveLength(2)
  })

  it('should render the empty component', () => {
    render(<OrdersList />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
