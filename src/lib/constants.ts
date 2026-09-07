/**
 * Constantes de negócio centralizadas.
 *
 * Preços, link de checkout e ID de analytics em um único lugar:
 * qualquer mudança vira edição aqui, sem caçar valores hardcoded
 * espalhados pelos componentes.
 */

/** URL de checkout na Hotmart (usada por todos os CTAs da página). */
export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/S37582308X';

/** ID de acompanhamento do Google Analytics (sobrescrevível via env). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-7CQYL0VX5Q';

/** Valores da oferta exibidos nas seções de oferta. */
export const PRICING = {
  fromPrice: 'R$ 497',
  price: 'R$ 297',
  priceNote: 'à vista no PIX ou boleto',
  installment: '12x de R$ 30,72*',
  installmentNote: '*no cartão de crédito',
} as const;