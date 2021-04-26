import Link from 'next/link'
import { FormEvent, useState } from 'react'
import { signIn } from 'next-auth/client'
import {
  AccountCircle,
  Email,
  ErrorOutline,
  Lock
} from '@styled-icons/material-outlined'
import { useMutation } from '@apollo/client'

import { FieldErrors, signUpValidate, SignUpValues } from 'utils/validations'

import { MUTATION_REGISTER } from 'graphql/mutations/register'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormContainer,
  FormError,
  FormLink,
  FormLoading
} from 'components/Form'

const FormSignUp = () => {
  const [values, setValues] = useState<SignUpValues>({
    username: '',
    email: '',
    password: ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')

  const [createUser, { loading, error }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors[0]?.extensions?.exception.data.message[0].messages[0]
          .message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleFocus = (field: string) => {
    setFieldError((s) => ({ ...s, [field]: '' }))
  }

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setFormError('')

    const errors = signUpValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      return
    }

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
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
          name="username"
          type="text"
          placeholder="Username"
          error={fieldError?.username}
          onInputChange={(v) => handleInput('username', v)}
          icon={<AccountCircle />}
          onFocus={() => handleFocus('username')}
        />

        <TextField
          name="email"
          type="email"
          placeholder="E-mail"
          error={fieldError?.email}
          onInputChange={(v) => handleInput('email', v)}
          icon={<Email />}
          onFocus={() => handleFocus('email')}
        />

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
          {loading ? <FormLoading /> : <span>Sign up now</span>}
        </Button>

        <FormLink>
          {`Already have an account? `}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormContainer>
  )
}

export default FormSignUp
