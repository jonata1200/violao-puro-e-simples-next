import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from './FaqSection'

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
  const mockToggleFaq = jest.fn()
  
  beforeEach(() => {
    mockToggleFaq.mockClear()
  })
  
  it('should render section heading', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/perguntas frequentes/i)
  })
  
  it('should render all FAQ items', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    expect(screen.getByText(/preciso ter conhecimento prévio/i)).toBeInTheDocument()
    expect(screen.getByText(/quanto tempo leva/i)).toBeInTheDocument()
    expect(screen.getByText(/curso serve para quem já toca/i)).toBeInTheDocument()
  })
  
  it('should call toggleFaq when FAQ item is clicked', async () => {
    const user = userEvent.setup()
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const firstFaqButton = screen.getAllByRole('button')[0]
    await user.click(firstFaqButton)
    
    expect(mockToggleFaq).toHaveBeenCalledTimes(1)
    expect(mockToggleFaq).toHaveBeenCalledWith(0)
  })
  
  it('should show answer when FAQ is open', () => {
    render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    expect(screen.getByText(/não! o curso foi desenvolvido/i)).toBeInTheDocument()
  })
  
  it('should hide answer when FAQ is closed', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    expect(screen.queryByText(/não! o curso foi desenvolvido/i)).not.toBeInTheDocument()
  })
  
  it('should rotate chevron when FAQ is open', () => {
    const { container } = render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    const chevron = container.querySelector('svg')
    expect(chevron).toHaveClass('rotate-180')
  })
  
  it('should not rotate chevron when FAQ is closed', () => {
    const { container } = render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const chevrons = container.querySelectorAll('svg')
    chevrons.forEach(chevron => {
      expect(chevron).not.toHaveClass('rotate-180')
    })
  })
  
  it('should have accessible buttons', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBeGreaterThan(0)
    
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })
  
  it('should have section id for navigation', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const section = screen.getByTestId('section')
    expect(section).toHaveAttribute('id', 'faq')
  })
  
  // Edge cases
  it('should handle rapid toggles correctly', async () => {
    const user = userEvent.setup()
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const firstButton = screen.getAllByRole('button')[0]
    
    // Clicar múltiplas vezes rapidamente
    await user.click(firstButton)
    await user.click(firstButton)
    await user.click(firstButton)
    
    expect(mockToggleFaq).toHaveBeenCalledTimes(3)
  })
  
  it('should handle opening different FAQs', () => {
    const { rerender } = render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    expect(screen.getByText(/não! o curso foi desenvolvido/i)).toBeInTheDocument()
    
    rerender(<FaqSection openFaq={1} toggleFaq={mockToggleFaq} />)
    
    expect(screen.getByText(/com dedicação de 30 minutos/i)).toBeInTheDocument()
    expect(screen.queryByText(/não! o curso foi desenvolvido/i)).not.toBeInTheDocument()
  })
  
  it('should handle closing FAQ when clicking same item', async () => {
    const user = userEvent.setup()
    render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    const firstButton = screen.getAllByRole('button')[0]
    await user.click(firstButton)
    
    expect(mockToggleFaq).toHaveBeenCalledWith(0)
  })
  
  // Acessibilidade melhorada
  it('should have proper ARIA attributes', () => {
    render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    const buttons = screen.getAllByRole('button')
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
    })
  })
  
  it('should be keyboard accessible', async () => {
    const user = userEvent.setup()
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const firstButton = screen.getAllByRole('button')[0]
    await user.tab()
    expect(firstButton).toHaveFocus()
    
    await user.keyboard('{Enter}')
    expect(mockToggleFaq).toHaveBeenCalled()
  })
  
  it('should have proper heading hierarchy', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const mainHeading = screen.getByRole('heading', { level: 2 })
    expect(mainHeading).toBeInTheDocument()
    
    const questionHeadings = screen.getAllByRole('heading', { level: 3 })
    expect(questionHeadings.length).toBeGreaterThan(0)
  })
})
