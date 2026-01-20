import { ChevronDown } from 'lucide-react';
import { Section, Container } from '@/design-system/components/layout';
import { cn } from '@/lib/utils';

interface FaqSectionProps {
  openFaq: number | null;
  toggleFaq: (index: number) => void;
}

export function FaqSection({ openFaq, toggleFaq }: FaqSectionProps) {
    const faqs = [
        { q: "Preciso ter conhecimento prévio de música?", a: "Não! O curso foi desenvolvido para iniciantes completos. Começamos do absoluto zero, ensinando desde como segurar o violão até técnicas avançadas." },
        { q: "Quanto tempo leva para aprender?", a: "Com dedicação de 30 minutos por dia, em 90 dias você já estará tocando suas primeiras músicas completas. O progresso depende da sua prática." },
        { q: "O curso serve para quem já toca um pouco?", a: "Sim! Temos módulos específicos para diferentes níveis. Mesmo quem já toca encontrará técnicas e conhecimentos novos para aperfeiçoar sua performance." },
        { q: "Posso tirar dúvidas com o professor?", a: "Claro! Você terá acesso direto ao Gezo para esclarecer dúvidas durante todo o curso." },
        { q: "E se eu não gostar do curso?", a: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas." },
        { q: "O acesso é vitalício?", a: "Você terá acesso completo ao curso por 2 anos, incluindo todas as futuras atualizações do conteúdo durante este período." }
    ];

  return (
    <Section id="faq" className="bg-gray-900">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Perguntas <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-400">Tire todas as suas dúvidas sobre o curso</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 rounded-2xl transition-all duration-300">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full text-left p-6 flex items-center justify-between focus:outline-none"
              >
                <h3 className="text-xl font-bold text-primary-500 pr-4">{faq.q}</h3>
                <ChevronDown className={cn(
                  "w-6 h-6 text-primary-500 transition-transform duration-300",
                  openFaq === index && "rotate-180"
                )} />
              </button>
              {openFaq === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed text-lg">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}