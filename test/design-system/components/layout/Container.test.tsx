import { render, screen } from '@testing-library/react'
import { Container } from '@/design-system/components/layout'

describe('Container', () => {
  it('deve renderizar o conteúdo corretamente', () => {
    render(
      <Container>
        <h1>Teste</h1>
      </Container>
    )
    
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('deve aplicar classes CSS corretas', () => {
    const { container } = render(
      <Container>
        <div>Conteúdo</div>
      </Container>
    )
    
    const containerElement = container.firstChild as HTMLElement
    expect(containerElement).toHaveClass('container', 'mx-auto', 'px-4')
  })

  it('deve permitir classes CSS adicionais', () => {
    const { container } = render(
      <Container className="custom-class">
        <div>Conteúdo</div>
      </Container>
    )
    
    const containerElement = container.firstChild as HTMLElement
    expect(containerElement).toHaveClass('custom-class')
  })
})
