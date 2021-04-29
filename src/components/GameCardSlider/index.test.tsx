import 'session.mock'
import 'matchMediaMock'
import { render, screen } from 'utils/test-utils'

import items from './data.mock'

import GameCardSlider from '.'

describe('<GameCardSlider />', () => {
  it('should render the slider with 5 GameCards', () => {
    const { container } = render(<GameCardSlider items={items.slice(0, 5)} />)

    expect(container.querySelector('.slick-slide')).toBeInTheDocument()
    expect(container.querySelectorAll('.slick-slide')).toHaveLength(5)
  })

  it('should render white arrows if color is passed', () => {
    render(<GameCardSlider items={items} color="white" />)

    expect(screen.getByLabelText(/Next game/i)).toHaveStyle({
      color: '#fafafa'
    })
    expect(screen.getByLabelText(/Previous game/i)).toHaveStyle({
      color: '#fafafa'
    })
  })
})
