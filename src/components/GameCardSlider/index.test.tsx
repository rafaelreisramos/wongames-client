import 'matchMediaMock'
import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/300x142',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/300x143',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/300x144',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render the slider with 5 GameCards', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

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
