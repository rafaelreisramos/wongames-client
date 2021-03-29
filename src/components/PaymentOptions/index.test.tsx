import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import PaymentOptions from '.'

import cardsMock from './data.mock'

describe('<PaymentOptions />', () => {
  it('should render the saved card options and the new card button', () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    expect(screen.getByText(/1234/)).toBeInTheDocument()
    expect(screen.getByText(/2345/)).toBeInTheDocument()
    expect(screen.getByText(/Add a new credit card/i)).toBeInTheDocument()
  })

  it('should select the card when it is clicked', async () => {
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={jest.fn} />
    )

    userEvent.click(screen.getByText(/1234/))
    await waitFor(() =>
      expect(screen.getByRole('radio', { name: /1234/ })).toBeChecked()
    )
  })

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlePayment if the card is selected', async () => {
    const handlePayment = jest.fn()
    renderWithTheme(
      <PaymentOptions cards={cardsMock} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByText(/1234/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    await waitFor(() => expect(handlePayment).toHaveBeenCalled())
  })
})
