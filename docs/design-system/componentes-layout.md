# 🧩 Componentes de Layout

Componentes estruturais que organizam o conteúdo da página de forma consistente e responsiva.

## Container

Componente que centraliza o conteúdo e aplica padding horizontal consistente. Mantém uma largura máxima para melhor legibilidade em telas grandes.

### Uso Básico

```tsx
import { Container } from '@/design-system/components/layout'

<Container>
  <h1>Conteúdo centralizado</h1>
  <p>Este conteúdo será centralizado com padding horizontal</p>
</Container>
```

### Características

- Centraliza o conteúdo horizontalmente
- Aplica padding horizontal consistente
- Define largura máxima para telas grandes
- Totalmente responsivo

## Section

Componente que aplica espaçamento vertical consistente entre seções da página.

### Uso Básico

```tsx
import { Section } from '@/design-system/components/layout'

<Section>
  <h2>Título da Seção</h2>
  <p>Conteúdo da seção com espaçamento vertical adequado</p>
</Section>
```

### Características

- Espaçamento vertical consistente
- Facilita separação visual entre seções
- Responsivo por padrão

### Exemplo com Container

```tsx
import { Container, Section } from '@/design-system/components/layout'

<Section>
  <Container>
    <h2>Seção com Container</h2>
    <p>Combinação comum para seções com conteúdo centralizado</p>
  </Container>
</Section>
```

## Grid

Componente que cria um grid responsivo com controle sobre número de colunas em diferentes breakpoints.

### Uso Básico

```tsx
import { Grid } from '@/design-system/components/layout'

<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
  <div>Item 5</div>
  <div>Item 6</div>
</Grid>
```

### Props

- `cols`: Número de colunas no mobile (padrão: 1)
- `colsMd`: Número de colunas em telas médias (≥768px)
- `colsLg`: Número de colunas em telas grandes (≥1024px)
- `colsXl`: Número de colunas em telas extra grandes (≥1280px)
- `gap`: Espaçamento entre itens (padrão: 4)

### Características

- Grid responsivo automático
- Controle granular por breakpoint
- Espaçamento configurável
- Alinhamento automático de itens

### Exemplos

```tsx
// Grid simples de 2 colunas
<Grid cols={1} colsMd={2} gap={4}>
  <Card />
  <Card />
</Grid>

// Grid de 3 colunas em desktop
<Grid cols={1} colsMd={2} colsLg={3} gap={6}>
  <FeatureCard />
  <FeatureCard />
  <FeatureCard />
</Grid>
```

## Flex

Componente que cria um container flexbox com controle sobre direção, alinhamento e espaçamento.

### Uso Básico

```tsx
import { Flex } from '@/design-system/components/layout'

<Flex direction="row" justify="center" align="center" gap={4}>
  <div>Item 1</div>
  <div>Item 2</div>
</Flex>
```

### Props

- `direction`: Direção do flex (`row` | `column` | `row-reverse` | `column-reverse`)
- `justify`: Alinhamento horizontal (`start` | `center` | `end` | `between` | `around` | `evenly`)
- `align`: Alinhamento vertical (`start` | `center` | `end` | `stretch` | `baseline`)
- `gap`: Espaçamento entre itens
- `wrap`: Quebra de linha (`wrap` | `nowrap` | `wrap-reverse`)

### Características

- Controle completo sobre layout flexbox
- Responsivo e flexível
- Espaçamento configurável
- Suporte a diferentes direções e alinhamentos

### Exemplos

```tsx
// Flex horizontal centralizado
<Flex direction="row" justify="center" align="center" gap={4}>
  <Button>Botão 1</Button>
  <Button>Botão 2</Button>
</Flex>

// Flex vertical
<Flex direction="column" gap={2}>
  <Input />
  <Input />
  <Button>Enviar</Button>
</Flex>

// Flex com espaço entre itens
<Flex direction="row" justify="between" align="center">
  <Logo />
  <Navigation />
</Flex>
```

## 🎯 Quando Usar Cada Componente

### Container
- Use para envolver seções e manter largura máxima consistente
- Use quando precisar centralizar conteúdo horizontalmente
- Combine com Section para espaçamento vertical

### Section
- Use para separar seções da página com espaçamento vertical
- Use para criar hierarquia visual clara
- Combine com Container para conteúdo centralizado

### Grid
- Use para organizar conteúdo em colunas responsivas
- Use para layouts de cards, features, ou itens similares
- Use quando precisar de controle granular por breakpoint

### Flex
- Use para organizar conteúdo com flexbox
- Use quando precisar de controle fino sobre alinhamento
- Use para layouts que não se encaixam bem em grid

## 📖 Próximos Passos

- [Componentes de Padrões](./componentes-padroes.md) - Veja componentes de padrões comuns
- [Guia de Uso](./guia-uso.md) - Aprenda boas práticas de uso
