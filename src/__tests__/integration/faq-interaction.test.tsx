import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from '@/components/FaqSection'

// Mock dos componentes do design system
jest.mock('@/design-system/components/layout', () => ({
  Container: ({ children }: any) => <div data-testid="container">{children}</div>,
  Section: ({ children, id, className }: any) => (
    <section data-testid="section" id={id} className={className}>{children}</section>
  ),
}))

describe('FAQ Interaction Flow', () => {
  const mockToggleFaq = jest.fn()
  
  beforeEach(() => {
    mockToggleFaq.mockClear()
  })

  it('should render all FAQ questions', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    // Verificar se todas as perguntas estão presentes
    expect(screen.getByText(/preciso ter conhecimento prévio de música\?/i)).toBeInTheDocument()
    expect(screen.getByText(/quanto tempo leva para aprender\?/i)).toBeInTheDocument()
    expect(screen.getByText(/o curso serve para quem já toca um pouco\?/i)).toBeInTheDocument()
    expect(screen.getByText(/posso tirar dúvidas com o professor\?/i)).toBeInTheDocument()
    expect(screen.getByText(/e se eu não gostar do curso\?/i)).toBeInTheDocument()
    expect(screen.getByText(/o acesso é vitalício\?/i)).toBeInTheDocument()
  })

  it('should not show answers when FAQ is closed', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    // Resposta da primeira pergunta não deve estar visível ou no DOM
    const resposta = screen.queryByText(/não! o curso foi desenvolvido para iniciantes completos/i)
    if (resposta) {
      expect(resposta).not.toBeVisible()
    } else {
      // Se não está no DOM, também está correto
      expect(resposta).toBeNull()
    }
  })

  it('should expand FAQ item when clicked', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    // Primeira pergunta deve estar presente
    const firstQuestion = screen.getByText(/preciso ter conhecimento prévio de música\?/i)
    expect(firstQuestion).toBeInTheDocument()
    
    // Resposta não deve estar visível inicialmente
    const respostaInicial = screen.queryByText(/não! o curso foi desenvolvido para iniciantes completos/i)
    if (respostaInicial) {
      expect(respostaInicial).not.toBeVisible()
    }
    
    // Clicar para expandir
    await user.click(firstQuestion.closest('button')!)
    
    // Verificar que toggleFaq foi chamado
    expect(mockToggleFaq).toHaveBeenCalledWith(0)
    
    // Rerender com FAQ aberto
    rerender(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    // Resposta deve estar visível
    expect(screen.getByText(/não! o curso foi desenvolvido para iniciantes completos/i)).toBeVisible()
  })

  it('should collapse FAQ item when clicked again', async () => {
    const user = userEvent.setup()
    const { rerender } = render(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    // Resposta deve estar visível inicialmente
    expect(screen.getByText(/não! o curso foi desenvolvido para iniciantes completos/i)).toBeVisible()
    
    // Clicar novamente para fechar
    const firstQuestion = screen.getByText(/preciso ter conhecimento prévio de música\?/i)
    await user.click(firstQuestion.closest('button')!)
    
    // Verificar que toggleFaq foi chamado
    expect(mockToggleFaq).toHaveBeenCalledWith(0)
    
    // Rerender com FAQ fechado
    rerender(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    // Resposta não deve estar visível
    await waitFor(() => {
      const resposta = screen.queryByText(/não! o curso foi desenvolvido para iniciantes completos/i)
      if (resposta) {
        expect(resposta).not.toBeVisible()
      }
    })
  })

  it('should allow only one FAQ item open at a time', async () => {
    const user = userEvent.setup()
    
    let openFaq: number | null = null
    const setOpenFaq = (value: number | null) => {
      openFaq = value
    }
    
    const mockToggleFaq = jest.fn((index: number) => {
      // Simular lógica de toggle: se já está aberto, fecha; senão, abre
      setOpenFaq(openFaq === index ? null : index)
    })
    
    const { rerender } = render(<FaqSection openFaq={openFaq} toggleFaq={mockToggleFaq} />)
    
    const question1 = screen.getByText(/preciso ter conhecimento prévio de música\?/i)
    const question2 = screen.getByText(/quanto tempo leva para aprender\?/i)
    
    // Abrir primeira pergunta
    await user.click(question1.closest('button')!)
    // Simular o toggle
    setOpenFaq(0)
    rerender(<FaqSection openFaq={0} toggleFaq={mockToggleFaq} />)
    
    // Verificar que a primeira resposta está visível
    await waitFor(() => {
      expect(screen.getByText(/não! o curso foi desenvolvido para iniciantes completos/i)).toBeVisible()
    })
    
    // Abrir segunda pergunta
    await user.click(question2.closest('button')!)
    // Simular o toggle - primeira fecha, segunda abre
    setOpenFaq(1)
    rerender(<FaqSection openFaq={1} toggleFaq={mockToggleFaq} />)
    
    // Primeira deve fechar, segunda deve abrir
    // Aguardar que a primeira resposta desapareça
    await waitFor(() => {
      const primeiraResposta = screen.queryByText(/não! o curso foi desenvolvido para iniciantes completos/i)
      // A resposta pode estar no DOM mas oculta, ou removida do DOM
      if (primeiraResposta) {
        expect(primeiraResposta).not.toBeVisible()
      }
    }, { timeout: 2000 })
    
    // Verificar que a segunda resposta está visível
    await waitFor(() => {
      expect(screen.getByText(/com dedicação de 30 minutos por dia/i)).toBeVisible()
    }, { timeout: 2000 })
  })

  it('should have accessible FAQ buttons', () => {
    render(<FaqSection openFaq={null} toggleFaq={mockToggleFaq} />)
    
    const buttons = screen.getAllByRole('button')
    // Deve ter pelo menos 6 botões (um para cada FAQ)
    expect(buttons.length).toBeGreaterThanOrEqual(6)
    
    // Verificar que os botões são focáveis e têm texto
    buttons.forEach(button => {
      expect(button).toBeInTheDocument()
      // Botões podem não ter type="button" explicitamente, mas devem ser focáveis
      expect(button).not.toHaveAttribute('disabled')
    })
  })
})
