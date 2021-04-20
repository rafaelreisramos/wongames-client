import { FavoriteBorder } from '@styled-icons/material-outlined'

import formatPrice from 'utils/formatPrice'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'
import CartButton from 'components/CartButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Container>
    <Heading size="medium" color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />

      <Button size="large" icon={<FavoriteBorder />} minimal>
        Whishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Container>
)

export default GameInfo
