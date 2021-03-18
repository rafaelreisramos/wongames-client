import Link from 'next/link'

import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill'
import {
  ShoppingCart as ShoppingCartIcon,
  Search as SearchIcon,
  Close as CloseIcon
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'

import * as S from './styles'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container>
      <MediaMatch lessThan="medium">
        <S.IconContainer onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconContainer>
      </MediaMatch>

      <S.LogoContainer>
        <Logo hideOnMobile />
      </S.LogoContainer>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconContainer>
          <SearchIcon aria-label="Search" />
        </S.IconContainer>
        <S.IconContainer>
          <ShoppingCartIcon aria-label="Shopping Cart" />
        </S.IconContainer>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sign in</Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="#">My account</S.MenuLink>
              <S.MenuLink href="#">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button as="a" fullWidth size="large">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.SignUp title="Sign Up">Sign Up</S.SignUp>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Container>
  )
}

export default Menu
