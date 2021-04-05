import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  beforeEach(() => {
    renderWithTheme(<UserDropdown username="John Doe" />)
  })

  it('should render the username', () => {
    expect(screen.getByText(/john doe/i)).toBeInTheDocument()
  })

  it('should render the menu', () => {
    userEvent.click(screen.getByText(/john doe/i))

    expect(
      screen.getByRole('link', { name: /my profile/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /wishlist/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /sign out/i })).toBeInTheDocument()
  })
})
