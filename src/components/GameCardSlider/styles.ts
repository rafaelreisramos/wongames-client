import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { GameCardSliderProps } from '.'

type ContainerProps = Pick<GameCardSliderProps, 'color'>

export const Container = styled.section<ContainerProps>`
  ${({ theme, color }) => css`
    .slick-track,
    .slick-list {
      display: flex;
    }

    .slick-slide > div {
      margin: 0 ${theme.spacings.xxsmall};
      flex: 1 0 auto;
      height: 100%;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xxsmall};
    }

    ${media.greaterThan('large')`
      .slick-slide > div {
        margin: 0 ${theme.spacings.xsmall};
      }

      .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }
    `}

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}

    .slick-prev,
    .slick-next {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      color: ${theme.colors[color!]};
      cursor: pointer;
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);

      &.slick-disabled {
        visibility: hidden;
      }
    }

    .slick-prev {
      left: -${theme.spacings.xxlarge};
    }

    .slick-next {
      right: -${theme.spacings.xxlarge};
    }
  `}
`
