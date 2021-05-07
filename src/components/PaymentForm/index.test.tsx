import { Session } from 'next-auth'
import React from 'react'
import { render, screen, waitFor } from 'utils/test-utils'

import { CartContextData, CartContextDefaultValues } from 'hooks/use-cart'
import * as stripeMethods from 'utils/stripe/methods'

import itemsMock from 'components/CartList/data.mock'

import PaymentForm from '.'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
useRouter.mockImplementation(() => ({
  push: jest.fn()
}))

jest.mock('@stripe/react-stripe-js', () => ({
  CardElement: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock CardElement">{children}</div>
  },
  Elements: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Elements">{children}</div>
  },
  useStripe: jest.fn().mockReturnValue({
    paymentMethod: {
      card: 'card'
    }
  }),
  useElements: jest.fn().mockReturnValue({
    getElement: jest.fn()
  })
}))

const createPaymentIntent = jest.spyOn(stripeMethods, 'createPaymentIntent')

describe('<PaymentForm />', () => {
  let session: Session
  let cartProviderProps: CartContextData

  beforeEach(() => {
    session = {
      accessToken: 'token',
      user: { email: 'joe.doe@email.com' }
    }

    cartProviderProps = {
      ...CartContextDefaultValues,
      items: itemsMock
    }
  })

  it('should render the component correctly', () => {
    render(<PaymentForm session={session} />)

    expect(
      screen.getByRole('heading', { name: /payment/i })
    ).toBeInTheDocument()

    expect(screen.getByTestId(/mock cardelement/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /buy now/i })).toBeDisabled()
  })

  it('should call createPayment when it renders and render free games', async () => {
    createPaymentIntent.mockResolvedValueOnce({ freeGames: true })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(
        screen.getByText(/Only free games, click buy and enjoy!/i)
      ).toBeInTheDocument()
    })
  })

  it('should call createPayment when it renders and render error', async () => {
    createPaymentIntent.mockResolvedValueOnce({ error: 'Error message' })

    render(<PaymentForm session={session} />, { cartProviderProps })

    expect(createPaymentIntent).toHaveBeenCalled()

    await waitFor(() => {
      expect(screen.getByText(/Error message/i)).toBeInTheDocument()
    })
  })
})
