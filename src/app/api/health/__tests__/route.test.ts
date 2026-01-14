/**
 * @jest-environment node
 */
import { GET } from '../route'
import { NextRequest } from 'next/server'

describe('GET /api/health', () => {
  it('should return 200 with status ok', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toHaveProperty('status', 'ok')
    expect(data).toHaveProperty('timestamp')
    expect(data).toHaveProperty('uptime')
  })
  
  it('should return JSON content type', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    
    const contentType = response.headers.get('content-type')
    expect(contentType).toContain('application/json')
  })

  it('should return valid timestamp', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    // Verificar que timestamp é uma string ISO válida
    expect(data.timestamp).toBeDefined()
    expect(typeof data.timestamp).toBe('string')
    expect(() => new Date(data.timestamp)).not.toThrow()
    expect(new Date(data.timestamp).toISOString()).toBe(data.timestamp)
  })

  it('should return valid uptime', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    // Verificar que uptime é um número válido
    expect(data.uptime).toBeDefined()
    expect(typeof data.uptime).toBe('number')
    expect(data.uptime).toBeGreaterThanOrEqual(0)
  })

  it('should return consistent structure', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    // Verificar estrutura da resposta
    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('timestamp')
    expect(data).toHaveProperty('uptime')
    expect(Object.keys(data).length).toBe(3)
  })
})
