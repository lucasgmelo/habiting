import { render, screen } from '@testing-library/react'

import EpicCard from '.'

describe('<EpicCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<EpicCard />)

    expect(screen.getByRole('heading', { name: /EpicCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
