import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

/**
 * Configurar worker MSW para browser (desenvolvimento)
 * 
 * Este worker pode ser usado durante o desenvolvimento para mockar
 * requisições HTTP no navegador, facilitando o desenvolvimento sem
 * depender de APIs externas.
 * 
 * Para usar no desenvolvimento, importe e inicie o worker em:
 * src/app/layout.tsx ou src/app/page.tsx
 * 
 * Exemplo:
 * ```typescript
 * if (process.env.NODE_ENV === 'development') {
 *   worker.start()
 * }
 * ```
 * 
 * Documentação: https://mswjs.io/docs/api/setup-worker
 */
export const worker = setupWorker(...handlers)
