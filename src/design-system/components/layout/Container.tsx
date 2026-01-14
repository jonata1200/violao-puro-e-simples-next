import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Conteúdo do container
   */
  children: React.ReactNode
  /**
   * Classes CSS adicionais
   */
  className?: string
}

/**
 * Container
 * 
 * Componente de layout que centraliza o conteúdo e aplica padding horizontal.
 * Usado para envolver seções e manter largura máxima consistente.
 * 
 * @example
 * ```tsx
 * <Container>
 *   <h1>Título</h1>
 * </Container>
 * ```
 */
export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div
      className={cn('container mx-auto px-4', className)}
      {...props}
    >
      {children}
    </div>
  )
}

Container.displayName = 'Container'
