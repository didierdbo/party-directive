import type { Trait } from '@/types/character'
import { Fragment } from 'react'

interface TraitListProps {
  traits: Trait[]
}

export function TraitList({ traits }: TraitListProps) {
  return (
    <ul>
      {traits.length > 0
        ? traits.map((t) => (
            <Fragment key={t.name}>
              <li>{t.name}</li>
            </Fragment>
          ))
        : 'no traits'}
    </ul>
  )
}
