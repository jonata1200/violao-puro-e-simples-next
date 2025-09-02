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
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
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
      <TimedOfferSection timeLeft={timeLeft} />
      <FaqSection openFaq={openFaq} toggleFaq={toggleFaq} />
      <BonusSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}