import {
  forgotValidate,
  resetValidate,
  ResetValidateValues,
  signInValidate,
  signUpValidate
} from '.'

describe('validations', () => {
  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid', password: '12345678' }

      expect(signInValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" must be a valid email",
        }
      `)
    })

    it('should return min length password error', () => {
      const values = { email: '', password: '1234' }

      expect(signInValidate(values).password).toMatchInlineSnapshot(
        `"\\"password\\" length must be at least 8 characters long"`
      )
    })
  })

  describe('signUpValidate()', () => {
    it('should validate empty fields', () => {
      const values = {
        username: '',
        email: '',
        password: ''
      }

      expect(signUpValidate(values)).toMatchObject({
        username: expect.any(String),
        email: expect.any(String),
        password: expect.any(String),
        confirm_password: expect.any(String)
      })
    })

    it('should return min length username error', () => {
      const values = {
        username: 'Joe',
        email: '',
        password: ''
      }

      expect(signUpValidate(values).username).toMatchInlineSnapshot(
        `"\\"username\\" length must be at least 5 characters long"`
      )
    })

    it('should return invalid email error', () => {
      const values = { username: '', email: 'invalid', password: '' }

      expect(signUpValidate(values).email).toMatchInlineSnapshot(
        `"\\"email\\" must be a valid email"`
      )
    })

    it('should return min length password error', () => {
      const values = { username: '', email: '', password: '1234' }

      expect(signUpValidate(values).password).toMatchInlineSnapshot(
        `"\\"password\\" length must be at least 8 characters long"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        username: 'John Doe',
        email: 'john.doe@gmail.com',
        password: '12345678',
        confirm_password: '87654321'
      }

      expect(signUpValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })

  describe('forgotValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '' }

      expect(forgotValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid' }

      expect(forgotValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" must be a valid email",
        }
      `)
    })
  })

  describe('resetValidate()', () => {
    it('should validate password empty field', () => {
      const values = {
        password: ''
      } as ResetValidateValues

      expect(resetValidate(values)).toMatchObject({
        password: expect.any(String)
      })
    })

    it('should validate confirm_password empty field', () => {
      const values = {
        password: '12345678',
        confirm_password: ''
      }

      expect(resetValidate(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "\\"confirm_password\\" is not allowed to be empty",
        }
      `)
    })

    it('should return min length password error', () => {
      const values = { password: '1234' } as ResetValidateValues

      expect(resetValidate(values).password).toMatchInlineSnapshot(
        `"\\"password\\" length must be at least 8 characters long"`
      )
    })

    it('should return error if password does not match with confirm password', () => {
      const values = {
        password: '12345678',
        confirm_password: '87654321'
      }

      expect(resetValidate(values).confirm_password).toMatchInlineSnapshot(
        `"confirm password does not match with password"`
      )
    })
  })
})
