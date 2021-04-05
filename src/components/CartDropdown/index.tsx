import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartDropdownProps = {
  items?: GameItemProps[]
  total?: string
}
const CartDropdown = ({ items, total }: CartDropdownProps) => (
  <S.Container>
    <Dropdown title={<CartIcon quantity={items?.length} />}>
      <CartList items={items} total={total} hasLink />
    </Dropdown>
  </S.Container>
)

export default CartDropdown
