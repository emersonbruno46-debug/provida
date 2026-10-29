export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'agendamento',
    question: 'Como faço para agendar uma consulta ou exame?',
    answer:
      'Escolha o atendimento ou profissional desejado no site e clique em agendar. O link abrirá diretamente uma conversa com a recepção no WhatsApp oficial com mensagem contextualizada para confirmação de datas.',
  },
  {
    id: 'documentos-orientacoes',
    question: 'Quais documentos e orientações devo levar no dia do atendimento?',
    answer:
      'Recomenda-se apresentar documento oficial de identificação com foto, carteirinha do convênio (caso utilize) e pedidos médicos ou exames anteriores relacionados à sua consulta ou exame.',
  },
  {
    id: 'convenios-particular',
    question: 'O Instituto Pró-Vida atende por convênio ou particular?',
    answer:
      'Realizamos atendimentos particulares e parcerias/convênios. Para saber se o seu convênio específico é coberto para o especialista ou exame desejado e consultar formas de pagamento aceitas, fale diretamente com nossa recepção.',
  },
  {
    id: 'horario-recepcao',
    question: 'Quais os horários de atendimento da recepção e prazos de resposta?',
    answer:
      'A recepção atende mensagens e agendamentos pelo WhatsApp durante os dias úteis. As consultas e exames possuem dias e turnos programados conforme a escala individual de cada especialista.',
  },
  {
    id: 'dias-atendimento',
    question: 'Como consultar os dias de atendimento de cada especialista?',
    answer:
      'Como cada médico e terapeuta possui agenda própria (com atendimentos semanais, quinzenais ou mensais), a recepção informa o calendário atualizado e a data mais próxima disponível para sua comodidade.',
  },
  {
    id: 'preparo-exames',
    question: 'Como saber se meu exame necessita de preparo prévio?',
    answer:
      'Exames de ultrassonografia, laboratoriais e cardiológicos podem requerer orientações específicas (como jejum ou ingestão de água). No momento da marcação via WhatsApp, a recepção envia todas as orientações detalhadas de preparo.',
  },
  {
    id: 'privacidade-terceiros',
    question: 'Como funciona a privacidade e segurança dos meus dados no site?',
    answer:
      'Nosso site é estritamente institucional e não utiliza cookies de rastreamento publicitário nem envia dados de navegação ou dados clínicos para terceiros. As interações de agendamento ocorrem diretamente através do WhatsApp oficial da clínica e a visualização da rota é provida pelo Google Maps, regidos pelos termos e políticas dessas respectivas plataformas.',
  },
  {
    id: 'localizacao',
    question: 'Onde fica o Instituto Pró-Vida?',
    answer:
      'Estamos localizados na Rua Odílio Torres Costa, 11, bairro Cidade Alta, em Rio Pardo de Minas — MG. Possuímos estrutura acessível e confortável para você e sua família.',
  },
];
