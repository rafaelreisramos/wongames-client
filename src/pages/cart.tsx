import Cart, { CartProps } from 'templates/Cart'

import itemsMock from 'components/CartList/data.mock'
import gamesMock from 'components/GameCardSlider/data.mock'
import highlightMock from 'components/Highlight/data.mock'
import cardsMock from 'components/PaymentOptions/data.mock'

export default function CartPage(props: CartProps) {
  return <Cart {...props} />
}

export async function getServerSideProps() {
  return {
    props: {
      cards: cardsMock,
      items: itemsMock,
      total: 'R$ 430,00',
      recommendedGames: gamesMock,
      recommendedHighlight: highlightMock
    }
  }
}
