# Carline Dashboard

A production-ready Next.js dashboard application built with shadcn/ui's sidebar-03 block pattern. Features modern dark-theme design, comprehensive tooling, and full TypeScript support.

## Tech Stack

- **Framework**: Next.js 15.4.6 (App Router, TypeScript, Tailwind CSS)
- **UI Components**: shadcn/ui (sidebar-03 block pattern)
- **Charts**: Recharts (ready for implementation)
- **Icons**: Lucide React
- **Styling**: Tailwind CSS with dark mode support
- **Theme**: next-themes for dark/light mode switching
- **Testing**: Vitest + React Testing Library + Playwright
- **Linting/Formatting**: ESLint + Prettier + Husky + lint-staged
- **Type Safety**: TypeScript (strict mode) + Zod for runtime validation
- **Package Manager**: npm
- **CI/CD**: GitHub Actions

## Features

- 🌗 Dark mode by default (matches shadcn/ui block styling exactly)
- 📱 Responsive design with mobile-friendly sidebar
- ♿ Accessibility features (ARIA labels, 44px touch targets)
- 🎨 Beautiful UI components from shadcn/ui
- 📊 Collapsible sidebar with icon mode
- 🔧 Complete tooling setup with git hooks
- ✅ Comprehensive testing setup
- 🚀 Production-ready configuration

## Requirements

- Node.js 20 or later
- npm (comes with Node.js)

## Installation & Setup

### Clone and Install

```bash
git clone <repository-url>
cd carline-dashboard
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the dashboard.

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run typecheck    # TypeScript type checking

# Testing
npm run test         # Run unit tests with Vitest
npm run test:e2e     # Run end-to-end tests with Playwright
```

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main dashboard page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Main sidebar component
│   ├── nav-main.tsx      # Navigation menu
│   ├── nav-projects.tsx  # Projects navigation
│   ├── nav-user.tsx      # User dropdown
│   ├── team-switcher.tsx # Team switching dropdown
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Mobile detection hook
└── lib/                  # Utility functions
    ├── env.ts            # Environment validation
    └── utils.ts          # Utility functions
```

## How to Add More shadcn/ui Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add table

# Add multiple components at once
npx shadcn@latest add button card table form
```

## How to Toggle Dark Mode

The app defaults to dark mode but supports system preference and manual switching:

```tsx
import { useTheme } from 'next-themes'

function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  )
}
```

## Environment Variables

Configure environment variables in `.env.local`:

```bash
# Example variables (none required for basic setup)
# NEXT_PUBLIC_API_URL=https://api.example.com
# DATABASE_URL=postgresql://...
```

Environment validation is handled by `src/lib/env.ts` using Zod.

## Testing

### Unit Tests (Vitest)

```bash
npm run test
```

Tests are located in `__tests__/` directory and use React Testing Library.

### End-to-End Tests (Playwright)

```bash
npm run test:e2e
```

E2E tests are in the `e2e/` directory and test the complete user workflows.

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

The app can be deployed to any platform that supports Node.js.

## Screenshots

_TODO: Add screenshots of the dashboard in dark mode_

## Architecture Decisions

- **App Router**: Using Next.js 13+ app directory for better organization
- **TypeScript Strict**: Enabled `strict` and `noUncheckedIndexedAccess` for maximum type safety
- **Dark Mode First**: Follows shadcn/ui block styling with dark theme as default
- **Component Organization**: shadcn/ui components in `components/ui/`, custom components at root level
- **Testing Strategy**: Unit tests for components, E2E tests for user workflows
- **Git Hooks**: Pre-commit hooks ensure code quality before commits

## Contributing

1. Run `npm run typecheck` - Ensure no TypeScript errors
2. Run `npm run lint` - Ensure no linting errors
3. Run `npm run test` - Ensure all tests pass
4. Run `npm run build` - Ensure build succeeds
5. Run `npm run test:e2e` - Ensure E2E tests pass

## License

MIT

---

Built with ❤️ using Next.js and shadcn/ui
