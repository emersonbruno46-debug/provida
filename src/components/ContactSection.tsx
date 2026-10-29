import React from 'react';
import { ArrowUpRight, MapPin, Phone, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { WA_GENERAL, whatsappUrl, PHONE_DISPLAY, MAPS_URL, MAPS_EMBED_URL, ADDRESS } from '../config/site';

export const ContactSection: React.FC = () => {
  return (
    <section id="contato" aria-labelledby="contato-titulo" className="py-20 md:py-28 bg-wine-dark text-white relative overflow-hidden">
      {/* Ambient luxury glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-wine rounded-full blur-3xl opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Direct CTA */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold tracking-wider uppercase text-[#E8C59A]">
              Agendamento e contato
            </div>

            <h2 id="contato-titulo" className="font-serif text-3xl sm:text-4xl lg:text-5xl text-white leading-tight">
              Seu atendimento começa por aqui.
            </h2>

            <p className="text-base text-[#DEC9CD] leading-relaxed max-w-lg">
              Encontrou o serviço ou especialista que você procura? Fale com nossa recepção para esclarecer dúvidas sobre preparo de exames, convênios e consultar a disponibilidade de datas.
            </p>

            <div className="space-y-3 text-xs sm:text-sm text-[#E3D1D5]">
              <div className="flex items-center gap-2.5">
                <Clock aria-hidden="true" className="w-4 h-4 text-[#E8C59A] shrink-0" />
                <span>Atendimento de mensagens pelo WhatsApp durante dias úteis</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck aria-hidden="true" className="w-4 h-4 text-[#E8C59A] shrink-0" />
                <span>Canal oficial direto — sem intermediários ou formulários</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 min-h-[48px] px-6 rounded-xl bg-white hover:bg-surface-cream text-wine text-sm font-semibold tracking-wide shadow-card hover:shadow-card-hover transition-colors"
                aria-label="Conversar com a recepção pelo WhatsApp (abre em nova aba)"
              >
                <MessageCircle aria-hidden="true" className="w-4 h-4 text-wine" />
                <span>Conversar com a recepção</span>
                <ArrowUpRight aria-hidden="true" className="w-4 h-4 text-wine/70" />
              </a>
            </div>
          </div>

          {/* Right Column: Address and Interactive Map Card */}
          <div className="lg:col-span-6">
            <div className="bg-[#FFFDF9] text-ink p-6 sm:p-9 rounded-2xl shadow-elevated border border-white/10 space-y-5">
              
              <div>
                <span className="text-[11px] uppercase tracking-widest text-gold-dark font-bold block mb-1">
                  Venha nos visitar
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-medium leading-snug">
                  Instituto Pró-Vida<br />
                  <span className="text-wine">{ADDRESS.city} – {ADDRESS.region}</span>
                </h3>
              </div>

              {/* Address detail */}
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-bold tracking-wider text-ink-light block">
                  Endereço
                </span>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">
                  {ADDRESS.street}<br />
                  {ADDRESS.district} · {ADDRESS.city} / {ADDRESS.region}
                </p>
              </div>

              {/* WhatsApp direct contact */}
              <div className="pt-3 border-t border-border-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider text-ink-light block">
                    WhatsApp oficial
                  </span>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-wine hover:text-wine-dark transition-colors inline-flex items-center gap-1.5 min-h-[44px]"
                    aria-label={`WhatsApp oficial ${PHONE_DISPLAY} (abre em nova aba)`}
                  >
                    <Phone aria-hidden="true" className="w-4 h-4" />
                    <span>{PHONE_DISPLAY}</span>
                  </a>
                </div>

                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 min-h-[44px] text-xs sm:text-sm font-semibold text-wine hover:text-wine-dark transition-colors"
                  aria-label="Abrir localização do Instituto Pró-Vida no Google Maps (abre em nova aba)"
                >
                  <MapPin aria-hidden="true" className="w-4 h-4" />
                  <span>Abrir no Google Maps</span>
                  <ArrowUpRight aria-hidden="true" className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location Map Preview */}
              <div className="relative h-44 bg-[#EDE5DB] rounded-xl overflow-hidden border border-[#DCCEC2]">
                <iframe
                  title="Mapa de localização do Instituto Pró-Vida na Rua Odílio Torres Costa, Rio Pardo de Minas"
                  src={MAPS_EMBED_URL}
                  className="w-full h-full border-0 filter contrast-[0.95] opacity-90"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-3 py-1.5 rounded-lg bg-white/95 backdrop-blur-md text-[11px] font-bold text-wine shadow-soft flex items-center gap-1.5 pointer-events-none">
                  <MapPin aria-hidden="true" className="w-3.5 h-3.5" />
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
