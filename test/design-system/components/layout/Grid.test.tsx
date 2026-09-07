import { render, screen } from '@testing-library/react'
import { Grid } from '@/design-system/components/layout'

describe('Grid', () => {
  it('deve renderizar o conteúdo corretamente', () => {
    render(
      <Grid>
        <div>Item 1</div>
        <div>Item 2</div>
      </Grid>
    )
    
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('deve aplicar classes de grid corretas', () => {
    const { container } = render(
      <Grid cols={1} colsMd={2} colsLg={3} gap={4}>
        <div>Item</div>
      </Grid>
    )
    
    const gridElement = container.firstChild as HTMLElement
    expect(gridElement).toHaveClass('grid', 'grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4')
  })

  it('deve usar valores padrão quando não especificados', () => {
    const { container } = render(
      <Grid>
        <div>Item</div>
      </Grid>
    )
    
    const gridElement = container.firstChild as HTMLElement
    expect(gridElement).toHaveClass('grid-cols-1', 'md:grid-cols-2', 'lg:grid-cols-3', 'gap-4')
  })
})
