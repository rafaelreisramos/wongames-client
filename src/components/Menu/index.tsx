import { useState } from 'react'
import * as S from './styles'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'

import Logo from 'components/Logo'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <S.IconContainer onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconContainer>
      <S.LogoContainer>
        <Logo hideOnMobile />
      </S.LogoContainer>
      <S.MenuGroup>
        <S.IconContainer>
          <SearchIcon aria-label="Search" />
        </S.IconContainer>
        <S.IconContainer>
          <ShoppingCartIcon aria-label="Shopping Cart" />
        </S.IconContainer>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
      </S.MenuFull>
    </S.Container>
  )
}

export default Menu
