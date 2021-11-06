import Heading from 'components/Heading'

import * as S from './styles'

export type TextContentProps = {
  title?: string
  content: string
}
const TextContent = ({ title, content }: TextContentProps) => (
  <S.Container data-cy="content">
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }}></div>
  </S.Container>
)

export default TextContent
