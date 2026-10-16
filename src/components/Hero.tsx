import React from 'react';
import { ArrowUpRight, ArrowDown, MapPin, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { doctorsData } from '../data/doctorsData';

export const Hero: React.FC = () => {
  // Pegar uma amostra representativa dos primeiros profissionais para o avatar flutuante
  const featuredAvatars = doctorsData.slice(0, 5);

  return (
    <section id="inicio" className="relative min-h-[580px] lg:min-h-[660px] flex items-center overflow-hidden border-b border-[#EFE7DE]">
      {/* Background Image: HERO.png com tratamento estilizado e gradientes para legibilidade editorial */}
      <div className="absolute inset-0 z-0">
        <img
          src="/HERO.png"
          alt="Fachada do Instituto Pró-Vida e Laboratório CardioLab"
          className="w-full h-full object-cover object-[62%_center] lg:object-[68%_center] transform scale-105 filter brightness-[0.98]"
        />
        
        {/* Camadas de gradiente: marfim aquecido à esquerda para permitir contraste perfeito com o texto vinho/preto, integrando com o fundo */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/95 to-transparent sm:w-[85%] lg:w-[62%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF7F2] via-transparent to-black/25 z-10" />
        
        {/* Glow sutil da marca (vinho) no fundo */}
        <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#F5E2E6]/60 rounded-full blur-3xl pointer-events-none z-10" />
      </div>

      {/* Conteúdo sobreposto ao fundo */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 md:py-24 w-full">
        <div className="max-w-2xl space-y-6 md:space-y-8">
          
          {/* Eyebrow badge / Localização */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-[#E5DACF] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-wine animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gold-dark">
              Instituto Pró-Vida · Rio Pardo de Minas (MG)
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="font-serif text-[2.5rem] sm:text-5xl lg:text-[3.8rem] text-ink leading-[1.1] tracking-tight text-balance">
            Consultas, exames e especialidades{' '}
            <span className="italic font-normal text-wine block sm:inline">
              em um só lugar.
            </span>
          </h1>

          {/* Subtitle / Lead text */}
          <p className="text-base sm:text-lg text-ink-muted max-w-xl font-normal leading-relaxed text-pretty">
            Encontre o atendimento que você procura, conheça nosso corpo clínico com mais de 25 profissionais e fale diretamente com a recepção para consultar disponibilidade.
          </p>

          {/* Action Buttons: Vinho Nobre + Marfim */}
          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <a
              href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamentos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-wine hover:bg-wine-dark text-white text-sm font-semibold tracking-wide shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine focus-visible:ring-offset-2"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-white/90" />
            </a>

            <a
              href="#atendimentos"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white/90 hover:bg-[#F6EFE9] text-wine text-sm font-semibold border border-[#DACDC3] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-soft backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-wine"
            >
              <span>Explorar atendimentos</span>
              <ArrowDown className="w-4 h-4 text-wine/80" />
            </a>
          </div>

          {/* Badge flutuante com a equipe real integrada (agora com mais médicos) */}
          <div className="pt-2">
            <div className="inline-flex items-center gap-3 bg-white/95 backdrop-blur-md p-2.5 sm:p-3 rounded-2xl border border-[#E5DACF] shadow-elevated">
              <div className="flex -space-x-2.5 overflow-hidden p-0.5">
                {featuredAvatars.map((doc) => (
                  <img
                    key={doc.id}
                    src={doc.image}
                    alt={doc.name}
                    title={`${doc.name} (${doc.specialty})`}
                    className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover shadow-xs"
                    style={{ objectPosition: doc.objectPosition || 'center 15%' }}
                  />
                ))}
              </div>
              <div className="pr-2">
                <p className="text-xs font-bold text-ink leading-tight">
                  Mais de 25 profissionais de saúde
                </p>
                <p className="text-[11px] text-ink-muted leading-tight">
                  Médicos, dentistas e terapeutas credenciados
                </p>
              </div>
            </div>
          </div>

          {/* Real Clinic Pillars Strip */}
          <div className="pt-4 border-t border-[#EAE0D6]/80 flex flex-wrap items-center gap-y-2.5 gap-x-6 text-xs text-ink-muted">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-wine" />
              <span className="font-medium text-ink">Corpo clínico multidisciplinar</span>
            </div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-4 h-4 text-wine" />
              <span className="font-medium text-ink">Exames e diagnósticos</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-gold-dark" />
              <span className="font-medium text-ink">Atendimento humanizado</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
