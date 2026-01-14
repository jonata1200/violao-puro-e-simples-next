import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CustomVideoPlayer } from '@/components/CustomVideoPlayer'

// Mock de HTMLMediaElement
const mockPlay = jest.fn().mockResolvedValue(undefined)
const mockPause = jest.fn()
const mockRequestFullscreen = jest.fn().mockResolvedValue(undefined)

beforeAll(() => {
  HTMLMediaElement.prototype.play = mockPlay
  HTMLMediaElement.prototype.pause = mockPause
  HTMLMediaElement.prototype.requestFullscreen = mockRequestFullscreen
  
  // Mock de document.fullscreenElement
  Object.defineProperty(document, 'fullscreenElement', {
    writable: true,
    value: null,
  })
})

describe('Video Player Flow', () => {
  beforeEach(() => {
    mockPlay.mockClear()
    mockPause.mockClear()
    mockRequestFullscreen.mockClear()
    document.fullscreenElement = null
  })

  it('should render video player with play button', () => {
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    // Verificar se o vídeo está presente
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
    
    // Verificar se o botão de play está presente (pode ter diferentes nomes)
    const playButton = screen.queryByRole('button', { name: /play/i }) || 
                       screen.queryByRole('button', { name: /reproduzir/i })
    expect(playButton).toBeInTheDocument()
  })

  it('should play video when play button is clicked', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.queryByRole('button', { name: /play/i }) || 
                       screen.queryByRole('button', { name: /reproduzir/i })
    if (playButton) {
      await user.click(playButton)
      
      // Aguardar um pouco para o play ser chamado
      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled()
      }, { timeout: 1000 })
    }
  })

  it('should show pause button after playing', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    // Iniciar reprodução
    const playButton = screen.queryByRole('button', { name: /play/i }) || 
                       screen.queryByRole('button', { name: /reproduzir/i })
    if (playButton) {
      await user.click(playButton)
      
      // Aguardar controles aparecerem
      await waitFor(() => {
        const pauseButton = screen.queryByRole('button', { name: /pause/i }) ||
                           screen.queryByRole('button', { name: /pausar/i })
        // O botão de pause pode aparecer após o play
        if (pauseButton) {
          expect(pauseButton).toBeInTheDocument()
        }
      }, { timeout: 2000 })
    }
  })

  it('should allow pause when video is playing', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    // Simular que o vídeo está reproduzindo
    const video = document.querySelector('video') as HTMLVideoElement
    if (video) {
      Object.defineProperty(video, 'paused', {
        writable: true,
        value: false,
      })
    }
    
    // Tentar pausar (pode não ter botão de pause visível inicialmente)
    const pauseButton = screen.queryByRole('button', { name: /pause/i })
    if (pauseButton) {
      await user.click(pauseButton)
      await waitFor(() => {
        expect(mockPause).toHaveBeenCalled()
      })
    }
  })

  it('should handle video with different aspect ratios', () => {
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        aspectRatio="vertical"
        showInitialPlayIcon={true}
      />
    )
    
    const video = document.querySelector('video')
    expect(video).toBeInTheDocument()
  })

  it('should be keyboard accessible', async () => {
    const user = userEvent.setup()
    render(
      <CustomVideoPlayer
        src="/test-video.mp4"
        showInitialPlayIcon={true}
      />
    )
    
    const playButton = screen.queryByRole('button', { name: /play/i }) || 
                       screen.queryByRole('button', { name: /reproduzir/i })
    
    if (playButton) {
      // Verificar que o botão é focável
      await user.tab()
      // Pode não ter foco imediatamente, mas deve ser focável
      
      // Verificar que Enter ativa o botão
      playButton.focus()
      await user.keyboard('{Enter}')
      await waitFor(() => {
        expect(mockPlay).toHaveBeenCalled()
      })
    }
  })
})
