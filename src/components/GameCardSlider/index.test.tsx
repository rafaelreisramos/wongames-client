import 'matchMediaMock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import items from './data.mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the slider with 5 GameCards', () => {
    const { container } = renderWithTheme(
      <GameCardSlider items={items.slice(0, 5)} />
    )

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render white arrows if color is passed', () => {
    renderWithTheme(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/Next game/i)).toHaveStyle({
      color: '#fafafa'
    })
    expect(screen.getByLabelText(/Previous game/i)).toHaveStyle({
      color: '#fafafa'
    })
  })
})
