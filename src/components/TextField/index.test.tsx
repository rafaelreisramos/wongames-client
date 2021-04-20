import { render, screen, waitFor } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import { Email } from '@styled-icons/material-outlined'

import TextField from '.'

describe('<TextField />', () => {
  it('should render with label', () => {
    render(<TextField label="label" name="field" />)

    expect(screen.getByLabelText('label')).toBeInTheDocument()
  })

  it('should render without label', () => {
    render(<TextField />)

    expect(screen.queryByLabelText(/label/i)).not.toBeInTheDocument()
  })

  it('should render with a placeholder', () => {
    render(<TextField placeholder="placeholder" />)

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument()
  })

  it('should render with an icon', () => {
    render(<TextField icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render with an icon at right', () => {
    render(
      <TextField iconPosition="right" icon={<Email data-testid="icon" />} />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it(`should change it's value when typing`, async () => {
    const onInput = jest.fn()

    render(<TextField onInput={onInput} label="label" name="field" />)

    const input = screen.getByRole('textbox')
    const text = 'Input text'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInput).toHaveBeenCalledTimes(text.length)
    })

    expect(onInput).toHaveBeenCalledWith(text)
  })

  it(`should not change it's value when disabled`, async () => {
    const onInput = jest.fn()

    render(<TextField onInput={onInput} label="label" name="field" disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'Input text'

    userEvent.type(input, text)
    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })

    expect(onInput).not.toHaveBeenCalledWith()
  })

  it('should not be accessible with tab when disabled', () => {
    render(<TextField label="label" name="field" disabled />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('textbox')).not.toHaveFocus()
  })

  it('should be accessible with tab', () => {
    render(<TextField label="label" name="field" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByRole('textbox')).toHaveFocus()
  })

  it('should render with error', () => {
    const { container } = render(
      <TextField
        icon={<Email data-testid="icon" />}
        label="label"
        name="field"
        error="Error message"
      />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
