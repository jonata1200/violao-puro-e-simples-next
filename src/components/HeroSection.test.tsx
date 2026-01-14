import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'

// Mock do CustomVideoPlayer
jest.mock('./CustomVideoPlayer', () => {
  const React = require('react')
  return {
    CustomVideoPlayer: ({ src, poster }: any) => React.createElement('div', { 'data-testid': 'video-player' },
      React.createElement('video', { src, poster })
    ),
  }
})

// Mock dos componentes do design system
jest.mock('@/design-system/components/layout', () => {
  const React = require('react')
  return {
    Container: ({ children, className }: any) => React.createElement('div', { className, 'data-testid': 'container' }, children),
    Grid: ({ children, className }: any) => React.createElement('div', { className, 'data-testid': 'grid' }, children),
  }
})

jest.mock('@/design-system/components/patterns', () => {
  const React = require('react')
  return {
    StatCard: ({ value, label }: any) => React.createElement('div', { 'data-testid': 'stat-card' },
      React.createElement('span', { 'data-testid': 'stat-value' }, value),
      React.createElement('span', { 'data-testid': 'stat-label' }, label)
    ),
  }
})

describe('HeroSection', () => {
  it('should render main heading', () => {
    render(<HeroSection />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    expect(heading).toHaveTextContent(/iniciante a violonista/i)
  })
  
  it('should render video player', () => {
    render(<HeroSection />)
    
    const videoPlayer = screen.getByTestId('video-player')
    expect(videoPlayer).toBeInTheDocument()
  })
  
  it('should render statistics', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/40\+/i)).toBeInTheDocument()
    expect(screen.getByText(/500\+/i)).toBeInTheDocument()
    expect(screen.getByText(/90/i)).toBeInTheDocument()
    expect(screen.getByText(/100%/i)).toBeInTheDocument()
  })
  
  it('should render CTA button', () => {
    render(<HeroSection />)
    
    const ctaButton = screen.getByRole('button', { name: /começar minha jornada musical/i })
    expect(ctaButton).toBeInTheDocument()
  })
  
  it('should render subtitle text', () => {
    render(<HeroSection />)
    
    expect(screen.getByText(/domine acordes/i)).toBeInTheDocument()
    expect(screen.getByText(/centenas de alunos/i)).toBeInTheDocument()
  })
  
  it('should have accessible structure', () => {
    render(<HeroSection />)
    
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toBeInTheDocument()
    
    const button = screen.getByRole('button')
    expect(button).toBeInTheDocument()
  })
})
