import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Award, Search, Stethoscope, Sparkles, Smile, HeartHandshake } from 'lucide-react';
import { doctorsData, getWhatsAppDoctorUrl, DoctorItem } from '../data/doctorsData';

const categories = [
  { id: 'todos', label: 'Todos os profissionais' },
  { id: 'medicos', label: 'Médicos especialistas' },
  { id: 'odontologia', label: 'Odontologia' },
  { id: 'terapias', label: 'Terapias & Saúde Integral' },
];

export const StaffSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchDoctor, setSearchDoctor] = useState<string>('');

  const filteredDoctors = useMemo(() => {
    return doctorsData.filter((doc) => {
      const matchesCategory =
        selectedCategory === 'todos' || doc.category === selectedCategory;
      const normalizedSearch = searchDoctor.trim().toLowerCase();
      const matchesSearch =
        !normalizedSearch ||
        doc.name.toLowerCase().includes(normalizedSearch) ||
        doc.specialty.toLowerCase().includes(normalizedSearch);
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchDoctor]);

  return (
    <section id="profissionais" className="py-20 md:py-28 bg-[#F8F5F0] border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark mb-3 shadow-soft">
              Corpo clínico
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Profissionais que cuidam de você no Pró-Vida.
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed">
              Equipe médica e multidisciplinar completa reunida em Rio Pardo de Minas para atender toda a sua família.
            </p>
          </div>

          <a
            href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20agenda%20dos%20profissionais%20do%20Instituto%20Pr%C3%B3-Vida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-surface-cream text-wine text-xs font-semibold tracking-wider uppercase border border-[#DACDC3] shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            <span>Falar com a recepção</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Filter and Search Bar for Doctors */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-border-subtle shadow-card mb-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            
            {/* Category tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold tracking-wide transition-all ${
                      isActive
                        ? 'bg-wine text-white shadow-soft'
                        : 'bg-surface-subtle hover:bg-[#F3ECE6] text-ink-muted hover:text-ink border border-border-subtle/80'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Doctor search input */}
            <div className="relative min-w-[240px]">
              <Search className="w-4 h-4 text-ink-light absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                value={searchDoctor}
                onChange={(e) => setSearchDoctor(e.target.value)}
                placeholder="Buscar por nome ou especialidade..."
                className="w-full pl-9 pr-4 py-2 bg-surface-subtle hover:bg-[#FAF7F2] focus:bg-white rounded-xl border border-border-subtle focus:border-wine text-xs text-ink placeholder:text-ink-light outline-none transition-all"
              />
            </div>

          </div>
        </div>

        {/* Doctors Grid: agora com 27 profissionais organizados de forma clean e elegante */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredDoctors.map((doctor: DoctorItem) => (
            <article
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden border border-[#EAE0D6] shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
            >
              {/* Photo Container */}
              <div className="relative aspect-[4/4.6] overflow-hidden bg-[#ECE4DC]">
                <img
                  src={doctor.image}
                  alt={`Retrato de ${doctor.name}`}
                  style={{ objectPosition: doctor.objectPosition || 'center 15%' }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
                
                {/* Specialty badge sobre a foto */}
                <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold tracking-wider text-wine shadow-soft max-w-full truncate">
                    <Award className="w-3 h-3 text-gold shrink-0" />
                    <span className="truncate">{doctor.specialty}</span>
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 sm:p-5 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl text-ink font-medium leading-snug group-hover:text-wine transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-medium text-wine mt-1">
                    {doctor.specialty}
                  </p>
                  {doctor.registration && (
                    <p className="text-[11px] text-ink-muted mt-0.5 tracking-wide">
                      {doctor.registration}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-3 border-t border-border-subtle/70">
                  <a
                    href={getWhatsAppDoctorUrl(doctor.name, doctor.specialty)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine group-hover:text-wine-dark transition-colors"
                    aria-label={`Consultar disponibilidade com ${doctor.name}`}
                  >
                    <span>Agendar consulta</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state caso a busca não encontre nenhum */}
        {filteredDoctors.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border border-border-subtle p-8 max-w-md mx-auto">
            <p className="text-sm font-semibold text-ink">Nenhum profissional encontrado</p>
            <p className="text-xs text-ink-muted mt-1">Tente buscar por outro termo ou limpe o filtro.</p>
          </div>
        )}

        {/* Note */}
        <p className="text-center text-xs text-ink-muted mt-10">
          Corpo clínico com agenda e dias de atendimento específicos. Consulte a recepção para confirmação de datas e horários.
        </p>

      </div>
    </section>
  );
};
