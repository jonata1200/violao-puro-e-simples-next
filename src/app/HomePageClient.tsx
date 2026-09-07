"use client"; // Isso é ESSENCIAL! Declara que este é um Componente do Cliente.

import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { CourseModulesSection } from '@/components/CourseModulesSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import { OfferSection } from '@/components/OfferSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { TimedOfferSection } from '@/components/TimedOfferSection';
import { FaqSection } from '@/components/FaqSection';
import { BonusSection } from '@/components/BonusSection';
import { FinalCtaSection } from '@/components/FinalCtaSection';
import { Footer } from '@/components/Footer';

export default function HomePageClient() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CourseModulesSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />

      {/* Oferta com contador de 24h; a própria seção decide se renderiza
          (cliente montado + prazo não expirado). */}
      <TimedOfferSection />

      <FaqSection />
      <BonusSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}