# 🎨 Componentes de Padrões

Componentes reutilizáveis que implementam padrões comuns de interface, como cards de features, módulos, depoimentos e estatísticas.

## FeatureCard

Componente para exibir features, benefícios ou funcionalidades com ícone, título e descrição.

### Uso Básico

```tsx
import { FeatureCard } from '@/design-system/components/patterns'
import { Guitar } from 'lucide-react'

<FeatureCard
  icon={Guitar}
  title="Música Popular"
  description="Aprenda a tocar os maiores sucessos"
/>
```

### Props

- `icon`: Componente de ícone (do lucide-react)
- `title`: Título da feature (string)
- `description`: Descrição da feature (string)
- `variant`: Variante visual (`default` | `gradient`) - opcional

### Variantes

```tsx
// Variante padrão
<FeatureCard
  icon={Guitar}
  title="Música Popular"
  description="Aprenda a tocar os maiores sucessos"
  variant="default"
/>

// Variante com gradiente
<FeatureCard
  icon={Guitar}
  title="Música Popular"
  description="Aprenda a tocar os maiores sucessos"
  variant="gradient"
/>
```

### Características

- Ícone destacado
- Título e descrição claros
- Variantes visuais disponíveis
- Totalmente responsivo

## ModuleCard

Componente para exibir módulos de curso com número, título e lista de itens/conteúdo.

### Uso Básico

```tsx
import { ModuleCard } from '@/design-system/components/patterns'

<ModuleCard
  number="01"
  title="Módulo 1 - Violão do Zero"
  items={[
    "Postura e primeiros acordes",
    "Como afinar seu violão",
    "Ritmos básicos"
  ]}
/>
```

### Props

- `number`: Número do módulo (string)
- `title`: Título do módulo (string)
- `items`: Array de strings com os itens do módulo

### Características

- Numeração destacada
- Lista de itens organizada
- Visual claro e hierárquico
- Responsivo

### Exemplo com Grid

```tsx
import { Grid } from '@/design-system/components/layout'
import { ModuleCard } from '@/design-system/components/patterns'

<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <ModuleCard
    number="01"
    title="Módulo 1 - Violão do Zero"
    items={["Item 1", "Item 2"]}
  />
  <ModuleCard
    number="02"
    title="Módulo 2 - Acordes Intermediários"
    items={["Item 1", "Item 2"]}
  />
</Grid>
```

## TestimonialCard

Componente para exibir depoimentos em vídeo com controles de reprodução.

### Uso Básico

```tsx
import { TestimonialCard } from '@/design-system/components/patterns'

<TestimonialCard
  videoSrc="/videos/depoimento-1.mp4"
  aspectRatio="vertical"
  showInitialPlayIcon={true}
/>
```

### Props

- `videoSrc`: Caminho para o arquivo de vídeo (string)
- `aspectRatio`: Proporção do vídeo (`vertical` | `horizontal`)
- `showInitialPlayIcon`: Mostrar ícone de play inicial (boolean)

### Características

- Player de vídeo integrado
- Suporte a diferentes proporções
- Controles de reprodução
- Ícone de play inicial opcional

### Exemplos

```tsx
// Vídeo vertical (portrait)
<TestimonialCard
  videoSrc="/videos/depoimento-1.mp4"
  aspectRatio="vertical"
  showInitialPlayIcon={true}
/>

// Vídeo horizontal (landscape)
<TestimonialCard
  videoSrc="/videos/depoimento-2.mp4"
  aspectRatio="horizontal"
  showInitialPlayIcon={false}
/>
```

## StatCard

Componente para exibir estatísticas, métricas ou números importantes com valor e label.

### Uso Básico

```tsx
import { StatCard } from '@/design-system/components/patterns'
import { Users } from 'lucide-react'

<StatCard
  value="500+"
  label="Alunos Formados"
  icon={Users}
/>
```

### Props

- `value`: Valor da estatística (string)
- `label`: Label/descrição da estatística (string)
- `icon`: Componente de ícone (do lucide-react) - opcional

### Características

- Valor destacado
- Label descritivo
- Ícone opcional
- Visual limpo e direto

### Exemplos

```tsx
// Com ícone
<StatCard
  value="500+"
  label="Alunos Formados"
  icon={Users}
/>

// Sem ícone
<StatCard
  value="1000+"
  label="Aulas Disponíveis"
/>

// Em grid
<Grid cols={2} colsMd={4} gap={4}>
  <StatCard value="500+" label="Alunos" icon={Users} />
  <StatCard value="50+" label="Cursos" icon={Book} />
  <StatCard value="1000+" label="Aulas" icon={Video} />
  <StatCard value="4.9" label="Avaliação" icon={Star} />
</Grid>
```

## CardWithImage

Componente para exibir cards com imagem destacada, título, descrição e conteúdo adicional.

### Uso Básico

```tsx
import { CardWithImage } from '@/design-system/components/patterns'

<CardWithImage
  imageSrc="/gezo.png"
  imageAlt="Professor Gezo Rodrigues"
  title="Sobre o Professor"
  description="40 anos de experiência"
>
  <p>Conteúdo adicional sobre o professor</p>
  <p>Mais informações relevantes</p>
</CardWithImage>
```

### Props

- `imageSrc`: Caminho para a imagem (string)
- `imageAlt`: Texto alternativo da imagem (string)
- `title`: Título do card (string)
- `description`: Descrição breve (string)
- `children`: Conteúdo adicional (ReactNode)

### Características

- Imagem destacada
- Título e descrição
- Suporte a conteúdo adicional via children
- Layout responsivo

### Exemplo Completo

```tsx
<CardWithImage
  imageSrc="/gezo.png"
  imageAlt="Professor Gezo Rodrigues"
  title="Sobre o Professor"
  description="40 anos de experiência ensinando violão"
>
  <p>
    Gezo Rodrigues é um músico experiente com mais de 40 anos
    de experiência no ensino de violão.
  </p>
  <ul>
    <li>Formado em música</li>
    <li>Professor certificado</li>
    <li>Método comprovado</li>
  </ul>
</CardWithImage>
```

## 🎯 Quando Usar Cada Componente

### FeatureCard
- Use para destacar características, benefícios e funcionalidades
- Use em seções de "Por que escolher" ou "Recursos"
- Combine com Grid para layouts de múltiplas features

### ModuleCard
- Use para exibir informações sobre módulos de curso
- Use em páginas de curso ou programa
- Ideal para listar conteúdo de módulos

### TestimonialCard
- Use para apresentar depoimentos em vídeo
- Use em seções de depoimentos ou social proof
- Combine com Grid para múltiplos depoimentos

### StatCard
- Use para mostrar números, métricas e dados importantes
- Use em seções de estatísticas ou resultados
- Ideal para destacar conquistas ou números impressionantes

### CardWithImage
- Use para apresentar conteúdo com imagem destacada
- Use em seções "Sobre" ou perfis
- Ideal quando a imagem é parte importante do conteúdo

## 📖 Próximos Passos

- [Componentes UI](./componentes-ui.md) - Veja componentes de interface básicos
- [Guia de Uso](./guia-uso.md) - Aprenda boas práticas de uso
