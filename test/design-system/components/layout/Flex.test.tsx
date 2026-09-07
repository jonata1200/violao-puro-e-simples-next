import { render, screen } from '@testing-library/react'
import { Flex } from '@/design-system/components/layout'

describe('Flex', () => {
  it('deve renderizar o conteúdo corretamente', () => {
    render(
      <Flex>
        <div>Item 1</div>
        <div>Item 2</div>
      </Flex>
    )
    
    expect(screen.getByText('Item 1')).toBeInTheDocument()
    expect(screen.getByText('Item 2')).toBeInTheDocument()
  })

  it('deve aplicar classes flex corretas', () => {
    const { container } = render(
      <Flex direction="row" justify="center" align="center" gap={4}>
        <div>Item</div>
      </Flex>
    )
    
    const flexElement = container.firstChild as HTMLElement
    expect(flexElement).toHaveClass('flex', 'flex-row', 'justify-center', 'items-center', 'gap-4')
  })

  it('deve usar valores padrão quando não especificados', () => {
    const { container } = render(
      <Flex>
        <div>Item</div>
      </Flex>
    )
    
    const flexElement = container.firstChild as HTMLElement
    expect(flexElement).toHaveClass('flex', 'flex-row', 'justify-start', 'items-start', 'gap-4')
  })

  it('deve aplicar flex-wrap quando wrap for true', () => {
    const { container } = render(
      <Flex wrap={true}>
        <div>Item</div>
      </Flex>
    )
    
    const flexElement = container.firstChild as HTMLElement
    expect(flexElement).toHaveClass('flex-wrap')
  })

  it('não deve aplicar flex-wrap quando wrap for false', () => {
    const { container } = render(
      <Flex wrap={false}>
        <div>Item</div>
      </Flex>
    )
    
    const flexElement = container.firstChild as HTMLElement
    expect(flexElement).not.toHaveClass('flex-wrap')
  })
})
