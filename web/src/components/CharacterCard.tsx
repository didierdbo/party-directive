
import type { Character } from "@/types/character"

export default function CharacterCard({ character }: { character: Character }) {
  return (
    <>
      <h1>{character.name}</h1>
      <h2>STR: {character.stats["STR"]}</h2>
      <h2>DEX: {character.stats["DEX"]}</h2>
      <h2>WIS: {character.stats["WIS"]}</h2>
    </>
  )
}
