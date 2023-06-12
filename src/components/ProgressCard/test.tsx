import { render, screen } from '@testing-library/react'

import ProgressCard from '.'

describe('<ProgressCard />', () => {
  it('should render the heading', () => {
    const { container } = render(<ProgressCard />)

    expect(screen.getByRole('heading', { name: /ProgressCard/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
