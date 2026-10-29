import React, { useState, useMemo, useEffect, useId, useRef } from 'react';
import { ArrowUpRight, Search, X, ChevronDown } from 'lucide-react';
import {
  professionalCategoryFilters, whatsappForProfessional,
  type Professional, type ProfessionalCategory,
} from '../data/catalog';
import { searchProfessionals } from '../lib/search';
import { onStaffFilter } from '../lib/staffBridge';
import { whatsappUrl } from '../config/site';
import { ResponsiveImage, PROF_WIDTHS, profDims } from './ResponsiveImage';

const PAGE = 8;

export const StaffSection: React.FC = () => {
  const [category, setCategory] = useState<'todos' | ProfessionalCategory>('todos');
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(PAGE);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const inputId = useId();
  const hintId = useId();

  // Busca e filtros sempre sobre a base completa; o limite só afeta a exibição.
  const results = useMemo(() => searchProfessionals(query, category), [query, category]);
  const visible = results.slice(0, limit);
  const remaining = results.length - visible.length;

  useEffect(() => setLimit(PAGE), [query, category]);

  useEffect(
    () =>
      onStaffFilter((q) => {
        setCategory('todos');
        setQuery(q);
        document.getElementById('profissionais')?.scrollIntoView({ block: 'start' });
        // foco no campo para o usuário perceber o filtro aplicado
        requestAnimationFrame(() => inputRef.current?.focus({ preventScroll: true }));
      }),
    [],
  );

  const showMore = () => {
    const firstNew = visible.length;
    setLimit(results.length);
    // move o foco para o primeiro perfil recém-exibido
    requestAnimationFrame(() => {
      const link = listRef.current?.querySelectorAll<HTMLElement>('li')[firstNew]?.querySelector<HTMLElement>('a');
      link?.focus();
    });
  };

  const filtered = query.trim() !== '' || category !== 'todos';
  const status = `${results.length} ${results.length === 1 ? 'profissional encontrado' : 'profissionais encontrados'}${
    query.trim() ? ` para “${query.trim()}”` : ''
  }${remaining > 0 ? ` · exibindo ${visible.length}` : ''}`;

  return (
    <section id="profissionais" aria-labelledby="profissionais-titulo" className="py-16 md:py-28 bg-[#F8F5F0] border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark mb-3 shadow-soft">
              Corpo clínico
            </p>
            <h2 id="profissionais-titulo" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Profissionais que cuidam de você no Pró-Vida.
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed">
              Equipe médica e multidisciplinar em Rio Pardo de Minas. Agenda e dias de atendimento são informados pela recepção.
            </p>
          </div>
          <a
            href={whatsappUrl('Olá! Gostaria de consultar a agenda dos profissionais do Instituto Pró-Vida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-white hover:bg-surface-cream text-wine text-xs font-semibold tracking-wider uppercase border border-[#DACDC3] shadow-card shrink-0"
          >
            <span>Falar com a recepção</span>
            <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-border-subtle shadow-card mb-6">
          <form role="search" aria-label="Buscar profissionais" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor={inputId} className="block text-sm font-semibold text-ink mb-1">
              Buscar profissional
            </label>
            <p id={hintId} className="text-xs text-ink-muted mb-2.5">Por nome ou especialidade. Ex.: João, ortopedista, psicologia.</p>
            <div className="relative flex items-center lg:max-w-2xl">
              <Search aria-hidden="true" className="w-5 h-5 text-ink-light absolute left-4 pointer-events-none" />
              <input
                ref={inputRef}
                id={inputId}
                type="search"
                autoComplete="off"
                enterKeyHint="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-describedby={hintId}
                placeholder="Nome ou especialidade"
                className="w-full min-h-[48px] pl-12 pr-12 py-3 bg-surface-subtle hover:bg-[#FAF7F2] focus:bg-white rounded-xl border border-[#D9CCBF] focus:border-wine focus:ring-2 focus:ring-wine/20 text-base sm:text-sm text-ink placeholder:text-ink-light outline-none transition-colors [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => { setQuery(''); inputRef.current?.focus(); }}
                  className="absolute right-1 w-11 h-11 flex items-center justify-center text-ink-muted hover:text-ink rounded-full"
                  aria-label="Limpar busca de profissionais"
                >
                  <X aria-hidden="true" className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>
          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-[#EAE0D6]" role="group" aria-label="Filtrar profissionais por área">
            {professionalCategoryFilters.map((c) => {
              const active = category === c.id;
              return (
                <button
                  key={c.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(c.id)}
                  className={`min-h-[44px] px-4 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    active ? 'bg-wine text-white shadow-soft' : 'bg-surface-subtle hover:bg-[#F3ECE6] text-ink-muted hover:text-ink border border-border-subtle'
                  }`}
                >
                  {c.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 mb-5 px-1">
          <p role="status" aria-live="polite" aria-atomic="true" className="text-sm font-medium text-ink">{status}</p>
          {filtered && (
            <button type="button" onClick={() => { setQuery(''); setCategory('todos'); }} className="min-h-[44px] px-2 text-sm font-semibold text-wine underline underline-offset-4">
              Limpar busca e filtros
            </button>
          )}
        </div>

        {results.length > 0 ? (
          <ul ref={listRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6" aria-label="Profissionais">
            {visible.map((p) => (
              <li key={p.id} className="flex">
                <DoctorCard doctor={p} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center bg-white rounded-2xl border border-border-subtle p-8 max-w-md mx-auto space-y-3">
            <p className="text-base font-semibold text-ink">Nenhum profissional encontrado</p>
            <p className="text-sm text-ink-muted">Tente outro nome ou especialidade, ou fale com a recepção.</p>
            <button type="button" onClick={() => { setQuery(''); setCategory('todos'); }} className="min-h-[44px] px-5 rounded-xl border border-[#DACDC3] text-sm font-semibold text-wine">
              Limpar busca e filtros
            </button>
          </div>
        )}

        {remaining > 0 && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={showMore}
              className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl bg-white hover:bg-[#F6EFE9] text-wine text-sm font-semibold border border-[#DACDC3] shadow-card"
            >
              <span>Ver todos ({results.length})</span>
              <ChevronDown aria-hidden="true" className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

const DoctorCard: React.FC<{ doctor: Professional }> = ({ doctor }) => (
  <article className="group w-full bg-white rounded-2xl overflow-hidden border border-[#EAE0D6] shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
    <div className="relative aspect-[4/5] overflow-hidden bg-[#ECE4DC]">
      <ResponsiveImage
        base={`/img/prof/${doctor.photo}`}
        widths={PROF_WIDTHS}
        sizes="(min-width: 1152px) 252px, (min-width: 1024px) 23vw, (min-width: 768px) 31vw, 48vw"
        dims={profDims(doctor.photo)}
        alt={`Foto de ${doctor.name}`}
        style={{ objectPosition: doctor.objectPosition || 'center 15%' }}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
    <div className="p-3 sm:p-5 flex flex-col flex-1">
      <h3 className="font-serif text-base sm:text-xl text-ink font-medium leading-snug">{doctor.name}</h3>
      <p className="text-xs sm:text-sm font-medium text-wine mt-1">{doctor.specialtyLabel}</p>
      {doctor.registration && (
        <p className="text-xs text-ink-muted mt-0.5 tracking-wide">
          <span className="sr-only">Registro profissional: </span>
          {doctor.registration}
        </p>
      )}
      <div className="pt-2 mt-auto border-t border-border-subtle/70">
        <a
          href={whatsappForProfessional(doctor)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm font-semibold text-wine hover:text-wine-dark"
          aria-label={`Consultar disponibilidade com ${doctor.name} pelo WhatsApp (abre em nova aba)`}
        >
          <span>Agendar</span>
          <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
        </a>
      </div>
    </div>
  </article>
);
