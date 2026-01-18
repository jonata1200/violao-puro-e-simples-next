import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieBanner } from '@/components/CookieBanner'

// Mock do localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
  writable: true,
})

// Mock dos componentes do design system
jest.mock('@/design-system/components/layout', () => ({
  Container: ({ children }: any) => <div data-testid="container">{children}</div>,
  Flex: ({ children }: any) => <div data-testid="flex">{children}</div>,
}))

describe('CookieBanner', () => {
  beforeEach(() => {
    if (typeof localStorage !== 'undefined') {
      localStorage.clear()
    }
  })
  
  it('should render when consent not given', () => {
    render(<CookieBanner />)
    
    expect(screen.getByText(/cookies/i)).toBeInTheDocument()
    expect(screen.getByText(/política de privacidade/i)).toBeInTheDocument()
  })
  
  it('should not render when consent already given', () => {
    localStorage.setItem('cookie_consent', 'true')
    
    const { container } = render(<CookieBanner />)
    
    expect(container.firstChild).toBeNull()
  })
  
  it('should hide banner when accept is clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<CookieBanner />)
    
    const acceptButton = screen.getByRole('button', { name: /aceitar e fechar/i })
    await user.click(acceptButton)
    
    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
    
    expect(localStorage.getItem('cookie_consent')).toBe('true')
  })
  
  it('should have link to privacy policy', () => {
    render(<CookieBanner />)
    
    const link = screen.getByRole('link', { name: /política de privacidade/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/politica-de-privacidade')
  })
  
  it('should have accessible button', () => {
    render(<CookieBanner />)
    
    const button = screen.getByRole('button', { name: /aceitar e fechar/i })
    expect(button).toBeInTheDocument()
  })
  
  // Edge cases
  it('should handle empty localStorage', () => {
    localStorage.clear()
    render(<CookieBanner />)
    
    expect(screen.getByText(/cookies/i)).toBeInTheDocument()
  })
  
  // Acessibilidade melhorada
  it('should have proper semantic structure', () => {
    render(<CookieBanner />)
    
    const banner = screen.getByText(/cookies/i).closest('div')
    expect(banner).toBeInTheDocument()
  })
  
  it('should be keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)
    
    const button = screen.getByRole('button', { name: /aceitar e fechar/i })
    const link = screen.getByRole('link', { name: /política de privacidade/i })
    
    // Verificar que ambos são focáveis
    await user.tab()
    expect(link).toHaveFocus()
    
    await user.tab()
    expect(button).toHaveFocus()
    
    // Verificar que Enter ativa o botão
    await user.keyboard('{Enter}')
    // O banner deve ser escondido após aceitar
  })
})
