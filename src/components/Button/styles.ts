import styled, { css, DefaultTheme } from 'styled-components'

import { ButtonProps } from '.'

type ContainerProps = Pick<ButtonProps, 'size'>

const containerModifiers = {
  small: (theme: DefaultTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: ${theme.spacings.xxsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    height: 4rem;
    font-size: ${theme.font.sizes.small};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `
}

export const Container = styled.button<ContainerProps>`
  ${({ theme, size }) => css`
    background: linear-gradient(180deg, #ff5f5f 0%, #f062c0 50%);
    color: ${theme.colors.white};
    border: none;
    border-radius: ${theme.border.radius};

    ${!!size && containerModifiers[size](theme)};
  `}
`
