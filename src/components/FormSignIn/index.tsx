import Link from 'next/link'
import { useRouter } from 'next/router'
import { signIn } from 'next-auth/client'
import { FormEvent, useState } from 'react'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormContainer, FormLink } from 'components/Form'

import * as S from './styles'

export type SignIn = {
  email: string
  password: string
}

const FormSignIn = () => {
  const [values, setValues] = useState<SignIn>({ email: '', password: '' })
  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    console.log('email ou senha inválida')
  }

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
        />

        <TextField
          name="password"
          type="password"
          placeholder="Password"
          onInputChange={(v) => handleInput('password', v)}
          icon={<Lock />}
        />

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth>
          Sign in now
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
