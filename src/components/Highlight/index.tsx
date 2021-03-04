import Button from 'components/Button'

import * as S from './styles'

export type HighlightProps = {
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Highlight = ({
  backgroundImage,
  floatImage,
  alignment = 'right',
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: HighlightProps) => (
  <S.Container backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Container>
)

export default Highlight
