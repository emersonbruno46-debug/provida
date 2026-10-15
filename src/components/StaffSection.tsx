import React from 'react';
import { ArrowUpRight, Award } from 'lucide-react';
import { doctorsData, getWhatsAppDoctorUrl, DoctorItem } from '../data/doctorsData';

export const StaffSection: React.FC = () => {
  return (
    <section id="profissionais" className="py-20 md:py-28 bg-[#F8F5F0] border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark mb-3 shadow-soft">
              Corpo clínico
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Profissionais que fazem parte do Pró-Vida.
            </h2>
            <p className="mt-3 text-base text-ink-muted leading-relaxed">
              Conheça algumas das especialidades e profissionais presentes em nossos materiais institucionais.
            </p>
          </div>

          <a
            href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Gostaria%20de%20consultar%20a%20agenda%20dos%20profissionais%20do%20Instituto%20Pr%C3%B3-Vida."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white hover:bg-surface-cream text-wine text-xs font-semibold tracking-wider uppercase border border-[#DACDC3] shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            <span>Consultar corpo clínico</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {doctorsData.map((doctor: DoctorItem) => (
            <article
              key={doctor.id}
              className="group bg-white rounded-2xl overflow-hidden border border-border-subtle shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col hover:-translate-y-1.5"
            >
              {/* Photo Container with uniform aspect ratio */}
              <div className="relative aspect-[4/4.5] sm:aspect-[4/4.2] overflow-hidden bg-[#ECE4DC]">
                <img
                  src={doctor.image}
                  alt={`Retrato de ${doctor.name}`}
                  style={{ objectPosition: doctor.objectPosition || 'center 15%' }}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                
                {/* Specialty tag over photo */}
                <div className="absolute top-3.5 left-3.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[10px] font-bold uppercase tracking-wider text-wine shadow-soft">
                    <Award className="w-3 h-3 text-gold" />
                    {doctor.specialty}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium leading-snug group-hover:text-wine transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-xs font-medium text-ink-muted mt-1.5 tracking-wide">
                    {doctor.registration}
                  </p>
                </div>

                <div className="pt-6 mt-4 border-t border-border-subtle/70">
                  <a
                    href={getWhatsAppDoctorUrl(doctor.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine group-hover:text-wine-dark transition-colors"
                    aria-label={`Consultar disponibilidade com ${doctor.name}`}
                  >
                    <span>Consultar disponibilidade</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-xs text-ink-muted mt-10">
          Seleção demonstrativa de profissionais. Fotografias e agenda devem ser validadas antes da publicação.
        </p>

      </div>
    </section>
  );
};
