import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './button'

describe('Button', () => {
  it('should render button with text', () => {
    render(<Button>Click me</Button>)
    
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
  })
  
  it('should call onClick when clicked', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
  
  it('should be disabled when disabled prop is true', () => {
    render(<Button disabled>Click me</Button>)
    
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
  })
  
  it('should not call onClick when disabled', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button disabled onClick={handleClick}>Click me</Button>)
    
    const button = screen.getByRole('button')
    await user.click(button)
    
    expect(handleClick).not.toHaveBeenCalled()
  })
  
  it('should apply correct variant classes', () => {
    const { container } = render(<Button variant="destructive">Delete</Button>)
    
    const button = container.querySelector('button')
    expect(button).toHaveClass('bg-destructive')
  })
  
  it('should apply correct size classes', () => {
    const { container } = render(<Button size="lg">Large Button</Button>)
    
    const button = container.querySelector('button')
    expect(button).toHaveClass('h-10')
  })
  
  it('should have accessible name', () => {
    render(<Button>Accessible Button</Button>)
    
    const button = screen.getByRole('button', { name: /accessible button/i })
    expect(button).toBeInTheDocument()
  })
  
  it('should support asChild prop', () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    )
    
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', '/test')
  })
  
  // Edge cases
  it('should handle all variant types', () => {
    const variants = ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const
    
    variants.forEach(variant => {
      const { container } = render(<Button variant={variant}>Test</Button>)
      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })
  })
  
  it('should handle all size types', () => {
    const sizes = ['default', 'sm', 'lg', 'icon'] as const
    
    sizes.forEach(size => {
      const { container } = render(<Button size={size}>Test</Button>)
      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })
  })
  
  it('should handle className prop correctly', () => {
    const { container } = render(<Button className="custom-class">Test</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveClass('custom-class')
  })
  
  it('should handle type prop', () => {
    const { container } = render(<Button type="submit">Submit</Button>)
    const button = container.querySelector('button')
    expect(button).toHaveAttribute('type', 'submit')
  })
  
  // Acessibilidade melhorada
  it('should have proper ARIA attributes when provided', () => {
    render(<Button aria-label="Custom label">Test</Button>)
    
    const button = screen.getByRole('button', { name: /custom label/i })
    expect(button).toHaveAttribute('aria-label', 'Custom label')
  })
  
  it('should be keyboard accessible', async () => {
    const handleClick = jest.fn()
    const user = userEvent.setup()
    
    render(<Button onClick={handleClick}>Test</Button>)
    
    const button = screen.getByRole('button')
    await user.tab()
    expect(button).toHaveFocus()
    
    await user.keyboard('{Enter}')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
