import { Clock } from 'lucide-react';

interface TimedOfferSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function TimedOfferSection({ timeLeft }: TimedOfferSectionProps) {
  return (
    <section className="py-16 bg-black border-t border-b border-orange-500/30 relative">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">
          Não Perca Esta <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Oportunidade</span>
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-orange-500" />
            <span className="text-lg font-semibold">Oferta expira em:</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
            <div className="bg-orange-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-orange-500">:</span>
            <div className="bg-orange-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-orange-500">:</span>
            <div className="bg-orange-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mt-2">
            <span>HORAS</span>
            <span>MINUTOS</span>
            <span>SEGUNDOS</span>
          </div>
        </div>
        <a href="https://pay.hotmart.com/S37582308X" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 lg:px-14 lg:py-7 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
            🔥 GARANTIR MINHA VAGA
          </button>
        </a>
      </div>
    </section>
  );
}