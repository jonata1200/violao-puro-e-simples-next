/**
 * Tokens de Bordas do Design System
 * 
 * Define o sistema de raio de borda (border-radius) e largura de borda
 * utilizado no projeto.
 */

export const borders = {
  radius: {
    none: '0',
    sm: 'calc(var(--radius) - 4px)',
    DEFAULT: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    xl: 'calc(var(--radius) + 4px)',
    '2xl': 'calc(var(--radius) + 8px)',
    '3xl': 'calc(var(--radius) + 12px)',
    full: '9999px',
  },
  
  width: {
    0: '0',
    DEFAULT: '1px',
    2: '2px',
    4: '4px',
    8: '8px',
  },
} as const

export type Borders = typeof borders
