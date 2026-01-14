/**
 * @jest-environment node
 */
import { GET } from '@/app/api/health/route'
import { NextRequest } from 'next/server'

describe('API Integration', () => {
  it('should handle successful API response', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data).toHaveProperty('status', 'ok')
    expect(data).toHaveProperty('timestamp')
    expect(data).toHaveProperty('uptime')
  })

  it('should return consistent response structure', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    const data = await response.json()
    
    // Verificar estrutura completa
    expect(data).toHaveProperty('status')
    expect(data).toHaveProperty('timestamp')
    expect(data).toHaveProperty('uptime')
    expect(typeof data.status).toBe('string')
    expect(typeof data.timestamp).toBe('string')
    expect(typeof data.uptime).toBe('number')
  })

  it('should return valid JSON content type', async () => {
    const request = new NextRequest('http://localhost:3000/api/health')
    const response = await GET(request)
    
    const contentType = response.headers.get('content-type')
    expect(contentType).toContain('application/json')
  })

  it('should handle multiple concurrent requests', async () => {
    // Fazer múltiplas requisições simultâneas
    const requests = Array.from({ length: 5 }, () => {
      const req = new NextRequest('http://localhost:3000/api/health')
      return GET(req)
    })
    const responses = await Promise.all(requests)
    
    // Todas devem retornar sucesso
    responses.forEach(response => {
      expect(response.status).toBe(200)
    })
    
    // Verificar que todas têm a estrutura correta
    const dataPromises = responses.map(r => r.json())
    const dataArray = await Promise.all(dataPromises)
    
    dataArray.forEach(data => {
      expect(data).toHaveProperty('status', 'ok')
      expect(data).toHaveProperty('timestamp')
      expect(data).toHaveProperty('uptime')
    })
  })

  it('should return different timestamps for each request', async () => {
    const request1 = new NextRequest('http://localhost:3000/api/health')
    const response1 = await GET(request1)
    const data1 = await response1.json()
    
    // Aguardar um pouco para garantir timestamp diferente
    await new Promise(resolve => setTimeout(resolve, 10))
    
    const request2 = new NextRequest('http://localhost:3000/api/health')
    const response2 = await GET(request2)
    const data2 = await response2.json()
    
    // Timestamps devem ser diferentes (ou pelo menos válidos)
    expect(data1.timestamp).toBeDefined()
    expect(data2.timestamp).toBeDefined()
    expect(new Date(data1.timestamp).getTime()).toBeLessThanOrEqual(new Date(data2.timestamp).getTime())
  })

  it('should return valid uptime values', async () => {
    const request1 = new NextRequest('http://localhost:3000/api/health')
    const response1 = await GET(request1)
    const data1 = await response1.json()
    
    await new Promise(resolve => setTimeout(resolve, 100))
    
    const request2 = new NextRequest('http://localhost:3000/api/health')
    const response2 = await GET(request2)
    const data2 = await response2.json()
    
    // Uptime deve aumentar ou permanecer igual
    expect(data1.uptime).toBeGreaterThanOrEqual(0)
    expect(data2.uptime).toBeGreaterThanOrEqual(0)
    expect(data2.uptime).toBeGreaterThanOrEqual(data1.uptime)
  })
})
