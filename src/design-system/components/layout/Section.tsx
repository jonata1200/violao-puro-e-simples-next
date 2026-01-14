import * as React from 'react'
import { cn } from '@/lib/utils'

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * Conteúdo da seção
   */
  children: React.ReactNode
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Tag HTML a ser usada (padrão: 'section')
   */
  as?: 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'
}

/**
 * Section
 * 
 * Componente de layout que aplica espaçamento vertical consistente.
 * Usado para separar seções da página com padding responsivo.
 * 
 * @example
 * ```tsx
 * <Section>
 *   <h2>Título da Seção</h2>
 * </Section>
 * ```
 */
export function Section({ 
  children, 
  className, 
  as: Component = 'section',
  ...props 
}: SectionProps) {
  return (
    <Component
      className={cn('py-12 md:py-16 lg:py-20', className)}
      {...props}
    >
      {children}
    </Component>
  )
}

Section.displayName = 'Section'
