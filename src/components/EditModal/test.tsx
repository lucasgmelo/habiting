import { render, screen } from '@testing-library/react'

import EditModal from '.'

describe('<EditModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<EditModal />)

    expect(screen.getByRole('heading', { name: /EditModal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
