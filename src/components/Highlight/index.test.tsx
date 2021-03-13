import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'
import item from './data.mock'

import Highlight from '.'

import * as S from './styles'

const props = { ...item }

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /Red Dead it's back/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Come see John's new adventures/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /Buy now/i })).toBeInTheDocument()

    expect(container.firstChild)
  })

  it('should render background image', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should render a float image', () => {
    renderWithTheme(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = renderWithTheme(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    })

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      `'floatimage content'`
    )
  })

  it('should render align left if alignment is passed', () => {
    const { container } = renderWithTheme(
      <Highlight {...props} alignment="left" />
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    })

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      `'content floatimage'`
    )
  })
})
