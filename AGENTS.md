# Agent Guidelines for Portfolio React

## Commands

- **Build**: `pnpm build` (runs TypeScript check then Vite build)
- **Lint**: `pnpm lint` (ESLint check), `pnpm lint:fix` (auto-fix)
- **Dev**: `pnpm dev` (development server)
- **Preview**: `pnpm preview` (preview production build)

## Code Style

- **Imports**: Use `@/*` path aliases, order: type → builtin → external → internal → sibling → index
- **Formatting**: Prettier with 100 char width, trailing commas, double quotes, 2-space tabs
- **TypeScript**: No explicit return types, allow `any`, unused vars prefixed with `_`
- **Components**: Use function declarations with export, PascalCase naming
- **Styling**: Tailwind CSS with custom color scheme (text: #eceff3, background: #0b0f13, primary: #a2b7d1)
- **Utilities**: Use `cn()` from lib/utils for className merging
- **Line spacing**: Blank lines before returns/exports and between variable declarations
