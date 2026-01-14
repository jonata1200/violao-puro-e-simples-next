# Componentes de Layout

Componentes de layout para estruturar páginas e seções.

## Container

Centraliza o conteúdo e aplica padding horizontal.

### Uso

```tsx
import { Container } from '@/design-system/components/layout'

<Container>
  <h1>Conteúdo centralizado</h1>
</Container>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Conteúdo do container |
| `className` | `string` | - | Classes CSS adicionais |

### Exemplo

```tsx
<Container className="max-w-7xl">
  <div>Conteúdo com largura máxima</div>
</Container>
```

---

## Section

Aplica espaçamento vertical consistente entre seções.

### Uso

```tsx
import { Section } from '@/design-system/components/layout'

<Section>
  <h2>Título da Seção</h2>
  <p>Conteúdo da seção</p>
</Section>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Conteúdo da seção |
| `className` | `string` | - | Classes CSS adicionais |
| `as` | `'section' \| 'div' \| 'article' \| 'aside' \| 'header' \| 'footer'` | `'section'` | Tag HTML a ser usada |

### Exemplo

```tsx
<Section as="article" className="bg-gray-900">
  <h2>Artigo</h2>
</Section>
```

---

## Grid

Cria um grid responsivo com controle de colunas.

### Uso

```tsx
import { Grid } from '@/design-system/components/layout'

<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Grid>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Conteúdo do grid |
| `className` | `string` | - | Classes CSS adicionais |
| `cols` | `1 \| 2 \| 3 \| 4` | `1` | Colunas no mobile |
| `colsMd` | `2 \| 3 \| 4 \| 6` | `2` | Colunas no tablet |
| `colsLg` | `3 \| 4 \| 6 \| 12` | `3` | Colunas no desktop |
| `gap` | `0 \| 2 \| 4 \| 6 \| 8` | `4` | Gap entre itens |

### Exemplos

```tsx
// Grid simples
<Grid cols={1} colsMd={2} colsLg={4}>
  {items.map(item => <Card key={item.id}>{item.content}</Card>)}
</Grid>

// Grid com gap maior
<Grid cols={1} colsLg={3} gap={8}>
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</Grid>
```

---

## Flex

Cria um container flexbox com controle de direção e alinhamento.

### Uso

```tsx
import { Flex } from '@/design-system/components/layout'

<Flex direction="row" justify="center" align="center" gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Props

| Prop | Tipo | Padrão | Descrição |
|------|------|--------|-----------|
| `children` | `React.ReactNode` | - | Conteúdo do flex container |
| `className` | `string` | - | Classes CSS adicionais |
| `direction` | `'row' \| 'col' \| 'row-reverse' \| 'col-reverse'` | `'row'` | Direção do flex |
| `justify` | `'start' \| 'end' \| 'center' \| 'between' \| 'around' \| 'evenly'` | `'start'` | Alinhamento horizontal |
| `align` | `'start' \| 'end' \| 'center' \| 'stretch' \| 'baseline'` | `'start'` | Alinhamento vertical |
| `wrap` | `boolean` | `false` | Permite quebra de linha |
| `gap` | `0 \| 2 \| 4 \| 6 \| 8` | `4` | Gap entre itens |

### Exemplos

```tsx
// Flex horizontal centralizado
<Flex justify="center" align="center" gap={4}>
  <Button>Botão 1</Button>
  <Button>Botão 2</Button>
</Flex>

// Flex vertical
<Flex direction="col" gap={6}>
  <Card>Card 1</Card>
  <Card>Card 2</Card>
</Flex>

// Flex com espaço entre
<Flex justify="between" align="center">
  <h2>Título</h2>
  <Button>Ação</Button>
</Flex>
```

---

## Combinações Comuns

### Layout Completo

```tsx
<Section>
  <Container>
    <Grid cols={1} colsMd={2} colsLg={3} gap={6}>
      {/* Itens do grid */}
    </Grid>
  </Container>
</Section>
```

### Header com Flex

```tsx
<Section as="header">
  <Container>
    <Flex justify="between" align="center">
      <Logo />
      <Navigation />
    </Flex>
  </Container>
</Section>
```

---

**Última atualização**: 2024
