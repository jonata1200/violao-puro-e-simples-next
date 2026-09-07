import * as React from "react"
import { Button, buttonVariants } from "./button"
import { cn } from "@/lib/utils"

export interface CTAButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Tamanho do botão CTA
   */
  size?: "cta" | "ctaCompact" | "ctaLarge" | "ctaExtraLarge"
  /**
   * Se deve mostrar efeito de gradiente no hover (padrão: true)
   */
  showHoverEffect?: boolean
}

/**
 * CTAButton
 * 
 * Botão de Call-to-Action especializado para CTAs principais.
 * Usa gradiente, tamanhos responsivos e efeitos hover.
 */
const CTAButton = React.forwardRef<HTMLButtonElement, CTAButtonProps>(
  ({ className, size = "cta", showHoverEffect = true, children, ...props }, ref) => {
    return (
      <Button
        ref={ref}
        variant="cta"
        size={size}
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <span className="relative z-10 flex items-center justify-center gap-3">
          {children}
        </span>
        {showHoverEffect && (
          <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </Button>
    )
  }
)
CTAButton.displayName = "CTAButton"

export { CTAButton }
