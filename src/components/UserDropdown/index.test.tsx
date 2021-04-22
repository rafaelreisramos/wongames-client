import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import UserDropdown from '.'

describe('<UserDropdown />', () => {
  beforeEach(() => {
    render(<UserDropdown username="John Doe" />)
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
    expect(
      screen.getByRole('button', { name: /sign out/i })
    ).toBeInTheDocument()
  })
})
