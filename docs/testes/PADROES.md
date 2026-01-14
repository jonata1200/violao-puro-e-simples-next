# 📋 Padrões de Teste - Guia de Referência

> **Objetivo**: Documentar padrões, boas práticas e convenções para escrita de testes no projeto

---

## 📋 Índice

1. [Estrutura de Testes](#estrutura-de-testes)
2. [Padrão AAA](#padrão-aaa)
3. [Queries e Seletores](#queries-e-seletores)
4. [Testes de Acessibilidade](#testes-de-acessibilidade)
5. [Edge Cases](#edge-cases)
6. [Mocks e Stubs](#mocks-e-stubs)
7. [Exemplos Práticos](#exemplos-práticos)

---

## 🏗️ Estrutura de Testes

### Organização de Arquivos

```
src/
├── components/
│   ├── ComponentName.tsx
│   └── ComponentName.test.tsx    # Teste ao lado do componente
│
├── lib/
│   ├── utils.ts
│   └── utils.test.ts              # Teste de utilitários
```

### Convenções de Nomenclatura

- **Arquivos**: `*.test.tsx` ou `*.spec.tsx`
- **Describe blocks**: `describe('ComponentName', () => {})`
- **Test cases**: `it('should do something specific', () => {})`

### Estrutura Padrão

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ComponentName } from './ComponentName'

describe('ComponentName', () => {
  // Setup comum (se necessário)
  beforeEach(() => {
    // Configuração antes de cada teste
  })
  
  // Testes básicos
  it('should render correctly', () => {
    // ...
  })
  
  // Testes de interação
  it('should handle user interaction', async () => {
    // ...
  })
  
  // Edge cases
  it('should handle edge case', () => {
    // ...
  })
  
  // Acessibilidade
  it('should be accessible', () => {
    // ...
  })
})
```

---

## 🎯 Padrão AAA (Arrange, Act, Assert)

Sempre organize os testes seguindo o padrão AAA:

```typescript
it('should do something', () => {
  // Arrange: Preparar o teste
  const props = { title: 'Test', onClick: jest.fn() }
  
  // Act: Executar a ação
  render(<ComponentName {...props} />)
  const button = screen.getByRole('button')
  
  // Assert: Verificar o resultado
  expect(button).toBeInTheDocument()
  expect(button).toHaveTextContent('Test')
})
```

### Exemplo Completo

```typescript
it('should call onClick when button is clicked', async () => {
  // Arrange
  const handleClick = jest.fn()
  const user = userEvent.setup()
  
  // Act
  render(<Button onClick={handleClick}>Click me</Button>)
  const button = screen.getByRole('button')
  await user.click(button)
  
  // Assert
  expect(handleClick).toHaveBeenCalledTimes(1)
})
```

---

## 🔍 Queries e Seletores

### Hierarquia de Preferência (do mais acessível ao menos)

1. **getByRole** - Preferir sempre que possível
   ```typescript
   screen.getByRole('button', { name: /submit/i })
   screen.getByRole('heading', { level: 1 })
   screen.getByRole('link', { name: /home/i })
   ```

2. **getByLabelText** - Para formulários
   ```typescript
   screen.getByLabelText('Email')
   screen.getByLabelText(/password/i)
   ```

3. **getByText** - Quando não há role específica
   ```typescript
   screen.getByText('Welcome')
   screen.getByText(/error message/i)
   ```

4. **getByTestId** - Último recurso (evitar quando possível)
   ```typescript
   screen.getByTestId('custom-element')
   ```

### Exemplos

```typescript
// ✅ Bom: Usa role
const button = screen.getByRole('button', { name: /submit/i })

// ❌ Ruim: Usa testId desnecessariamente
const button = screen.getByTestId('submit-button')

// ✅ Bom: Usa labelText para inputs
const emailInput = screen.getByLabelText('Email')

// ✅ Bom: Usa text para conteúdo
const heading = screen.getByText(/welcome/i)
```

---

## ♿ Testes de Acessibilidade

### Verificações Básicas

```typescript
it('should be accessible', () => {
  render(<Component />)
  
  // Verificar que elementos têm nomes acessíveis
  const button = screen.getByRole('button')
  expect(button).toHaveAccessibleName()
  
  // Verificar atributos ARIA
  expect(button).toHaveAttribute('aria-label', 'Expected label')
  
  // Verificar estrutura semântica
  const heading = screen.getByRole('heading', { level: 1 })
  expect(heading).toBeInTheDocument()
})
```

### Navegação por Teclado

```typescript
it('should be keyboard accessible', async () => {
  const user = userEvent.setup()
  render(<Component />)
  
  const button = screen.getByRole('button')
  
  // Tab para focar
  await user.tab()
  expect(button).toHaveFocus()
  
  // Enter para ativar
  await user.keyboard('{Enter}')
  // Verificar ação
})
```

### Hierarquia de Headings

```typescript
it('should have proper heading hierarchy', () => {
  render(<Component />)
  
  const h1 = screen.getByRole('heading', { level: 1 })
  const h2 = screen.getByRole('heading', { level: 2 })
  
  expect(h1).toBeInTheDocument()
  expect(h2).toBeInTheDocument()
})
```

---

## 🎲 Edge Cases

### Tratamento de Erros

```typescript
it('should handle errors gracefully', () => {
  const originalMethod = window.localStorage.getItem
  window.localStorage.getItem = jest.fn(() => {
    throw new Error('Storage error')
  })
  
  // Componente não deve quebrar
  expect(() => render(<Component />)).not.toThrow()
  
  // Restaurar
  window.localStorage.getItem = originalMethod
})
```

### Valores Extremos

```typescript
it('should handle empty values', () => {
  render(<Component items={[]} />)
  expect(screen.getByText(/no items/i)).toBeInTheDocument()
})

it('should handle null/undefined props', () => {
  render(<Component optionalProp={null} />)
  // Verificar comportamento esperado
})
```

### Múltiplas Interações

```typescript
it('should handle rapid interactions', async () => {
  const user = userEvent.setup()
  const handleClick = jest.fn()
  
  render(<Button onClick={handleClick}>Click</Button>)
  const button = screen.getByRole('button')
  
  // Clicar múltiplas vezes rapidamente
  await user.click(button)
  await user.click(button)
  await user.click(button)
  
  expect(handleClick).toHaveBeenCalledTimes(3)
})
```

---

## 🎭 Mocks e Stubs

### Mock de Módulos

```typescript
// No topo do arquivo de teste
jest.mock('./CustomComponent', () => ({
  CustomComponent: ({ prop }: any) => (
    <div data-testid="custom-component">{prop}</div>
  ),
}))
```

### Mock de APIs do Browser

```typescript
// Mock do localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    clear: () => { store = {} },
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
})
```

### Mock de Next.js

```typescript
// Já configurado em jest.setup.ts
jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    replace: jest.fn(),
  }),
}))
```

---

## 💡 Exemplos Práticos

### Exemplo 1: Componente Simples

```typescript
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('should render with text', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument()
  })
  
  it('should handle click', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click</Button>)
    await user.click(screen.getByRole('button'))
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
```

### Exemplo 2: Componente com Estado

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieBanner } from './CookieBanner'

describe('CookieBanner', () => {
  beforeEach(() => {
    localStorage.clear()
  })
  
  it('should show when consent not given', () => {
    render(<CookieBanner />)
    expect(screen.getByText(/cookies/i)).toBeInTheDocument()
  })
  
  it('should hide when accept clicked', async () => {
    const user = userEvent.setup()
    const { container } = render(<CookieBanner />)
    
    await user.click(screen.getByRole('button', { name: /aceitar/i }))
    
    await waitFor(() => {
      expect(container.firstChild).toBeNull()
    })
  })
})
```

### Exemplo 3: Componente com Hooks

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomVideoPlayer } from './CustomVideoPlayer'

// Mock de HTMLVideoElement
HTMLMediaElement.prototype.play = jest.fn().mockResolvedValue(undefined)

describe('CustomVideoPlayer', () => {
  it('should play video on click', async () => {
    const user = userEvent.setup()
    render(<CustomVideoPlayer src="/video.mp4" showInitialPlayIcon={true} />)
    
    const playButton = screen.getByRole('button', { name: /reproduzir/i })
    await user.click(playButton)
    
    expect(HTMLMediaElement.prototype.play).toHaveBeenCalled()
  })
})
```

---

## ✅ Checklist de Qualidade

Antes de considerar um teste completo, verifique:

- [ ] Testa comportamento, não implementação
- [ ] Usa queries acessíveis (getByRole, getByLabelText)
- [ ] Inclui testes de acessibilidade básicos
- [ ] Cobre edge cases relevantes
- [ ] Tem nomes descritivos e claros
- [ ] Segue padrão AAA (Arrange, Act, Assert)
- [ ] É independente (não depende de outros testes)
- [ ] Limpa estado após execução (se necessário)

---

## 🚫 Anti-padrões (Evitar)

### ❌ Testar Implementação

```typescript
// ❌ Ruim
it('should set state correctly', () => {
  const component = render(<Component />)
  expect(component.state.isOpen).toBe(true)
})

// ✅ Bom
it('should show content when opened', () => {
  render(<Component />)
  expect(screen.getByText('Content')).toBeInTheDocument()
})
```

### ❌ Usar testId Desnecessariamente

```typescript
// ❌ Ruim
const button = screen.getByTestId('submit-button')

// ✅ Bom
const button = screen.getByRole('button', { name: /submit/i })
```

### ❌ Testes Dependentes

```typescript
// ❌ Ruim: Teste depende da ordem
it('should increment counter', () => {
  // ...
})

it('should show count', () => {
  // Depende do teste anterior
})

// ✅ Bom: Cada teste é independente
it('should increment counter', () => {
  render(<Counter />)
  // ...
})

it('should show count', () => {
  render(<Counter initialCount={5} />)
  // ...
})
```

---

## 📚 Recursos Adicionais

- [React Testing Library Docs](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/docs/getting-started)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)
- [Accessibility Testing](https://www.w3.org/WAI/test-evaluate/)

---

**Última atualização**: 2024  
**Status**: ✅ Ativo
