// src/components/TimedOfferSection.tsx
"use client";

import { useState, useEffect } from 'react';
import { Clock, Flame } from 'lucide-react';
import { Section, Container } from '@/design-system/components/layout';
import { CTAButton } from '@/components/ui/cta-button';
import { HOTMART_CHECKOUT_URL } from '@/lib/constants';

const OFFER_DURATION_MS = 24 * 60 * 60 * 1000;

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

/**
 * Seção de oferta com contador regressivo de 24h por visitante.
 * Autocontida: lê/grava o prazo em localStorage e se esconde quando expira
 * (o contador nunca exibe 00:00:00 parado).
 */
export function TimedOfferSection() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ hours: 0, minutes: 0, seconds: 0 });
  const [expired, setExpired] = useState(false);

  useEffect(() => {
    setMounted(true);

    const getExpirationTime = () => {
      let expirationTime = localStorage.getItem('offerExpiration');
      if (!expirationTime) {
        const newExpirationTime = new Date().getTime() + OFFER_DURATION_MS;
        expirationTime = String(newExpirationTime);
        localStorage.setItem('offerExpiration', expirationTime);
      }
      return parseInt(expirationTime, 10);
    };

    const expirationTime = getExpirationTime();

    const computeTimeLeft = (): TimeLeft => {
      const distance = expirationTime - new Date().getTime();
      if (distance <= 0) {
        return { hours: 0, minutes: 0, seconds: 0 };
      }
      return {
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      };
    };

    const tick = () => {
      const next = computeTimeLeft();
      setTimeLeft(next);
      if (next.hours === 0 && next.minutes === 0 && next.seconds === 0) {
        setExpired(true);
        clearInterval(timer);
      }
    };

    tick();
    const timer = setInterval(tick, 1000);

    return () => clearInterval(timer);
  }, []);

  if (expired || !mounted) {
    return null;
  }

  return (
    <Section className="bg-black border-t border-b border-primary-500/30 relative">
      <Container className="text-center">
        <h2 className="text-4xl font-bold mb-8">
          Não Perca Esta <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Oportunidade</span>
        </h2>

        <div className="bg-gray-900/50 backdrop-blur-sm border border-primary-500/30 rounded-2xl p-8 max-w-md mx-auto mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Clock className="w-6 h-6 text-primary-500" />
            <span className="text-lg font-semibold">Oferta expira em:</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-2xl font-bold">
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.hours).padStart(2, '0')}
            </div>
            <span className="text-primary-500">:</span>
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.minutes).padStart(2, '0')}
            </div>
            <span className="text-primary-500">:</span>
            <div className="bg-primary-500 text-black px-3 py-2 rounded-lg">
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-400 mt-2">
            <span>HORAS</span>
            <span>MINUTOS</span>
            <span>SEGUNDOS</span>
          </div>
        </div>
        <a href={HOTMART_CHECKOUT_URL} target="_blank" rel="noopener noreferrer">
          <CTAButton size="ctaExtraLarge">
            <Flame className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6" />
            <span>GARANTIR MINHA VAGA</span>
          </CTAButton>
        </a>
      </Container>
    </Section>
  );
}