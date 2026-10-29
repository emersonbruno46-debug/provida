import React from 'react';
import { ArrowUpRight, ArrowDown, ShieldCheck, Stethoscope, Sparkles } from 'lucide-react';
import { professionals } from '../data/catalog';
import { whatsappUrl } from '../config/site';
import { ResponsiveImage, heroDims } from './ResponsiveImage';

const HERO_WIDTHS = [640, 960, 1440, 1920];

export const Hero: React.FC = () => {
  const featured = professionals.slice(0, 5);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-titulo"
      className="relative overflow-hidden border-b border-[#EFE7DE] bg-[#FAF7F2] lg:min-h-[660px] lg:flex lg:items-center"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 pb-10 sm:pt-12 md:pt-14 lg:py-24 w-full">
        <div className="max-w-2xl lg:max-w-[36rem] xl:max-w-2xl space-y-5 md:space-y-7">
          <p className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white border border-[#E5DACF] shadow-sm">
            <span aria-hidden="true" className="w-2 h-2 rounded-full bg-wine motion-safe:animate-pulse" />
            <span className="text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-gold-dark">
              Instituto Pró-Vida · Rio Pardo de Minas (MG)
            </span>
          </p>

          <h1 id="hero-titulo" className="font-serif text-[2rem] leading-[1.12] min-[390px]:text-[2.3rem] sm:text-5xl lg:text-[3.6rem] xl:text-[3.8rem] text-ink tracking-tight text-balance">
            Consultas, exames e especialidades{' '}
            <span className="italic font-normal text-wine">em um só lugar.</span>
          </h1>

          <p className="text-base sm:text-lg text-ink-muted max-w-xl leading-relaxed text-pretty">
            Encontre o atendimento que você procura, conheça nosso corpo clínico com {professionals.length} profissionais e
            fale diretamente com a recepção para consultar disponibilidade.
          </p>

          <div className="flex flex-col min-[420px]:flex-row min-[420px]:flex-wrap gap-3 pt-1">
            <a
              href={whatsappUrl('Olá! Vim pelo site do Instituto Pró-Vida e gostaria de informações sobre agendamentos.')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-xl bg-wine hover:bg-wine-dark text-white text-sm font-semibold tracking-wide shadow-card transition-colors"
            >
              <span>Agendar pelo WhatsApp</span>
              <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
            </a>
            <a
              href="#atendimentos"
              className="inline-flex items-center justify-center gap-2 min-h-[48px] px-5 rounded-xl bg-white hover:bg-[#F6EFE9] text-wine text-sm font-semibold border border-[#DACDC3] shadow-soft transition-colors"
            >
              <span>Explorar atendimentos</span>
              <ArrowDown aria-hidden="true" className="w-4 h-4" />
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-white p-2.5 sm:p-3 rounded-2xl border border-[#E5DACF] shadow-elevated">
            <div className="flex -space-x-2.5 p-0.5 shrink-0" aria-hidden="true">
              {featured.map((doc) => (
                <img
                  key={doc.id}
                  src={`/img/prof/${doc.photo}-thumb.webp`}
                  alt=""
                  width={40}
                  height={40}
                  loading="lazy"
                  decoding="async"
                  className="inline-block h-9 w-9 sm:h-10 sm:w-10 rounded-full ring-2 ring-white object-cover bg-[#ECE4DC]"
                />
              ))}
            </div>
            <div className="pr-2">
              <p className="text-xs font-bold text-ink leading-tight">Mais de 25 profissionais de saúde</p>
              <p className="text-xs text-ink-muted leading-tight">Médicos, dentista e equipe multidisciplinar</p>
            </div>
          </div>

          <ul className="pt-4 border-t border-[#EAE0D6] flex flex-wrap items-center gap-y-2.5 gap-x-6 text-sm text-ink">
            <li className="flex items-center gap-2"><ShieldCheck aria-hidden="true" className="w-4 h-4 text-wine" /><span className="font-medium">Corpo clínico multidisciplinar</span></li>
            <li className="flex items-center gap-2"><Stethoscope aria-hidden="true" className="w-4 h-4 text-wine" /><span className="font-medium">Exames e diagnósticos</span></li>
            <li className="flex items-center gap-2"><Sparkles aria-hidden="true" className="w-4 h-4 text-gold-dark" /><span className="font-medium">Atendimento humanizado</span></li>
          </ul>
        </div>
      </div>

      {/* Uma única imagem: bloco emoldurado abaixo do texto (<1024px, sem sobrepor os letreiros)
          e fundo com véu marfim à esquerda no desktop. */}
      <div className="px-4 sm:px-6 pb-10 lg:p-0 lg:absolute lg:inset-0 lg:z-0">
        <div className="relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-[#E5DACF] shadow-card aspect-[16/10] bg-[#ECE4DC] lg:max-w-none lg:h-full lg:aspect-auto lg:rounded-none lg:border-0 lg:shadow-none">
          <ResponsiveImage
            base="/img/hero"
            widths={HERO_WIDTHS}
            sizes="(min-width: 1024px) 100vw, (min-width: 768px) 92vw, 100vw"
            dims={heroDims ?? undefined}
            alt="Fachada do Instituto Pró-Vida em Rio Pardo de Minas"
            priority
            className="absolute inset-0 w-full h-full object-cover object-[62%_center] lg:object-[68%_center]"
          />
          <div aria-hidden="true" className="hidden lg:block absolute inset-y-0 left-0 w-[66%] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/[0.96] to-transparent" />
          <div aria-hidden="true" className="hidden lg:block absolute inset-0 bg-gradient-to-t from-[#FAF7F2]/70 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};
