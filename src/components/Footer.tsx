// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';
import logoImage from '../../public/logo.png';
import { Container, Flex } from '@/design-system/components/layout';

export function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-primary-500/20 py-12">
      <Container>
        <Flex direction="col" justify="between" align="center" className="md:flex-row">
          <div className="flex items-center space-x-4 mb-8 md:mb-0">
            <Image
              src={logoImage}
              alt="Logo do curso Violão Puro e Simples"
              className="h-24 w-auto"
            />
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Gezo Rodrigues. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-xs mb-4">
              Transformando vidas através da música há 40 anos
            </p>
            
            <div className="flex justify-center md:justify-end space-x-4 text-sm">
              <Link href="/politica-de-privacidade" className="text-gray-400 hover:text-primary-500 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="text-gray-400 hover:text-primary-500 transition-colors">
                Termos de Uso
              </Link>
              <Link href="/politica-de-cookies" className="text-gray-400 hover:text-primary-500 transition-colors">
                Política de Cookies
              </Link>
            </div>
          </div>
        </Flex>
      </Container>
    </footer>
  );
}