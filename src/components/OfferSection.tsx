import { Star, Target, Users, Heart, Zap, CheckCircle, Shield, Headphones, Guitar } from 'lucide-react';
import { Section, Container, Grid } from '@/design-system/components/layout';
import { CTAButton } from '@/components/ui/cta-button';

export function OfferSection() {
    const offerFeatures = [
        { icon: Target, title: "Método Testado", desc: "40 anos de experiência condensados em um sistema prático e eficiente" },
        { icon: Users, title: "Centenas de Alunos", desc: "Método já aprovado por centenas de estudantes de todos os níveis" },
        { icon: Heart, title: "Música Cristã", desc: "Repertório completo de hinos e louvores para tocar na igreja" },
        { icon: Zap, title: "Resultados Rápidos", desc: "Toque suas primeiras músicas completas em apenas 30 dias" }
    ];

    const courseIncludes = [
        "✅ Acesso de 2 anos ao curso completo",
        "✅ Suporte direto com Gezo Rodrigues", 
        "✅ Garantia incondicional de 7 dias",
        "✅ Certificado de conclusão",
        "✅ Bônus: Songbook com 50 músicas cifradas"
    ];

  return (
    <Section className="bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden border-y border-primary-500/20">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <Container className="max-w-7xl relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Domine o Violão com o Método que já 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600"> Transformou Centenas de Vidas</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              40 anos de experiência condensados em um curso completo e prático. 
              Do iniciante ao violonista independente em apenas 90 dias.
            </p>
          </div>
        
        <Grid cols={1} colsLg={2} gap={8} className="items-center lg:gap-10 xl:gap-12">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-primary-500/30 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-primary-500/20 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 text-primary-500" />
                    <span className="text-sm font-medium text-primary-400">CURSO COMPLETO</span>
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-6">Violão Puro e Simples</h3>
                </div>
                
                <div className="space-y-4 mb-8 text-center">
                  {courseIncludes.map((item, index) => (
                    <div key={index} className="flex items-center justify-center space-x-3">
                      <span className="text-green-400 text-lg">{item}</span>
                    </div>
                  ))}
                </div>
                
                <div className="text-center border-t border-gray-700 pt-8">
                  <p className="text-gray-400 line-through text-lg mb-3">De R$ 497</p>
                  <div className="mb-6">
                    <span className="text-5xl font-bold text-primary-500">R$ 297</span>
                    <p className="text-gray-300 text-sm mt-2">à vista no PIX ou boleto</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-primary-500/20 to-primary-600/20 p-6 rounded-2xl border border-primary-500/40 mb-6">
                    <p className="text-3xl font-bold text-primary-400 mb-2">ou 12x de R$ 30,72*</p>
                    <p className="text-sm text-gray-300">*no cartão de crédito</p>
                  </div>
                  
                  <a href="https://pay.hotmart.com/S37582308X" target="_blank" rel="noopener noreferrer" className="block mb-6">
                    <CTAButton size="ctaCompact" className="w-full">
                      <Guitar className="w-4 h-4 md:w-5 md:h-5" />
                      <span>COMEÇAR JORNADA MUSICAL</span>
                    </CTAButton>
                  </a>
                  
                  <div className="hidden sm:flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 text-sm text-gray-400">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span>Acesso imediato</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-500" />
                      <span>Garantia de 7 dias</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Headphones className="w-4 h-4 text-green-500" />
                      <span>Suporte direto</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          <div className="space-y-8">
              <div className="flex flex-col gap-6 md:gap-8">
                {offerFeatures.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-black border-2 border-primary-500 hover:border-primary-500 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                      <p className="text-white leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </Grid>
      </Container>
    </Section>
  );
}