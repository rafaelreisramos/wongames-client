import Link from 'next/link'
import { Email, Lock } from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormContainer, FormLink } from 'components/Form'

import * as S from './styles'

const FormSignIn = () => (
  <FormContainer>
    <form>
      <TextField
        name="email"
        type="email"
        placeholder="E-mail"
        icon={<Email />}
      />

      <TextField
        name="password"
        type="password"
        placeholder="Password"
        icon={<Lock />}
      />

      <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

      <Button size="large" fullWidth>
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

export default FormSignIn