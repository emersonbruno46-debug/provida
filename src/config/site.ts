/**
 * Configuração central do site. Fonte única para contato, domínio e flags.
 * Valores marcados como PENDENTE dependem de confirmação da clínica (ver PENDENCIAS.md).
 */

/** Telefone/WhatsApp já usado em todo o projeto (preservado). */
export const PHONE_E164 = '5538999283598';
export const PHONE_DISPLAY = '(38) 99928-3598';

export const ADDRESS = {
  street: 'Rua Odílio Torres Costa, 11',
  district: 'Cidade Alta',
  city: 'Rio Pardo de Minas',
  region: 'MG',
  country: 'BR',
} as const;

export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Rua+Odilio+Torres+Costa+11+Rio+Pardo+de+Minas';
export const MAPS_EMBED_URL =
  'https://maps.google.com/maps?q=Rua+Odilio+Torres+Costa+11+Rio+Pardo+de+Minas&t=&z=16&ie=UTF8&iwloc=&output=embed';

/**
 * PENDENTE: domínio oficial. O único indício no projeto é o og:url original
 * (https://institutoprovidarp.com.br/). Pode ser sobrescrito com a variável
 * de ambiente SITE_URL no build.
 */
export const OFFICIAL_URL_CANDIDATE = 'https://institutoprovidarp.com.br';

export const FEATURES = {
  /** Só exibir depoimentos quando houver avaliações reais aprovadas. */
  showReviews: false,
  /**
   * PENDENTE: a lista de atendimentos ainda não foi validada pela clínica.
   * Enquanto false, exibimos um aviso discreto de confirmação com a recepção.
   */
  catalogConfirmed: false,
} as const;

export function whatsappUrl(message?: string): string {
  return message
    ? `https://wa.me/${PHONE_E164}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${PHONE_E164}`;
}

export const WA_GENERAL = whatsappUrl(
  'Olá! Vim pelo site do Instituto Pró-Vida e gostaria de agendar um atendimento.',
);
