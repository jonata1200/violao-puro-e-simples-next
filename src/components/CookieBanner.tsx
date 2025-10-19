// src/components/CookieBanner.tsx
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Verifica no localStorage se o consentimento já foi dado
    const consent = localStorage.getItem('cookie_consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    // Salva o consentimento no localStorage e esconde o banner
    localStorage.setItem('cookie_consent', 'true');
    setShowBanner(false);
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-orange-500/30 p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-300">
          Este site utiliza cookies para garantir que você obtenha a melhor experiência. Ao continuar a navegar, você concorda com o uso de cookies. Saiba mais em nossa{' '}
          <Link href="/politica-de-privacidade" className="text-orange-400 hover:underline font-semibold">
            Política de Privacidade
          </Link>.
        </p>
        <button
          onClick={handleAccept}
          className="bg-orange-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors flex-shrink-0"
        >
          Aceitar e Fechar
        </button>
      </div>
    </div>
  );
}