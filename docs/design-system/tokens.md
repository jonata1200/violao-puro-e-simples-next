# 🎨 Tokens de Design

Documentação completa dos tokens do Design System.

## 📋 Índice

- [Cores](#cores)
- [Tipografia](#tipografia)
- [Espaçamento](#espaçamento)
- [Sombras](#sombras)
- [Bordas](#bordas)

---

## 🎨 Cores

### Cores Primárias (Laranja)

A paleta primária é baseada em laranja, a cor principal do projeto.

```typescript
import { colors } from '@/design-system/tokens'

// Uso em código
colors.primary[500] // #f97316 (cor principal)
colors.primary[400] // #fb923c (mais claro)
colors.primary[600] // #ea580c (mais escuro)
```

**Paleta completa:**
- `primary-50`: #fff7ed
- `primary-100`: #ffedd5
- `primary-200`: #fed7aa
- `primary-300`: #fdba74
- `primary-400`: #fb923c
- `primary-500`: #f97316 ⭐ (cor principal)
- `primary-600`: #ea580c
- `primary-700`: #c2410c
- `primary-800`: #9a3412
- `primary-900`: #7c2d12

**Uso no Tailwind:**
```tsx
<div className="bg-primary-500 text-primary-foreground">
  Botão primário
</div>
```

### Cores Semânticas

#### Success (Verde)
```typescript
colors.success[500] // #22c55e
```

#### Warning (Amarelo)
```typescript
colors.warning[500] // #f59e0b
```

#### Error (Vermelho)
```typescript
colors.error[500] // #ef4444
```

#### Info (Azul)
```typescript
colors.info[500] // #3b82f6
```

### Cores do Tema

As cores do tema usam variáveis CSS para suportar dark/light mode:

```typescript
colors.theme.background      // hsl(var(--background))
colors.theme.foreground      // hsl(var(--foreground))
colors.theme.primary          // hsl(var(--primary))
colors.theme.secondary        // hsl(var(--secondary))
```

---

## 📝 Tipografia

### Família de Fontes

```typescript
import { typography } from '@/design-system/tokens'

typography.fontFamily.sans // ['Inter', 'system-ui', ...]
typography.fontFamily.mono // ['ui-monospace', 'SFMono-Regular', ...]
```

### Tamanhos de Fonte

```typescript
typography.fontSize.xs    // 0.75rem (12px)
typography.fontSize.sm    // 0.875rem (14px)
typography.fontSize.base  // 1rem (16px)
typography.fontSize.lg    // 1.125rem (18px)
typography.fontSize.xl    // 1.25rem (20px)
typography.fontSize['2xl'] // 1.5rem (24px)
typography.fontSize['3xl'] // 1.875rem (30px)
typography.fontSize['4xl'] // 2.25rem (36px)
typography.fontSize['5xl'] // 3rem (48px)
typography.fontSize['6xl'] // 3.75rem (60px)
```

### Pesos de Fonte

```typescript
typography.fontWeight.light     // 300
typography.fontWeight.normal    // 400
typography.fontWeight.medium    // 500
typography.fontWeight.semibold  // 600
typography.fontWeight.bold      // 700
typography.fontWeight.extrabold // 800
```

**Uso no Tailwind:**
```tsx
<h1 className="text-4xl font-bold">Título</h1>
<p className="text-base font-normal">Texto</p>
```

---

## 📏 Espaçamento

O sistema de espaçamento usa valores em `rem` para melhor escalabilidade.

```typescript
import { spacing } from '@/design-system/tokens'

spacing[0]  // 0
spacing[1]  // 0.25rem (4px)
spacing[2]  // 0.5rem (8px)
spacing[4]  // 1rem (16px)
spacing[8]  // 2rem (32px)
spacing[12] // 3rem (48px)
spacing[16] // 4rem (64px)
spacing[20] // 5rem (80px)
spacing[24] // 6rem (96px)
```

### Padrões de Espaçamento

```typescript
import { spacingPatterns } from '@/design-system/tokens'

// Espaçamento entre seções
spacingPatterns.section.mobile   // 48px
spacingPatterns.section.tablet   // 64px
spacingPatterns.section.desktop  // 80px

// Espaçamento interno de cards
spacingPatterns.card.mobile      // 16px
spacingPatterns.card.tablet      // 24px

// Gap em grids
spacingPatterns.grid.mobile      // 16px
spacingPatterns.grid.tablet     // 24px
spacingPatterns.grid.desktop     // 32px
```

**Uso no Tailwind:**
```tsx
<div className="p-4 md:p-6">      // padding
<div className="gap-4 md:gap-6">  // gap
<div className="py-12 md:py-16">  // padding vertical
```

---

## 🌑 Sombras

```typescript
import { shadows } from '@/design-system/tokens'

shadows.none     // none
shadows.sm       // 0 1px 2px 0 rgb(0 0 0 / 0.05)
shadows.DEFAULT  // 0 1px 3px 0 rgb(0 0 0 / 0.1)
shadows.md       // 0 4px 6px -1px rgb(0 0 0 / 0.1)
shadows.lg       // 0 10px 15px -3px rgb(0 0 0 / 0.1)
shadows.xl       // 0 20px 25px -5px rgb(0 0 0 / 0.1)
shadows['2xl']   // 0 25px 50px -12px rgb(0 0 0 / 0.25)
shadows.inner    // inset 0 2px 4px 0 rgb(0 0 0 / 0.05)
```

**Uso no Tailwind:**
```tsx
<div className="shadow-md">Card com sombra média</div>
<div className="shadow-lg">Card com sombra grande</div>
```

---

## 🔲 Bordas

### Raio de Borda

```typescript
import { borders } from '@/design-system/tokens'

borders.radius.none     // 0
borders.radius.sm       // calc(var(--radius) - 4px)
borders.radius.DEFAULT  // var(--radius)
borders.radius.md       // calc(var(--radius) - 2px)
borders.radius.lg       // var(--radius)
borders.radius.xl       // calc(var(--radius) + 4px)
borders.radius['2xl']   // calc(var(--radius) + 8px)
borders.radius['3xl']   // calc(var(--radius) + 12px)
borders.radius.full     // 9999px
```

### Largura de Borda

```typescript
borders.width[0]        // 0
borders.width.DEFAULT   // 1px
borders.width[2]        // 2px
borders.width[4]        // 4px
borders.width[8]        // 8px
```

**Uso no Tailwind:**
```tsx
<div className="rounded-lg border">Card arredondado</div>
<div className="rounded-full">Círculo</div>
```

---

## 💡 Dicas de Uso

1. **Sempre use tokens**: Evite valores hardcoded, use os tokens do design system
2. **Consistência**: Use os padrões de espaçamento definidos
3. **Acessibilidade**: Mantenha contraste adequado (WCAG AA mínimo)
4. **Responsividade**: Use breakpoints do Tailwind (sm, md, lg, xl)

---

**Última atualização**: 2024
