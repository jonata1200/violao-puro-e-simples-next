# 🎨 Design System

Sistema de design do projeto Violão Puro e Simples.

## 📁 Estrutura

```
design-system/
├── tokens/              # Tokens de design (cores, tipografia, espaçamento, etc.)
├── components/          # Componentes reutilizáveis
│   ├── layout/         # Componentes de layout (Container, Section, Grid, Flex)
│   └── patterns/       # Componentes de padrões (FeatureCard, ModuleCard, etc.)
├── hooks/              # Hooks customizados (futuro)
└── utils/              # Utilitários do design system (futuro)
```

## 🎯 Princípios de Design

1. **Consistência**: Todos os componentes seguem os mesmos padrões visuais e de comportamento
2. **Reutilização**: Componentes são criados para serem reutilizados em diferentes contextos
3. **Acessibilidade**: Todos os componentes seguem as melhores práticas de acessibilidade
4. **Responsividade**: Componentes são responsivos por padrão
5. **Tipagem**: Todos os componentes são totalmente tipados com TypeScript

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

## 🎨 Componentes de Padrões

### FeatureCard

Componente para exibir features/benefícios com ícone, título e descrição.

```tsx
import { FeatureCard } from '@/design-system/components/patterns'
import { Guitar } from 'lucide-react'

<FeatureCard
  icon={Guitar}
  title="Música Popular"
  description="Aprenda a tocar os maiores sucessos"
  variant="gradient" // opcional: 'default' | 'gradient'
/>
```

### ModuleCard

Componente para exibir módulos de curso com número, título e lista de itens.

```tsx
import { ModuleCard } from '@/design-system/components/patterns'

<ModuleCard
  number="01"
  title="Módulo 1 - Violão do Zero"
  items={[
    "Postura e primeiros acordes",
    "Como afinar seu violão"
  ]}
/>
```

### TestimonialCard

Componente para exibir depoimentos em vídeo.

```tsx
import { TestimonialCard } from '@/design-system/components/patterns'

<TestimonialCard
  videoSrc="/videos/depoimento-1.mp4"
  aspectRatio="vertical" // 'vertical' | 'horizontal'
  showInitialPlayIcon={true}
/>
```

### StatCard

Componente para exibir estatísticas com valor e label.

```tsx
import { StatCard } from '@/design-system/components/patterns'
import { Users } from 'lucide-react'

<StatCard
  value="500+"
  label="Alunos Formados"
  icon={Users} // opcional
/>
```

### CardWithImage

Componente para exibir cards com imagem destacada.

```tsx
import { CardWithImage } from '@/design-system/components/patterns'

<CardWithImage
  imageSrc="/gezo.png"
  imageAlt="Professor Gezo Rodrigues"
  title="Sobre o Professor"
  description="40 anos de experiência"
>
  <p>Conteúdo adicional</p>
</CardWithImage>
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

## 📋 Guia de Uso

### Quando usar cada componente

#### Componentes de Layout
- **Container**: Use para envolver seções e manter largura máxima consistente
- **Section**: Use para separar seções da página com espaçamento vertical
- **Grid**: Use para organizar conteúdo em colunas responsivas
- **Flex**: Use para organizar conteúdo com flexbox e controle de alinhamento

#### Componentes de Padrões
- **FeatureCard**: Use para destacar características, benefícios e funcionalidades
- **ModuleCard**: Use para exibir informações sobre módulos de curso
- **TestimonialCard**: Use para apresentar depoimentos em vídeo
- **StatCard**: Use para mostrar números, métricas e dados importantes
- **CardWithImage**: Use para apresentar conteúdo com imagem destacada

### Boas Práticas

1. **Sempre use componentes do design system** quando possível, em vez de criar estilos customizados
2. **Mantenha consistência** usando os mesmos componentes para casos de uso similares
3. **Use tokens** através do Tailwind CSS para cores, espaçamento e tipografia
4. **Teste responsividade** em diferentes tamanhos de tela
5. **Mantenha acessibilidade** usando os componentes que já incluem boas práticas de acessibilidade

## 🧪 Testes

Todos os componentes do design system possuem testes unitários em `test/design-system/`.

Para executar os testes:

```bash
npm test
```

## 📝 Notas

- Todos os tokens estão disponíveis via Tailwind CSS
- Use os componentes de layout para manter consistência
- Componentes são totalmente tipados com TypeScript
- Todos os componentes são responsivos por padrão
