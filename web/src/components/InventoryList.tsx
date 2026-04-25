import type { Item } from '@/types/character'
import { Fragment } from 'react'

interface InventoryListProps {
  inventory: Item[]
}

export function InventoryList({ inventory }: InventoryListProps) {
  return (
    <ul>
      {inventory.length > 0
        ? inventory.map((item) => (
            <Fragment key={item.name}>
              <li>{item.name}</li>
            </Fragment>
          ))
        : 'no items'}
    </ul>
  )
}
