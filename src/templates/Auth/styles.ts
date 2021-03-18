import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as HeadingStyles from 'components/Heading/styles'
import * as LogoStyles from 'components/Logo/styles'

export const Container = styled.main`
  display: grid;
  height: 100vh;
  grid-template-columns: 1fr;

  ${media.greaterThan('medium')`
  grid-template-columns: 1fr 1fr;
  `}
`

export const BannerBox = styled.div`
  ${media.lessThan('medium')`
      display: none;
  `}

  ${({ theme }) => css`
    position: relative;
    background-image: url(/img/auth-bg.jpg);
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    &::after {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background: ${theme.colors.black};
      opacity: 0.85;
    }
  `}
`

export const BannerContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr;
    justify-content: space-between;
    height: 100%;
    color: ${theme.colors.white};
    position: relative;
    z-index: ${theme.layers.base};

    a {
      width: fit-content;
      height: fit-content;
    }
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    text-align: center;
    align-self: end;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`

export const ContentBox = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoStyles.Container} {
      margin: 0 auto ${theme.spacings.xxlarge};
    }

    ${HeadingStyles.Container} {
      margin-bottom: ${theme.spacings.medium};
    }
  `}
`
