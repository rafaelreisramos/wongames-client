import 'matchMediaMock'
import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import mockItems from './data.mock'

import Gallery from '.'

describe('<Gallery />', () => {
  beforeEach(() => {
    render(<Gallery items={mockItems.slice(0, 2)} />)
  })

  it('should render thumbnails as buttons', () => {
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    userEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should open modal with selected image', async () => {
    userEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button is clicked', () => {
    const modal = screen.getByLabelText('modal')

    userEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    userEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
  })

  it('should handle close modal when ESC key is pressed', () => {
    const modal = screen.getByLabelText('modal')

    userEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    userEvent.keyboard('{esc}')
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })
  })
})
