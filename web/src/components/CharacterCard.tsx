import type { Character } from '@/types/character'
import { StatBlock } from '@/components/StatBlock'
import { TraitList } from '@/components/TraitList'
import { InventoryList } from '@/components/InventoryList'
import { ConditionList } from '@/components/ConditionList'
import { BackstoryHook } from '@/components/BackstoryHook'

export function CharacterCard({ character }: { character: Character }) {
  return (
    <>
      <h1>{character.name}</h1>
      <StatBlock
        stats={character.stats}
        hp={{ current: character.current_hp, max: character.max_hp }}
      />
      <TraitList traits={character.traits} />
      <InventoryList inventory={character.inventory} />
      <ConditionList conditions={character.conditions} />
      <BackstoryHook backstory_hook={character.backstory_hook} />
    </>
  )
}
