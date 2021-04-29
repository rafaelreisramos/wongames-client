import 'session.mock'
import { act, render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

import WishlistButton from '.'

describe('<WishlistButton />', () => {
  it('should render a button to add to wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false,
      addToWishlist: jest.fn()
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    act(() => userEvent.click(screen.getByLabelText(/Add to wishlist/i)))

    await waitFor(() =>
      expect(wishlistProviderProps.addToWishlist).toHaveBeenCalledWith('1')
    )
  })

  it('should render a button to remove from wishlist', async () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true,
      removeFromWishlist: jest.fn()
    }

    render(<WishlistButton id="1" />, { wishlistProviderProps })

    act(() => userEvent.click(screen.getByLabelText(/Remove from wishlist/i)))

    await waitFor(() =>
      expect(wishlistProviderProps.removeFromWishlist).toHaveBeenCalledWith('1')
    )
  })

  it('should render a button with add to wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/Add to wishlist/i)).toBeInTheDocument()
  })

  it('should render a button with remove from wishlist text', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => true
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.getByText(/Remove from wishlist/i)).toBeInTheDocument()
  })

  it('should not render it user is not logged', () => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const useSession = jest.spyOn(require('next-auth/client'), 'useSession')
    useSession.mockImplementationOnce(() => [null])

    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      isInWishlist: () => false
    }

    render(<WishlistButton id="1" hasText />, { wishlistProviderProps })

    expect(screen.queryByText(/Add to wishlist/i)).not.toBeInTheDocument()
  })
})
