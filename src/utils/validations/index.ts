import Joi from 'joi'

import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'

const fieldsValidations = {
  username: Joi.string().min(5).required(),

  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),

  password: Joi.string().min(8).required(),

  confirm_password: Joi.string()
    .valid(Joi.ref('password'))
    .required()
    .messages({ 'any.only': 'confirm password does not match with password' })
}

export type FieldErrors = Record<string, string>

function getFieldErrors(objError: Joi.ValidationResult) {
  const errors: FieldErrors = {}

  if (objError.error) {
    objError.error.details.forEach((err) => {
      errors[err.path.join('.')] = err.message
    })
  }

  return errors
}

export type SignUpValues = UsersPermissionsRegisterInput

export function signUpValidate(values: SignUpValues) {
  const schema = Joi.object(fieldsValidations)

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export type SignInValues = Omit<UsersPermissionsRegisterInput, 'username'>

export function signInValidate(values: SignInValues) {
  const { email, password } = fieldsValidations
  const schema = Joi.object({ email, password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export type ForgotValidateValues = Pick<UsersPermissionsRegisterInput, 'email'>

export function forgotValidate(values: ForgotValidateValues) {
  const { email } = fieldsValidations
  const schema = Joi.object({ email })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}

export type ResetValidateValues = Pick<
  UsersPermissionsRegisterInput,
  'password'
> & { confirm_password: string }

export function resetValidate(values: ResetValidateValues) {
  const { password, confirm_password } = fieldsValidations
  const schema = Joi.object({ password, confirm_password })

  return getFieldErrors(schema.validate(values, { abortEarly: false }))
}
