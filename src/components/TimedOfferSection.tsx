import { Clock, Flame } from 'lucide-react';
import { Section, Container } from '@/design-system/components/layout';
import { CTAButton } from '@/components/ui/cta-button';

interface TimedOfferSectionProps {
  timeLeft: {
    hours: number;
    minutes: number;
    seconds: number;
  };
}

export function TimedOfferSection({ timeLeft }: TimedOfferSectionProps) {
  return (
    <Section className="bg-black border-t border-b border-primary-500/30 relative">
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-8">
          Não Perca Esta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Oportunidade</span>
        </h2>
        
        <div className="bg-gray-900/50 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-primary-500" />
            <span className="text-lg font-semibold">Oferta expira em:</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-primary-500">:</span>
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-primary-500">:</span>
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
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
          <CTAButton size="ctaExtraLarge">
            <Flame className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span>GARANTIR MINHA VAGA</span>
          </CTAButton>
        </a>
      </Container>
    </Section>
  );
}