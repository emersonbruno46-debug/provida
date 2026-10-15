import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';

interface HeaderProps {
  onScheduleClick?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <>
      {/* Top bar */}
      <div className="bg-[#F4ECE4] border-b border-[#E8DDD2] text-[#6B5A55] text-[11px] sm:text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span>Rio Pardo de Minas · MG</span>
        <span className="mx-2 text-[#C4B3A8]">|</span>
        <span className="text-[#554541]">Consultas, exames e especialidades em saúde</span>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border-subtle py-3.5'
            : 'bg-white/90 backdrop-blur-sm border-b border-border-subtle/70 py-4'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-6">
            {/* Logo */}
            <a
              href="#inicio"
              className="group flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-wine rounded-lg"
              aria-label="Instituto Pró-Vida - Início"
              onClick={closeMobileMenu}
            >
              <img
                src="/assets/logo.webp"
                alt="Instituto Pró-Vida"
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
                width={177}
                height={76}
              />
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-8" aria-label="Navegação principal">
              <a
                href="#atendimentos"
                className="text-sm font-medium text-ink-muted hover:text-wine transition-colors duration-200"
              >
                Atendimentos
              </a>
              <a
                href="#profissionais"
                className="text-sm font-medium text-ink-muted hover:text-wine transition-colors duration-200"
              >
                Profissionais
              </a>
              <a
                href="#instituto"
                className="text-sm font-medium text-ink-muted hover:text-wine transition-colors duration-200"
              >
                O Instituto
              </a>
              <a
                href="#duvidas"
                className="text-sm font-medium text-ink-muted hover:text-wine transition-colors duration-200"
              >
                Dúvidas
              </a>
              <a
                href="#contato"
                className="text-sm font-medium text-ink-muted hover:text-wine transition-colors duration-200"
              >
                Localização
              </a>
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20agendar%20um%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-wine hover:bg-wine-dark text-white text-xs font-semibold tracking-wide uppercase shadow-sm transition-all duration-200 hover:shadow hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Agendar agora</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex md:hidden items-center">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-wine hover:bg-wine-light transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border-subtle bg-white/98 px-5 py-6 shadow-dropdown animate-fadeIn">
            <nav className="flex flex-col space-y-3.5" aria-label="Menu móvel">
              <a
                href="#atendimentos"
                onClick={closeMobileMenu}
                className="text-base font-medium text-ink hover:text-wine py-1.5 border-b border-border-subtle/50 transition-colors"
              >
                Atendimentos
              </a>
              <a
                href="#profissionais"
                onClick={closeMobileMenu}
                className="text-base font-medium text-ink hover:text-wine py-1.5 border-b border-border-subtle/50 transition-colors"
              >
                Profissionais
              </a>
              <a
                href="#instituto"
                onClick={closeMobileMenu}
                className="text-base font-medium text-ink hover:text-wine py-1.5 border-b border-border-subtle/50 transition-colors"
              >
                O Instituto
              </a>
              <a
                href="#duvidas"
                onClick={closeMobileMenu}
                className="text-base font-medium text-ink hover:text-wine py-1.5 border-b border-border-subtle/50 transition-colors"
              >
                Dúvidas frequentes
              </a>
              <a
                href="#contato"
                onClick={closeMobileMenu}
                className="text-base font-medium text-ink hover:text-wine py-1.5 border-b border-border-subtle/50 transition-colors"
              >
                Localização e Contato
              </a>

              <div className="pt-3">
                <a
                  href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20agendar%20um%20atendimento."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-wine text-white text-sm font-semibold tracking-wide uppercase shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Agendar pelo WhatsApp</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
