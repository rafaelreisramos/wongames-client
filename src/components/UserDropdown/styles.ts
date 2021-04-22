import styled, { css } from 'styled-components'

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;
    background: ${theme.colors.white};

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const Link = styled.a`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.black};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > svg {
      width: 2.4rem;
      height: 2.4rem;
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
