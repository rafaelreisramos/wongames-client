import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import {
  CheckCircleOutline,
  Email,
  ErrorOutline
} from '@styled-icons/material-outlined'

import {
  FieldErrors,
  forgotValidate,
  ForgotValidateValues
} from 'utils/validations'

import Button from 'components/Button'
import TextField from 'components/TextField'
import {
  FormContainer,
  FormError,
  FormLoading,
  FormSuccess
} from 'components/Form'

const FormForgotPassword = () => {
  const { query } = useRouter()
  const [success, setSuccess] = useState(false)
  const [values, setValues] = useState<ForgotValidateValues>({
    email: (query.email as string) || ''
  })
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [formError, setFormError] = useState('')
  const [loading, setLoading] = useState(false)

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

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setLoading(false)
      setFieldError(errors)
      return
    }

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    setLoading(false)
    const data = await response.json()

    if (data.error) {
      setFormError(data.message[0].messages[0].message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormContainer>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an e-mail!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline />
              {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              type="text"
              error={fieldError?.email}
              placeholder="E-mail"
              initialValue={query.email as string}
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
              onFocus={() => handleFocus('email')}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : <span>Send e-mail</span>}
            </Button>
          </form>
        </>
      )}
    </FormContainer>
  )
}

export default FormForgotPassword
