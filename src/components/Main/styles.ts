import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #c0c0c0;
`

export const LogoContainer = styled.div`
  display: flex;
  width: 350px;
  align-items: center;
  justify-content: space-between;
`

export const Title = styled.h1`
  font-size: 3.2rem;
  color: ${(props) => props.theme.colors.white};
`
