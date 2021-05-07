import Empty from 'components/Empty'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'

import * as S from './styles'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}
const OrdersList = ({ items = [] }: OrdersListProps) => (
  <S.Container>
    <Heading lineBottom size="small" color="black">
      My orders
    </Heading>

    {items.length ? (
      <ul>
        {items.map((order) => {
          return order.games.map((game) => (
            <GameItem
              as="li"
              key={`${order.id}-${game.id}`}
              {...game}
              paymentInfo={order.paymentInfo}
            />
          ))
        })}
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
