// src/components/CustomVideoPlayer.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react';

interface CustomVideoPlayerProps {
  src: string;
  poster?: string; // Propriedade 'poster' agora é opcional
  aspectRatio?: 'horizontal' | 'vertical';
}

export function CustomVideoPlayer({ src, poster, aspectRatio = 'horizontal' }: CustomVideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // ... (toda a lógica de controle do vídeo permanece a mesma)
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      videoRef.current.muted = newVolume === 0;
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
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
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
        if(video.duration) {
            setProgress((video.currentTime / video.duration) * 100)
        }
    };
    const handleVideoEnd = () => setIsPlaying(false);
    
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('ended', handleVideoEnd);

    const handleFullscreenChange = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener('fullscreenchange', handleFullscreenChange);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('ended', handleVideoEnd);
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);


  const aspectRatioClass = aspectRatio === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

  return (
    <div ref={containerRef} className={`relative group w-full ${aspectRatioClass} bg-black rounded-xl overflow-hidden`}>
        <video
            ref={videoRef}
            src={src}
            poster={poster} // Usará o poster se fornecido
            preload="metadata" // Manterá o 1º frame como fallback
            onClick={togglePlayPause}
            width="100%"
            height="100%"
            playsInline
            className="w-full h-full object-cover rounded-xl cursor-pointer"
        />
        
        <div className="absolute inset-0 flex flex-col justify-between items-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
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

            <div className="w-full p-2 sm:p-4 pointer-events-auto">
                <div className="w-full bg-white/20 h-1.5 rounded-full cursor-pointer mb-2" onClick={(e) => {
                    const video = videoRef.current;
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