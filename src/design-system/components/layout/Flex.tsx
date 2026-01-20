import * as React from 'react'
import { cn } from '@/lib/utils'

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Conteúdo do flex container
   */
  children: React.ReactNode
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Direção do flex (padrão: 'row')
   */
  direction?: 'row' | 'col' | 'row-reverse' | 'col-reverse'
  /**
   * Alinhamento horizontal (padrão: 'start')
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  /**
   * Alinhamento vertical (padrão: 'start')
   */
  align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline'
  /**
   * Wrap (padrão: false)
   */
  wrap?: boolean
  /**
   * Gap entre itens (padrão: 4)
   */
  gap?: 0 | 2 | 4 | 6 | 8
}

/**
 * Flex
 * 
 * Componente de layout que cria um container flexbox.
 * Usado para organizar conteúdo com flexbox e controle de alinhamento.
 * 
 * @example
 * ```tsx
 * <Flex direction="row" justify="center" align="center" gap={4}>
 *   <div>Item 1</div>
 *   <div>Item 2</div>
 * </Flex>
 * ```
 */
export function Flex({ 
  children, 
  className, 
  direction = 'row',
  justify = 'start',
  align = 'start',
  wrap = false,
  gap = 4,
  ...props 
}: FlexProps) {
  const flexClasses = cn(
    'flex',
    {
      'flex-row': direction === 'row',
      'flex-col': direction === 'col',
      'flex-row-reverse': direction === 'row-reverse',
      'flex-col-reverse': direction === 'col-reverse',
    },
    {
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'justify-evenly': justify === 'evenly',
    },
    {
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-stretch': align === 'stretch',
      'items-baseline': align === 'baseline',
    },
    wrap && 'flex-wrap',
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
      className={flexClasses}
      {...props}
    >
      {children}
    </div>
  )
}

Flex.displayName = 'Flex'
