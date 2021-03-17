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
    ).toHaveStyle({ 'border-left': '0.5rem solid #f231a5' })
  })

  it('should render a heading with a bottom line', () => {
    renderWithTheme(<Heading lineBottom>Most Populars</Heading>)

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a small size', () => {
    renderWithTheme(
      <Heading size="small" lineLeft>
        Most Populars
      </Heading>
    )

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ 'font-size': '1.6rem' })

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyleRule('width', '3rem', {
      modifier: '::after'
    })
  })

  it('should render a heading with a huge size', () => {
    renderWithTheme(
      <Heading size="huge" lineLeft>
        Most Populars
      </Heading>
    )

    expect(
      screen.getByRole('heading', { name: /most populars/i })
    ).toHaveStyle({ 'font-size': '5.2rem' })
  })

  it('should render a heading with a primary line color', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /most populars/i })
    expect(heading).toHaveStyle({ 'border-left': '0.5rem solid #f231a5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #f231a5', {
      modifier: '::after'
    })
  })

  it('should render a heading with a secondary line color', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Most Populars
      </Heading>
    )

    const heading = screen.getByRole('heading', { name: /most populars/i })
    expect(heading).toHaveStyle({ 'border-left': '0.5rem solid #3cd3c1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3cd3c1', {
      modifier: '::after'
    })
  })
})
