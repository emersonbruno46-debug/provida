import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';

export const MobileFloatingCta: React.FC = () => {
  return (
    <aside
      aria-label="Agendamento rápido móvel"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border-subtle shadow-dropdown px-4 py-3 flex items-center justify-between gap-3"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-wine-light text-wine flex items-center justify-center shrink-0">
          <MessageCircle className="w-4 h-4" />
        </div>
        <div className="leading-tight">
          <span className="text-[10px] text-ink-muted block">Precisa de atendimento?</span>
          <strong className="text-xs font-bold text-wine block">Fale com a recepção</strong>
        </div>
      </div>

      <a
        href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20agendar%20um%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-wine hover:bg-wine-dark text-white text-xs font-semibold tracking-wide shadow-sm shrink-0"
      >
        <span>Agendar</span>
        <ArrowUpRight className="w-3.5 h-3.5" />
      </a>
    </aside>
  );
};
