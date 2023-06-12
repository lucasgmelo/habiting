import { render, screen } from '@testing-library/react'

import Default from '.'

describe('<Default />', () => {
  it('should render the heading', () => {
    const { container } = render(<Default />)

    expect(screen.getByRole('heading', { name: /Default/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
