# 🔗 Testes de Integração - Planejamento e Implementação

> **Objetivo**: Implementar testes de integração para validar fluxos completos e interações entre componentes

---

## 📋 Índice

1. [Visão Geral](#visão-geral)
2. [Setup e Configuração](#setup-e-configuração)
3. [Estratégia de Testes](#estratégia-de-testes)
4. [Cenários de Teste](#cenários-de-teste)
5. [Testes de API Routes](#testes-de-api-routes)
6. [Testes E2E (Opcional)](#testes-e2e-opcional)
7. [Roadmap de Implementação](#roadmap-de-implementação)

---

## 🎯 Visão Geral

### Objetivos
- **Fluxos Completos**: Validar jornadas do usuário de ponta a ponta
- **Interações**: Testar comunicação entre componentes
- **API Routes**: Validar endpoints da API
- **Navegação**: Testar rotas e navegação
- **Estado Global**: Validar gerenciamento de estado compartilhado

### Diferença entre Testes Unitários e Integração

| Aspecto | Unitários | Integração |
|---------|-----------|------------|
| **Escopo** | Componente isolado | Múltiplos componentes |
| **Mocking** | Mocks extensivos | Mocks mínimos |
| **Velocidade** | Rápidos | Mais lentos |
| **Foco** | Lógica interna | Interações |

### Tecnologias

#### Base (Já usadas em testes unitários)
- **Jest**: Framework de testes
- **React Testing Library**: Testes de componentes
- **@testing-library/user-event**: Interações do usuário

#### Adicionais para Integração
- **MSW (Mock Service Worker)**: Mock de APIs e requisições HTTP
- **Playwright** (Opcional): Testes E2E em navegador real
- **@testing-library/react-hooks**: Testes de hooks (se necessário)

---

## ⚙️ Setup e Configuração

### 1. Instalação de Dependências Adicionais

```bash
npm install --save-dev \
  msw \
  @playwright/test
```

### 2. Configuração do MSW (Mock Service Worker)

**Arquivo**: `src/mocks/handlers.ts`

```typescript
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Mock do endpoint de health check
  http.get('/api/health', () => {
    return HttpResponse.json({ status: 'ok' })
  }),
  
  // Mock de APIs externas (Google Analytics, etc.)
  http.post('https://www.google-analytics.com/*', () => {
    return HttpResponse.json({})
  }),
]
```

**Arquivo**: `src/mocks/server.ts`

```typescript
import { setupServer } from 'msw/node'
import { handlers } from './handlers'

// Configurar servidor MSW para Node.js (testes)
export const server = setupServer(...handlers)
```

**Arquivo**: `src/mocks/browser.ts`

```typescript
import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

// Configurar worker MSW para browser (desenvolvimento)
export const worker = setupWorker(...handlers)
```

**Atualizar**: `jest.setup.ts`

```typescript
import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from '@testing-library/react'
import { server } from './src/mocks/server'

// Iniciar servidor MSW antes de todos os testes
beforeAll(() => server.listen({ onUnhandledRequest: 'warn' }))

// Resetar handlers após cada teste
afterEach(() => {
  cleanup()
  server.resetHandlers()
})

// Fechar servidor após todos os testes
afterAll(() => server.close())
```

### 3. Configuração do Playwright (Opcional - E2E)

**Arquivo**: `playwright.config.ts`

```typescript
import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests/e2e',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
  },
})
```

**Scripts no package.json**:

```json
{
  "scripts": {
    "test:integration": "jest --testPathPattern=integration",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui"
  }
}
```

**Ações**:
- [ ] Instalar MSW
- [ ] Configurar handlers do MSW
- [ ] Configurar servidor MSW
- [ ] Atualizar jest.setup.ts
- [ ] (Opcional) Instalar e configurar Playwright
- [ ] Adicionar scripts ao package.json

---

## 🎯 Estratégia de Testes

### Tipos de Testes de Integração

#### 1. Testes de Componentes Integrados
- Múltiplos componentes trabalhando juntos
- Estado compartilhado
- Comunicação entre componentes

#### 2. Testes de Fluxos
- Jornadas completas do usuário
- Navegação entre páginas
- Formulários e submissões

#### 3. Testes de API Routes
- Endpoints da API
- Requisições HTTP
- Respostas e erros

#### 4. Testes E2E (Opcional)
- Testes em navegador real
- Cenários completos
- Validação visual

### Princípios

1. **Testar comportamento real**: Usar menos mocks possível
2. **Focar em fluxos críticos**: Priorizar funcionalidades importantes
3. **Manter testes rápidos**: Balancear realismo e velocidade
4. **Isolar testes**: Cada teste deve ser independente

---

## 🎬 Cenários de Teste

### 1. Fluxo de Navegação da Landing Page

**Arquivo**: `src/__tests__/integration/landing-page-flow.test.tsx`

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HomePage from '@/app/page'

describe('Landing Page Flow', () => {
  it('should render all main sections', () => {
    render(<HomePage />)
    
    // Verificar seções principais
    expect(screen.getByRole('heading', { name: /iniciante a violonista/i })).toBeInTheDocument()
    expect(screen.getByText(/sobre o professor/i)).toBeInTheDocument()
    expect(screen.getByText(/módulos do curso/i)).toBeInTheDocument()
    expect(screen.getByText(/benefícios/i)).toBeInTheDocument()
    expect(screen.getByText(/depoimentos/i)).toBeInTheDocument()
    expect(screen.getByText(/perguntas frequentes/i)).toBeInTheDocument()
  })
  
  it('should navigate to privacy policy when link is clicked', async () => {
    const user = userEvent.setup()
    render(<HomePage />)
    
    const privacyLink = screen.getByRole('link', { name: /política de privacidade/i })
    await user.click(privacyLink)
    
    // Verificar navegação (mock do Next.js router)
    // Em testes reais, usar Playwright para navegação real
  })
  
  it('should show cookie banner and handle consent', async () => {
    const user = userEvent.setup()
    localStorage.clear()
    
    render(<HomePage />)
    
    // Banner deve aparecer
    expect(screen.getByText(/cookies/i)).toBeInTheDocument()
    
    // Aceitar cookies
    const acceptButton = screen.getByRole('button', { name: /aceitar/i })
    await user.click(acceptButton)
    
    // Banner deve desaparecer
    await waitFor(() => {
      expect(screen.queryByText(/cookies/i)).not.toBeInTheDocument()
    })
  })
})
```

### 2. Fluxo de Interação com FAQ

**Arquivo**: `src/__tests__/integration/faq-interaction.test.tsx`

```typescript
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FaqSection } from '@/components/FaqSection'

describe('FAQ Interaction Flow', () => {
  it('should expand and collapse FAQ items', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    
    // Primeira pergunta deve estar fechada inicialmente
    const firstQuestion = screen.getByText(/pergunta 1/i)
    expect(firstQuestion).toBeInTheDocument()
    
    // Resposta não deve estar visível
    expect(screen.queryByText(/resposta 1/i)).not.toBeVisible()
    
    // Clicar para expandir
    await user.click(firstQuestion)
    
    // Resposta deve estar visível
    expect(screen.getByText(/resposta 1/i)).toBeVisible()
    
    // Clicar novamente para fechar
    await user.click(firstQuestion)
    
    // Resposta não deve estar visível
    await waitFor(() => {
      expect(screen.queryByText(/resposta 1/i)).not.toBeVisible()
    })
  })
  
  it('should allow only one FAQ item open at a time', async () => {
    const user = userEvent.setup()
    render(<FaqSection />)
    
    const question1 = screen.getByText(/pergunta 1/i)
    const question2 = screen.getByText(/pergunta 2/i)
    
    // Abrir primeira pergunta
    await user.click(question1)
    expect(screen.getByText(/resposta 1/i)).toBeVisible()
    
    // Abrir segunda pergunta
    await user.click(question2)
    
    // Primeira deve fechar, segunda deve abrir
    await waitFor(() => {
      expect(screen.queryByText(/resposta 1/i)).not.toBeVisible()
      expect(screen.getByText(/resposta 2/i)).toBeVisible()
    })
  })
})
```

### 3. Fluxo de Player de Vídeo

**Arquivo**: `src/__tests__/integration/video-player-flow.test.tsx`

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomVideoPlayer } from '@/components/CustomVideoPlayer'

const mockPlay = jest.fn()
const mockPause = jest.fn()

HTMLMediaElement.prototype.play = mockPlay
HTMLMediaElement.prototype.pause = mockPause

describe('Video Player Flow', () => {
  beforeEach(() => {
    mockPlay.mockClear()
    mockPause.mockClear()
  })
  
  it('should play video when play button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /play/i })
    await user.click(playButton)
    
    expect(mockPlay).toHaveBeenCalled()
  })
  
  it('should show controls and allow pause', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    // Iniciar reprodução
    const playButton = screen.getByRole('button', { name: /play/i })
    await user.click(playButton)
    
    // Aguardar controles aparecerem
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /pause/i })).toBeInTheDocument()
    })
    
    // Pausar
    const pauseButton = screen.getByRole('button', { name: /pause/i })
    await user.click(pauseButton)
    
    expect(mockPause).toHaveBeenCalled()
  })
})
```

### 4. Fluxo de Oferta com Timer

**Arquivo**: `src/__tests__/integration/timed-offer-flow.test.tsx`

```typescript
import { render, screen, waitFor } from '@testing-library/react'
import { TimedOfferSection } from '@/components/TimedOfferSection'

// Mock de timer
jest.useFakeTimers()

describe('Timed Offer Flow', () => {
  beforeEach(() => {
    jest.clearAllTimers()
  })
  
  afterEach(() => {
    jest.runOnlyPendingTimers()
    jest.useRealTimers()
  })
  
  it('should display countdown timer', () => {
    render(<TimedOfferSection />)
    
    // Verificar se timer está visível
    expect(screen.getByText(/:/)).toBeInTheDocument() // Formato HH:MM:SS
  })
  
  it('should update timer every second', () => {
    render(<TimedOfferSection />)
    
    const initialTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent
    
    // Avançar 1 segundo
    jest.advanceTimersByTime(1000)
    
    const updatedTime = screen.getByText(/\d{2}:\d{2}:\d{2}/).textContent
    expect(updatedTime).not.toBe(initialTime)
  })
  
  it('should show urgency message when time is low', () => {
    // Configurar timer para tempo baixo
    render(<TimedOfferSection initialTime={300} />) // 5 minutos
    
    expect(screen.getByText(/últimas horas/i)).toBeInTheDocument()
  })
})
```

---

## 🌐 Testes de API Routes

### 1. Teste de Health Check

**Arquivo**: `src/app/api/health/__tests__/route.test.ts`

```typescript
import { GET } from '../route'
import { NextRequest } from 'next/server'

describe('GET /api/health', () => {
  it('should return 200 with status ok', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toEqual({ status: 'ok' })
  })
  
  it('should return JSON content type', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    
    expect(response.headers.get('content-type')).toContain('application/json')
  })
})
```

### 2. Teste com MSW (Mock de APIs Externas)

**Arquivo**: `src/__tests__/integration/api-integration.test.ts`

```typescript
import { http, HttpResponse } from 'msw'
import { server } from '@/mocks/server'

describe('API Integration', () => {
  it('should handle API errors gracefully', async () => {
    // Mock de erro na API
    server.use(
      http.get('/api/health', () => {
        return HttpResponse.json(
          { error: 'Service unavailable' },
          { status: 503 }
        )
      })
    )
    
    const response = await fetch('/api/health')
    const data = await response.json()
    
    expect(response.status).toBe(503)
    expect(data.error).toBe('Service unavailable')
  })
})
```

---

## 🎭 Testes E2E (Opcional)

### Configuração com Playwright

**Arquivo**: `tests/e2e/landing-page.spec.ts`

```typescript
import { test, expect } from '@playwright/test'

test.describe('Landing Page E2E', () => {
  test('should load and display all sections', async ({ page }) => {
    await page.goto('/')
    
    // Verificar seções principais
    await expect(page.getByRole('heading', { name: /iniciante a violonista/i })).toBeVisible()
    await expect(page.getByText(/sobre o professor/i)).toBeVisible()
    await expect(page.getByText(/módulos do curso/i)).toBeVisible()
  })
  
  test('should navigate to privacy policy', async ({ page }) => {
    await page.goto('/')
    
    const privacyLink = page.getByRole('link', { name: /política de privacidade/i })
    await privacyLink.click()
    
    await expect(page).toHaveURL('/politica-de-privacidade')
    await expect(page.getByRole('heading', { name: /política de privacidade/i })).toBeVisible()
  })
  
  test('should handle cookie consent', async ({ page }) => {
    await page.goto('/')
    
    // Banner deve aparecer
    await expect(page.getByText(/cookies/i)).toBeVisible()
    
    // Aceitar cookies
    await page.getByRole('button', { name: /aceitar/i }).click()
    
    // Banner deve desaparecer
    await expect(page.getByText(/cookies/i)).not.toBeVisible()
    
    // Recarregar página - banner não deve aparecer
    await page.reload()
    await expect(page.getByText(/cookies/i)).not.toBeVisible()
  })
  
  test('should play video when play button is clicked', async ({ page }) => {
    await page.goto('/')
    
    const playButton = page.getByRole('button', { name: /play/i }).first()
    await playButton.click()
    
    // Verificar se vídeo está reproduzindo
    const video = page.locator('video').first()
    await expect(video).toHaveAttribute('paused', 'false')
  })
})
```

### Executar Testes E2E

```bash
# Executar todos os testes E2E
npm run test:e2e

# Executar com UI interativa
npm run test:e2e:ui

# Executar em modo debug
npx playwright test --debug
```

---

## 🗺️ Roadmap de Implementação

### Fase 1: Setup e Configuração (Semana 1)
- [ ] Instalar MSW
- [ ] Configurar handlers do MSW
- [ ] Configurar servidor MSW
- [ ] Atualizar jest.setup.ts
- [ ] Criar estrutura de testes de integração

### Fase 2: Testes de Fluxos Principais (Semana 2)
- [ ] Teste de navegação da landing page
- [ ] Teste de interação com FAQ
- [ ] Teste de player de vídeo
- [ ] Teste de oferta com timer
- [ ] Teste de cookie banner

### Fase 3: Testes de API (Semana 2-3)
- [ ] Teste de health check
- [ ] Testes com MSW para APIs externas
- [ ] Testes de tratamento de erros

### Fase 4: Testes E2E (Opcional - Semana 3-4)
- [ ] Instalar e configurar Playwright
- [ ] Criar testes E2E principais
- [ ] Configurar CI/CD para E2E
- [ ] Documentar execução de testes E2E

### Fase 5: Melhorias e Otimização (Semana 4)
- [ ] Revisar e melhorar testes existentes
- [ ] Adicionar mais cenários de edge cases
- [ ] Otimizar performance dos testes
- [ ] Documentar padrões de teste de integração

---

## ✅ Checklist de Implementação

### Setup
- [ ] Instalar MSW
- [ ] Configurar handlers
- [ ] Configurar servidor MSW
- [ ] Atualizar jest.setup.ts
- [ ] (Opcional) Instalar Playwright
- [ ] (Opcional) Configurar Playwright

### Testes de Fluxos
- [ ] Navegação da landing page
- [ ] Interação com FAQ
- [ ] Player de vídeo
- [ ] Oferta com timer
- [ ] Cookie banner
- [ ] Navegação entre páginas

### Testes de API
- [ ] Health check
- [ ] Tratamento de erros
- [ ] Mock de APIs externas

### Testes E2E (Opcional)
- [ ] Landing page completa
- [ ] Navegação
- [ ] Interações principais
- [ ] Validação visual

### Integração CI/CD
- [ ] Configurar testes de integração no CI
- [ ] Configurar testes E2E no CI (se aplicável)
- [ ] Relatórios de cobertura

---

## 📝 Notas Importantes

1. **Balancear velocidade e realismo**: Testes de integração são mais lentos, mas mais realistas
2. **Usar MSW para APIs**: Facilita testes sem dependências externas
3. **E2E como complemento**: Testes E2E são mais lentos, usar para cenários críticos
4. **Manter testes independentes**: Cada teste deve poder rodar isoladamente
5. **Documentar cenários**: Documentar o que cada teste valida

---

## 🔗 Recursos Úteis

- [MSW Documentation](https://mswjs.io/)
- [Playwright Documentation](https://playwright.dev/)
- [Testing Library User Event](https://testing-library.com/docs/user-event/intro/)
- [Next.js Testing](https://nextjs.org/docs/app/building-your-application/testing)

---

**Última atualização**: 2024  
**Status**: 📝 Planejamento
