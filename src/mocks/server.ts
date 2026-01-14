import { setupServer } from 'msw/node'
import { handlers } from './handlers'

/**
 * Configurar servidor MSW para Node.js (testes)
 * 
 * Este servidor intercepta requisições HTTP durante a execução dos testes
 * e retorna respostas mockadas definidas nos handlers.
 * 
 * Documentação: https://mswjs.io/docs/api/setup-server
 */
export const server = setupServer(...handlers)
