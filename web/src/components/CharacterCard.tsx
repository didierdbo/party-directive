import { fixtureCharacters } from "@/fixtures/fixtureCharacters"

export default function CharacterCard() {
    console.log(fixtureCharacters)
  return (
    <main>
      <h1>{fixtureCharacters[0] && fixtureCharacters[0].name}</h1>
      <h2>STR: {fixtureCharacters[0] && fixtureCharacters[0].stats["STR"]}</h2>
      <h2>DEX: {fixtureCharacters[0] && fixtureCharacters[0].stats["DEX"]}</h2>
      <h2>WIS: {fixtureCharacters[0] && fixtureCharacters[0].stats["WIS"]}</h2>
    </main>
  )
}
