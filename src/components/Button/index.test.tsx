import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Button from '.'

describe('<Heading />', () => {
  it('should render a button by default', () => {
    renderWithTheme(<Button>Button</Button>)

    expect(screen.getByRole('button', { name: /button/i })).toHaveStyle({
      color: '#fafafa'
    })
  })
})
