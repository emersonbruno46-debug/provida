import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { faqData, FaqItem } from '../data/faqData';

export const FaqSection: React.FC = () => {
  // First item open by default
  const [openIds, setOpenIds] = useState<string[]>(['agendamento']);

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="duvidas" className="py-20 md:py-28 bg-white border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Heading */}
          <div className="lg:col-span-5 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-subtle border border-[#E9DFD6] text-[11px] font-semibold tracking-wider uppercase text-gold-dark shadow-soft">
              Perguntas frequentes
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-ink leading-tight">
              Informação clara, do início ao agendamento.
            </h2>
            <p className="text-sm text-ink-muted leading-relaxed">
              Respostas simples e objetivas para as dúvidas mais comuns sobre o atendimento no Instituto Pró-Vida.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqData.map((item: FaqItem) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-xl border border-border-subtle bg-surface-subtle/40 hover:bg-surface-subtle transition-colors overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full py-4.5 px-5 flex items-center justify-between gap-4 text-left font-medium text-ink hover:text-wine transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-wine"
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                  >
                    <span className="text-sm sm:text-base font-semibold leading-snug">
                      {item.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full bg-white border border-border-subtle flex items-center justify-center text-wine shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-wine text-white border-wine' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${item.id}`}
                      className="px-5 pb-5 pt-1 text-xs sm:text-sm text-ink-muted leading-relaxed border-t border-border-subtle/50 animate-fadeIn"
                    >
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
