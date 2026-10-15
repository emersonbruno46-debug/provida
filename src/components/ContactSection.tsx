import React from 'react';
import { ArrowUpRight, MapPin, Phone, MessageCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-28 bg-wine-dark text-white relative overflow-hidden">
      {/* Subtle ambient luxury gradient */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wine rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-[#E8C59A]">
              Agendamento e contato
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Seu atendimento começa por aqui.
            </h2>

            <p className="text-base text-[#DEC9CD] leading-relaxed max-w-lg">
              Encontrou o serviço que você procura? Fale com nossa recepção para esclarecer dúvidas e consultar a disponibilidade de agenda.
            </p>

            <div className="pt-2">
              <a
                href="https://wa.me/5538999283598?text=Ol%C3%A1%21%20Vim%20pelo%20site%20do%20Instituto%20Pr%C3%B3-Vida%20e%20gostaria%20de%20agendar%20um%20atendimento."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-white hover:bg-surface-cream text-wine text-sm font-semibold tracking-wide shadow-card hover:shadow-card-hover transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 text-wine" />
                <span>Conversar com a recepção</span>
                <ArrowUpRight className="w-4 h-4 text-wine/70" />
              </a>
            </div>
          </div>

          {/* Right Column: Address and Interactive Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFDF9] text-ink p-7 sm:p-9 rounded-2xl shadow-elevated border border-white/10 space-y-6">
              
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold block mb-1.5">
                  Venha nos visitar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium leading-snug">
                  Instituto Pró-Vida<br />
                  <span className="text-wine">Rio Pardo de Minas – MG</span>
                </h3>
              </div>

              {/* Address detail */}
              <div className="space-y-1 pt-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-ink-light block">
                  Endereço
                </span>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  Rua Odílio Torres Costa, 11<br />
                  Cidade Alta · Rio Pardo de Minas / MG
                </p>
              </div>

              {/* WhatsApp direct contact */}
              <div className="pt-4 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-ink-light block">
                    WhatsApp oficial
                  </span>
                  <a
                    href="https://wa.me/5538999283598"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-wine hover:text-wine-dark transition-colors inline-flex items-center gap-1.5 mt-0.5"
                  >
                    <Phone className="w-4 h-4" />
                    <span>(38) 99928-3598</span>
                  </a>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Rua+Odilio+Torres+Costa+11+Rio+Pardo+de+Minas"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-wine hover:text-wine-dark transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Abrir no Google Maps</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Stylized Modern Location Preview */}
              <div className="relative h-40 bg-[#EDE5DB] rounded-xl overflow-hidden border border-[#DCCEC2]">
                <iframe
                  title="Localização do Instituto Pró-Vida no mapa"
                  src="https://maps.google.com/maps?q=Rua+Odilio+Torres+Costa+11+Rio+Pardo+de+Minas&t=&z=16&ie=UTF8&iwloc=&output=embed"
                  className="w-full h-full border-0 filter contrast-[0.95] opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-wine shadow-soft flex items-center gap-1.5 pointer-events-none">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Instituto Pró-Vida</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
