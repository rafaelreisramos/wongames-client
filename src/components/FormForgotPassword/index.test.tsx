import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import 'server.mock'

import FormForgotPassword from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
let query = {}

useRouter.mockImplementation(() => ({
  query
}))

describe('<FormForgotPassword />', () => {
  it('should render the form', () => {
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /send e-mail/i })
    ).toBeInTheDocument()
  })

  it('should validate the email', async () => {
    render(<FormForgotPassword />)

    userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'valid@email.com')
    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/you just received an e-mail!/i)
    ).toBeInTheDocument()
  })

  it('should show an invalid email', async () => {
    render(<FormForgotPassword />)

    userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'invalid')
    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/must be a valid email/i)
    ).toBeInTheDocument()
  })

  it('should show a nonexistent email error', async () => {
    render(<FormForgotPassword />)

    userEvent.type(screen.getByPlaceholderText(/e-mail/i), 'false@email.com')
    userEvent.click(screen.getByRole('button', { name: /send e-mail/i }))

    expect(
      await screen.findByText(/this email does not exist/i)
    ).toBeInTheDocument()
  })

  it('should autofill logged user email field', () => {
    query = { email: 'valid@email.com' }
    render(<FormForgotPassword />)

    expect(screen.getByPlaceholderText(/e-mail/i)).toHaveValue(
      'valid@email.com'
    )
  })
})
