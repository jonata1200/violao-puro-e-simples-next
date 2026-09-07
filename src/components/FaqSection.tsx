// src/components/FaqSection.tsx
"use client";

import { Section, Container } from '@/design-system/components/layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  { q: "Preciso ter conhecimento prévio de música?", a: "Não! O curso foi desenvolvido para iniciantes completos. Começamos do absoluto zero, ensinando desde como segurar o violão até técnicas avançadas." },
  { q: "Quanto tempo leva para aprender?", a: "Com dedicação de 30 minutos por dia, em 90 dias você já estará tocando suas primeiras músicas completas. O progresso depende da sua prática." },
  { q: "O curso serve para quem já toca um pouco?", a: "Sim! Temos módulos específicos para diferentes níveis. Mesmo quem já toca encontrará técnicas e conhecimentos novos para aperfeiçoar sua performance." },
  { q: "Posso tirar dúvidas com o professor?", a: "Claro! Você terá acesso direto ao Gezo para esclarecer dúvidas durante todo o curso." },
  { q: "E se eu não gostar do curso?", a: "Oferecemos garantia incondicional de 7 dias. Se não ficar satisfeito, devolvemos 100% do seu investimento, sem perguntas." },
  { q: "O acesso é vitalício?", a: "Você terá acesso completo ao curso por 2 anos, incluindo todas as futuras atualizações do conteúdo durante este período." }
];

export function FaqSection() {
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
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="bg-black/50 backdrop-blur-sm border border-gray-800 hover:border-primary-500/30 rounded-2xl transition-all duration-300 border-b"
              >
                <AccordionTrigger className="px-6 py-6 hover:no-underline">
                  <h3 className="text-xl font-bold text-primary-500 pr-4 text-left">{faq.q}</h3>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 pt-0">
                  <p className="text-gray-300 leading-relaxed text-lg">{faq.a}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </Section>
  );
}