import { render, screen } from 'utils/test-utils'

import item from './data.mock'

import Banner from '.'

const props = { ...item }

describe('<Banner />', () => {
  it('should render the banner', () => {
    const { container } = render(<Banner {...props} />)

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
    render(<Banner {...props} ribbon="Ribbon" />)

    const ribbon = screen.getByText(/Ribbon/i)

    expect(ribbon).toBeInTheDocument()

    expect(ribbon).toHaveStyle({
      backgroundColor: '#f231a5',
      height: '3.6rem',
      fontSize: '1.4rem'
    })
  })

  it('should render a small ribbon with a secondary color', () => {
    render(
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
