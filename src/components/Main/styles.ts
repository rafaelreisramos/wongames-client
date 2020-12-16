import styled from 'styled-components'

export const Container = styled.main`
  height: 100%;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.mainBg};
`

export const Title = styled.h1`
  font-size: 5rem;
  color: ${(props) => props.theme.colors.white};
`
