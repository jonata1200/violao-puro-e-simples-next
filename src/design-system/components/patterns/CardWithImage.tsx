import * as React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

export interface CardWithImageProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Caminho da imagem
   */
  imageSrc: string
  /**
   * Alt text da imagem
   */
  imageAlt: string
  /**
   * Título do card
   */
  title: string
  /**
   * Descrição opcional
   */
  description?: string
  /**
   * Conteúdo do card
   */
  children?: React.ReactNode
  /**
   * Classes CSS adicionais
   */
  className?: string
  /**
   * Largura da imagem (padrão: 400)
   */
  imageWidth?: number
  /**
   * Altura da imagem (padrão: 400)
   */
  imageHeight?: number
}

/**
 * CardWithImage
 * 
 * Componente de padrão para exibir cards com imagem.
 * Usado para apresentar conteúdo com imagem destacada.
 * 
 * @example
 * ```tsx
 * <CardWithImage
 *   imageSrc="/gezo.png"
 *   imageAlt="Professor Gezo Rodrigues"
 *   title="Sobre o Professor"
 *   description="40 anos de experiência"
 * >
 *   <p>Conteúdo adicional</p>
 * </CardWithImage>
 * ```
 */
export function CardWithImage({ 
  imageSrc,
  imageAlt,
  title,
  description,
  children,
  className,
  imageWidth = 400,
  imageHeight = 400,
  ...props 
}: CardWithImageProps) {
  return (
    <Card className={cn('overflow-hidden', className)} {...props}>
      <div className="relative w-full aspect-square">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      {children && <CardContent>{children}</CardContent>}
    </Card>
  )
}

CardWithImage.displayName = 'CardWithImage'
