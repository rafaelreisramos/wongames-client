import Link from 'next/link'

import GameItem, { GameItemProps } from 'components/GameItem'
import Button from 'components/Button'
import Empty from 'components/Empty'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasLink?: boolean
}

const CartList = ({ items = [], total, hasLink = false }: CartListProps) => (
  <S.Container isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

        <S.Footer>
          {!hasLink && <span>Total</span>}
          <S.Total>{total}</S.Total>
          {hasLink && (
            <Link href="/cart">
              <Button as="a">Buy it now</Button>
            </Link>
          )}
        </S.Footer>
      </>
    ) : (
      <Empty
        title="Your cart is empty"
        description="Go back to the store and explore great games and offers."
        hasLink
      />
    )}
  </S.Container>
)

export default CartList
