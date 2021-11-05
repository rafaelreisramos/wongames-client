import Link from 'next/link'
import { Done } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import { Container } from 'components/Container'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import { useEffect } from 'react'

export type SuccessTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Success = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: SuccessTemplateProps) => {
  const { clearCart } = useCart()

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return (
    <Base>
      <Container>
        <S.Container>
          <S.Heading>Your purchase was successful</S.Heading>

          <S.CheckMark>
            <Done />
          </S.CheckMark>

          <S.Text>
            Wait for your payment details by e-mail. Your game is now available
            for download inside your{' '}
            <Link href="/profile/orders">
              <a>Orders List</a>
            </Link>
            {'. '}
            Enjoy!
          </S.Text>
        </S.Container>

        <Showcase
          title={recommendedTitle}
          games={recommendedGames}
          highlight={recommendedHighlight}
        />
      </Container>
    </Base>
  )
}

export default Success
