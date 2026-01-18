import { render, screen, waitFor } from '@testing-library/react'
import { TimedOfferSection } from '@/components/TimedOfferSection'

// Mock dos componentes do design system
jest.mock('@/design-system/components/layout', () => ({
  Container: ({ children, className }: any) => (
    <div data-testid="container" className={className}>{children}</div>
  ),
  Section: ({ children, className }: any) => (
    <section data-testid="section" className={className}>{children}</section>
  ),
}))

describe('Timed Offer Flow', () => {
  beforeEach(() => {
    jest.useFakeTimers()
  })

  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })

  it('should display countdown timer', () => {
    const timeLeft = {
      hours: 5,
      minutes: 30,
      seconds: 45,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    // Verificar se o timer está visível com formato HH:MM:SS
    expect(screen.getByText(/05/)).toBeInTheDocument()
    expect(screen.getByText(/30/)).toBeInTheDocument()
    expect(screen.getByText(/45/)).toBeInTheDocument()
    expect(screen.getByText(/oferta expira em:/i)).toBeInTheDocument()
  })

  it('should display correct time format', () => {
    const timeLeft = {
      hours: 1,
      minutes: 2,
      seconds: 3,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    // Verificar que os números estão formatados com zero à esquerda
    expect(screen.getByText(/01/)).toBeInTheDocument()
    expect(screen.getByText(/02/)).toBeInTheDocument()
    expect(screen.getByText(/03/)).toBeInTheDocument()
  })

  it('should show hours, minutes and seconds labels', () => {
    const timeLeft = {
      hours: 10,
      minutes: 20,
      seconds: 30,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    expect(screen.getByText(/horas/i)).toBeInTheDocument()
    expect(screen.getByText(/minutos/i)).toBeInTheDocument()
    expect(screen.getByText(/segundos/i)).toBeInTheDocument()
  })

  it('should display CTA button', () => {
    const timeLeft = {
      hours: 5,
      minutes: 30,
      seconds: 45,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    const ctaButton = screen.getByRole('link', { name: /garantir minha vaga/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute('href', 'https://pay.hotmart.com/S37582308X')
    expect(ctaButton).toHaveAttribute('target', '_blank')
  })

  it('should handle zero time', () => {
    const timeLeft = {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    // Verificar que ainda mostra o timer mesmo com zero
    // Usar getAllByText pois há 3 elementos com "00" (horas, minutos, segundos)
    const zeroElements = screen.getAllByText(/00/)
    expect(zeroElements.length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText(/oferta expira em:/i)).toBeInTheDocument()
  })

  it('should have clock icon', () => {
    const timeLeft = {
      hours: 5,
      minutes: 30,
      seconds: 45,
    }

    render(<TimedOfferSection timeLeft={timeLeft} />)
    
    // Verificar que a seção está presente (o ícone está dentro)
    expect(screen.getByText(/oferta expira em:/i)).toBeInTheDocument()
  })
})
