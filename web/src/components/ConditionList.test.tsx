import { render, screen } from '@testing-library/react'
import { ConditionList } from './ConditionList'
import { within } from '@testing-library/react'

describe('ConditionList', () => {
  it('renders one listitem per condition', () => {
    render(<ConditionList conditions={['wounded']} />)
    const list = screen.getByRole('list')
    expect(within(list).getByText('wounded')).toBeInTheDocument()
  })
})
