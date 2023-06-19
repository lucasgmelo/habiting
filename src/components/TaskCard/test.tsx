import { render, screen } from '@testing-library/react'

import TaskCard from '.'

describe('<TaskCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<TaskCard />)

    expect(screen.getByRole('heading', { name: /TaskCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
