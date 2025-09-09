// src/components/CustomVideoPlayer.tsx
"use client";

import { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string;
  aspectRatio?: 'horizontal' | 'vertical';
  showInitialPlayIcon?: boolean;
  startMuted?: boolean;
}

export const CustomVideoPlayer = forwardRef<HTMLVideoElement, CustomVideoPlayerProps>(
  ({ src, poster, aspectRatio = 'horizontal', showInitialPlayIcon = false, startMuted = false }, ref) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(startMuted ? 0 : 1);
    const [isMuted, setIsMuted] = useState(startMuted);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const internalVideoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => internalVideoRef.current as HTMLVideoElement);

    const togglePlayPause = () => {
      const video = internalVideoRef.current;
      if (video) {
        if (video.paused) { video.play(); } else { video.pause(); }
      }
    };

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVolume = parseFloat(e.target.value);
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
      if (internalVideoRef.current) {
        internalVideoRef.current.volume = newVolume;
        internalVideoRef.current.muted = newVolume === 0;
      }
    };

    const toggleMute = () => {
      const video = internalVideoRef.current;
      if (video) {
        video.muted = !video.muted;
        setIsMuted(video.muted);
        if (!video.muted && video.volume === 0) {
          video.volume = 0.5;
          setVolume(0.5);
        }
      }
    };

    const toggleFullscreen = () => {
      const container = containerRef.current;
      if (container) {
        if (!document.fullscreenElement) {
          container.requestFullscreen().catch(err => {
            alert(`Erro ao tentar entrar em tela cheia: ${err.message} (${err.name})`);
          });
        } else {
          document.exitFullscreen();
        }
      }
    };

    useEffect(() => {
      const video = internalVideoRef.current;
      if (!video) return;

      const syncPlayState = () => setIsPlaying(!video.paused);
      const handleTimeUpdate = () => { if(video.duration) { setProgress((video.currentTime / video.duration) * 100) } };
      const handleVideoEnd = () => setIsPlaying(false);
      
      video.addEventListener('play', syncPlayState);
      video.addEventListener('pause', syncPlayState);
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('ended', handleVideoEnd);

      const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
      document.addEventListener('fullscreenchange', handleFullscreenChange);

      return () => {
        video.removeEventListener('play', syncPlayState);
        video.removeEventListener('pause', syncPlayState);
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('ended', handleVideoEnd);
        document.removeEventListener('fullscreenchange', handleFullscreenChange);
      };
    }, []);

    const aspectRatioClass = aspectRatio === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

    return (
      <div ref={containerRef} className={`relative group w-full ${aspectRatioClass} bg-black rounded-xl overflow-hidden`}>
          <video
              ref={internalVideoRef}
              src={src}
              poster={poster}
              preload="metadata"
              muted={startMuted}
              onClick={togglePlayPause}
              width="100%"
              height="100%"
              playsInline
              className={`w-full h-full rounded-xl cursor-pointer ${isFullscreen ? 'object-contain' : 'object-cover'}`}
          />
          
          <div className={`absolute inset-0 flex flex-col justify-between items-center bg-black/40 transition-opacity duration-300 pointer-events-none 
            ${showInitialPlayIcon && !isPlaying ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
              <div className="flex-grow flex items-center justify-center">
                  {!isPlaying && (
                      <button
                          onClick={togglePlayPause}
                          className="p-3 bg-orange-500/70 rounded-full text-white hover:bg-orange-500 transition-all transform hover:scale-110 pointer-events-auto"
                          aria-label="Reproduzir vídeo"
                      >
                          <Play size={aspectRatio === 'vertical' ? 36 : 48} fill="white" />
                      </button>
                  )}
              </div>

              {/* BARRA DE CONTROLES COMPLETA E CORRIGIDA */}
              <div className="w-full p-2 sm:p-4 pointer-events-auto">
                <div className="w-full bg-white/20 h-1.5 rounded-full cursor-pointer mb-2" onClick={(e) => {
                    const video = internalVideoRef.current;
                    if(video && video.duration) {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const pos = (e.clientX - rect.left) / rect.width;
                        video.currentTime = pos * video.duration;
                    }
                }}>
                  <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="flex items-center justify-between text-white">
                  <div className="flex items-center gap-2 sm:gap-4">
                      <button onClick={togglePlayPause} aria-label={isPlaying ? "Pausar" : "Reproduzir"}>
                          {isPlaying ? <Pause fill="white" size={20}/> : <Play fill="white" size={20} />}
                      </button>
                      <div className="flex items-center group/volume">
                          <button onClick={toggleMute} aria-label={isMuted ? "Ativar som" : "Silenciar"}>
                              {isMuted || volume === 0 ? <VolumeX size={20} /> : <Volume2 size={20} />}
                          </button>
                          <input 
                              type="range" 
                              min="0" 
                              max="1" 
                              step="0.05" 
                              value={volume}
                              onChange={handleVolumeChange}
                              className="w-0 opacity-0 pointer-events-none group-hover/volume:w-16 sm:group-hover/volume:w-24 group-hover/volume:opacity-100 group-hover/volume:pointer-events-auto h-1 ml-2 transition-all duration-300 accent-orange-500"
                          />
                      </div>
                  </div>
                  <button onClick={toggleFullscreen} aria-label={isFullscreen ? "Sair da tela cheia" : "Entrar em tela cheia"}>
                      {isFullscreen ? <Minimize size={20} /> : <Maximize size={20} />}
                  </button>
                </div>
              </div>
          </div>
      </div>
    );
  }
);

CustomVideoPlayer.displayName = 'CustomVideoPlayer';