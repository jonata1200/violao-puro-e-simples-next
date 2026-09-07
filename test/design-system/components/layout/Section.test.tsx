import { render, screen } from '@testing-library/react'
import { Section } from '@/design-system/components/layout'

describe('Section', () => {
  it('deve renderizar o conteúdo corretamente', () => {
    render(
      <Section>
        <h2>Seção de Teste</h2>
      </Section>
    )
    
    expect(screen.getByText('Seção de Teste')).toBeInTheDocument()
  })

  it('deve usar tag section por padrão', () => {
    const { container } = render(
      <Section>
        <div>Conteúdo</div>
      </Section>
    )
    
    expect(container.querySelector('section')).toBeInTheDocument()
  })

  it('deve permitir mudar a tag HTML', () => {
    const { container } = render(
      <Section as="div">
        <div>Conteúdo</div>
      </Section>
    )
    
    expect(container.querySelector('div')).toBeInTheDocument()
    expect(container.querySelector('section')).not.toBeInTheDocument()
  })

  it('deve aplicar classes CSS corretas', () => {
    const { container } = render(
      <Section>
        <div>Conteúdo</div>
      </Section>
    )
    
    const sectionElement = container.querySelector('section')
    expect(sectionElement).toHaveClass('py-12', 'md:py-16', 'lg:py-20')
  })

  it('deve permitir classes CSS adicionais', () => {
    const { container } = render(
      <Section className="custom-section">
        <div>Conteúdo</div>
      </Section>
    )
    
    const sectionElement = container.querySelector('section')
    expect(sectionElement).toHaveClass('custom-section')
  })
})
