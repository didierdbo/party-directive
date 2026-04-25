import { render, screen } from '@testing-library/react'
import { characters } from '@/fixtures/fixtureCharacters'
import { TraitList } from './TraitList'
import { within } from '@testing-library/react'

describe('TraitList', () => {
  it('renders one listitem per trait', () => {
    const c = characters[0]!
    render(<TraitList traits={c.traits} />)
    const list = screen.getByRole('list')
    expect(within(list).getByText('Greedy')).toBeInTheDocument()
    expect(within(list).getByText('Cautious')).toBeInTheDocument()
  })
})
