import { render, screen } from '@testing-library/react'
import { characters } from '@/fixtures/fixtureCharacters'
import { StatBlock } from './StatBlock'

describe('StatBlock', () => {
  it('renders stats', () => {
    const c = characters[0]!
    render(<StatBlock stats={c.stats} hp={{ current: c.current_hp, max: c.max_hp }} />)
    expect(screen.getByText('HP', { selector: 'dt' })).toBeInTheDocument()
    expect(screen.getByText('STR', { selector: 'dt' })).toBeInTheDocument()
    expect(screen.getByText('DEX', { selector: 'dt' })).toBeInTheDocument()
    expect(screen.getByText('WIS', { selector: 'dt' })).toBeInTheDocument()
  })
})
