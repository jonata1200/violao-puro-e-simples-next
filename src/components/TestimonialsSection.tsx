// src/components/TestimonialsSection.tsx
"use client";

import { CustomVideoPlayer } from './CustomVideoPlayer';

export function TestimonialsSection() {
    const testimonials = [
        { videoSrc: "/depoimento-3.mp4" },
        { videoSrc: "/depoimento-2.mp4" },
        { videoSrc: "/depoimento-1.mp4" }
    ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            O Que Nossos <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Alunos Dizem</span>
          </h2>
          <p className="text-xl text-gray-400">Histórias reais de transformação musical</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-orange-500/30 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <CustomVideoPlayer 
                  src={testimonial.videoSrc} 
                  aspectRatio="vertical"
                  showInitialPlayIcon={true} // Diz ao player para mostrar o ícone!
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}