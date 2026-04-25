import { render, screen } from '@testing-library/react'
import { CharacterCard } from '@/components/CharacterCard'
import { characters } from '@/fixtures/fixtureCharacters'

describe('CharacterCard', () => {
  it('renders the character card', () => {
    const c = characters[0]!
    render(<CharacterCard character={c} />)
    expect(screen.getByRole('heading', { name: c.name })).toBeInTheDocument()
    expect(screen.getByText('HP')).toBeInTheDocument() // StatBlock
    expect(screen.getByText(c.traits[0]!.name)).toBeInTheDocument() // TraitList
    expect(screen.getByText(c.inventory[0]!.name)).toBeInTheDocument() // InventoryList
    if (c.conditions[0]) expect(screen.getByText(c.conditions[0])).toBeInTheDocument()
    if (c.backstory_hook) expect(screen.getByText(c.backstory_hook)).toBeInTheDocument()
  })
})
