import React from 'react';
import { ArrowUpRight, ArrowDown, Stethoscope, Activity, Users, MapPin } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative overflow-hidden bg-gradient-to-b from-[#FAF7F3] via-[#FCFAF8] to-white pt-10 pb-16 md:pt-16 md:pb-24">
      {/* Subtle background ambient glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5ECE9] rounded-full blur-3xl opacity-60 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#F7F2E9] rounded-full blur-3xl opacity-50 -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-7">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E8DFD7] shadow-soft">
              <span className="w-2 h-2 rounded-full bg-wine animate-pulse" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gold-dark">
                Instituto Pró-Vida · Rio Pardo de Minas
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-ink leading-[1.12] tracking-tight">
              Consultas, exames e especialidades{' '}
              <span className="italic font-normal text-wine block sm:inline">
                em um só lugar.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-ink-muted max-w-xl font-normal leading-relaxed">
              Encontre o atendimento que você procura, conheça nossos profissionais e fale diretamente com a recepção para consultar a disponibilidade e agendar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamentos."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-wine hover:bg-wine-dark text-white text-sm font-semibold tracking-wide shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Agendar pelo WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#atendimentos"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-surface-cream text-wine text-sm font-semibold border border-[#DACDC3] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-soft"
              >
                <span>Explorar atendimentos</span>
                <ArrowDown className="w-4 h-4 text-wine/80" />
              </a>
            </div>

            {/* Pillars / Trust Badges */}
            <div className="pt-4 border-t border-[#ECE5DE] grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                <div className="w-7 h-7 rounded-lg bg-wine-light text-wine flex items-center justify-center shrink-0">
                  <Stethoscope className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-ink">Diversas especialidades</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                <div className="w-7 h-7 rounded-lg bg-wine-light text-wine flex items-center justify-center shrink-0">
                  <Activity className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-ink">Exames e diagnósticos</span>
              </div>

              <div className="flex items-center gap-2.5 text-xs text-ink-muted">
                <div className="w-7 h-7 rounded-lg bg-wine-light text-wine flex items-center justify-center shrink-0">
                  <Users className="w-3.5 h-3.5" />
                </div>
                <span className="font-medium text-ink">Equipe multidisciplinar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Real Clinic Facade Photography (Refined Minimalist Luxury) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer clean frame */}
              <div className="relative rounded-2xl overflow-hidden bg-white p-2 border border-[#E9DFD6] shadow-card">
                <div className="relative rounded-xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] max-h-[500px]">
                  <img
                    src="/assets/clinica-fachada.webp"
                    alt="Fachada do Instituto Pró-Vida em Rio Pardo de Minas"
                    className="w-full h-full object-cover object-[52%_center] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle dark gradient overlay at base for readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Location badge on photo */}
                  <div className="absolute bottom-3 left-3 right-3 sm:right-auto px-3.5 py-2 rounded-lg bg-white/95 backdrop-blur-md border border-white/40 shadow-soft text-ink flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-wine shrink-0" />
                    <div>
                      <p className="text-xs font-bold leading-tight text-ink">Instituto Pró-Vida</p>
                      <p className="text-[10px] text-ink-muted leading-tight">Rio Pardo de Minas · MG</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative subtle ambient card badge (discrete, functional) */}
              <div className="hidden sm:flex items-center gap-3 absolute -bottom-5 -left-5 bg-white py-3 px-4 rounded-xl border border-border-subtle shadow-card">
                <div className="w-9 h-9 rounded-full bg-[#FAF2F4] text-wine flex items-center justify-center">
                  <span className="font-serif italic font-bold text-base">P</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink">Atendimento humanizado</p>
                  <p className="text-[11px] text-ink-muted">Estrutura completa na Cidade Alta</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
