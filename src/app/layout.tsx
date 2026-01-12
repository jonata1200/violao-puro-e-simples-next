import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics';
import { CookieBanner } from '@/components/CookieBanner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  // --- NOVA LINHA AQUI ---
  metadataBase: new URL('https://violaopuroesimples.com.br'),

  title: 'Violão Puro e Simples | De Iniciante a Violonista em Pouco Tempo',
  description: 'Aprenda a tocar violão do zero com o método de Gezo Rodrigues. Domine acordes, batidas e solos em Pouco Tempo com foco em música cristã e popular.',
  keywords: 'curso de violão, aprender violão, violão para iniciantes, violão do zero, música cristã, gezo rodrigues, violão online, aula de violão',
  robots: 'index, follow',
  
  // --- NOVA SEÇÃO AQUI ---
  alternates: {
    canonical: '/',
  },
  
  openGraph: {
    title: 'Violão Puro e Simples | O Curso Completo',
    description: 'Transforme-se em um violonista completo em Pouco Tempo com um método testado por mais de 40 anos.',
    url: 'https://violaopuroesimples.com.br',
    siteName: 'Violão Puro e Simples',
    images: [
      {
        url: 'https://violaopuroesimples.com.br/gezo.png',
        width: 800,
        height: 600,
        alt: 'Professor Gezo Rodrigues com seu violão',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  
  // --- NOVA SEÇÃO PARA O TWITTER ---
  twitter: {
    card: 'summary_large_image',
    title: 'Violão Puro e Simples | De Iniciante a Violonista em Pouco Tempo',
    description: 'Aprenda a tocar violão do zero com o método testado de Gezo Rodrigues.',
    images: ['https://violaopuroesimples.com.br/gezo.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {/*
          O SCRIPT DE DADOS ESTRUTURADOS (SCHEMA) VAI AQUI.
          Ele ajuda o Google a entender o conteúdo da sua página.
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "Violão Puro e Simples",
            "description": "Aprenda a tocar violão do zero com o método de Gezo Rodrigues. Domine acordes, batidas e solos em Pouco Tempo com foco em música cristã e popular.",
            "provider": {
              "@type": "Person",
              "name": "Gezo Rodrigues"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              // TODO: Atualizar este número manualmente se os depoimentos mudarem.
              "reviewCount": "3" // Atualmente existem 3 vídeos de depoimento.
            }
          }) }}
        />
        
        {/* O conteúdo da sua página é renderizado abaixo do script */}
        {children}
        
        {/* Componente do Google Analytics é chamado aqui */}
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  )
}