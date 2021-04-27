import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { signIn } from 'next-auth/client'

import 'server.mock'

import FormResetPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

jest.mock('next-auth/client', () => ({
  signIn: jest.fn()
}))

describe('<FormResetPassword />', () => {
  it('should render the form', () => {
    render(<FormResetPassword />)

    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/confirm password/i)).toBeInTheDocument()

    expect(screen.getByRole('button', { name: /reset/i })).toBeInTheDocument()
  })

  it('should show validation errors', async () => {
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345678')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '87654321')
    userEvent.click(screen.getByRole('button', { name: /reset/i }))

    expect(
      await screen.findByText(/confirm password does not match/i)
    ).toBeInTheDocument()
  })

  it('should show an error when code provided is wrong', async () => {
    query = { code: 'wrong-code' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345678')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '12345678')
    userEvent.click(screen.getByRole('button', { name: /reset/i }))

    expect(
      await screen.findByText(/incorrect code provided./i)
    ).toBeInTheDocument()
  })

  it('should reset the password and sign in', async () => {
    query = { code: 'right-code' }
    render(<FormResetPassword />)

    userEvent.type(screen.getByPlaceholderText('Password'), '12345678')
    userEvent.type(screen.getByPlaceholderText(/confirm password/i), '12345678')
    userEvent.click(screen.getByRole('button', { name: /reset/i }))

    await waitFor(() => {
      expect(signIn).toHaveBeenCalledWith('credentials', {
        email: 'valid@email.com',
        password: '12345678',
        callbackUrl: '/'
      })
    })
  })
})
