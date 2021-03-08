import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  img: '/img/red-dead-img.jpg',
  title: `Read Dead II Redemption`,
  developer: `Rockstar Games`,
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

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
    expect(screen.getByLabelText(/Add to Wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    const price = screen.getByText(props.price)

    expect(price).not.toHaveStyle({ textDecoration: 'line-through' })
    expect(price).toHaveStyle({ backgroundColor: '#3cd3c1' })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 195,00" />)

    expect(screen.getByText(props.price)).toHaveStyle({
      textDecoration: 'line-through'
    })
    expect(screen.getByText(/R\$ 195,00/i)).toHaveStyle({
      backgroundColor: '#3cd3c1'
    })
  })

  it('should render a filled Favorite icon when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/Remove from Wishlist/i)).toBeInTheDocument()
  })

  it('should call onFavorite method when favorite is clicked', () => {
    const onFavorite = jest.fn()

    renderWithTheme(<GameCard {...props} favorite onFavorite={onFavorite} />)

    userEvent.click(screen.getAllByRole('button')[0])

    expect(onFavorite).toBeCalled()
  })

  it('should render a small ribbon with a secondary color', () => {
    renderWithTheme(
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
