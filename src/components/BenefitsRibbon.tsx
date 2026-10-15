import React from 'react';
import { Compass, Users, MessageCircle } from 'lucide-react';

export const BenefitsRibbon: React.FC = () => {
  return (
    <section className="bg-wine-dark text-white py-10 md:py-12 border-y border-[#3A0A18] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          
          {/* Benefit 1 */}
          <div className="flex items-center gap-4.5 md:px-8 first:pl-0">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#E8C59A]">
              <Compass className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wide">
                Encontre seu atendimento
              </h3>
              <p className="text-xs text-[#E3D1D5] leading-relaxed mt-0.5">
                Busca organizada por especialidade ou exame diagnóstico.
              </p>
            </div>
          </div>

          {/* Benefit 2 */}
          <div className="flex items-center gap-4.5 pt-6 md:pt-0 md:px-8">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#E8C59A]">
              <Users className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wide">
                Conheça nossos profissionais
              </h3>
              <p className="text-xs text-[#E3D1D5] leading-relaxed mt-0.5">
                Corpo clínico qualificado e informações transparentes.
              </p>
            </div>
          </div>

          {/* Benefit 3 */}
          <div className="flex items-center gap-4.5 pt-6 md:pt-0 md:px-8 last:pr-0">
            <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 text-[#E8C59A]">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wide">
                Agende com a recepção
              </h3>
              <p className="text-xs text-[#E3D1D5] leading-relaxed mt-0.5">
                Atendimento humanizado e direto pelo WhatsApp oficial.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
