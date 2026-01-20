import * as React from 'react'
import { cn } from '@/lib/utils'

export interface ModuleCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Número do módulo
   */
  number: string
  /**
   * Título do módulo
   */
  title: string
  /**
   * Lista de descrições/itens do módulo
   */
  items: string[]
  /**
   * Classes CSS adicionais
   */
  className?: string
}

/**
 * ModuleCard
 * 
 * Componente de padrão para exibir módulos de curso.
 * Usado para apresentar informações sobre módulos de forma consistente.
 * 
 * @example
 * ```tsx
 * <ModuleCard
 *   number="01"
 *   title="Módulo 1 - Violão do Zero"
 *   items={["Postura e primeiros acordes", "Como afinar seu violão"]}
 * />
 * ```
 */
export function ModuleCard({ 
  number,
  title,
  items,
  className,
  ...props 
}: ModuleCardProps) {
  return (
    <div
      className={cn('group relative', className)}
      {...props}
    >
      <div className="absolute -inset-1 bg-gradient-to-r from-primary-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/50 p-6 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 h-full">
        <div className="flex items-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-bold text-xl">{number}</span>
          </div>
          <h3 className="text-lg font-bold group-hover:text-primary-500 transition-colors flex-1">{title}</h3>
        </div>
        <ul className="text-gray-400 leading-relaxed space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className="text-primary-500 text-xs mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ModuleCard.displayName = 'ModuleCard'
