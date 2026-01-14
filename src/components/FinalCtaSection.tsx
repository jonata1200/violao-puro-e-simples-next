import { CheckCircle } from 'lucide-react';
import { Section, Container, Grid } from '@/design-system/components/layout';

export function FinalCtaSection() {
    const finalFeatures = [
        "Acesso de 2 anos ao curso",
        "Suporte direto com o professor",
        "Garantia de 7 dias",
        "Bônus: Songbook com 50 músicas",
        "Atualizações gratuitas",
        "Certificado de conclusão"
    ];

  return (
    <Section className="bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="text-center relative z-10">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">
          Sua Jornada Musical <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Começa Agora</span>
        </h2>
        
        <p className="text-2xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
          Não deixe mais um dia passar sem tocar. Milhares de pessoas já transformaram 
          suas vidas com a música. Agora é a sua vez.
        </p>

        <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-3xl max-w-2xl lg:max-w-5xl mx-auto mb-16 border-2 border-primary-500/50 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary-500/10 rounded-full blur-2xl"></div>
          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-8 text-primary-500">CURSO COMPLETO</h3>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {finalFeatures.map((item, index) => (
                <div key={index} className="flex items-center space-x-2 whitespace-nowrap">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-300 text-sm lg:text-base">{item}</span>
                </div>
              ))}
            </div>
            
            <div className="text-center mb-8">
              <p className="text-gray-400 line-through text-xl mb-2">De R$ 497</p>
              <div className="mb-4">
                <p className="text-5xl font-bold text-primary-500 mb-2">R$ 297</p>
                <p className="text-sm text-gray-400 mb-4">à vista no PIX ou boleto</p>
              </div>
              <div className="bg-primary-500/20 border border-primary-500/30 rounded-xl p-4 mb-4">
                <p className="text-2xl font-bold text-primary-400 mb-1">ou 12x de R$ 30,72*</p>
                <p className="text-xs text-gray-300">*no cartão de crédito sem juros</p>
              </div>
            </div>
            
            <a href="https://pay.hotmart.com/S37582308X" target="_blank" rel="noopener noreferrer">
              <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-black font-bold text-base sm:text-lg md:text-xl lg:text-2xl px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                🎸 COMEÇAR AGORA
              </button>
            </a>
          </div>
        </div>
      </Container>
    </Section>
  );
}