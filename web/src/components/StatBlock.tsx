import type { Stats } from '@/types/character'
import { Fragment } from 'react'

interface StatBlockProps {
  stats: Stats
  hp: { current: number; max: number }
}

export function StatBlock({ stats, hp }: StatBlockProps) {
  return (
    <dl>
      <dt>HP</dt>
      <dd>
        {hp.current}/{hp.max}
      </dd>
      {(['STR', 'DEX', 'WIS'] as const).map((c) => (
        <Fragment key={c}>
          <dt>{c}</dt>
          <dd>{stats[c]}</dd>
        </Fragment>
      ))}
    </dl>
  )
}
