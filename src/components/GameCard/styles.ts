import styled, { css, DefaultTheme, keyframes } from 'styled-components'

export const Container = styled.article`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    position: relative; /* It's necessary for Ribbon */
    height: 100%;
    width: 100%;
    background-color: ${theme.colors.white};
  `}
`

const placeholderShimmer = keyframes`
  from {
    background-position: -40rem 0;
  }
  to {
    background-position: 40rem 0;
  }
`

export const ImageBox = styled.a`
  min-height: 14rem;
  position: relative;
  width: 100%;

  background-size: 80rem 14rem;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: ${placeholderShimmer} 1s linear infinite forwards;
`

export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin: ${theme.spacings.xsmall};
    height: 100%;
  `}
`

export const Info = styled.a`
  max-width: calc(100% - 2.5rem);
  text-decoration: none;
`

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.gray};
  `}
`

export const FavButton = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;

    svg {
      width: 2.5rem;
    }
  `}
`

export const BuyBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.xxsmall};
  `}
`

type PriceProps = {
  isPromotional?: boolean
}

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    border-radius: ${theme.border.radius};
    padding: 0 ${theme.spacings.xxsmall};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
  `,

  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
}

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    display: inline-flex;
    height: 3rem;
    align-items: center;
    font-weight: ${theme.font.bold};

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`
