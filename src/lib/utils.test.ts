import { cn } from './utils'

describe('cn utility', () => {
  it('should merge class names', () => {
    const result = cn('class1', 'class2')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
  })
  
  it('should handle conditional classes', () => {
    const result = cn('base', false && 'hidden', 'visible')
    expect(result).toContain('base')
    expect(result).toContain('visible')
    expect(result).not.toContain('hidden')
  })
  
  it('should merge Tailwind classes correctly', () => {
    const result = cn('p-4', 'p-6')
    // tailwind-merge deve resolver para p-6 (última classe vence)
    expect(result).toBe('p-6')
  })
  
  it('should handle undefined and null values', () => {
    const result = cn('base', undefined, null, 'visible')
    expect(result).toContain('base')
    expect(result).toContain('visible')
  })
  
  it('should handle empty strings', () => {
    const result = cn('base', '', 'visible')
    expect(result).toContain('base')
    expect(result).toContain('visible')
  })
  
  it('should handle arrays of classes', () => {
    const result = cn('base', ['class1', 'class2'], 'visible')
    expect(result).toContain('base')
    expect(result).toContain('class1')
    expect(result).toContain('class2')
    expect(result).toContain('visible')
  })
})
