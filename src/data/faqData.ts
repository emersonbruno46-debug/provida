export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 'agendamento',
    question: 'Como faço para agendar uma consulta?',
    answer: 'Escolha o atendimento ou profissional desejado e clique em agendar. O site abrirá diretamente uma conversa com a nossa recepção pelo WhatsApp oficial com a mensagem pré-preenchida.',
  },
  {
    id: 'dias-atendimento',
    question: 'Como sei os dias de atendimento de um profissional?',
    answer: 'Nossa recepção informa a agenda atualizada de cada especialista em tempo real, informando dias, turnos e as próximas datas de atendimento disponíveis.',
  },
  {
    id: 'disponibilidade-exame',
    question: 'Como confirmar se meu exame está disponível?',
    answer: 'Você pode pesquisar o exame desejado na seção de atendimentos do site ou falar diretamente com a recepção para confirmar datas de realização e eventuais preparos prévios necessários.',
  },
  {
    id: 'localizacao',
    question: 'Onde fica o Instituto Pró-Vida?',
    answer: 'Estamos localizados na Rua Odílio Torres Costa, 11, bairro Cidade Alta, em Rio Pardo de Minas — MG. Possuímos estrutura acessível e confortável para você e sua família.',
  },
];
