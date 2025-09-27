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
  
  // O estado inicial agora é zero, será calculado no useEffect
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const getExpirationTime = () => {
      let expirationTime = localStorage.getItem('offerExpiration');
      if (!expirationTime) {
        // Se não houver tempo de expiração, crie um para 24 horas a partir de agora
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
  }, []); // O array de dependências vazio garante que isso rode apenas uma vez

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
      <TimedOfferSection timeLeft={timeLeft} />
      <FaqSection openFaq={openFaq} toggleFaq={toggleFaq} />
      <BonusSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}