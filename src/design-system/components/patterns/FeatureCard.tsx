import * as React from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { LucideIcon } from 'lucide-react'

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Ícone da feature (Lucide Icon)
   */
  icon: LucideIcon
  /**
   * Título da feature
   */
  title: string
  /**
   * Descrição da feature
   */
  description: string
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Variante do card (default, gradient)
   */
  variant?: 'default' | 'gradient'
}

/**
 * FeatureCard
 * 
 * Componente de padrão para exibir features/benefícios.
 * Usado para destacar características, benefícios e funcionalidades.
 * 
 * @example
 * ```tsx
 * <FeatureCard
 *   icon={Guitar}
 *   title="Música Popular"
 *   description="Aprenda a tocar os maiores sucessos"
 * />
 * ```
 */
export function FeatureCard({ 
  icon: Icon,
  title,
  description,
  className,
  variant = 'default',
  ...props 
}: FeatureCardProps) {
  return (
    <div
      className={cn('group relative', className)}
      {...props}
    >
      {variant === 'gradient' && (
        <div className="absolute -inset-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      )}
      <Card className={cn(
        'relative text-center h-full transition-all duration-300 bg-black border-primary-500 hover:border-primary-500 transform hover:-translate-y-4',
        className
      )}>
        <CardContent className="p-6 md:p-10">
          <div className={cn(
            'w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-300'
          )}>
            <Icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-white">
            {title}
          </h3>
          <p className="text-white leading-relaxed text-base md:text-lg">
            {description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

FeatureCard.displayName = 'FeatureCard'
