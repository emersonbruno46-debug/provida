import React, { useState, useMemo, useId } from 'react';
import {
  Search, X, ArrowUpRight, ChevronDown, ChevronUp, Users, HeartHandshake, Brain, Bone, Sparkles,
  ScanLine, HeartPulse, Smile, ActivitySquare, UserCheck, Stethoscope, MessageSquare, Wind, Activity,
  ShieldAlert, FlaskConical, Apple, BriefcaseMedical,
} from 'lucide-react';
import {
  categoryLabels, serviceCategoryFilters, professionalsForService, whatsappForService,
  type Service, type ServiceCategory,
} from '../data/catalog';
import { searchServices, searchProfessionals, SEARCH_SUGGESTIONS } from '../lib/search';
import { FEATURES, whatsappUrl } from '../config/site';
import { requestStaffFilter } from '../lib/staffBridge';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  HeartHandshake, Brain, Bone, Sparkles, ScanLine, HeartPulse, Smile, ActivitySquare, UserCheck,
  Stethoscope, MessageSquare, Wind, Activity, ShieldAlert, FlaskConical, Apple, BriefcaseMedical,
};

const INITIAL = 6;

export const ServicesSection: React.FC = () => {
  const [category, setCategory] = useState<'todos' | ServiceCategory>('todos');
  const [query, setQuery] = useState('');
  const [showAll, setShowAll] = useState(false);
  const inputId = useId();
  const hintId = useId();

  const results = useMemo(() => searchServices(query, category), [query, category]);
  // Profissionais encontrados pelo nome/especialidade (ex.: "joao", "anestesista")
  const matchedPros = useMemo(() => (query.trim() ? searchProfessionals(query) : []), [query]);

  const isDefaultView = category === 'todos' && !query.trim();
  const visible = isDefaultView && !showAll ? results.slice(0, INITIAL) : results;
  const hasToggle = isDefaultView && results.length > INITIAL;

  const clearAll = () => {
    setQuery('');
    setCategory('todos');
  };

  const statusText = `${results.length} ${results.length === 1 ? 'atendimento encontrado' : 'atendimentos encontrados'}${
    query.trim() ? ` para “${query.trim()}”` : ''
  }${category !== 'todos' ? ` em ${categoryLabels[category]}` : ''}`;

  return (
    <section id="atendimentos" aria-labelledby="atendimentos-titulo" className="py-16 md:py-28 bg-[#FAF7F2] relative border-t border-[#EAE0D6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DACF] text-[11px] font-semibold tracking-wider uppercase text-gold-dark mb-3 shadow-soft">
              Nossos atendimentos
            </p>
            <h2 id="atendimentos-titulo" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight text-balance">
              Encontre o cuidado que você procura.
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed text-pretty">
              Busque por especialidade, exame ou nome do profissional e fale com a recepção para consultar a agenda.
            </p>
          </div>
          <a
            href={whatsappUrl('Olá! Gostaria de consultar a disponibilidade de atendimentos no Instituto Pró-Vida.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 min-h-[44px] text-xs font-semibold uppercase tracking-wider text-wine hover:text-wine-dark transition-colors shrink-0 group"
          >
            <span>Agendamento pelo WhatsApp</span>
            <ArrowUpRight aria-hidden="true" className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E5DACF] shadow-card mb-6">
          <form role="search" onSubmit={(e) => e.preventDefault()} aria-label="Buscar atendimentos">
            <label htmlFor={inputId} className="block text-sm font-semibold text-ink mb-1">
              Qual atendimento você procura?
            </label>
            <p id={hintId} className="text-xs text-ink-muted mb-2.5">
              Exemplos: ultrassom, cardiologia, dentista ou nome do profissional.
            </p>
            <div className="relative flex items-center">
              <Search aria-hidden="true" className="w-5 h-5 text-ink-light absolute left-4 pointer-events-none" />
              <input
                id={inputId}
                type="search"
                inputMode="search"
                enterKeyHint="search"
                autoComplete="off"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-describedby={hintId}
                placeholder="Especialidade ou exame"
                className="w-full min-h-[48px] pl-12 pr-12 py-3 bg-[#FAF7F2] hover:bg-[#F5EFE8] focus:bg-white rounded-xl border border-[#D9CCBF] focus:border-wine focus:ring-2 focus:ring-wine/20 text-base sm:text-sm text-ink placeholder:text-ink-light transition-colors outline-none [&::-webkit-search-cancel-button]:hidden"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  className="absolute right-1 w-11 h-11 flex items-center justify-center text-ink-muted hover:text-ink rounded-full"
                  aria-label="Limpar busca"
                >
                  <X aria-hidden="true" className="w-4 h-4" />
                </button>
              )}
            </div>
          </form>

          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-[#EAE0D6]" role="group" aria-label="Filtrar por categoria">
            {serviceCategoryFilters.map((f) => {
              const active = category === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setCategory(f.id)}
                  className={`min-h-[44px] px-4 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                    active
                      ? 'bg-wine text-white shadow-soft'
                      : 'bg-[#FAF7F2] hover:bg-[#F2EAE0] text-ink-muted hover:text-ink border border-[#E5DACF]'
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-ink-muted mb-5 px-1">
          <p role="status" aria-live="polite" aria-atomic="true" className="font-medium text-ink">
            {statusText}
          </p>
          {(query || category !== 'todos') && (
            <button type="button" onClick={clearAll} className="min-h-[44px] px-2 text-sm font-semibold text-wine underline underline-offset-4">
              Limpar busca e filtros
            </button>
          )}
        </div>

        {matchedPros.length > 0 && (
          <div className="mb-6 rounded-xl border border-[#E5DACF] bg-white px-4 py-3 text-sm text-ink">
            <span className="font-semibold">Profissionais relacionados à busca: </span>
            {matchedPros.slice(0, 4).map((p, i) => (
              <React.Fragment key={p.id}>
                {i > 0 && ', '}
                <button
                  type="button"
                  className="text-wine font-semibold underline underline-offset-4 min-h-[44px] sm:min-h-0"
                  onClick={() => requestStaffFilter(p.name)}
                >
                  {p.name}
                </button>
                <span className="text-ink-muted"> ({p.specialtyLabel})</span>
              </React.Fragment>
            ))}
            {matchedPros.length > 4 && <span className="text-ink-muted"> e mais {matchedPros.length - 4}</span>}
          </div>
        )}

        {visible.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" aria-label="Atendimentos">
            {visible.map((service) => (
              <li key={service.id} className="flex">
                <ServiceCard service={service} />
              </li>
            ))}
          </ul>
        ) : (
          <div className="bg-white rounded-2xl p-6 sm:p-10 text-center border border-[#E5DACF] max-w-xl mx-auto space-y-4 shadow-soft">
            <div className="w-12 h-12 rounded-full bg-wine-light text-wine flex items-center justify-center mx-auto">
              <Search aria-hidden="true" className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-ink">Não encontramos esse atendimento na lista do site</h3>
            <p className="text-sm text-ink-muted max-w-md mx-auto">
              Tente outro termo, limpe os filtros ou pergunte à recepção — a lista do site pode não incluir todos os serviços.
            </p>
            <div className="flex flex-wrap justify-center gap-2" aria-label="Sugestões de busca">
              {SEARCH_SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => { setQuery(s); setCategory('todos'); }}
                  className="min-h-[44px] px-4 rounded-full border border-[#E5DACF] bg-[#FAF7F2] text-sm text-ink hover:border-wine"
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
              <button type="button" onClick={clearAll} className="min-h-[44px] px-5 rounded-xl border border-[#DACDC3] text-sm font-semibold text-wine">
                Limpar busca e filtros
              </button>
              <a
                href={whatsappUrl(
                  `Olá! Procurei por "${query.trim()}" no site do Instituto Pró-Vida e gostaria de saber se vocês realizam esse atendimento.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-xl bg-wine text-white text-sm font-semibold hover:bg-wine-dark transition-colors"
              >
                <span>Perguntar à recepção no WhatsApp</span>
                <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {hasToggle && (
          <div className="text-center mt-10">
            <button
              type="button"
              aria-expanded={showAll}
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 min-h-[48px] px-6 rounded-xl bg-white hover:bg-[#F6EFE9] text-wine text-sm font-semibold border border-[#DACDC3] shadow-card transition-colors"
            >
              <span>{showAll ? 'Mostrar menos atendimentos' : `Ver todos os atendimentos (${results.length})`}</span>
              {showAll ? <ChevronUp aria-hidden="true" className="w-4 h-4" /> : <ChevronDown aria-hidden="true" className="w-4 h-4" />}
            </button>
          </div>
        )}

        <p className="text-xs text-ink-muted mt-8 text-center max-w-2xl mx-auto">
          {FEATURES.catalogConfirmed
            ? 'Datas, preparo de exames e disponibilidade são confirmados pela recepção.'
            : 'Lista de atendimentos em atualização. Confirme a disponibilidade, datas e preparo de exames com a recepção antes de se deslocar.'}
        </p>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  const Icon = iconMap[service.iconName] || Stethoscope;
  const pros = professionalsForService(service);
  const kindLabel = service.kind === 'exame' ? 'Exame' : service.kind === 'consulta' ? 'Consulta' : 'Atendimento';
  return (
    <article className="group relative w-full bg-white p-5 sm:p-6 rounded-2xl border border-[#E5DACF] hover:border-wine/40 shadow-card hover:shadow-card-hover transition-shadow duration-300 flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="w-11 h-11 rounded-xl bg-wine-light text-wine flex items-center justify-center">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E5DACF]">
          {kindLabel} · {categoryLabels[service.category]}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-ink mb-2">{service.name}</h3>
      <p className="text-sm text-ink-muted leading-relaxed">{service.description}</p>
      {service.note && <p className="text-xs text-ink-muted mt-2 italic">{service.note}</p>}

      <div className="pt-4 mt-auto border-t border-[#F0E8DF] flex flex-wrap items-center gap-x-4 gap-y-1 mt-5">
        <a
          href={whatsappForService(service)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-wine hover:text-wine-dark"
          aria-label={`Consultar agendamento de ${service.name} pelo WhatsApp (abre em nova aba)`}
        >
          <span>Consultar agendamento</span>
          <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
        </a>
        {pros.length > 0 && (
          <button
            type="button"
            onClick={() => requestStaffFilter(service.name)}
            className="inline-flex items-center gap-1.5 min-h-[44px] text-sm font-semibold text-ink-muted hover:text-wine"
            aria-label={`Ver ${pros.length === 1 ? 'profissional' : `${pros.length} profissionais`} de ${service.name}`}
          >
            <Users aria-hidden="true" className="w-4 h-4" />
            <span>{pros.length === 1 ? 'Ver profissional' : `Ver ${pros.length} profissionais`}</span>
          </button>
        )}
      </div>
    </article>
  );
};
