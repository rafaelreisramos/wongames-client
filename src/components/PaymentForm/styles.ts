import styled, { css } from 'styled-components'

import * as ButtonStyles from 'components/Button/styles'
import tint from 'polished/lib/color/tint'

export const Container = styled.div``

export const Body = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
  `}
`

export const Error = styled.p`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
    padding-top: ${theme.spacings.xsmall};

    svg {
      height: 2rem;
      width: 2rem;
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
