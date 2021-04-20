import { render, screen } from 'utils/test-utils'

import CardsList from '.'

import cardsMock from 'components/PaymentOptions/data.mock'

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    render(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /My cards/i })
    ).toBeInTheDocument()

    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )

    expect(screen.getByText(/2345/)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )
  })
})
