# Next.js Dashboard Starter

A modern, production-ready dashboard starter template built with Next.js 15, shadcn/ui, and Tailwind CSS. Features a beautiful dark theme, responsive sidebar navigation, and comprehensive development tooling.

## ✨ Features

- 🌗 **Dark mode by default** with system theme support
- 📱 **Responsive design** with collapsible sidebar
- ♿ **Accessibility features** built-in
- 🎨 **Beautiful UI components** from shadcn/ui
- 🔧 **Complete development tooling** (ESLint, Prettier, TypeScript)
- ✅ **Testing setup** (Vitest + Playwright)
- 🚀 **Production-ready** configuration

## 🛠 Tech Stack

- **Framework**: Next.js 15.4.6 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with OKLCH colors
- **UI Components**: shadcn/ui + Radix UI
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Theme**: next-themes for dark/light switching
- **Testing**: Vitest + React Testing Library + Playwright
- **Linting**: ESLint + Prettier + Husky hooks
- **Validation**: Zod for runtime type safety

## 🚀 Quick Start

### Prerequisites

- Node.js 20 or later
- npm (comes with Node.js)

### Installation

```bash
# Clone this repository
git clone <your-repo-url>
cd nextjs-dashboard-starter

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your dashboard.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles with CSS variables
│   ├── layout.tsx         # Root layout with theme provider
│   └── page.tsx           # Main dashboard page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── app-sidebar.tsx   # Main sidebar navigation
│   ├── nav-main.tsx      # Navigation menu items
│   ├── nav-projects.tsx  # Projects section
│   ├── nav-user.tsx      # User profile dropdown
│   ├── team-switcher.tsx # Team/organization switcher
│   └── theme-provider.tsx # Theme context provider
├── hooks/                # Custom React hooks
│   └── use-mobile.ts     # Mobile device detection
└── lib/                  # Utility functions
    ├── env.ts            # Environment variable validation
    └── utils.ts          # Tailwind CSS utilities
```

## 📜 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format with Prettier
npm run typecheck    # TypeScript type checking

# Testing
npm run test         # Run unit tests
npm run test:e2e     # Run end-to-end tests
```

## 🎨 Customization

### Adding shadcn/ui Components

```bash
# Add individual components
npx shadcn@latest add button
npx shadcn@latest add card
npx shadcn@latest add table

# Add multiple components
npx shadcn@latest add button card table form
```

### Theme Customization

The app uses a custom color system with OKLCH colors. Modify colors in `src/app/globals.css`:

```css
:root {
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  /* ... more color variables */
}

.dark {
  --background: oklch(0.145 0 0);
  --foreground: oklch(0.985 0 0);
  /* ... dark mode colors */
}
```

### Environment Variables

Create `.env.local` for your environment variables:

```bash
# Example variables
NEXT_PUBLIC_APP_NAME="My Dashboard"
DATABASE_URL="postgresql://..."
```

Environment validation is handled in `src/lib/env.ts` using Zod.

## 🧪 Testing

### Unit Tests

```bash
npm run test
```

Tests use Vitest and React Testing Library. Example test in `__tests__/home.test.tsx`.

### End-to-End Tests

```bash
npm run test:e2e
```

E2E tests use Playwright and are located in the `e2e/` directory.

## 🚀 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

```bash
npm run build
npm start
```

Works on any platform supporting Node.js (Netlify, Railway, DigitalOcean, etc.).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test && npm run test:e2e`
5. Check linting: `npm run lint && npm run typecheck`
6. Submit a pull request

## 📄 License

MIT License - feel free to use this starter for personal or commercial projects.

---

**Ready to build something amazing?** 🚀

This starter gives you a solid foundation with modern tooling, beautiful UI, and best practices built-in. Just clone, install, and start building your next dashboard application!
