import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ color: '#fafafa' })
  })

  it('should render a black heading when color is passed', () => {
    renderWithTheme(<Heading color="black">Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ color: '#030517' })
  })

  it('should render a heading with a left line', () => {
    renderWithTheme(<Heading lineLeft>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ 'border-left': '0.7rem solid #3cd3c1' })
  })

  it('should render a heading with a bottom line', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after'
    })
  })
})
