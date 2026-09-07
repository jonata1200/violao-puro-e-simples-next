import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from '@/components/FaqSection'

// Mock do Radix Accordion: jsdom não implementa animações/ResizeObserver usados
// pelo componente; o mock preserva a semântica de trigger/conteúdo.
jest.mock('@/components/ui/accordion', () => {
  const React = require('react')
  return {
    Accordion: ({ children }: any) => React.createElement('div', { 'data-testid': 'accordion' }, children),
    AccordionItem: ({ children, value }: any) =>
      React.createElement('div', { 'data-testid': `accordion-item-${value}` }, children),
    AccordionTrigger: ({ children }: any) =>
      React.createElement('button', { 'data-testid': 'accordion-trigger' }, children),
    AccordionContent: ({ children }: any) =>
      React.createElement('div', { 'data-testid': 'accordion-content' }, children),
  }
})

// Mock dos componentes do design system
jest.mock('@/design-system/components/layout', () => ({
  Section: ({ children, id, className }: any) => (
    <section id={id} className={className} data-testid="section">
      {children}
    </section>
  ),
  Container: ({ children }: any) => (
    <div data-testid="container">{children}</div>
  ),
}))

describe('FaqSection', () => {
  it('should render section heading', () => {
    render(<FaqSection />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/perguntas frequentes/i)
  })

  it('should render all FAQ items', () => {
    render(<FaqSection />)

    expect(screen.getByText(/preciso ter conhecimento prévio/i)).toBeInTheDocument()
    expect(screen.getByText(/quanto tempo leva/i)).toBeInTheDocument()
    expect(screen.getByText(/curso serve para quem já toca/i)).toBeInTheDocument()
  })

  it('should render all six FAQ triggers as buttons', () => {
    render(<FaqSection />)

    const triggers = screen.getAllByTestId('accordion-trigger')
    expect(triggers.length).toBe(6)
    triggers.forEach(trigger => expect(trigger).toBeInTheDocument())
  })

  it('should have section id for navigation', () => {
    render(<FaqSection />)

    const section = screen.getByTestId('section')
    expect(section).toHaveAttribute('id', 'faq')
  })

  it('should have proper heading hierarchy', () => {
    render(<FaqSection />)

    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toBeInTheDocument()

    const questionHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(questionHeadings.length).toBe(6)
  })
})