import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ResponsiveImage, aboutDims } from './ResponsiveImage';

const ABOUT_WIDTHS = [480, 720, 960];

export const AboutSection: React.FC = () => {
  return (
    <section id="instituto" aria-labelledby="instituto-titulo" className="py-20 md:py-28 bg-white border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Clinic Structure Photo */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden bg-surface-subtle p-2 border border-[#E9DFD6] shadow-card">
              <div className="rounded-xl overflow-hidden aspect-[4/4.8] max-h-[480px] bg-[#ECE4DC]">
                <ResponsiveImage
                  base="/img/fachada"
                  widths={ABOUT_WIDTHS}
                  sizes="(min-width: 1024px) 38vw, (min-width: 768px) 45vw, 92vw"
                  dims={aboutDims ?? undefined}
                  alt="Estrutura e sede do Instituto Pró-Vida em Rio Pardo de Minas"
                  className="w-full h-full object-cover object-[53%_center] transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark shadow-soft">
              Conheça o Instituto
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Um espaço para encontrar o atendimento que você precisa.
            </h2>

            <div className="space-y-4 text-base text-ink-muted leading-relaxed">
              <p>
                Localizado em Rio Pardo de Minas, o Instituto Pró-Vida reúne diferentes especialidades médicas e serviços de saúde em um ambiente estruturado para o seu conforto.
              </p>
              <p>
                Encontre informações sobre os atendimentos disponíveis e fale diretamente com a nossa recepção para esclarecer dúvidas e consultar a agenda dos profissionais.
              </p>
            </div>

            {/* Checklist */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-3 text-sm text-ink font-medium">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>Consultas com diferentes especialidades médicas</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink font-medium">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>Informações sobre exames diagnósticos e laboratoriais</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-ink font-medium">
                <CheckCircle2 className="w-5 h-5 text-wine shrink-0" />
                <span>Contato direto com a recepção para agendamentos rápidos</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-subtle hover:bg-surface-cream text-wine text-xs font-semibold tracking-wider uppercase border border-[#DACDC3] shadow-soft hover:shadow-card transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Onde estamos</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
