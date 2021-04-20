import { render, screen } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Game Developer',
  platforms: ['windows', 'linux', 'mac'],
  releaseDate: '2020-11-21T23:00:00',
  publisher: 'Game Publisher',
  rating: 'BR0',
  genres: ['Action', 'Adventure']
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Release Date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Genres/i })).toBeInTheDocument()
  })

  it('should render the publisher and the developer', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/Game developer/i)).toBeInTheDocument()
    expect(screen.getByText(/Game publisher/i)).toBeInTheDocument()
  })

  it('should render platforms icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /Linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Mac/i })).toBeInTheDocument()
  })

  it('should render the formatted date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('should render FREE when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('should render 18+ when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/)).toBeInTheDocument()
  })

  it('should render a list of genres', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Action / Adventure')).toBeInTheDocument()
  })
})
