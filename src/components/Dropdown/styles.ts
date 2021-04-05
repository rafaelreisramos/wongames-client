import styled, { css } from 'styled-components'

export const Title = styled.div`
  ${({ theme }) => css`
    position: relative;
    color: ${theme.colors.white};
    display: flex;
    align-items: center;
    padding-right: ${theme.spacings.small};
    cursor: pointer;
  `}
`

export const Content = styled.div`
  ${({ theme }) => css`
    position: absolute;
    right: 0;
    margin-top: ${theme.spacings.small};
    display: flex;
    flex-direction: column;
    background: ${theme.colors.white};
    color: ${theme.colors.black};

    &::before {
      content: '';
      position: absolute;
      border-right: 1.2rem solid transparent;
      border-left: 1.2rem solid transparent;
      border-bottom: 1.2rem solid ${theme.colors.white};
      top: -1.2rem;
      right: 2.4rem;
    }
  `}
`

type ContainerProps = {
  isOpen?: boolean
}

const containerModifiers = {
  open: () => css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
  `,

  close: () => css`
    opacity: 0;
    pointer-events: none;
    transform: translateY(-2rem);
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, isOpen }) => css`
    position: relative;
    width: max-content;

    ${Content} {
      transition: transform 0.2s ease-in, opacity ${theme.transition.default};

      ${isOpen && containerModifiers.open()}
      ${!isOpen && containerModifiers.close()}
    }
  `}
`
