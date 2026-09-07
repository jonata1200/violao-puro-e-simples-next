import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  // A URL base do seu site
  const baseUrl = 'https://violaopuroesimples.com.br';

  // Como seu site é uma página única, teremos apenas uma URL no sitemap.
  // Se no futuro você adicionar um blog ou outras páginas, elas seriam adicionadas aqui.
  return [
    {
      url: baseUrl,
      lastModified: new Date(), // Usa a data atual como a última modificação
      changeFrequency: 'monthly', // A frequência com que o conteúdo pode mudar
      priority: 1, // A prioridade desta página em relação a outras (1 é a mais alta)
    },
  ];
}