import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
  `}
`

export const Card = styled.li`
  ${({ theme }) => css`
    list-style: none;
    display: flex;
    align-items: center;
    background: ${theme.colors.lightGray};
    padding: ${theme.spacings.xxsmall};
    color: ${theme.colors.black};
    height: 5rem;
    border-radius: calc(${theme.border.radius} / 2);

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
