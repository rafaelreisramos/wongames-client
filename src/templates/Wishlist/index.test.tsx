import 'session.mock'
import 'matchMediaMock'
import { render, screen } from 'utils/test-utils'

import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

import Wishlist, { WhishlistTemplateProps } from '.'
import { WishlistContextDefaultValues } from 'hooks/use-wishlist'

const props: WhishlistTemplateProps = {
  recommendedTitle: 'You may like these games',
  recommendedHighlight: highlightMock,
  recommendedGames: [gamesMock[0]]
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Showcase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the template with components', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: [gamesMock[0]]
    }

    render(<Wishlist {...props} />, { wishlistProviderProps })

    expect(
      screen.getByRole('heading', {
        name: /wishlist/i
      })
    ).toBeInTheDocument()
    expect(screen.getByTestId('Mock Showcase')).toBeInTheDocument()
    expect(screen.getByText(/population zero/i)).toBeInTheDocument
  })

  it('should render empty when there are no games', () => {
    const wishlistProviderProps = {
      ...WishlistContextDefaultValues,
      items: []
    }

    render(
      <Wishlist
        recommendedTitle="You may like these games"
        recommendedGames={gamesMock}
        recommendedHighlight={highlightMock}
      />,
      { wishlistProviderProps }
    )

    expect(screen.queryByText(/population zero/i)).not.toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /your wishlist is empty/i })
    ).toBeInTheDocument()
  })
})
