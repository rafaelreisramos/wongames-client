import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.ContainerProps, ButtonProps> = (
  { children, icon, size = 'medium', fullWidth = false, ...props },
  ref
) => (
  <S.Container
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {!!icon && icon}
    {!!children && <span>{children}</span>}
  </S.Container>
)

export default forwardRef(Button)
