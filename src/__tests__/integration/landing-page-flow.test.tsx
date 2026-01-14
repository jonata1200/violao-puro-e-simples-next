import { render, screen, waitFor } from '@testing-library/react'
import HomePageClient from '@/app/HomePageClient'

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
  Container: ({ children, className }: any) => (
    <div data-testid="container" className={className}>{children}</div>
  ),
  Section: ({ children, id, className }: any) => (
    <section data-testid="section" id={id} className={className}>{children}</section>
  ),
  Grid: ({ children, className }: any) => (
    <div data-testid="grid" className={className}>{children}</div>
  ),
  Flex: ({ children, className }: any) => (
    <div data-testid="flex" className={className}>{children}</div>
  ),
}))

jest.mock('@/design-system/components/patterns', () => ({
  StatCard: ({ title, value, description }: any) => (
    <div data-testid="stat-card">
      <h3>{title}</h3>
      <p>{value}</p>
      <p>{description}</p>
    </div>
  ),
  FeatureCard: ({ title, description, icon }: any) => (
    <div data-testid="feature-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}))

// Mock do CustomVideoPlayer
jest.mock('@/components/CustomVideoPlayer', () => ({
  CustomVideoPlayer: ({ src, poster, aspectRatio }: any) => (
    <div data-testid="custom-video-player" data-src={src} data-poster={poster} data-aspect={aspectRatio}>
      <video src={src} poster={poster} />
      <button aria-label="Play">Play</button>
    </div>
  ),
}))

// Mock de todos os componentes de seção para simplificar
jest.mock('@/components/HeroSection', () => ({
  HeroSection: () => <section data-testid="hero-section"><h1>De Iniciante a Violonista Completo</h1></section>,
}))

jest.mock('@/components/AboutSection', () => ({
  AboutSection: () => <section data-testid="about-section"><h2>Sobre o Professor</h2></section>,
}))

jest.mock('@/components/CourseModulesSection', () => ({
  CourseModulesSection: () => <section data-testid="modules-section"><h2>Módulos do Curso</h2></section>,
}))

jest.mock('@/components/BenefitsSection', () => ({
  BenefitsSection: () => <section data-testid="benefits-section"><h2>Benefícios</h2></section>,
}))

jest.mock('@/components/OfferSection', () => ({
  OfferSection: () => <section data-testid="offer-section">Offer</section>,
}))

jest.mock('@/components/TestimonialsSection', () => ({
  TestimonialsSection: () => <section data-testid="testimonials-section"><h2>Depoimentos</h2></section>,
}))

jest.mock('@/components/TimedOfferSection', () => ({
  TimedOfferSection: ({ timeLeft }: any) => (
    <section data-testid="timed-offer-section">
      <p>Oferta expira em:</p>
      <div>{String(timeLeft?.hours || 0).padStart(2, '0')}:{String(timeLeft?.minutes || 0).padStart(2, '0')}:{String(timeLeft?.seconds || 0).padStart(2, '0')}</div>
    </section>
  ),
}))

jest.mock('@/components/FaqSection', () => ({
  FaqSection: ({ openFaq, toggleFaq }: any) => (
    <section data-testid="faq-section">
      <h2>Perguntas Frequentes</h2>
      <button onClick={() => toggleFaq(0)}>Preciso ter conhecimento prévio de música?</button>
    </section>
  ),
}))

jest.mock('@/components/BonusSection', () => ({
  BonusSection: () => <section data-testid="bonus-section">Bonus</section>,
}))

jest.mock('@/components/FinalCtaSection', () => ({
  FinalCtaSection: () => <section data-testid="final-cta-section">Final CTA</section>,
}))

jest.mock('@/components/Footer', () => ({
  Footer: () => <footer data-testid="footer">Footer</footer>,
}))

describe('Landing Page Flow', () => {
  beforeEach(() => {
    localStorage.clear()
    // Mock do timer para isClient
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should render all main sections', async () => {
    render(<HomePageClient />)
    
    // Avançar timer para garantir que isClient seja true
    jest.advanceTimersByTime(100)
    
    await waitFor(() => {
      // Verificar seções principais pelo heading
      expect(screen.getByRole('heading', { name: /iniciante a violonista/i })).toBeInTheDocument()
    })
    
    // Verificar outras seções por texto característico
    expect(screen.getByText(/sobre o professor/i)).toBeInTheDocument()
    expect(screen.getByText(/módulos do curso/i)).toBeInTheDocument()
    expect(screen.getByText(/benefícios/i)).toBeInTheDocument()
    expect(screen.getByText(/depoimentos/i)).toBeInTheDocument()
    expect(screen.getByText(/perguntas frequentes/i)).toBeInTheDocument()
  })

  it('should have testimonials section', async () => {
    render(<HomePageClient />)
    
    jest.advanceTimersByTime(100)
    
    await waitFor(() => {
      // Verificar se a seção de depoimentos está presente
      expect(screen.getByTestId('testimonials-section')).toBeInTheDocument()
      expect(screen.getByText(/depoimentos/i)).toBeInTheDocument()
    })
  })

  it('should have FAQ section with questions', async () => {
    render(<HomePageClient />)
    
    jest.advanceTimersByTime(100)
    
    await waitFor(() => {
      // Verificar se a seção FAQ está presente
      expect(screen.getByTestId('faq-section')).toBeInTheDocument()
      expect(screen.getByText(/perguntas frequentes/i)).toBeInTheDocument()
    })
  })

  it('should have timed offer section when client is mounted', async () => {
    render(<HomePageClient />)
    
    // Avançar timer para garantir que isClient seja true
    jest.advanceTimersByTime(100)
    
    await waitFor(() => {
      // Verificar se o timer está presente
      expect(screen.getByText(/oferta expira em:/i)).toBeInTheDocument()
    })
  })
})
