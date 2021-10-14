import Link from 'next/link'

import { useCart } from 'hooks/use-cart'

import GameItem from 'components/GameItem'
import Button from 'components/Button'
import Empty from 'components/Empty'
import Loader from 'components/Loader'

import * as S from './styles'

export type CartListProps = {
  hasLink?: boolean
}

const CartList = ({ hasLink = false }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loader />
      </S.Loading>
    )
  }

  return (
    <S.Container isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GamesList>
            {items.map((item) => (
              <GameItem key={item.title} {...item} />
            ))}
          </S.GamesList>

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
}

export default CartList
