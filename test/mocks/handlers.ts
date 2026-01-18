import { http, HttpResponse } from 'msw'

/**
 * Handlers do MSW para mockar requisições HTTP em testes
 * 
 * Documentação: https://mswjs.io/docs/api/http
 */
export const handlers = [
  // Mock do endpoint de health check
  http.get('/api/health', () => {
    return HttpResponse.json({
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: 1000,
    })
  }),

  // Mock de APIs externas (Google Analytics, etc.)
  http.post('https://www.google-analytics.com/*', () => {
    return HttpResponse.json({})
  }),

  http.get('https://www.google-analytics.com/*', () => {
    return HttpResponse.json({})
  }),
]
