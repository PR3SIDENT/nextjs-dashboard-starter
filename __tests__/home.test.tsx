import { render, screen } from '@testing-library/react'
import Page from '@/app/page'

// Mock next-themes
vi.mock('next-themes', () => ({
  ThemeProvider: ({ children }: { children: React.ReactNode }) => children,
  useTheme: () => ({ theme: 'dark', setTheme: vi.fn() }),
}))

// Mock next/font
vi.mock('next/font/google', () => ({
  Geist: () => ({ variable: '--font-geist-sans' }),
  Geist_Mono: () => ({ variable: '--font-geist-mono' }),
}))

describe('Home Page', () => {
  it('renders the sidebar navigation', () => {
    render(<Page />)

    // Check if sidebar content is present
    expect(screen.getByText('Platform')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Playground')).toBeInTheDocument()
  })

  it('renders the main content area', () => {
    render(<Page />)

    // Check for breadcrumb
    expect(screen.getByText('Data Fetching')).toBeInTheDocument()
    expect(screen.getByText('Building Your Application')).toBeInTheDocument()
  })
})
