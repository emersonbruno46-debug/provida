export interface ServiceItem {
  id: string;
  name: string;
  category: 'consultas' | 'exames' | 'odonto' | 'outros';
  categoryLabel: string;
  description: string;
  iconName: string;
}

export const servicesData: ServiceItem[] = [
  {
    id: 'ginecologia-obstetricia',
    name: 'Ginecologia e Obstetrícia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Saúde integral da mulher, acompanhamento pré-natal e cuidados ginecológicos preventivos.',
    iconName: 'HeartHandshake',
  },
  {
    id: 'neurologia',
    name: 'Neurologia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Diagnóstico e tratamento de patologias do sistema nervoso central e periférico.',
    iconName: 'Brain',
  },
  {
    id: 'ortopedia',
    name: 'Ortopedia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Cuidado especializado para ossos, articulações, lesões e saúde musculoesquelética.',
    iconName: 'Bone',
  },
  {
    id: 'dermatologia',
    name: 'Dermatologia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Prevenção, diagnóstico e tratamentos clínicos e estéticos para saúde da pele, unhas e cabelos.',
    iconName: 'Sparkles',
  },
  {
    id: 'ultrassonografia',
    name: 'Ultrassonografia',
    category: 'exames',
    categoryLabel: 'Exames e diagnóstico',
    description: 'Exames de imagem precisos para diagnóstico abdominal, pélvico, obstétrico e articular.',
    iconName: 'ScanLine',
  },
  {
    id: 'exames-cardiologicos',
    name: 'Exames cardiológicos',
    category: 'exames',
    categoryLabel: 'Exames e diagnóstico',
    description: 'Avaliação cardiovascular completa, check-up de rotina e monitoramento do coração.',
    iconName: 'HeartPulse',
  },
  {
    id: 'odontologia',
    name: 'Odontologia',
    category: 'odonto',
    categoryLabel: 'Atendimento odontológico',
    description: 'Cuidados com a saúde bucal, estética do sorriso, profilaxia e reabilitação oral.',
    iconName: 'Smile',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    category: 'outros',
    categoryLabel: 'Outros atendimentos',
    description: 'Reabilitação física, tratamento da dor, recuperação motora e melhora da mobilidade.',
    iconName: 'ActivitySquare',
  },
  {
    id: 'psiquiatria',
    name: 'Psiquiatria',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Acolhimento e tratamento especializado para saúde mental, ansiedade, depressão e bem-estar.',
    iconName: 'UserCheck',
  },
  {
    id: 'gastroenterologia',
    name: 'Gastroenterologia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Diagnóstico e acompanhamento do aparelho digestivo, estômago, fígado e intestino.',
    iconName: 'Stethoscope',
  },
  {
    id: 'fonoaudiologia',
    name: 'Fonoaudiologia',
    category: 'outros',
    categoryLabel: 'Outros atendimentos',
    description: 'Avaliação e terapia da comunicação, fala, audição, voz e deglutição.',
    iconName: 'MessageSquare',
  },
  {
    id: 'pneumologia',
    name: 'Pneumologia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Diagnóstico e tratamento de doenças respiratórias, pulmões e vias aéreas.',
    iconName: 'Wind',
  },
  {
    id: 'angiologia',
    name: 'Angiologia',
    category: 'consultas',
    categoryLabel: 'Especialidades médicas',
    description: 'Cuidado especializado do sistema circulatório, varizes e saúde vascular.',
    iconName: 'Activity',
  },
  {
    id: 'mamografia',
    name: 'Mamografia',
    category: 'exames',
    categoryLabel: 'Exames e diagnóstico',
    description: 'Exame preventivo fundamental de alta precisão para a saúde das mamas.',
    iconName: 'ShieldAlert',
  },
  {
    id: 'analises-clinicas',
    name: 'Laboratório de análises clínicas',
    category: 'exames',
    categoryLabel: 'Exames e diagnóstico',
    description: 'Coleta de sangue e exames laboratoriais com confiabilidade e rigor técnico.',
    iconName: 'FlaskConical',
  },
  {
    id: 'nutricao',
    name: 'Nutrição',
    category: 'outros',
    categoryLabel: 'Outros atendimentos',
    description: 'Planejamento alimentar individualizado, reeducação e acompanhamento nutricional clínico.',
    iconName: 'Apple',
  },
];

export const categoryTabs = [
  { id: 'todos', label: 'Todos' },
  { id: 'consultas', label: 'Consultas médicas' },
  { id: 'exames', label: 'Exames' },
  { id: 'odonto', label: 'Odontologia' },
  { id: 'outros', label: 'Outros atendimentos' },
];

export function getWhatsAppServiceUrl(serviceName: string): string {
  const message = `Olá! Encontrei ${serviceName} no site do Instituto Pró-Vida e gostaria de consultar a disponibilidade para agendamento.`;
  return `https://wa.me/5538999283598?text=${encodeURIComponent(message)}`;
}
