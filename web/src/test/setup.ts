// Extends Vitest's `expect` with @testing-library/jest-dom matchers:
//   expect(el).toBeInTheDocument(), toHaveTextContent(), toBeDisabled(), etc.
// Imported here so every test file gets it for free.
import '@testing-library/jest-dom/vitest'
import { afterEach } from 'vitest'
import { cleanup } from '@testing-library/react'

// Unmount components and clear the DOM between tests to avoid leaks.
afterEach(() => {
  cleanup()
})
