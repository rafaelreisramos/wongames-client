import * as S from './styles'

const Main = ({ title = 'Next.js boilerplate!' }) => (
  <S.Container>
    <S.LogoContainer>
      <img
        src="./img/nextjs-black-logo.svg"
        alt="Logo Next"
        width={150}
        height={150}
      />
      <img
        src="./img/storybook-default-logo.svg"
        alt="Storybook Next"
        width={150}
        height={150}
      />
    </S.LogoContainer>
    <S.Title>{title}</S.Title>
  </S.Container>
)

export default Main
