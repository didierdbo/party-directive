import { render, screen } from '@testing-library/react'
import CharacterCard from './CharacterCard'

// Smoke test — confirms the toolchain (Vitest + RTL + jsdom) is wired up.
// Real tests start arriving at Lesson 1.1.
describe('CharacterCard', () => {
  it('renders the app heading', () => {
    render(<CharacterCard/>)
    expect(screen.getByRole('heading', { name: /Starting-Pool-1/i })).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /STR: 14/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /DEX: 10/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /WIS: 7/i })).toBeInTheDocument()
  })
})
