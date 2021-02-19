import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white label by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toBeInTheDocument()
  })
})
