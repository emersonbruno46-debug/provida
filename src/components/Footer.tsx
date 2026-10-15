import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-wine-deep text-[#DEC8CD] py-10 border-t border-white/5 pb-24 md:pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
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
              <p className="text-xs font-semibold text-white">Instituto Pró-Vida</p>
              <p className="text-[11px] text-[#DEC8CD]/70">Rio Pardo de Minas · Minas Gerais</p>
            </div>
          </div>

          {/* Copyright notice */}
          <div className="text-center md:text-left text-[11px] text-[#DEC8CD]/80 leading-relaxed">
            <p>© {new Date().getFullYear()} Instituto Pró-Vida. Todos os direitos reservados.</p>
            <p className="text-[#DEC8CD]/60">Saúde integrada, corpo clínico multidisciplinar e exames especializados.</p>
          </div>

          {/* Back to top button */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-white/80 hover:text-white transition-colors py-2 px-3 rounded-lg hover:bg-white/5"
              aria-label="Voltar ao topo da página"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};
