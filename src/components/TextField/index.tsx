import React, { InputHTMLAttributes, useState } from 'react'
import * as S from './styles'

export type TextFieldProps = {
  label?: string
  labelFor?: string
  initialValue?: string
  onInput?: (value: string) => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  disabled?: boolean
  error?: string
} & InputHTMLAttributes<HTMLInputElement>

const TextField = ({
  label,
  labelFor = '',
  initialValue = '',
  onInput,
  icon,
  iconPosition = 'left',
  disabled = false,
  error,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value
    setValue(newValue)

    !!onInput && onInput(newValue)
  }

  return (
    <S.Container disabled={disabled} error={!!error}>
      {!!label && <S.Label htmlFor={labelFor}>{label}</S.Label>}
      <S.InputBox>
        {!!icon && <S.Icon iconPosition={iconPosition}>{icon}</S.Icon>}
        <S.Input
          type="text"
          iconPosition={iconPosition}
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </S.InputBox>
      {!!error && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.Container>
  )
}

export default TextField
