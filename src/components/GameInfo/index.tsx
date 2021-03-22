import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'

import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: string
}

const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Container>
    <Heading size="medium" color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{`$${price}`}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button size="large" icon={<AddShoppingCart />}>
        Add to Cart
      </Button>

      <Button size="large" icon={<FavoriteBorder />} minimal>
        Whishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Container>
)

export default GameInfo
