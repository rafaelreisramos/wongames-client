import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import * as BannerStyles from 'components/Banner/styles'

export const Container = styled.section`
  ${({ theme }) => css`
    .slick-dots {
      list-style: none;
      display: flex !important;
      align-items: center;
      justify-content: center;
      margin-top: ${theme.spacings.small};

      li {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 ${theme.spacings.xxsmall};
        background: ${theme.colors.white};
        width: 1.2rem;
        height: 1.2rem;
        border-radius: 100%;

        &.slick-active {
          background: ${theme.colors.primary};
        }
      }

      button {
        opacity: 0;
        width: 1.2rem;
        height: 1.2rem;
        cursor: pointer;
      }
    }

    ${media.greaterThan('large')`
      ${BannerStyles.Container} {
        max-width: 104rem;
        margin: 0 auto;
      }

      .slick-dots {
        flex-direction: column;
        position: absolute;
        right: 0;
        top: 0;
        margin: 0;
        height: 100%;

        li {
          margin: ${theme.spacings.xxsmall} 0;
        }
      }
    `}
  `}
`
