import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, X, Expand } from 'lucide-react';
import { GALLERY, GALLERY_FILTERS, GALLERY_WIDTHS, type GalleryPhoto } from '../data/galleryData';

const src = (p: GalleryPhoto, w: number) => `/img/galeria/${p.slug}-${w}.webp`;
const srcSet = (p: GalleryPhoto) => GALLERY_WIDTHS.map((w) => `${src(p, w)} ${w}w`).join(', ');

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<(typeof GALLERY_FILTERS)[number]['id']>('todas');
  const [active, setActive] = useState<number | null>(null);
  const lastTrigger = useRef<HTMLElement | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const photos = filter === 'todas' ? GALLERY : GALLERY.filter((p) => p.category === filter);
  const current = active !== null ? photos[active] : null;

  const close = useCallback(() => {
    setActive(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setActive((i) => (i === null ? i : (i + d + photos.length) % photos.length)),
    [photos.length],
  );

  useEffect(() => {
    if (active === null) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowRight') step(1);
      else if (e.key === 'ArrowLeft') step(-1);
      else if (e.key === 'Tab') {
        // mantém o foco dentro do visualizador
        const f = document.querySelectorAll<HTMLElement>('[data-lightbox] button');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [active, close, step]);

  const backdropClose = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) close();
  };

  return (
    <section id="galeria" aria-labelledby="galeria-titulo" className="py-16 md:py-28 bg-white border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-8 md:mb-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark shadow-soft">
            Nossa estrutura
          </div>
          <h2 id="galeria-titulo" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
            Conheça o Instituto por dentro.
          </h2>
          <p className="text-base text-ink-muted leading-relaxed">
            Ambientes pensados para o seu conforto: recepção, consultórios, coleta de exames, equipamentos de imagem e
            atendimento odontológico.
          </p>
        </div>

        <div role="group" aria-label="Filtrar fotos por ambiente" className="flex flex-wrap gap-2 mb-8">
          {GALLERY_FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => setFilter(f.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2 ${
                filter === f.id
                  ? 'bg-wine text-white border-wine shadow-soft'
                  : 'bg-surface-subtle text-ink-muted border-[#E9DFD6] hover:border-wine-border hover:text-wine'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <ul className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {photos.map((p, i) => {
            const feature = filter === 'todas' && i === 0;
            return (
              <li key={p.slug} className={feature ? 'col-span-2 lg:row-span-2' : ''}>
                <button
                  type="button"
                  onClick={(e) => {
                    lastTrigger.current = e.currentTarget;
                    setActive(i);
                  }}
                  aria-label={`Ampliar foto: ${p.title}`}
                  className="group relative block w-full h-full overflow-hidden rounded-2xl border border-[#E9DFD6] bg-[#ECE4DC] shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2"
                >
                  <img
                    src={src(p, 960)}
                    srcSet={srcSet(p)}
                    sizes={feature ? '(min-width: 1024px) 780px, 100vw' : '(min-width: 1024px) 380px, 50vw'}
                    alt={p.alt}
                    width={p.width}
                    height={p.height}
                    loading="lazy"
                    decoding="async"
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      feature ? 'aspect-[3/2] lg:aspect-auto lg:h-full' : 'aspect-[4/3]'
                    }`}
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 px-3 py-2.5 bg-gradient-to-t from-wine-deep/85 to-transparent text-white text-xs sm:text-sm font-medium text-left">
                    <span>{p.title}</span>
                    <Expand className="w-4 h-4 shrink-0 opacity-80" aria-hidden="true" />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {current && active !== null && (
        <div
          data-lightbox
          role="dialog"
          aria-modal="true"
          aria-label={`Foto ${active + 1} de ${photos.length}: ${current.title}`}
          className="fixed inset-0 z-[90] flex flex-col bg-wine-deep/95 backdrop-blur-sm"
          onClick={backdropClose}
        >
          <div className="flex items-center justify-between px-4 py-3 text-white" onClick={backdropClose}>
            <p className="text-sm font-medium">
              {current.title}{' '}
              <span className="text-white/60">
                · {active + 1}/{photos.length}
              </span>
            </p>
            <button
              ref={closeRef}
              type="button"
              onClick={close}
              aria-label="Fechar"
              className="p-2 rounded-full hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="relative flex-1 min-h-0 flex items-center justify-center px-2 sm:px-16 pb-4" onClick={backdropClose}>
            <img
              src={src(current, 1600)}
              srcSet={srcSet(current)}
              sizes="100vw"
              alt={current.alt}
              className="max-h-full max-w-full object-contain rounded-lg"
            />
            {photos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Foto anterior"
                  className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Próxima foto"
                  className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/40 text-white hover:bg-black/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
