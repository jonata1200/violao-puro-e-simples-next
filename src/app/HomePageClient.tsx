"use client"; // Isso é ESSENCIAL! Declara que este é um Componente do Cliente.

import { useState, useEffect } from 'react';
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
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // --- NOVA LINHA ---
  // Este estado nos ajudará a saber quando o componente foi montado no cliente.
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // --- NOVA LINHA ---
    // Assim que o componente montar no navegador, definimos isClient como true.
    setIsClient(true);

    const getExpirationTime = () => {
      let expirationTime = localStorage.getItem('offerExpiration');
      if (!expirationTime) {
        const newExpirationTime = new Date().getTime() + (24 * 60 * 60 * 1000);
        expirationTime = String(newExpirationTime);
        localStorage.setItem('offerExpiration', expirationTime);
      }
      return parseInt(expirationTime, 10);
    };

    const expirationTime = getExpirationTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = expirationTime - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <CourseModulesSection />
      <BenefitsSection />
      <OfferSection />
      <TestimonialsSection />
      
      {/* --- MUDANÇA IMPORTANTE AQUI --- */}
      {/* Só renderizamos a seção do cronômetro SE estivermos no cliente */}
      {isClient && <TimedOfferSection timeLeft={timeLeft} />}
      
      <FaqSection openFaq={openFaq} toggleFaq={toggleFaq} />
      <BonusSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}