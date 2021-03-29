import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import GameItem from '.'

const props = {
  img: 'game_item.jpg',
  title: 'Game title',
  price: 'R$ 200,00'
}

describe('<GameItem />', () => {
  it('should render the items', () => {
    renderWithTheme(<GameItem {...props} />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'game_item.jpg')

    expect(
      screen.getByRole('heading', { name: /Game title/i })
    ).toBeInTheDocument()

    expect(screen.getByText('R$ 200,00')).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const downloadLink = 'http://downloadLink'

    renderWithTheme(<GameItem {...props} downloadLink={downloadLink} />)

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

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )
    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
