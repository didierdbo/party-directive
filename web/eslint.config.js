import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import tseslint from 'typescript-eslint'
import prettier from 'eslint-config-prettier'
import { defineConfig, globalIgnores } from 'eslint/config'

// Kai's notes:
//  - Flat config (ESLint 9+). No more .eslintrc.
//  - `eslint-config-prettier` goes LAST — it disables any stylistic rules
//    that would fight Prettier. ESLint catches bugs, Prettier handles style.
//  - `react-hooks` catches stale closures and missing deps. Do not silence it
//    without understanding why it fired.
//  - `jsx-a11y` is a baseline, not a full audit. Use axe / Storybook a11y for more.
export default defineConfig([
  globalIgnores(['dist', 'coverage', 'node_modules']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommendedTypeChecked,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      jsxA11y.flatConfigs.recommended,
      prettier,
    ],
    languageOptions: {
      ecmaVersion: 2023,
      globals: { ...globals.browser, ...globals.es2023 },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // Require `import type { ... }` for type-only imports.
      // Plays nicely with verbatimModuleSyntax in tsconfig.
      '@typescript-eslint/consistent-type-imports': 'warn',
      // Allow `_unused` prefix convention for intentionally unused args.
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
  },
  // Test files: relax a few rules, add vitest/jest globals.
  {
    files: ['**/*.{test,spec}.{ts,tsx}', '**/__tests__/**/*.{ts,tsx}', 'src/test/**'],
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
])
