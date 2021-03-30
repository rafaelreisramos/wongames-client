import styled, { css } from 'styled-components'

import * as GameItemStyles from 'components/GameItem/styles'

export const Container = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};

    ${GameItemStyles.Container} {
      list-style: none;

      &:last-child {
        border-bottom: 0;
      }
    }
  `}
`
