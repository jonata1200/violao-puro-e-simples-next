import { Music, Award, BookOpen, Users } from 'lucide-react';
import Image from 'next/image';
import gezoImage from '../../public/gezo.png';

export function AboutSection() {
  const authorFeatures = [
    { icon: Award, title: "40 anos de experiência", desc: "ensinando violão com método próprio testado" },
    { icon: Music, title: "Inscrito na OMB desde 1987", desc: "Ordem dos Músicos do Brasil - credencial oficial" },
    { icon: BookOpen, title: "Formação acadêmica completa", desc: "em música e compositor profissional reconhecido" },
    { icon: Users, title: "Centenas de alunos formados", desc: "com método exclusivo e resultados comprovados" },
  ];

  return (
    <section id="sobre" className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-orange-500/20 to-transparent rounded-2xl blur-xl"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-2xl p-8">
                <Image 
                  src={gezoImage}
                  alt="Foto de Gezo Rodrigues, professor do curso Violão Puro e Simples" 
                  className="w-full max-w-md mx-auto rounded-xl shadow-2xl"
                  placeholder="blur" // Adiciona um efeito de desfoque elegante enquanto a imagem carrega
                  // width e height são inferidos automaticamente por causa da importação estática
                />
                <div className="mt-6 text-center">
                  <div className="inline-flex items-center space-x-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-4 py-2">
                    <Music className="w-4 h-4 text-orange-500" />
                    <span className="text-sm font-medium">OMB desde 1987</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="text-center lg:text-left">
                <h2 className="text-5xl font-bold mb-6 leading-tight">
                  Conheça <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Gezo Rodrigues</span>
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Mestre em música com 40 anos dedicados ao ensino do violão, 
                  transformando iniciantes em violonistas completos.
                </p>
              </div>

              <div className="grid gap-6">
                {authorFeatures.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 rounded-lg bg-black/30 border border-gray-800 hover:border-orange-500/30 transition-colors">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}