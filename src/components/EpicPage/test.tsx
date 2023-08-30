import { render, screen } from '@testing-library/react'

import EpicPage from '.'

describe('<EpicPage />', () => {
  it('should render the heading', () => {
    const { container } = render(<EpicPage />)

    expect(screen.getByRole('heading', { name: /EpicPage/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
