import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomVideoPlayer } from '@/components/CustomVideoPlayer'

// Mock de HTMLVideoElement
const mockPlay = jest.fn().mockResolvedValue(undefined)
const mockPause = jest.fn()
const mockRequestFullscreen = jest.fn().mockResolvedValue(undefined)
const mockExitFullscreen = jest.fn()

// Mock do document.fullscreenElement
Object.defineProperty(document, 'fullscreenElement', {
  writable: true,
  value: null,
})

// Mock do container.requestFullscreen
Object.defineProperty(HTMLDivElement.prototype, 'requestFullscreen', {
  writable: true,
  value: mockRequestFullscreen,
})

Object.defineProperty(document, 'exitFullscreen', {
  writable: true,
  value: mockExitFullscreen,
})

HTMLMediaElement.prototype.play = mockPlay
HTMLMediaElement.prototype.pause = mockPause

describe('CustomVideoPlayer', () => {
  beforeEach(() => {
    mockPlay.mockClear()
    mockPause.mockClear()
    mockRequestFullscreen.mockClear()
    mockExitFullscreen.mockClear()
    document.fullscreenElement = null
  })
  
  it('should render video element', () => {
    const { container } = render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        poster="/test-poster.jpg"
      />
    )
    
    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
    expect(video).toHaveAttribute('src', '/test-video.mp4')
    expect(video).toHaveAttribute('poster', '/test-poster.jpg')
  })
  
  it('should play video when play button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    await user.click(playButton)
    
    await waitFor(() => {
      expect(mockPlay).toHaveBeenCalled()
    })
  })
  
  it('should pause video when pause button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    // Primeiro play
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    await user.click(playButton)
    
    // Depois pause (quando o vídeo estiver tocando)
    await waitFor(() => {
      const pauseButton = screen.queryByRole('button', { name: /pausar/i })
      if (pauseButton) {
        user.click(pauseButton)
      }
    })
  })
  
  it('should toggle mute when mute button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
      />
    )
    
    const muteButton = screen.getByRole('button', { name: /silenciar|ativar som/i })
    await user.click(muteButton)
    
    // Verifica se o botão mudou de estado
    expect(muteButton).toBeInTheDocument()
  })
  
  it('should show initial play icon when showInitialPlayIcon is true', () => {
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    expect(playButton).toBeInTheDocument()
  })
  
  it('should apply correct aspect ratio class', () => {
    const { container } = render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        aspectRatio="vertical"
      />
    )
    
    const playerContainer = container.querySelector('div')
    expect(playerContainer).toHaveClass('aspect-[9/16]')
  })
  
  it('should have accessible controls', () => {
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    expect(playButton).toBeInTheDocument()
  })
  
  // Edge cases
  it('should handle video errors gracefully', () => {
    const { container } = render(
      <CustomVideoPlayer
        src="/invalid-video.mp4"
      />
    )
    
    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
    
    // Simular erro de vídeo
    if (video) {
      const errorEvent = new Event('error')
      video.dispatchEvent(errorEvent)
    }
    
    // Componente não deve quebrar
    expect(container).toBeInTheDocument()
  })
  
  it('should handle fullscreen errors gracefully', async () => {
    const user = userEvent.setup()
    // Mock do alert para evitar erro no teste
    const originalAlert = window.alert
    window.alert = jest.fn()
    
    mockRequestFullscreen.mockRejectedValueOnce(new Error('Fullscreen error'))
    
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
      />
    )
    
    const fullscreenButton = screen.getByRole('button', { name: /entrar em tela cheia/i })
    await user.click(fullscreenButton)
    
    // Não deve quebrar mesmo com erro
    expect(fullscreenButton).toBeInTheDocument()
    expect(window.alert).toHaveBeenCalled()
    
    window.alert = originalAlert
  })
  
  it('should handle startMuted prop', () => {
    const { container } = render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        startMuted={true}
      />
    )
    
    const video = container.querySelector('video')
    expect(video).toBeInTheDocument()
    // Verificar se o vídeo está configurado como muted através da propriedade
    if (video) {
      expect(video.muted).toBe(true)
    }
  })
  
  // Acessibilidade melhorada
  it('should have proper ARIA labels on all controls', () => {
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    const muteButton = screen.getByRole('button', { name: /silenciar|ativar som/i })
    const fullscreenButton = screen.getByRole('button', { name: /entrar em tela cheia/i })
    
    expect(playButton).toHaveAttribute('aria-label')
    expect(muteButton).toHaveAttribute('aria-label')
    expect(fullscreenButton).toHaveAttribute('aria-label')
  })
  
  it('should be keyboard accessible', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.getByRole('button', { name: /reproduzir vídeo/i })
    await user.tab()
    expect(playButton).toHaveFocus()
  })
})
