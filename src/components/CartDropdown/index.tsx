import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'

import * as S from './styles'

const CartDropdown = () => {
  return (
    <S.Container>
      <Dropdown title={<CartIcon />}>
        <CartList hasLink />
      </Dropdown>
    </S.Container>
  )
}

export default CartDropdown
