import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@/components/GoogleAnalytics'; // Importação do novo componente

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Violão Puro e Simples | De Iniciante a Violonista em 90 Dias',
  description: 'Aprenda a tocar violão do zero com o método de Gezo Rodrigues. Domine acordes, batidas e solos em 90 dias com foco em música cristã e popular.',
  openGraph: {
    title: 'Violão Puro e Simples | O Curso Completo',
    description: 'Transforme-se em um violonista completo em 90 dias com um método testado por mais de 40 anos.',
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
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
            "description": "Aprenda a tocar violão do zero com o método de Gezo Rodrigues. Domine acordes, batidas e solos em 90 dias com foco em música cristã e popular.",
            "provider": {
              "@type": "Person",
              "name": "Gezo Rodrigues"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "4" // Baseado nos 4 depoimentos que você tem na página
            }
          }) }}
        />
        
        {/* O conteúdo da sua página é renderizado abaixo do script */}
        <div className={inter.className}>{children}</div>
        
        {/* Componente do Google Analytics é chamado aqui */}
        <GoogleAnalytics />
      </body>
    </html>
  )
}