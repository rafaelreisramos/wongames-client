import styled, { css, DefaultTheme } from 'styled-components'

import { TextFieldProps } from '.'

type IconPositionProps = Pick<TextFieldProps, 'iconPosition'>
type ContainerProps = Pick<TextFieldProps, 'disabled'> & { error?: boolean }

const containerModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label}, ${Input}, ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,

  error: (theme: DefaultTheme) => css`
    ${InputBox} {
      border-color: ${theme.colors.red};
    }

    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }
  `
}

export const Container = styled.div<ContainerProps>`
  ${({ theme, error, disabled }) => css`
    ${error && containerModifiers.error(theme)}
    ${disabled && containerModifiers.disabled(theme)}
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

export const InputBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    padding: 0 ${theme.spacings.xsmall};
    border-radius: calc(${theme.border.radius} / 2);
    border: 0.2rem solid ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

export const Icon = styled.div<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};
    order: ${iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

export const Input = styled.input<IconPositionProps>`
  ${({ theme, iconPosition }) => css`
    border: 0;
    outline: none;
    background: transparent;
    width: 100%;
    padding: ${theme.spacings.xxsmall} 0;
    padding-${iconPosition}: ${theme.spacings.xsmall};
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
  `}
`

export const ErrorMessage = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`
