import * as S from './styles'

export type LineColors = 'primary' | 'secondary'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
  lineColor?: LineColors
  size?: 'small' | 'medium' | 'huge'
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false,
  lineColor = 'primary',
  size = 'medium'
}: HeadingProps) => (
  <S.Container
    color={color}
    size={size}
    lineColor={lineColor}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
  >
    {children}
  </S.Container>
)

export default Heading
