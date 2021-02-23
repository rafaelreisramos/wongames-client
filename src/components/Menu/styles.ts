import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.menu`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.spacings.small} 0;
    position: relative;
  `}
`

export const IconContainer = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    cursor: pointer;
    width: 2.4rem;
    height: 2.4rem;
  `}
`

export const LogoContainer = styled.div`
  ${media.lessThan('medium')`
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  `}
`

export const MenuGroup = styled.div`
  ${({ theme }) => css`
    display: flex;

    > div {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
