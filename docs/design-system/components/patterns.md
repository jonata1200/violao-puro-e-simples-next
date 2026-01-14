# Componentes de Padrões

Componentes compostos que combinam múltiplos componentes base para criar padrões comuns.

## StatCard

Exibe estatísticas com valor grande e label.

### Uso

```tsx
import { StatCard } from '@/design-system/components/patterns'

<StatCard value="40+" label="Anos de Experiência" />
<StatCard value="500+" label="Alunos Formados" icon={Users} />
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `value` | `string` | - | Valor da estatística (ex: "40+", "500+", "100%") |
| `label` | `string` | - | Label/descrição da estatística |
| `icon` | `LucideIcon` | - | Ícone opcional (Lucide Icon) |
| `className` | `string` | - | Classes CSS adicionais |

### Exemplo

```tsx
<Grid cols={2} colsMd={4} gap={8}>
  <StatCard value="40+" label="Anos de Experiência" />
  <StatCard value="500+" label="Alunos Formados" />
  <StatCard value="90" label="Dias para Dominar" />
  <StatCard value="100%" label="Método Testado" />
</Grid>
```

---

## FeatureCard

Exibe features/benefícios com ícone, título e descrição.

### Uso

```tsx
import { FeatureCard } from '@/design-system/components/patterns'
import { Guitar, Heart } from 'lucide-react'

<FeatureCard
  icon={Guitar}
  title="Música Popular"
  description="Aprenda a tocar os maiores sucessos"
/>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `icon` | `LucideIcon` | - | Ícone da feature (Lucide Icon) |
| `title` | `string` | - | Título da feature |
| `description` | `string` | - | Descrição da feature |
| `className` | `string` | - | Classes CSS adicionais |
| `variant` | `'default' \| 'gradient'` | `'default'` | Variante do card |

### Exemplo

```tsx
<Grid cols={1} colsMd={2} colsLg={4} gap={8}>
  <FeatureCard
    icon={Volume2}
    title="Toque de Ouvido"
    description="Desenvolva sua percepção musical"
    variant="gradient"
  />
  <FeatureCard
    icon={Heart}
    title="Música Cristã"
    description="Repertório completo de hinos"
    variant="gradient"
  />
</Grid>
```

---

## CardWithImage

Exibe cards com imagem destacada, título e conteúdo.

### Uso

```tsx
import { CardWithImage } from '@/design-system/components/patterns'

<CardWithImage
  imageSrc="/gezo.png"
  imageAlt="Professor Gezo Rodrigues"
  title="Sobre o Professor"
  description="40 anos de experiência"
>
  <p>Conteúdo adicional do card</p>
</CardWithImage>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `imageSrc` | `string` | - | Caminho da imagem |
| `imageAlt` | `string` | - | Alt text da imagem |
| `title` | `string` | - | Título do card |
| `description` | `string` | - | Descrição opcional |
| `children` | `React.ReactNode` | - | Conteúdo do card |
| `className` | `string` | - | Classes CSS adicionais |
| `imageWidth` | `number` | `400` | Largura da imagem |
| `imageHeight` | `number` | `400` | Altura da imagem |

### Exemplo

```tsx
<Grid cols={1} colsMd={2} gap={8}>
  <CardWithImage
    imageSrc="/gezo.png"
    imageAlt="Professor Gezo Rodrigues"
    title="Sobre o Professor"
    description="40 anos de experiência"
  >
    <p>Texto adicional sobre o professor...</p>
  </CardWithImage>
</Grid>
```

---

## Combinações Comuns

### Seção de Estatísticas

```tsx
<Section>
  <Container>
    <Grid cols={2} colsMd={4} gap={8}>
      <StatCard value="40+" label="Anos de Experiência" />
      <StatCard value="500+" label="Alunos Formados" />
      <StatCard value="90" label="Dias para Dominar" />
      <StatCard value="100%" label="Método Testado" />
    </Grid>
  </Container>
</Section>
```

### Seção de Features

```tsx
<Section>
  <Container>
    <h2 className="text-center mb-12">Benefícios</h2>
    <Grid cols={1} colsMd={2} colsLg={4} gap={8}>
      {features.map(feature => (
        <FeatureCard
          key={feature.id}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
          variant="gradient"
        />
      ))}
    </Grid>
  </Container>
</Section>
```

---

**Última atualização**: 2024
