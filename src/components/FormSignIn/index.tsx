import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { FormEvent, useState } from 'react'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'

import { FieldErrors, SignInValues, signInValidate } from 'utils/validations'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormContainer,
  FormError,
  FormLink,
  FormLoading
} from 'components/Form'

import * as S from './styles'

const FormSignIn = () => {
  const [values, setValues] = useState<SignInValues>({
    email: '',
    password: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)
  const { push, query } = useRouter()

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

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setLoading(false)
      setFieldError(errors)
      return
    }

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: `${window.location.origin}${query?.callbackUrl || ''}`
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
    setFormError('username or password are invalid')
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
          name="email"
          type="email"
          error={fieldError?.email}
          placeholder="E-mail"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
          onFocus={() => handleFocus('email')}
        />

        <TextField
          name="password"
          type="password"
          error={fieldError?.password}
          placeholder="Password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
          onFocus={() => handleFocus('password')}
        />

        <Link href="/forgot-password" passHref>
          <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
        </Link>

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : <span>Sign in now</span>}
        </Button>

        <FormLink>
          {`Don't have an account? `}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}

export default FormSignIn
