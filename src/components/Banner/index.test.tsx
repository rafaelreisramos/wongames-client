import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helpers'

import Banner from '.'

const props = {
  img: 'https://source.unsplash.com/random/1042x580',
  title: 'Defy death',
  subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
  buttonLabel: 'Buy now',
  buttonLink: '/games/defy-death'
}

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = renderWithTheme(<Banner {...props} />)

    expect(screen.getByRole('img', { name: /Defy death/i })).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Defy death/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /Play the new CrashLands season/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a ribbon', () => {
    renderWithTheme(<Banner {...props} ribbon="Ribbon" />)

    const ribbon = screen.getByText(/Ribbon/i)

    expect(ribbon).toBeInTheDocument()

    expect(ribbon).toHaveStyle({
      backgroundColor: '#f231a5',
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render a small ribbon with a secondary color', () => {
    renderWithTheme(
      <Banner
        {...props}
        ribbon="Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/Ribbon/i)

    expect(ribbon).toBeInTheDocument()

    expect(ribbon).toHaveStyle({
      backgroundColor: '#3cd3c1',
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
