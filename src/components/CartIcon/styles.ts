import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    height: 2.4rem;
    width: 2.4rem;
    color: ${theme.colors.white};
    position: relative;
  `}
`

export const Badge = styled.span`
  ${({ theme }) => css`
    position: absolute;
    top: -0.4rem;
    right: -0.4rem;
    width: 1.6rem;
    height: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${theme.colors.secondary};
    color: ${theme.colors.white};
    border-radius: 50%;
    font-size: 1rem;
  `}
`
