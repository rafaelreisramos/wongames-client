import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Logo from 'components/Logo'
import * as S from './styles'

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
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>

        <S.RegisterBox>
          <Button fullWidth size="large">
            Log in now
          </Button>
          <span>or</span>
          <S.SignUp href="#" title="Sign Up">
            Sign Up
          </S.SignUp>
        </S.RegisterBox>
      </S.MenuFull>
    </S.Container>
  )
}

export default Menu
