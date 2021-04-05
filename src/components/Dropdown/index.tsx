import { useState } from 'react'
import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Container isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
      <S.Title>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Container>
  )
}

export default Dropdown
