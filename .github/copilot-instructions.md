# GitHub Copilot Custom Instructions for Project

## Project Stack
- **Framework:** React
- **Language:** TypeScript (.tsx)
- **Styling:** Tailwind CSS

## Naming & Conventions
- Always use `npm` for package management. **Do not suggest `npx`, `yarn`, or `pnpm`**.
- Use functional components with hooks.
- Define prop types using `interface`.
- Use `PascalCase` for component names (e.g., `UserProfile.tsx`).

## Styling Guidelines
- Apply styling using Tailwind utility classes directly in the `className` attribute.
- Never use CSS modules or separate CSS files.

## Code Structure
- Components should be located in the `src/components` directory.
- For related components, create a sub-folder (e.g., `src/components/buttons/Button.tsx`).
- Keep components small and focused on a single responsibility.
- Use `useEffect` and `useState` for component-level state.