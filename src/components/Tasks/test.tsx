import { render, screen } from '@testing-library/react'

import Tasks from '.'

describe('<Tasks />', () => {
  it('should render the heading', () => {
    const { container } = render(<Tasks />)

    expect(screen.getByRole('heading', { name: /Tasks/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
