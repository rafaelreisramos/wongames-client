import { render, screen } from 'utils/test-utils'

import FormSignIn from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

describe('<FormSignIn />', () => {
  it('should render the form', () => {
    const { container } = render(<FormSignIn />)

    expect(screen.getByPlaceholderText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/Password/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sign in now/i }))

    expect(container.parentElement).toMatchSnapshot()
  })

  it('should render the forgot password link', () => {
    render(<FormSignIn />)

    expect(
      screen.getByRole('link', { name: /Forgot your password\?/i })
    ).toBeInTheDocument()
  })

  it('should render the text and link to sign up', () => {
    render(<FormSignIn />)

    expect(screen.getByText(/Don't have an account\?/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Sign up/i })).toBeInTheDocument()
  })
})
