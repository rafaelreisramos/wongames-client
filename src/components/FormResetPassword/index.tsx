import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import { Lock, ErrorOutline } from '@styled-icons/material-outlined'

import {
  FieldErrors,
  resetValidate,
  ResetValidateValues
} from 'utils/validations'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormContainer, FormError, FormLoading } from 'components/Form'
import { signIn } from 'next-auth/client'

const FormResetPassword = () => {
  const [values, setValues] = useState<ResetValidateValues>({
    password: '',
    confirm_password: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const { query } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleFocus = (field: string) => {
    setFieldError((s) => ({ ...s, [field]: '' }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setFormError('')

    const errors = resetValidate(values)

    if (Object.keys(errors).length) {
      setLoading(false)
      setFieldError(errors)
      return
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/reset-password`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          password: values.password,
          passwordConfirmation: values.confirm_password,
          code: query.code
        })
      }
    )

    setLoading(false)
    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
      setLoading(false)
    } else {
      signIn('credentials', {
        email: data.user.email,
        password: values.password,
        callbackUrl: '/'
      })
    }
  }

  return (
    <FormContainer>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          name="password"
          type="password"
          placeholder="Password"
          error={fieldError?.password}
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
          onFocus={() => handleFocus('password')}
        />

        <TextField
          name="confirm_password"
          type="password"
          placeholder="Confirm password"
          error={fieldError?.confirm_password}
          onInputChange={(v) => handleInput('confirm_password', v)}
          icon={<Lock />}
          onFocus={() => handleFocus('confirm_password')}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Reset</span>}
        </Button>
      </form>
    </FormContainer>
  )
}

export default FormResetPassword
