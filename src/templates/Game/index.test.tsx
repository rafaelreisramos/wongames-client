import 'matchMediaMock'
import { render, screen } from 'utils/test-utils'

import galleryMock from 'components/Gallery/data.mock'
import gameInfoMock from 'components/GameInfo/data.mock'
import gameDetailsMock from 'components/GameDetails/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'

import Game, { GameTemplateProps } from '.'
import { GameDetailsProps } from 'components/GameDetails'

const props: GameTemplateProps = {
  cover: 'bg-image.jpg',
  gameInfo: gameInfoMock,
  gallery: galleryMock,
  description: `<h1>Custom HTML</h1>`,
  gameDetails: gameDetailsMock as GameDetailsProps,
  upcomingGamesTitle: 'Upcoming games',
  upcomingHighlight: highlightMock,
  upcomingGames: [gamesMock[0]],
  recommendedTitle: 'You may like these games',
  recommendedGames: [gamesMock[0]]
}

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Gallery', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Gallery"></div>
    }
  }
})

jest.mock('components/GameDetails', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameDetails"></div>
    }
  }
})

jest.mock('components/GameInfo', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock GameInfo"></div>
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

describe('<Game />', () => {
  it('should render the template with components', () => {
    render(<Game {...props} />)

    expect(screen.getByTestId('Mock GameInfo')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Gallery')).toBeInTheDocument()
    expect(screen.getByText(/custom html/i)).toBeInTheDocument()
    expect(screen.getByTestId('Mock GameDetails')).toBeInTheDocument()
    expect(screen.getAllByTestId('Mock Showcase')).toHaveLength(2)
  })

  it('should render cover image', () => {
    render(<Game {...props} />)

    const cover = screen.getByRole('img', {
      name: gameInfoMock.title
    }).parentElement

    expect(cover).toHaveStyleRule('height', '70rem', {
      media: '(min-width: 768px)'
    })

    expect(cover).toHaveStyleRule(
      'clip-path',
      'polygon(0 0,100% 0,100% 100%,0 85%)',
      {
        media: '(min-width: 768px)'
      }
    )
  })

  it('should not render the gallery with no images', () => {
    render(<Game {...props} gallery={undefined} />)

    expect(screen.queryByTestId('Mock Gallery')).not.toBeInTheDocument()
  })

  it('should not render the gallery on mobile', () => {
    render(<Game {...props} />)

    expect(
      screen.getByTestId('Mock Gallery').parentElement?.parentElement
    ).toHaveStyle({ display: 'none' })

    expect(
      screen.getByTestId('Mock Gallery').parentElement?.parentElement
    ).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    })
  })
})
