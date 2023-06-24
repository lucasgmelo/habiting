import { render, screen } from '@testing-library/react'

import CreateModal from '.'

describe('<CreateModal />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateModal />)

    expect(screen.getByRole('heading', { name: /CreateModal/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
