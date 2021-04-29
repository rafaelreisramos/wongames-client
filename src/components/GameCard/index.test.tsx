import 'session.mock'
import { screen, render } from 'utils/test-utils'

import item from './data.mock'

import GameCard from '.'

const { promotionalPrice, ...props } = { ...item }

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    const price = screen.getByText(/\$235\.00/)

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3cd3c1' })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={promotionalPrice} />)

    expect(screen.getByText(/\$235\.00/)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(/\$195\.00/i)).toHaveStyle({
      backgroundColor: '#3cd3c1'
    })
  })

  it('should render a small ribbon with a secondary color', () => {
    render(
      <GameCard
        {...props}
        ribbon="Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
