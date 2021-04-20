import styled, { css, DefaultTheme } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import tint from 'polished/lib/color/tint'

export const Container = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const CardsList = styled.ul`
  list-style: none;
`

const ItemStyles = (theme: DefaultTheme) => css`
  background: ${theme.colors.lightGray};
  border-radius: calc(${theme.border.radius} / 2);
  color: ${theme.colors.black};
  padding: 0 ${theme.spacings.xxsmall};
  height: 5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const CardItem = styled.li.attrs({ as: 'label' })`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    justify-content: space-between;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`

export const AddCard = styled.div`
  ${({ theme }) => css`
    ${ItemStyles(theme)};
    margin-bottom: ${theme.spacings.xsmall};

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    svg {
      margin-left: ${theme.spacings.xxsmall};
      margin-right: ${theme.spacings.xsmall};
      width: 2.4rem;
    }
  `}
`

export const CardInfo = styled.span`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    img {
      margin-right: ${theme.spacings.xxsmall};
    }
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${tint(0.2, theme.colors.lightGray)};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.small};
    display: flex;
    align-items: center;

    ${ButtonStyles.Container} {
      padding: 0 ${theme.spacings.xxsmall};
      outline: 0;
    }
  `}
`
