import React from 'react';
import { ArrowUp } from 'lucide-react';
import { ADDRESS, PHONE_DISPLAY, whatsappUrl } from '../config/site';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wine-deep text-[#DEC8CD] py-12 border-t border-white/5 pb-28 md:pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          
          {/* Logo container */}
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg shadow-sm">
              <img
                src="/assets/logo.webp"
                alt="Instituto Pró-Vida"
                className="h-8 w-auto object-contain"
                width={120}
                height={50}
              />
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-white">Instituto Pró-Vida</p>
              <p className="text-xs text-[#DEC8CD]/80">
                {ADDRESS.street} · {ADDRESS.city} - {ADDRESS.region}
              </p>
              <p className="text-xs text-[#DEC8CD]/80 mt-0.5">
                WhatsApp:{' '}
                <a href={whatsappUrl()} className="text-white hover:underline">
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          {/* Copyright notice & privacy disclosure */}
          <div className="text-center md:text-left text-xs text-[#DEC8CD]/80 leading-relaxed max-w-xl">
            <p>© {new Date().getFullYear()} Instituto Pró-Vida. Todos os direitos reservados.</p>
            <p className="text-[#DEC8CD]/60 mt-1">
              Saúde integrada, corpo clínico multidisciplinar e exames especializados em Rio Pardo de Minas.
            </p>
            <p className="text-[11px] text-[#DEC8CD]/50 mt-1">
              Privacidade: site estritamente informativo sem cookies de telemetria ou rastreamento. As comunicações de agendamento ocorrem diretamente no WhatsApp oficial.
            </p>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] text-xs text-white/90 hover:text-white transition-colors py-2 px-3.5 rounded-lg border border-white/15 hover:bg-white/10"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp aria-hidden="true" className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
