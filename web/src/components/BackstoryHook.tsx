export function BackstoryHook({ backstory_hook }: { backstory_hook: string | null }) {
  if (backstory_hook === null) return null
  return <p>{backstory_hook}</p>
}
