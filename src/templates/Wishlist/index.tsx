import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { Grid } from 'components/Grid'
import { HighlightProps } from 'components/Highlight'
import Empty from 'components/Empty'

export type WhishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WhishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games && games.length >= 1 ? (
        <Grid>
          {games.map((game, index) => (
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

export default Wishlist
