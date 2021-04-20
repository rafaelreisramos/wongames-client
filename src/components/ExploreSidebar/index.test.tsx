import { css } from 'styled-components'
import { render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'

import ExploreSidebar, { ItemProps } from '.'
import { Overlay } from './styles'

import itemsMock from './data.mock'

describe('<ExploreSidebar />', () => {
  const items = [...itemsMock] as ItemProps[]

  it('should render the headings', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genre/i })).toBeInTheDocument()
  })

  it('should render inputs', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('radio', { name: /low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    render(<ExploreSidebar items={items} onFilter={jest.fn()} />)

    expect(screen.getByRole('button', { name: /filter/i })).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    render(
      <ExploreSidebar
        items={items}
        onFilter={jest.fn()}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /windows/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /low to high/i })).toBeChecked()
  })

  it('should filter with initial values', () => {
    const onFilter = jest.fn()

    render(
      <ExploreSidebar
        items={items}
        initialValues={{ platforms: ['windows'], sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    expect(onFilter).toBeCalledWith({
      platforms: ['windows'],
      sort_by: 'low-to-high'
    })
  })

  it('should return with checked values', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByRole('checkbox', { name: /windows/i }))
    userEvent.click(screen.getByRole('checkbox', { name: /linux/i }))
    userEvent.click(screen.getByLabelText(/low to high/i))

    // 1st render (initialValues) + 3 clicks
    expect(onFilter).toHaveBeenCalledTimes(4)

    expect(onFilter).toBeCalledWith({
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high'
    })
  })

  it('should switch between radio option values', () => {
    const onFilter = jest.fn()

    render(<ExploreSidebar items={items} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/low to high/i))
    userEvent.click(screen.getByLabelText(/high to low/i))

    expect(onFilter).toBeCalledWith({ sort_by: 'high-to-low' })
  })

  it('should open/close sidebar when filtering on mobile', () => {
    const { container } = render(
      <ExploreSidebar items={items} onFilter={jest.fn} />
    )

    const element = container.firstChild

    const mediaModifier = {
      media: '(max-width: 768px)',
      modifier: String(
        css`
          ${Overlay}
        `
      )
    }

    expect(element).not.toHaveStyleRule('opacity', '1', mediaModifier)

    userEvent.click(screen.getByLabelText(/open filters/i))
    expect(element).toHaveStyleRule('opacity', '1', mediaModifier)

    userEvent.click(screen.getByLabelText(/close filters/i))
    expect(element).not.toHaveStyleRule('opacity', '1', mediaModifier)

    userEvent.click(screen.getByRole('button', { name: /filter/i }))
    expect(element).not.toHaveStyleRule('opacity', '1', mediaModifier)
  })
})
