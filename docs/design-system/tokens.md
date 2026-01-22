# 🎨 Tokens

Tokens são os valores fundamentais do design system: cores, tipografia, espaçamento e outros valores de design que garantem consistência visual.

## 🎨 Cores

O sistema de cores é baseado em uma paleta primária (laranja) e cores semânticas para diferentes estados e ações.

### Cores Primárias

```typescript
import { colors } from '@/design-system/tokens'

// Cores primárias (laranja)
colors.primary[500] // #f97316
```

### Cores Semânticas

```typescript
import { colors } from '@/design-system/tokens'

// Cores semânticas
colors.success[500] // Verde - para ações bem-sucedidas
colors.warning[500] // Amarelo - para avisos
colors.error[500]   // Vermelho - para erros
colors.info[500]    // Azul - para informações
```

### Uso com Tailwind CSS

Todos os tokens de cor estão disponíveis através das classes do Tailwind CSS:

```tsx
// Exemplo de uso
<div className="bg-primary-500 text-white">
  Botão primário
</div>

<div className="bg-success-500 text-white">
  Mensagem de sucesso
</div>
```

## 📝 Tipografia

Sistema tipográfico consistente com tamanhos, pesos e alturas de linha padronizados.

### Tamanhos de Fonte

```typescript
import { typography } from '@/design-system/tokens'

// Tamanhos de fonte
typography.fontSize.xl // ['1.25rem', { lineHeight: '1.75rem' }]
typography.fontSize.lg // ['1.125rem', { lineHeight: '1.75rem' }]
typography.fontSize.base // ['1rem', { lineHeight: '1.5rem' }]
typography.fontSize.sm // ['0.875rem', { lineHeight: '1.25rem' }]
typography.fontSize.xs // ['0.75rem', { lineHeight: '1rem' }]
```

### Pesos de Fonte

```typescript
import { typography } from '@/design-system/tokens'

typography.fontWeight.bold // 700
typography.fontWeight.semibold // 600
typography.fontWeight.medium // 500
typography.fontWeight.normal // 400
```

### Uso com Tailwind CSS

```tsx
// Exemplo de uso
<h1 className="text-xl font-bold">
  Título Principal
</h1>

<p className="text-base font-normal">
  Texto do parágrafo
</p>
```

## 📏 Espaçamento

Sistema de espaçamento baseado em escala consistente (múltiplos de 4px/0.25rem).

### Valores de Espaçamento

```typescript
import { spacing } from '@/design-system/tokens'

spacing[0]  // '0'
spacing[1]  // '0.25rem' (4px)
spacing[2]  // '0.5rem' (8px)
spacing[4]  // '1rem' (16px)
spacing[8]  // '2rem' (32px)
spacing[12] // '3rem' (48px)
spacing[16] // '4rem' (64px)
```

### Uso com Tailwind CSS

```tsx
// Exemplo de uso
<div className="p-4 m-8">
  Container com padding e margin
</div>

<div className="gap-4">
  Grid com espaçamento entre itens
</div>
```

## 🎯 Breakpoints

Breakpoints responsivos para diferentes tamanhos de tela:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Uso com Tailwind CSS

```tsx
// Exemplo de uso responsivo
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Grid responsivo
</div>
```

## 📖 Próximos Passos

- [Componentes de Layout](./componentes-layout.md) - Veja como os tokens são aplicados nos componentes
- [Guia de Uso](./guia-uso.md) - Aprenda boas práticas de uso dos tokens
