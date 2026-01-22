# 🧪 Testes

Guia sobre testes do design system, incluindo como executar testes e boas práticas.

## 📁 Estrutura de Testes

Todos os componentes do design system possuem testes unitários localizados em:

```
test/design-system/
├── components/
│   ├── layout/
│   └── patterns/
└── tokens/
```

## 🚀 Executando Testes

### Executar Todos os Testes

```bash
npm test
```

### Executar Testes do Design System

```bash
npm test -- design-system
```

### Executar Testes em Modo Watch

```bash
npm test -- --watch design-system
```

### Executar Testes com Cobertura

```bash
npm test -- --coverage design-system
```

## 📝 Estrutura de Testes

### Exemplo de Teste de Componente

```typescript
import { render, screen } from '@testing-library/react'
import { Container } from '@/design-system/components/layout'

describe('Container', () => {
  it('deve renderizar conteúdo corretamente', () => {
    render(
      <Container>
        <h1>Teste</h1>
      </Container>
    )
    
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })

  it('deve aplicar classes corretas', () => {
    const { container } = render(
      <Container>
        <div>Conteúdo</div>
      </Container>
    )
    
    expect(container.firstChild).toHaveClass('mx-auto')
  })
})
```

### Exemplo de Teste de Token

```typescript
import { colors, spacing } from '@/design-system/tokens'

describe('Tokens', () => {
  describe('colors', () => {
    it('deve ter cor primária definida', () => {
      expect(colors.primary[500]).toBe('#f97316')
    })
  })

  describe('spacing', () => {
    it('deve ter valores de espaçamento corretos', () => {
      expect(spacing[4]).toBe('1rem')
      expect(spacing[8]).toBe('2rem')
    })
  })
})
```

## ✅ Boas Práticas de Testes

### 1. Teste Comportamento, Não Implementação

**✅ Faça:**
```typescript
it('deve renderizar título e descrição', () => {
  render(
    <FeatureCard
      title="Título"
      description="Descrição"
    />
  )
  
  expect(screen.getByText('Título')).toBeInTheDocument()
  expect(screen.getByText('Descrição')).toBeInTheDocument()
})
```

**❌ Evite:**
```typescript
it('deve ter classe feature-card', () => {
  // Testar classes específicas é testar implementação
})
```

### 2. Teste Props e Variantes

**✅ Faça:**
```typescript
describe('FeatureCard', () => {
  it('deve renderizar variante padrão', () => {
    render(<FeatureCard variant="default" />)
    // Verificar comportamento
  })

  it('deve renderizar variante gradient', () => {
    render(<FeatureCard variant="gradient" />)
    // Verificar comportamento
  })
})
```

### 3. Teste Responsividade

**✅ Faça:**
```typescript
describe('Grid', () => {
  it('deve aplicar colunas corretas por breakpoint', () => {
    render(
      <Grid cols={1} colsMd={2} colsLg={3}>
        <div>Item</div>
      </Grid>
    )
    // Verificar classes responsivas
  })
})
```

### 4. Teste Acessibilidade

**✅ Faça:**
```typescript
import { axe, toHaveNoViolations } from 'jest-axe'

expect.extend(toHaveNoViolations)

it('não deve ter violações de acessibilidade', async () => {
  const { container } = render(<FeatureCard />)
  const results = await axe(container)
  expect(results).toHaveNoViolations()
})
```

### 5. Teste Estados e Interações

**✅ Faça:**
```typescript
import userEvent from '@testing-library/user-event'

it('deve expandir ao clicar', async () => {
  const user = userEvent.setup()
  render(<Accordion />)
  
  const trigger = screen.getByRole('button')
  await user.click(trigger)
  
  expect(screen.getByText('Conteúdo')).toBeVisible()
})
```

## 📊 Cobertura de Testes

### Meta de Cobertura

- **Componentes**: Mínimo de 80% de cobertura
- **Tokens**: 100% de cobertura
- **Hooks**: Mínimo de 80% de cobertura

### Verificar Cobertura

```bash
npm test -- --coverage --collectCoverageFrom='design-system/**/*.{ts,tsx}'
```

## 🔍 Tipos de Testes

### Testes Unitários

Testam componentes isoladamente:

```typescript
describe('StatCard', () => {
  it('deve renderizar valor e label', () => {
    render(<StatCard value="100" label="Teste" />)
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('Teste')).toBeInTheDocument()
  })
})
```

### Testes de Integração

Testam interação entre componentes:

```typescript
describe('Grid com FeatureCard', () => {
  it('deve renderizar múltiplos cards em grid', () => {
    render(
      <Grid cols={1} colsMd={2}>
        <FeatureCard title="Card 1" />
        <FeatureCard title="Card 2" />
      </Grid>
    )
    
    expect(screen.getByText('Card 1')).toBeInTheDocument()
    expect(screen.getByText('Card 2')).toBeInTheDocument()
  })
})
```

### Testes de Snapshot

Capturam o estado visual do componente:

```typescript
it('deve corresponder ao snapshot', () => {
  const { container } = render(<FeatureCard />)
  expect(container).toMatchSnapshot()
})
```

## 🐛 Debugging de Testes

### Visualizar HTML Renderizado

```typescript
import { screen, debug } from '@testing-library/react'

it('debug', () => {
  render(<FeatureCard />)
  screen.debug() // Mostra HTML no console
})
```

### Filtrar Testes

```bash
# Executar apenas testes que correspondem ao padrão
npm test -- -t "FeatureCard"
```

## 📖 Próximos Passos

- [Guia de Uso](./guia-uso.md) - Aprenda como usar os componentes
- [Componentes de Layout](./componentes-layout.md) - Veja os componentes disponíveis
- [Princípios de Design](./principios.md) - Entenda os fundamentos
