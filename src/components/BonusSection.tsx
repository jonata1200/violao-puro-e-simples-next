import { Gift } from 'lucide-react';
import { Section, Container } from '@/design-system/components/layout';

export function BonusSection() {
  return (
    <Section className="py-24 bg-gradient-to-r from-primary-600 to-primary-500 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="text-center relative z-10 max-w-5xl">
          <div className="bg-black/90 backdrop-blur-sm text-white p-16 rounded-3xl border border-white/20 transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Gift className="w-12 h-12 text-primary-500" />
              <h2 className="text-5xl font-bold">BÔNUS EXCLUSIVO</h2>
            </div>
            <p className="text-3xl mb-4 font-semibold">Songbook digital com 50 músicas cifradas</p>
            <p className="text-xl text-gray-300">Incluso gratuitamente com sua matrícula</p>
          </div>
      </Container>
    </Section>
  );
}