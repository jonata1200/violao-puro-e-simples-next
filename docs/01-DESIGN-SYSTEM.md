# 🎨 Design System - Planejamento e Implementação

> **Objetivo**: Criar um sistema de design consistente, escalável e bem documentado para o projeto Violão Puro e Simples

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Estrutura do Design System](#estrutura-do-design-system)
3. [Tokens de Design](#tokens-de-design)
4. [Componentes Base](#componentes-base)
5. [Padrões e Guias](#padrões-e-guias)
6. [Documentação](#documentação)
7. [Roadmap de Implementação](#roadmap-de-implementação)

---

## 🎯 Visão Geral

### Objetivos
- **Consistência**: Garantir visual e comportamento uniforme em toda a aplicação
- **Escalabilidade**: Facilitar adição de novos componentes e funcionalidades
- **Manutenibilidade**: Centralizar estilos e padrões para fácil atualização
- **Acessibilidade**: Garantir que todos os componentes sejam acessíveis
- **Documentação**: Fornecer guias claros para desenvolvedores

### Tecnologias Base
- ✅ **shadcn/ui**: Já configurado (components.json)
- ✅ **Tailwind CSS**: Sistema de design utility-first
- ✅ **Radix UI**: Componentes acessíveis
- ✅ **class-variance-authority**: Gerenciamento de variantes
- ✅ **Lucide React**: Biblioteca de ícones

---

## 📁 Estrutura do Design System

### Organização de Pastas

```
src/
├── design-system/
│   ├── tokens/
│   │   ├── colors.ts          # Tokens de cores
│   │   ├── typography.ts      # Tokens de tipografia
│   │   ├── spacing.ts         # Tokens de espaçamento
│   │   ├── shadows.ts         # Tokens de sombras
│   │   ├── borders.ts         # Tokens de bordas
│   │   └── index.ts           # Exportações centralizadas
│   │
│   ├── components/
│   │   ├── ui/                # Componentes base (já existe)
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── accordion.tsx
│   │   │   ├── dialog.tsx
│   │   │   └── ...
│   │   │
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── Container.tsx
│   │   │   ├── Section.tsx
│   │   │   ├── Grid.tsx
│   │   │   └── Flex.tsx
│   │   │
│   │   └── patterns/          # Padrões compostos
│   │       ├── CardWithImage.tsx
│   │       ├── FeatureCard.tsx
│   │       └── StatCard.tsx
│   │
│   ├── hooks/                 # Hooks customizados
│   │   ├── useTheme.ts
│   │   ├── useMediaQuery.ts
│   │   └── useClickOutside.ts
│   │
│   └── utils/                 # Utilitários do design system
│       ├── variants.ts
│       └── cn.ts              # Já existe em lib/utils.ts
│
└── components/                # Componentes de negócio (seções)
    ├── HeroSection.tsx
    ├── AboutSection.tsx
    └── ...
```

---

## 🎨 Tokens de Design

### 1. Cores (Colors)

**Localização**: `src/design-system/tokens/colors.ts`

#### Estrutura Proposta

```typescript
export const colors = {
  // Cores primárias (baseadas no tema atual - laranja)
  primary: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',
    500: '#f97316',  // Cor principal
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  
  // Cores semânticas
  success: { ... },
  warning: { ... },
  error: { ... },
  info: { ... },
  
  // Cores neutras
  gray: { ... },
  
  // Cores do tema (HSL para compatibilidade com Tailwind)
  theme: {
    background: 'hsl(var(--background))',
    foreground: 'hsl(var(--foreground))',
    // ... outras variáveis CSS
  }
}
```

**Ações**:
- [ ] Criar arquivo `colors.ts` com paleta completa
- [ ] Mapear cores atuais do projeto
- [ ] Definir cores semânticas (success, warning, error)
- [ ] Atualizar `globals.css` com novas variáveis se necessário

### 2. Tipografia (Typography)

**Localização**: `src/design-system/tokens/typography.ts`

#### Escala Tipográfica

```typescript
export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['monospace'],
  },
  
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  }
}
```

**Ações**:
- [ ] Criar arquivo `typography.ts`
- [ ] Documentar escala de tamanhos
- [ ] Definir pesos de fonte padrão
- [ ] Criar componentes de texto (Heading, Text, etc.)

### 3. Espaçamento (Spacing)

**Localização**: `src/design-system/tokens/spacing.ts`

#### Sistema de Espaçamento

```typescript
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
}
```

**Nota**: Tailwind já possui sistema de espaçamento, mas documentar ajuda na consistência.

**Ações**:
- [ ] Criar arquivo `spacing.ts` para referência
- [ ] Documentar uso padrão de espaçamentos

### 4. Sombras (Shadows)

**Localização**: `src/design-system/tokens/shadows.ts`

```typescript
export const shadows = {
  sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1)',
  md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
  lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
}
```

### 5. Bordas e Raio (Borders & Radius)

**Localização**: `src/design-system/tokens/borders.ts`

```typescript
export const borders = {
  radius: {
    none: '0',
    sm: 'calc(var(--radius) - 4px)',
    DEFAULT: 'var(--radius)',
    md: 'calc(var(--radius) - 2px)',
    lg: 'var(--radius)',
    full: '9999px',
  },
  
  width: {
    DEFAULT: '1px',
    '0': '0',
    '2': '2px',
    '4': '4px',
  }
}
```

---

## 🧩 Componentes Base

### Componentes UI Essenciais

Baseado no shadcn/ui, implementar os seguintes componentes:

#### Prioridade Alta
- [x] **Button** - Já implementado
- [ ] **Input** - Campo de entrada de texto
- [ ] **Card** - Container de conteúdo
- [ ] **Badge** - Etiqueta/tag
- [ ] **Accordion** - Acordeão (usado no FAQ)
- [ ] **Dialog** - Modal/diálogo

#### Prioridade Média
- [ ] **Select** - Seleção dropdown
- [ ] **Textarea** - Área de texto
- [ ] **Checkbox** - Caixa de seleção
- [ ] **Radio** - Botão de opção
- [ ] **Switch** - Interruptor
- [ ] **Tabs** - Abas
- [ ] **Tooltip** - Dica de ferramenta
- [ ] **Alert** - Alerta/notificação

#### Prioridade Baixa
- [ ] **Skeleton** - Placeholder de carregamento
- [ ] **Progress** - Barra de progresso
- [ ] **Slider** - Controle deslizante
- [ ] **Separator** - Separador visual

### Como Adicionar Componentes shadcn/ui

```bash
# Exemplo: Adicionar componente Input
npx shadcn@latest add input

# Exemplo: Adicionar componente Card
npx shadcn@latest add card
```

**Ações**:
- [ ] Adicionar componentes prioritários via shadcn/ui
- [ ] Customizar componentes conforme identidade visual do projeto
- [ ] Documentar uso de cada componente

### Componentes de Layout

#### Container
```typescript
// src/design-system/components/layout/Container.tsx
export function Container({ children, className, ...props }) {
  return (
    <div className={cn("container mx-auto px-4", className)} {...props}>
      {children}
    </div>
  )
}
```

#### Section
```typescript
// src/design-system/components/layout/Section.tsx
export function Section({ children, className, ...props }) {
  return (
    <section className={cn("py-12 md:py-16 lg:py-20", className)} {...props}>
      {children}
    </section>
  )
}
```

**Ações**:
- [ ] Criar componentes de layout reutilizáveis
- [ ] Refatorar seções existentes para usar novos componentes

---

## 📐 Padrões e Guias

### 1. Guia de Uso de Cores

**Regras**:
- Usar cores primárias para CTAs e elementos de destaque
- Usar cores semânticas (success, error) apenas para feedback
- Manter contraste adequado para acessibilidade (WCAG AA mínimo)

### 2. Guia de Tipografia

**Hierarquia**:
- `h1`: Títulos principais (Hero, seções principais)
- `h2`: Subtítulos de seção
- `h3`: Subtítulos de subseção
- `p`: Texto corrido
- `small`: Texto auxiliar, legendas

### 3. Guia de Espaçamento

**Padrões**:
- Espaçamento entre seções: `py-12 md:py-16 lg:py-20`
- Espaçamento interno de cards: `p-4 md:p-6`
- Gap em grids: `gap-4 md:gap-6 lg:gap-8`

### 4. Guia de Componentes

**Estrutura Padrão**:
```typescript
// 1. Imports
import { cn } from "@/lib/utils"
import { cva, type VariantProps } from "class-variance-authority"

// 2. Variantes com CVA
const componentVariants = cva(
  "base-classes",
  {
    variants: {
      variant: { ... },
      size: { ... }
    },
    defaultVariants: { ... }
  }
)

// 3. Props interface
export interface ComponentProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof componentVariants> {
  // props específicas
}

// 4. Componente
export const Component = React.forwardRef<HTMLElement, ComponentProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(componentVariants({ variant, size, className }))}
        {...props}
      />
    )
  }
)
Component.displayName = "Component"
```

---

## 📚 Documentação

### Opções de Documentação

#### Opção 1: Storybook (Recomendado)
- Documentação visual interativa
- Isolamento de componentes
- Testes visuais
- Exemplos de uso

**Setup**:
```bash
npx storybook@latest init
```

#### Opção 2: MDX Documentation
- Documentação em Markdown
- Integração com Next.js
- Mais simples de manter

#### Opção 3: Documentação no README
- Mais simples
- Menos interativa
- Adequada para projetos menores

**Recomendação**: Começar com documentação em Markdown e considerar Storybook no futuro.

### Estrutura de Documentação

```
docs/
├── design-system/
│   ├── README.md              # Visão geral
│   ├── tokens.md              # Documentação de tokens
│   ├── components/
│   │   ├── button.md
│   │   ├── input.md
│   │   └── ...
│   └── patterns.md            # Padrões de uso
```

**Ações**:
- [ ] Criar estrutura de documentação
- [ ] Documentar cada componente
- [ ] Criar exemplos de uso
- [ ] Adicionar guias de boas práticas

---

## 🗺️ Roadmap de Implementação

### Fase 1: Fundação (Semana 1)
- [ ] Criar estrutura de pastas do design system
- [ ] Implementar tokens de design (cores, tipografia, espaçamento)
- [ ] Atualizar `tailwind.config.ts` com tokens
- [ ] Criar componentes de layout básicos (Container, Section)

### Fase 2: Componentes Base (Semana 2)
- [ ] Adicionar componentes UI prioritários via shadcn/ui
  - [ ] Input
  - [ ] Card
  - [ ] Badge
  - [ ] Accordion
  - [ ] Dialog
- [ ] Customizar componentes conforme identidade visual
- [ ] Criar componentes de layout adicionais (Grid, Flex)

### Fase 3: Padrões e Documentação (Semana 3)
- [ ] Criar componentes de padrões (FeatureCard, StatCard, etc.)
- [ ] Refatorar componentes existentes para usar design system
- [ ] Criar documentação inicial
- [ ] Estabelecer guias de uso

### Fase 4: Refatoração e Melhorias (Semana 4)
- [ ] Refatorar todas as seções para usar componentes do design system
- [ ] Garantir consistência visual
- [ ] Otimizar performance
- [ ] Revisar acessibilidade

---

## ✅ Checklist de Implementação

### Setup Inicial
- [ ] Criar pasta `src/design-system/`
- [ ] Criar estrutura de pastas (tokens, components, hooks, utils)
- [ ] Configurar exports centralizados

### Tokens
- [ ] Cores (`colors.ts`)
- [ ] Tipografia (`typography.ts`)
- [ ] Espaçamento (`spacing.ts`)
- [ ] Sombras (`shadows.ts`)
- [ ] Bordas (`borders.ts`)
- [ ] Atualizar `tailwind.config.ts`

### Componentes UI
- [ ] Button (já existe)
- [ ] Input
- [ ] Card
- [ ] Badge
- [ ] Accordion
- [ ] Dialog
- [ ] Outros conforme necessidade

### Componentes de Layout
- [ ] Container
- [ ] Section
- [ ] Grid
- [ ] Flex

### Documentação
- [ ] README do design system
- [ ] Documentação de tokens
- [ ] Documentação de componentes
- [ ] Guias de uso
- [ ] Exemplos práticos

### Refatoração
- [ ] Atualizar componentes existentes
- [ ] Garantir consistência
- [ ] Testes visuais

---

## 📝 Notas Importantes

1. **Compatibilidade**: Manter compatibilidade com shadcn/ui e Tailwind CSS
2. **Acessibilidade**: Todos os componentes devem seguir WCAG 2.1 AA
3. **Performance**: Evitar over-engineering, manter componentes leves
4. **Versionamento**: Considerar versionamento do design system no futuro
5. **Feedback**: Coletar feedback durante implementação para ajustes

---

**Última atualização**: 2024  
**Status**: 📝 Planejamento
