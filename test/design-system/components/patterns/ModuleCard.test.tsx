import { render, screen } from '@testing-library/react'
import { ModuleCard } from '@/design-system/components/patterns/ModuleCard'

describe('ModuleCard', () => {
  const mockItems = [
    'Item 1',
    'Item 2',
    'Item 3'
  ]

  it('deve renderizar número, título e itens corretamente', () => {
    render(
      <ModuleCard
        number="01"
        title="Módulo 1 - Violão do Zero"
        items={mockItems}
      />
    )
    
    expect(screen.getByText('01')).toBeInTheDocument()
    expect(screen.getByText('Módulo 1 - Violão do Zero')).toBeInTheDocument()
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
    expect(screen.getByText('Item 3')).toBeInTheDocument()
  })

  it('deve renderizar todos os itens da lista', () => {
    const { container } = render(
      <ModuleCard
        number="01"
        title="Teste"
        items={mockItems}
      />
    )
    
    const listItems = container.querySelectorAll('li')
    expect(listItems).toHaveLength(3)
  })

  it('deve aplicar classes CSS corretas', () => {
    const { container } = render(
      <ModuleCard
        number="01"
        title="Teste"
        items={mockItems}
      />
    )
    
    const card = container.querySelector('[class*="group"]')
    expect(card).toBeInTheDocument()
  })
})
