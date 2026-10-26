# Agent Guidelines for Portfolio React

## Commands

- **Build**: `pnpm build` (runs TypeScript check then Vite build)
- **Lint**: `pnpm lint` (oxlint via Vite Plus), `pnpm lint:fix` (auto-fix)
- **Format**: `pnpm format` (Oxfmt via Vite Plus), `pnpm format:check` (check only)
- **Dev**: `pnpm dev` (development server)
- **Preview**: `pnpm preview` (preview production build)

## Code Style

- **Imports**: Use `@/*` path aliases; order (type → builtin → external → internal → parent → sibling → index) is applied by Oxfmt `sortImports`
- **Formatting**: Oxfmt (`fmt` in `vite.config.ts`) with 100 char width, trailing commas, double quotes, 2-space tabs, Tailwind class sorting
- **TypeScript**: No explicit return types, allow `any`, unused vars prefixed with `_`
- **Components**: Use function declarations with export, PascalCase naming
- **Styling**: Tailwind CSS with custom color scheme (text: #eceff3, background: #0b0f13, primary: #a2b7d1)
- **Utilities**: Use `cn()` from lib/utils for className merging
