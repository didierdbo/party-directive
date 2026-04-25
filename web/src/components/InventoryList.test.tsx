import { render, screen } from '@testing-library/react'
import { characters } from '@/fixtures/fixtureCharacters'
import { InventoryList } from './InventoryList'
import { within } from '@testing-library/react'

describe('InventoryList', () => {
  it('renders one listitem per inventory item', () => {
    const c = characters[0]!
    render(<InventoryList inventory={c.inventory} />)
    const list = screen.getByRole('list')
    expect(within(list).getByText('Sword')).toBeInTheDocument()
    expect(within(list).getByText('Shield')).toBeInTheDocument()
    expect(within(list).getByText('Leather Armor')).toBeInTheDocument()
  })
})
