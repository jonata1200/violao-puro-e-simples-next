// src/components/HeroSection.tsx
// REMOVIDO: "use client";, useRef, e useEffect, pois não são mais necessários.

import { ChevronDown, Guitar } from 'lucide-react';
import { CustomVideoPlayer } from './CustomVideoPlayer'; // Importa o nosso player

export function HeroSection() {
  // REMOVIDO: Toda a lógica de useRef e useEffect para o autoplay foi retirada.

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight pt-4">
          De <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Iniciante a Violonista Completo</span> <span className="text-4xl md:text-5xl lg:text-6xl text-gray-300">em Apenas 90 Dias</span>
        </h1>
        
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="relative bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-4">
            <CustomVideoPlayer
              // REMOVIDO: ref={videoRef}
              // REMOVIDO: startMuted={true}
              src="/video-de-vendas-violao-puro-e-simples.mp4"
              poster="/violao-puro-e-simples-banner.png"
              aspectRatio="horizontal"
              showInitialPlayIcon={true} // ADICIONADO: Agora o ícone de play sempre aparece no início
            />
          </div>
        </div>
        
        {/* Subtítulo */}
        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Domine acordes, escalas, batidas e solos com o método testado que já transformou 
          <span className="text-orange-500 font-semibold"> centenas de alunos</span> em violonistas independentes
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">40+</div>
            <div className="text-sm text-gray-400">Anos de Experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
            <div className="text-sm text-gray-400">Alunos Formados</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">90</div>
            <div className="text-sm text-gray-400">Dias para Dominar</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-sm text-gray-400">Método Testado</div>
          </div>
        </div>

        {/* CTA Principal */}
        <div className="space-y-6 mb-16">
          <a href="https://pay.hotmart.com/S37582308X" target="_blank" rel="noopener noreferrer">
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold text-sm sm:text-base md:text-lg lg:text-xl px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 lg:px-12 lg:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl relative overflow-hidden">
              <span className="relative z-10 flex items-center justify-center space-x-3">
                <Guitar className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
                <span>COMEÇAR MINHA JORNADA MUSICAL</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-orange-500" />
      </div>
    </section>
  );
}