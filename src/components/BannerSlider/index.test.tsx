import 'matchMediaMock'
import { render, screen } from 'utils/test-utils'

import items from './data.mock'

import BannerSlider from '.'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with only one active item', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)

    expect(
      screen.getByRole('heading', { name: /Defy death 1/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /Defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render the dots', () => {
    const { container } = render(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
