import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  HeartHandshake,
  Brain,
  Bone,
  Sparkles,
  ScanLine,
  HeartPulse,
  Smile,
  ActivitySquare,
  UserCheck,
  Stethoscope,
  MessageSquare,
  Wind,
  Activity,
  ShieldAlert,
  FlaskConical,
  Apple,
} from 'lucide-react';
import { servicesData, categoryTabs, getWhatsAppServiceUrl, ServiceItem } from '../data/servicesData';

// Map icon names to Lucide icons
const iconMap: Record<string, React.FC<{ className?: string }>> = {
  HeartHandshake,
  Brain,
  Bone,
  Sparkles,
  ScanLine,
  HeartPulse,
  Smile,
  ActivitySquare,
  UserCheck,
  Stethoscope,
  MessageSquare,
  Wind,
  Activity,
  ShieldAlert,
  FlaskConical,
  Apple,
};

export const ServicesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showAll, setShowAll] = useState<boolean>(false);

  // Filter services
  const filteredServices = useMemo(() => {
    return servicesData.filter((service) => {
      const matchesTab = activeTab === 'todos' || service.category === activeTab;
      const normalizedQuery = searchQuery.trim().toLowerCase();
      const matchesQuery =
        !normalizedQuery ||
        service.name.toLowerCase().includes(normalizedQuery) ||
        service.description.toLowerCase().includes(normalizedQuery) ||
        service.categoryLabel.toLowerCase().includes(normalizedQuery);

      return matchesTab && matchesQuery;
    });
  }, [activeTab, searchQuery]);

  // Handle visibility limit:
  // If user is searching or has filtered tab, show all matching.
  // Otherwise show 6 initially unless "showAll" is toggled.
  const isDefaultView = activeTab === 'todos' && !searchQuery.trim();
  const visibleServices = isDefaultView && !showAll ? filteredServices.slice(0, 6) : filteredServices;
  const hasMoreToToggle = isDefaultView && filteredServices.length > 6;

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <section id="atendimentos" className="py-20 md:py-28 bg-[#FAF7F2] relative border-t border-[#EAE0D6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header with Editorial Typography */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E5DACF] text-[11px] font-semibold tracking-wider uppercase text-gold-dark mb-3 shadow-soft">
              Nossos atendimentos
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight text-balance">
              Encontre o cuidado que você procura.
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed text-pretty">
              Explore nossas especialidades, exames e serviços. Encontre rapidamente o atendimento desejado e fale com a recepção.
            </p>
          </div>

          <a
            href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20atendimentos%20no%20Instituto%20Pr%C3%B3-Vida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-wine hover:text-wine-dark transition-colors shrink-0 py-2 group"
          >
            <span>Agendamento pelo WhatsApp</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Search & Tabs Controls Container (Marfim com Borda Nobre e Sombra Leve) */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E5DACF] shadow-card mb-8">
          {/* Search Box */}
          <div className="relative flex items-center">
            <Search className="w-5 h-5 text-ink-light absolute left-4 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Qual atendimento você procura? Ex: Ginecologia, Ultrassom, Dermatologia..."
              className="w-full pl-12 pr-10 py-3.5 bg-[#FAF7F2] hover:bg-[#F5EFE8] focus:bg-white rounded-xl border border-[#E5DACF] focus:border-wine focus:ring-2 focus:ring-wine/10 text-sm text-ink placeholder:text-ink-light transition-all outline-none"
              aria-label="Buscar atendimento no Instituto Pró-Vida"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={handleClearSearch}
                className="absolute right-3.5 p-1 text-ink-muted hover:text-ink transition-colors rounded-full"
                aria-label="Limpar busca"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-4 mt-4 border-t border-[#EAE0D6]" role="tablist" aria-label="Categorias de atendimento">
            {categoryTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveTab(tab.id);
                    if (isDefaultView) setShowAll(false);
                  }}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? 'bg-wine text-white shadow-soft ring-1 ring-wine/20'
                      : 'bg-[#FAF7F2] hover:bg-[#F2EAE0] text-ink-muted hover:text-ink border border-[#E5DACF]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results Feedback Bar */}
        <div className="flex items-center justify-between text-xs text-ink-muted mb-6 px-1">
          <span className="font-medium text-ink">
            {filteredServices.length}{' '}
            {filteredServices.length === 1 ? 'atendimento encontrado' : 'atendimentos encontrados'}
            {searchQuery && ` para "${searchQuery}"`}
          </span>
          <span className="hidden sm:inline-block text-ink-muted/80">
            Selecione para consultar agenda ↘
          </span>
        </div>

        {/* Services Cards Grid with High Luxury Polish */}
        {visibleServices.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {visibleServices.map((service: ServiceItem) => {
              const IconComponent = iconMap[service.iconName] || Stethoscope;
              return (
                <article
                  key={service.id}
                  className="group relative bg-white p-6 rounded-2xl border border-[#E5DACF] hover:border-wine/40 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
                >
                  <div>
                    {/* Header: Icon & Category badge */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div className="w-11 h-11 rounded-xl bg-wine-light group-hover:bg-wine text-wine group-hover:text-white flex items-center justify-center transition-colors duration-200">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-light px-2.5 py-1 rounded-md bg-[#FAF7F2] border border-[#E5DACF]">
                        {service.categoryLabel}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-semibold text-ink group-hover:text-wine transition-colors mb-2">
                      {service.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-ink-muted leading-relaxed mb-6">
                      {service.description}
                    </p>
                  </div>

                  {/* WhatsApp Action */}
                  <div className="pt-4 border-t border-[#F0E8DF] mt-auto">
                    <a
                      href={getWhatsAppServiceUrl(service.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine group-hover:text-wine-dark transition-colors"
                      aria-label={`Consultar agendamento de ${service.name} pelo WhatsApp`}
                    >
                      <span>Consultar agendamento</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl p-10 text-center border border-[#E5DACF] max-w-lg mx-auto space-y-4 shadow-soft">
            <div className="w-12 h-12 rounded-full bg-wine-light text-wine flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-base font-semibold text-ink">
              Nenhum atendimento encontrado para essa busca
            </h3>
            <p className="text-xs text-ink-muted max-w-md mx-auto">
              Não encontramos esse serviço no catálogo demonstrativo. Entre em contato diretamente com nossa recepção para confirmar a disponibilidade.
            </p>
            <div className="pt-2">
              <a
                href={`https://wa.me/5538999283598?text=${encodeURIComponent(
                  `Olá! Procurei por "${searchQuery}" no site do Instituto Pró-Vida e gostaria de saber se vocês realizam esse atendimento.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-wine text-white text-xs font-semibold hover:bg-wine-dark transition-colors shadow-sm"
              >
                <span>Falar com a recepção no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}

        {/* Show More / Show Less Toggle Button */}
        {hasMoreToToggle && (
          <div className="text-center mt-10">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-[#F6EFE9] text-wine text-xs font-semibold uppercase tracking-wider border border-[#DACDC3] shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>{showAll ? 'Mostrar menos atendimentos' : `Ver todos os atendimentos (${servicesData.length})`}</span>
              {showAll ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        )}

        {/* Disclaimer Fineprint */}
        <p className="text-[11px] text-ink-light mt-8 text-center">
          * Catálogo demonstrativo para avaliação da interface: consulte a recepção oficial para confirmação de datas e disponibilidade.
        </p>

      </div>
    </section>
  );
};
