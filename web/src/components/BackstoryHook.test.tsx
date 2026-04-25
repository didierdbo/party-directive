import { render, screen } from '@testing-library/react'
import { BackstoryHook } from './BackstoryHook'

describe('BackstoryHook', () => {
  it('renders nothing when backstory hook is null', () => {
    const { container } = render(<BackstoryHook backstory_hook={null} />)
    expect(container).toBeEmptyDOMElement()
  })
  it('renders the hook text when provided', () => {
    render(<BackstoryHook backstory_hook="was a soldier" />)
    expect(screen.getByText('was a soldier')).toBeInTheDocument()
  })
})
