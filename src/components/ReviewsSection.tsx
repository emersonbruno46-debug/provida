import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section className="py-20 md:py-24 bg-[#FAF7F2] border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark shadow-soft">
              Confiança e transparência
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-ink leading-tight">
              Experiências que ajudam na sua escolha.
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Neste espaço serão apresentadas avaliações públicas reais, após seleção e validação pela clínica.
            </p>
          </div>

          {/* Right Column: Transparent Patient Experience Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-border-subtle shadow-card relative">
              {/* Star Rating preview */}
              <div className="flex items-center gap-1.5 text-gold mb-4" aria-label="Classificação 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              <h3 className="font-serif text-xl sm:text-2xl text-ink font-medium mb-3">
                Avaliações e depoimentos dos pacientes
              </h3>

              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                Área reservada para depoimentos reais do Google e relatos autorizados por pacientes atendidos na clínica. Preservamos a privacidade e a autenticidade de cada experiência, sem avaliações fictícias.
              </p>

              <div className="pt-5 mt-5 border-t border-border-subtle/70 flex items-center gap-2 text-xs text-ink-muted font-medium">
                <ShieldCheck className="w-4 h-4 text-wine" />
                <span>Compromisso com a transparência e ética médica</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
