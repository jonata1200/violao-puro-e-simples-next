import '@testing-library/jest-dom'
import { cleanup } from '@testing-library/react'
import { afterEach, beforeAll, afterAll } from '@jest/globals'
import React from 'react'

// Configurar servidor MSW para testes de integração
// Usando importação dinâmica para evitar problemas de inicialização
let server: ReturnType<typeof import('msw/node').setupServer> | null = null

// Inicializar MSW de forma assíncrona
beforeAll(async () => {
  try {
    const { setupServer } = await import('msw/node')
    const { handlers } = await import('./test/mocks/handlers')
    
    server = setupServer(...handlers)
    server.listen({ onUnhandledRequest: 'warn' })
  } catch (error) {
    // MSW não disponível - continuar sem MSW (apenas para testes unitários)
    // Isso é esperado se MSW não estiver sendo usado em todos os testes
  }
})

// Resetar handlers após cada teste
afterEach(() => {
  cleanup()
  if (server) {
    server.resetHandlers()
  }
})

// Fechar servidor após todos os testes
afterAll(() => {
  if (server) {
    server.close()
  }
})

// Mock do Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
      back: jest.fn(),
      forward: jest.fn(),
      refresh: jest.fn(),
    }
  },
  usePathname() {
    return '/'
  },
  useSearchParams() {
    return new URLSearchParams()
  },
}))

// Mock do Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return React.createElement('img', props)
  },
}))

// Mock do Next.js Link
jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, ...props }: any) => {
    return React.createElement('a', { href, ...props }, children)
  },
}))
