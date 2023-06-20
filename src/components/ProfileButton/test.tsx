import { render, screen } from '@testing-library/react'

import ProfileButton from '.'

describe('<ProfileButton />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProfileButton />)

    expect(screen.getByRole('heading', { name: /ProfileButton/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
