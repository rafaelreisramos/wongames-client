import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon
} from '@styled-icons/material-outlined'

import Logo from 'components/Logo'

const Menu = () => (
  <S.Container>
    <S.IconContainer>
      <MenuIcon />
    </S.IconContainer>
    <S.LogoContainer>
      <Logo hideOnMobile />
    </S.LogoContainer>
    <S.MenuGroup>
      <S.IconContainer>
        <SearchIcon />
      </S.IconContainer>
      <S.IconContainer>
        <ShoppingCartIcon />
      </S.IconContainer>
    </S.MenuGroup>
  </S.Container>
)

export default Menu
