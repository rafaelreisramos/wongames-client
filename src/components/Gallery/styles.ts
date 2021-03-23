import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Container = styled.div`
  ${({ theme }) => css`
    .slick-prev,
    .slick-next {
      display: block;
      width: 2.5rem;
      height: 2.5rem;
      padding: 0;
      color: ${theme.colors.white};
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

    .slick-slide > div {
      margin: 0 ${theme.spacings.xsmall};
      cursor: pointer;
    }

    .slick-list {
      margin: 0 -${theme.spacings.xsmall};
    }

    ${media.lessThan('huge')`
      overflow-x: hidden;
    `}
  `}
`

type ModalProps = {
  isOpen: boolean
}

const modalModifiers = {
  open: () => css`
    opacity: 1;
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
  `
}
export const Modal = styled.div<ModalProps>`
  ${({ theme, isOpen }) => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: ${theme.layers.modal};
    transition: opacity ${theme.transition.default};

    ${isOpen && modalModifiers.open()}
    ${!isOpen && modalModifiers.close()}
  `}
`

export const Close = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    position: absolute;
    left: 0;
    top: 0;
    cursor: pointer;
    width: 100%;
    height: 100%;
    text-align: right;
  `}
`

export const Content = styled.div`
  max-width: min(120rem, 100%);
  max-height: 80rem;
`
