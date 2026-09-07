import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // A URL base do seu site
  const baseUrl = 'https://violaopuroesimples.com.br';

  return {
    rules: {
      userAgent: '*', // Aplica a regra para todos os robôs
      allow: '/',     // Permite que eles acessem todas as páginas a partir da raiz
      // disallow: '/private/', // Exemplo: se você tivesse uma área privada
    },
    sitemap: `${baseUrl}/sitemap.xml`, // Aponta para o seu sitemap
  };
}