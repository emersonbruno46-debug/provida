import React from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { WA_GENERAL } from '../config/site';

/**
 * Barra fixa inferior (<768px). A altura é reservada no layout via
 * .pb-mobile-cta (App) e scroll-padding-bottom (index.css), incluindo safe-area.
 */
export const MobileFloatingCta: React.FC = () => (
  <aside
    aria-label="Agendamento rápido"
    className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-border-subtle shadow-dropdown px-4 pt-2.5 pb-[calc(0.625rem+env(safe-area-inset-bottom))] flex items-center justify-between gap-3"
  >
    <div className="flex items-center gap-2.5 min-w-0">
      <div aria-hidden="true" className="w-9 h-9 rounded-full bg-wine-light text-wine flex items-center justify-center shrink-0">
        <MessageCircle className="w-4 h-4" />
      </div>
      <p className="leading-tight min-w-0">
        <span className="text-xs text-ink-muted block">Precisa de atendimento?</span>
        <strong className="text-sm font-bold text-wine block truncate">Fale com a recepção</strong>
      </p>
    </div>
    <a
      href={WA_GENERAL}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center gap-1.5 min-h-[44px] min-w-[44px] px-5 rounded-lg bg-wine hover:bg-wine-dark text-white text-sm font-semibold shadow-sm shrink-0"
      aria-label="Agendar pelo WhatsApp (abre em nova aba)"
    >
      <span>Agendar</span>
      <ArrowUpRight aria-hidden="true" className="w-4 h-4" />
    </a>
  </aside>
);
