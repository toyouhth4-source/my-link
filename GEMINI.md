# Gemini Project Context: my-link

## Project Overview
This project, `my-link`, is a monorepo-style structure currently containing a single Next.js application named `my-profile`. The application is built using the latest Next.js 16 (App Router), React 19, and Tailwind CSS 4.

**Important Note for AI Agents:** This version of Next.js 16 may contain breaking changes. Always refer to the relevant guides in `my-profile/node_modules/next/dist/docs/` before writing any code.

### Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Library:** React 19
- **Styling:** Tailwind CSS 4 (with PostCSS)
- **Language:** TypeScript
- **Linting:** ESLint

## Directory Structure
- `README.md`: Root documentation (currently empty).
- `my-profile/`: The main Next.js application.
  - `app/`: Contains the App Router pages and layouts.
  - `public/`: Static assets like SVGs and icons.
  - `package.json`: Dependencies and scripts for the `my-profile` application.
  - `tsconfig.json`: TypeScript configuration.
  - `next.config.ts`: Next.js configuration.
  - `eslint.config.mjs`: ESLint configuration.

## Building and Running (my-profile)
All commands should be run from the `my-profile` directory:

| Task | Command |
| :--- | :--- |
| **Development** | `npm run dev` |
| **Build** | `npm run build` |
| **Production Start** | `npm run start` |
| **Linting** | `npm run lint` |

## Development Conventions
- **App Router:** Use the Next.js App Router (`app/` directory) for routing and layouts.
- **TypeScript:** Strict type checking is enabled. Ensure all new components and functions are properly typed.
- **Tailwind CSS:** Use Tailwind CSS utility classes for styling. Note that this project uses Tailwind CSS v4.
- **Geist Font:** The project uses the Geist and Geist Mono fonts by default, configured via `next/font`.
- **Formatting:** Adhere to the project's ESLint configuration for code consistency.
