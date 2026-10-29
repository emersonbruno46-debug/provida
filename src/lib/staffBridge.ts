/** Ponte simples entre a busca de atendimentos e a lista de profissionais. */
const EVENT = 'provida:staff-filter';

export function requestStaffFilter(query: string): void {
  window.dispatchEvent(new CustomEvent<string>(EVENT, { detail: query }));
}

export function onStaffFilter(handler: (query: string) => void): () => void {
  const listener = (e: Event) => handler((e as CustomEvent<string>).detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
