import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { WA_GENERAL } from '../config/site';

const LINKS = [
  { href: '#atendimentos', label: 'Atendimentos', mobile: 'Atendimentos' },
  { href: '#profissionais', label: 'Profissionais', mobile: 'Profissionais' },
  { href: '#instituto', label: 'O Instituto', mobile: 'O Instituto' },
  { href: '#duvidas', label: 'Dúvidas', mobile: 'Dúvidas frequentes' },
  { href: '#contato', label: 'Localização', mobile: 'Localização e contato' },
];

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuId = 'menu-movel';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Escape fecha o menu e devolve o foco ao botão de abertura
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close(true);
    };
    const onResize = () => window.innerWidth >= 1024 && setOpen(false);
    document.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, [open, close]);

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-3 focus:rounded-lg focus:bg-wine focus:text-white focus:text-sm focus:font-semibold"
      >
        Pular para o conteúdo
      </a>

      <div className="bg-[#F4ECE4] border-b border-[#E8DDD2] text-[#5E4E49] text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>Rio Pardo de Minas · MG</span>
        <span aria-hidden="true" className="mx-2 text-[#B3A196]">|</span>
        <span className="text-[#4A3B37]">Consultas, exames e especialidades em saúde</span>
      </div>

      <header
        className={`sticky top-0 z-50 transition-shadow duration-300 bg-white/95 backdrop-blur-md border-b border-border-subtle ${
          scrolled ? 'shadow-soft py-2.5' : 'py-3'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 lg:gap-6">
            <a href="#inicio" className="flex items-center rounded-lg shrink-0" aria-label="Instituto Pró-Vida — início" onClick={() => close(false)}>
              <img src="/assets/logo.webp" alt="Instituto Pró-Vida" className="h-10 sm:h-12 w-auto object-contain" width={177} height={76} />
            </a>

            <nav className="hidden lg:flex items-center gap-1 xl:gap-3" aria-label="Navegação principal">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="inline-flex items-center min-h-[44px] px-3 text-sm font-medium text-ink-muted hover:text-wine rounded-lg whitespace-nowrap transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center justify-center gap-2 min-h-[44px] px-5 rounded-lg bg-wine hover:bg-wine-dark text-white text-xs font-semibold tracking-wide uppercase shadow-sm whitespace-nowrap transition-colors"
              >
                <span>Agendar agora</span>
                <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
              <button
                ref={toggleRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                className="lg:hidden w-11 h-11 flex items-center justify-center rounded-lg text-wine hover:bg-wine-light transition-colors"
                aria-label={open ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={open}
                aria-controls={menuId}
              >
                {open ? <X aria-hidden="true" className="w-6 h-6" /> : <Menu aria-hidden="true" className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {open && (
          <div id={menuId} className="lg:hidden border-t border-border-subtle bg-white px-4 sm:px-6 py-4 shadow-dropdown animate-fadeIn max-h-[calc(100dvh-80px)] overflow-y-auto">
            <nav aria-label="Menu móvel" className="max-w-6xl mx-auto">
              <ul className="flex flex-col">
                {LINKS.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={() => close(false)}
                      className="flex items-center min-h-[48px] text-base font-medium text-ink hover:text-wine border-b border-border-subtle/60"
                    >
                      {l.mobile}
                    </a>
                  </li>
                ))}
              </ul>
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => close(false)}
                className="mt-4 flex items-center justify-center gap-2 w-full min-h-[48px] rounded-lg bg-wine text-white text-sm font-semibold tracking-wide uppercase shadow-sm"
              >
                <Phone aria-hidden="true" className="w-4 h-4" />
                <span>Agendar pelo WhatsApp</span>
              </a>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
