import 'matchMediaMock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import highlightMock from 'components/Highlight/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'

import Showcase from '.'

const props = {
  title: 'Most Populars',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
}

describe('<Showcase />', () => {
  it('should render Showcase with title, highligh and games', () => {
    renderWithTheme(<Showcase {...props} />)

    screen.getByRole('heading', { name: /Most Populars/i })
    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })
  })

  it('should render Showcase without title', () => {
    renderWithTheme(
      <Showcase highlight={props.highlight} games={props.games} />
    )

    expect(
      screen.queryByRole('heading', { name: /Most Populars/i })
    ).not.toBeInTheDocument()

    screen.getByRole('heading', { name: highlightMock.title })
    screen.getByRole('heading', { name: gamesMock[0].title })
  })

  it('should render Showcase without highlight', () => {
    renderWithTheme(<Showcase title={props.title} games={props.games} />)

    expect(
      screen.queryByRole('heading', { name: highlightMock.title })
    ).not.toBeInTheDocument()

    screen.getByRole('heading', { name: /Most Populars/i })
    screen.getByRole('heading', { name: gamesMock[0].title })
  })

  it('should render Showcase without games', () => {
    renderWithTheme(
      <Showcase title={props.title} highlight={props.highlight} />
    )

    expect(
      screen.queryByRole('heading', { name: gamesMock[0].title })
    ).not.toBeInTheDocument()

    screen.getByRole('heading', { name: /Most Populars/i })
    screen.getByRole('heading', { name: highlightMock.title })
  })
})
