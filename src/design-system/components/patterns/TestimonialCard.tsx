import * as React from 'react'
import { cn } from '@/lib/utils'
import { CustomVideoPlayer } from '@/components/CustomVideoPlayer'

export interface TestimonialCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Caminho do vídeo de depoimento
   */
  videoSrc: string
  /**
   * Aspect ratio do vídeo (padrão: 'vertical')
   */
  aspectRatio?: 'vertical' | 'horizontal'
  /**
   * Mostrar ícone de play inicial (padrão: true)
   */
  showInitialPlayIcon?: boolean
  /**
   * Classes CSS adicionais
   */
  className?: string
}

/**
 * TestimonialCard
 * 
 * Componente de padrão para exibir depoimentos em vídeo.
 * Usado para apresentar testemunhos de forma consistente.
 * 
 * @example
 * ```tsx
 * <TestimonialCard
 *   videoSrc="/videos/depoimento-1.mp4"
 *   aspectRatio="vertical"
 *   showInitialPlayIcon={true}
 * />
 * ```
 */
export function TestimonialCard({ 
  videoSrc,
  aspectRatio = 'vertical',
  showInitialPlayIcon = true,
  className,
  ...props 
}: TestimonialCardProps) {
  return (
    <div
      className={cn('group relative', className)}
      {...props}
    >
      <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
        <CustomVideoPlayer 
          src={videoSrc} 
          aspectRatio={aspectRatio}
          showInitialPlayIcon={showInitialPlayIcon}
        />
      </div>
    </div>
  )
}

TestimonialCard.displayName = 'TestimonialCard'
