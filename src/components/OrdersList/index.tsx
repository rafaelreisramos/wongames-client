import Empty from 'components/Empty'
import GameItem, { GameItemProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}
const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Container>
    <Heading lineBottom size="small" color="black">
      My orders
    </Heading>

    {items.length ? (
      <ul>
        {items.map((game) => (
          <GameItem as="li" key={game.downloadLink} {...game} />
        ))}
      </ul>
    ) : (
      <Empty
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Container>
)

export default OrdersList
