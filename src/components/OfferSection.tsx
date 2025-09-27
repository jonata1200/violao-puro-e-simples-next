import { Star, Target, Users, Heart, Zap, CheckCircle, Shield, Headphones } from 'lucide-react';

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
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative overflow-hidden border-y border-orange-500/20">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Domine o Violão com o Método que já 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600"> Transformou Centenas de Vidas</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              40 anos de experiência condensados em um curso completo e prático. 
              Do iniciante ao violonista independente em apenas 90 dias.
            </p>
          </div>
        
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-3xl blur-xl"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center space-x-2 bg-orange-500/20 rounded-full px-4 py-2 mb-4">
                    <Star className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium text-orange-400">CURSO COMPLETO</span>
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
                    <span className="text-5xl font-bold text-orange-500">R$ 297</span>
                    <p className="text-gray-300 text-sm mt-2">à vista no PIX ou boleto</p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 p-6 rounded-2xl border border-orange-500/40 mb-6">
                    <p className="text-3xl font-bold text-orange-400 mb-2">ou 12x de R$ 30,72*</p>
                    <p className="text-sm text-gray-300">*no cartão de crédito</p>
                  </div>
                </div>
              </div>
            </div>
            
          <div className="space-y-8">
              <div className="grid gap-6">
                {offerFeatures.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-black/50 border border-gray-800 hover:border-orange-500/30 transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-white">{item.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <a href="https://pay.hotmart.com/S37582308X" target="_blank" rel="noopener noreferrer" className="block mt-8">
                <button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-black font-bold text-sm sm:text-base md:text-lg px-4 py-3 sm:px-6 sm:py-4 md:px-8 md:py-5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl">
                  🎸 COMEÇAR MINHA JORNADA MUSICAL
                </button>
              </a>
              
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-400">
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
      </div>
    </section>
  );
}