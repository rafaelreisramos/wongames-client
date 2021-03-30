import { screen } from '@testing-library/react'
import React from 'react'
import { renderWithTheme } from 'utils/tests/helpers'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Heading">{children}</div>
    }
  }
})

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProfileMenu"></div>
    }
  }
})

describe('<Profile />', () => {
  it('should render the profile page', () => {
    renderWithTheme(<Profile>children</Profile>)

    expect(screen.getByText(/children/i)).toBeInTheDocument()
    expect(screen.getByText(/My profile/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
