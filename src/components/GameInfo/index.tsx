import formatPrice from 'utils/formatPrice'

import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import CartButton from 'components/CartButton'
import WishlistButton from 'components/WishlistButton'

import * as S from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Container data-cy="game-info">
    <Heading size="medium" color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} size="large" hasText />
    </S.ButtonsWrapper>
  </S.Container>
)

export default GameInfo
