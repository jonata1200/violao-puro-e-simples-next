import * as React from 'react'
import { cn } from '@/lib/utils'

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Conteúdo do grid
   */
  children: React.ReactNode
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Número de colunas no mobile (padrão: 1)
   */
  cols?: 1 | 2 | 3 | 4
  /**
   * Número de colunas no tablet (padrão: 2)
   */
  colsMd?: 2 | 3 | 4 | 6
  /**
   * Número de colunas no desktop (padrão: 3)
   */
  colsLg?: 3 | 4 | 6 | 12
  /**
   * Gap entre itens (padrão: 4)
   */
  gap?: 0 | 2 | 4 | 6 | 8
}

/**
 * Grid
 * 
 * Componente de layout que cria um grid responsivo.
 * Usado para organizar conteúdo em colunas com breakpoints responsivos.
 * 
 * @example
 * ```tsx
 * <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 *   <div>Item 3</div>
 * </Grid>
 * ```
 */
export function Grid({ 
  children, 
  className, 
  cols = 1,
  colsMd = 2,
  colsLg = 3,
  gap = 4,
  ...props 
}: GridProps) {
  const gridClasses = cn(
    'grid',
    {
      'grid-cols-1': cols === 1,
      'grid-cols-2': cols === 2,
      'grid-cols-3': cols === 3,
      'grid-cols-4': cols === 4,
    },
    {
      'md:grid-cols-2': colsMd === 2,
      'md:grid-cols-3': colsMd === 3,
      'md:grid-cols-4': colsMd === 4,
      'md:grid-cols-6': colsMd === 6,
    },
    {
      'lg:grid-cols-3': colsLg === 3,
      'lg:grid-cols-4': colsLg === 4,
      'lg:grid-cols-6': colsLg === 6,
      'lg:grid-cols-12': colsLg === 12,
    },
    {
      'gap-0': gap === 0,
      'gap-2': gap === 2,
      'gap-4': gap === 4,
      'gap-6': gap === 6,
      'gap-8': gap === 8,
    },
    className
  )
  
  return (
    <div
      className={gridClasses}
      {...props}
    >
      {children}
    </div>
  )
}

Grid.displayName = 'Grid'
