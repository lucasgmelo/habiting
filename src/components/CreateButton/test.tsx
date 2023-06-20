import { render, screen } from '@testing-library/react'

import CreateButton from '.'

describe('<CreateButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<CreateButton />)

    expect(screen.getByRole('heading', { name: /CreateButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
