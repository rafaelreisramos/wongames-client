import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import { CartContextDefaultValues } from 'hooks/use-cart'

import GameItem from '.'

const props = {
  id: '1',
  img: 'game_item.jpg',
  title: 'Game title',
  price: 'R$ 200,00'
}

describe('<GameItem />', () => {
  it('should render the items', () => {
    render(<GameItem {...props} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'game_item.jpg')

    expect(
      screen.getByRole('heading', { name: /Game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
  })

  it('should render remove if the item is in the cart and call removeFromCart', () => {
    const cartProviderProps = {
      ...CartContextDefaultValues,
      isInCart: () => true,
      removeFromCart: jest.fn()
    }

    render(<GameItem {...props} />, { cartProviderProps })

    const remove = screen.getByText(/remove/i)
    expect(remove).toBeInTheDocument()

    userEvent.click(remove)
    expect(cartProviderProps.removeFromCart).toHaveBeenCalledTimes(1)
  })

  it('should render the item with download link', () => {
    const downloadLink = 'http://downloadLink'

    render(<GameItem {...props} downloadLink={downloadLink} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', downloadLink)
  })

  it('should render the item with payment options', () => {
    const paymentInfo = {
      number: '**** **** **** 1234',
      flag: 'mastercard',
      img: 'card-image.png',
      purchaseDate: 'Purchase made on 03/26/2021 at 10:00'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })

  it('should render free game when theres no paymentInfo', () => {
    const paymentInfo = {
      number: 'Free Game',
      flag: null,
      img: null,
      purchaseDate: 'Purchase made on 03/26/2021 at 10:00'
    }

    render(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByText(/free game/i)).toBeInTheDocument()
  })
})
