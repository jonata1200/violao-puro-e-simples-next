import { render, screen } from '@testing-library/react'
import { FeatureCard } from '@/design-system/components/patterns'
import { Guitar } from 'lucide-react'

describe('FeatureCard', () => {
  it('deve renderizar título e descrição corretamente', () => {
    render(
      <FeatureCard
        icon={Guitar}
        title="Música Popular"
        description="Aprenda a tocar os maiores sucessos"
      />
    )
    
    expect(screen.getByText('Música Popular')).toBeInTheDocument()
    expect(screen.getByText('Aprenda a tocar os maiores sucessos')).toBeInTheDocument()
  })

  it('deve renderizar o ícone', () => {
    const { container } = render(
      <FeatureCard
        icon={Guitar}
        title="Teste"
        description="Descrição"
      />
    )
    
    const iconElement = container.querySelector('svg')
    expect(iconElement).toBeInTheDocument()
  })

  it('deve aplicar variante default', () => {
    const { container } = render(
      <FeatureCard
        icon={Guitar}
        title="Teste"
        description="Descrição"
        variant="default"
      />
    )
    
    // Verifica se o componente foi renderizado
    expect(screen.getByText('Teste')).toBeInTheDocument()
    expect(screen.getByText('Descrição')).toBeInTheDocument()
  })

  it('deve aplicar variante gradient', () => {
    const { container } = render(
      <FeatureCard
        icon={Guitar}
        title="Teste"
        description="Descrição"
        variant="gradient"
      />
    )
    
    const gradientElement = container.querySelector('[class*="gradient"]')
    expect(gradientElement).toBeInTheDocument()
  })
})
