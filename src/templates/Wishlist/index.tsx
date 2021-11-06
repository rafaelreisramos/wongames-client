import Base from 'templates/Base'

import { useWishlist } from 'hooks/use-wishlist'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'
import Loader from 'components/Loader'

import * as S from './styles'

export type WhishlistTemplateProps = {
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WhishlistTemplateProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <S.Loading>
            <Loader />
          </S.Loading>
        ) : items.length >= 1 ? (
          <Grid>
            {items.map((game, index) => (
              <GameCard key={`wishlist-${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="The games added to your wishlist will be shown here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
