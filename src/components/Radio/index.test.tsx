import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { renderWithTheme } from 'utils/tests/helpers'

import Radio from '.'

describe('<Radio />', () => {
  it('should render with label (white)', () => {
    const { container } = renderWithTheme(
      <Radio label="radio" labelFor="check" value="anyValue" />
    )

    const label = screen.getByText(/radio/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: '#fafafa' })
    expect(container).toMatchSnapshot()
  })

  it('should render with label (black)', () => {
    renderWithTheme(<Radio label="radio" labelColor="black" />)

    const label = screen.getByText(/radio/i)
    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: '#030517' })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio label="radio" labelColor="black" />)

    expect(screen.queryByLabelText(/radio/i)).not.toBeInTheDocument()
  })

  it('should dispatch onCheck when status changes', async () => {
    const onCheck = jest.fn()

    renderWithTheme(<Radio label="radio" onCheck={onCheck} value="anyValue" />)

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })

    expect(onCheck).toHaveBeenCalledWith('anyValue')
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<Radio label="radio" labelFor="radio" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('radio')).toHaveFocus()
  })
})
