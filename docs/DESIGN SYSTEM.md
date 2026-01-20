# 🎨 Design System

Sistema de design do projeto Violão Puro e Simples.

## 📁 Estrutura

```
design-system/
├── tokens/              # Tokens de design (cores, tipografia, espaçamento, etc.)
├── components/          # Componentes reutilizáveis
│   └── layout/         # Componentes de layout (Container, Section)
├── hooks/              # Hooks customizados (futuro)
└── utils/              # Utilitários do design system (futuro)
```

## 🎨 Tokens

### Cores

```typescript
import { colors } from '@/design-system/tokens'

// Cores primárias (laranja)
colors.primary[500] // #f97316

// Cores semânticas
colors.success[500] // Verde
colors.warning[500] // Amarelo
colors.error[500]   // Vermelho
colors.info[500]    // Azul
```

### Tipografia

```typescript
import { typography } from '@/design-system/tokens'

// Tamanhos de fonte
typography.fontSize.xl // ['1.25rem', { lineHeight: '1.75rem' }]

// Pesos de fonte
typography.fontWeight.bold // 700
```

### Espaçamento

```typescript
import { spacing } from '@/design-system/tokens'

spacing[4] // '1rem' (16px)
spacing[8] // '2rem' (32px)
```

## 🧩 Componentes de Layout

### Container

Componente que centraliza o conteúdo e aplica padding horizontal.

```tsx
import { Container } from '@/design-system/components/layout'

<Container>
  <h1>Conteúdo centralizado</h1>
</Container>
```

### Section

Componente que aplica espaçamento vertical consistente.

```tsx
import { Section } from '@/design-system/components/layout'

<Section>
  <h2>Título da Seção</h2>
  <p>Conteúdo da seção</p>
</Section>
```

### Grid

Componente que cria um grid responsivo.

```tsx
import { Grid } from '@/design-system/components/layout'

<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Flex

Componente que cria um container flexbox.

```tsx
import { Flex } from '@/design-system/components/layout'

<Flex direction="row" justify="center" align="center" gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

## 🎨 Componentes UI

Os componentes UI estão disponíveis em `src/components/ui/`:

- **Button** - Botão com variantes
- **Input** - Campo de entrada de texto
- **Card** - Container de conteúdo com header, content e footer
- **Badge** - Etiqueta/tag
- **Accordion** - Acordeão expansível
- **Dialog** - Modal/diálogo

Todos os componentes usam as variáveis CSS do tema e são totalmente customizáveis.

## 📝 Notas

- Todos os tokens estão disponíveis via Tailwind CSS
- Use os componentes de layout para manter consistência
- Consulte a documentação completa em `docs/01-DESIGN-SYSTEM.md`
