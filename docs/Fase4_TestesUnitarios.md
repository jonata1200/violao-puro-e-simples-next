# Fase 4: Infraestrutura de Testes e Testes Unitários

Estabelecimento da cultura de testes e garantia de qualidade nos componentes isolados.

## Objetivos
- [ ] Configurar Vitest + React Testing Library
- [ ] Criar scripts de teste no `package.json`
- [ ] Escrever testes unitários para componentes Core (criados na Fase 2)
- [ ] Escrever testes unitários para Utilitários (`lib/utils.ts`)

## Checklist de Ações

### 1. Setup de Dependências
- [ ] Instalar devDependencies:
  - `vitest`
  - `@vitejs/plugin-react`
  - `@testing-library/react`
  - `@testing-library/dom`
  - `@testing-library/jest-dom`
  - `jsdom`
- [ ] Criar arquivo `vitest.config.ts` na raiz
  - Configurar alias `@`
  - Configurar environment `jsdom`
  - Configurar setupFiles (para imports globais do jest-dom)

### 2. Configuração de Scripts
- [ ] Adicionar ao `package.json`:
  - `"test": "vitest"`
  - `"test:watch": "vitest"`
  - `"test:coverage": "vitest run --coverage"`

### 3. Escrita de Testes (Unitários)
Criar pasta `src/__tests__` ou arquivos `*.test.tsx` colocalizados (preferência por colocalização `Component.test.tsx`):
- [ ] **Utils**: Testar função `cn` (class merger)
- [ ] **Button**: Testar renderização de variantes e comportamento de click
- [ ] **Input**: Testar estados e onChange
- [ ] **Accordion**: Testar expansão/contração

## Critérios de Aceitação
- `npm run test` executa com sucesso
- Cobertura básica de testes para componentes Core (ex: Button, Input) e Utils
