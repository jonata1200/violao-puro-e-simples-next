import * as React from 'react'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

export interface StatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Valor da estatística (ex: "40+", "500+", "100%")
   */
  value: string
  /**
   * Label/descrição da estatística
   */
  label: string
  /**
   * Ícone opcional (Lucide Icon)
   */
  icon?: LucideIcon
  /**
   * Classes CSS adicionais
   */
  className?: string
}

/**
 * StatCard
 * 
 * Componente de padrão para exibir estatísticas.
 * Usado para mostrar números, métricas e dados importantes.
 * 
 * @example
 * ```tsx
 * <StatCard value="40+" label="Anos de Experiência" />
 * <StatCard value="500+" label="Alunos Formados" icon={Users} />
 * ```
 */
export function StatCard({ 
  value, 
  label, 
  icon: Icon,
  className,
  ...props 
}: StatCardProps) {
  return (
    <div
      className={cn('text-center', className)}
      {...props}
    >
      {Icon && (
        <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-white" />
        </div>
      )}
      <div className="text-3xl font-bold text-primary-500 mb-2">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}

StatCard.displayName = 'StatCard'
