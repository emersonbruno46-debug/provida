/**
 * Catálogo centralizado: especialidades, atendimentos e profissionais.
 *
 * Fontes de evidência:
 *  - Profissionais/especialidades: nomes dos arquivos originais das fotos enviadas pela clínica
 *    (source-assets/Fotos dos profissionais Pró-vida/*), conferidos byte a byte com as fotos publicadas.
 *  - Atendimentos `source: 'catalogo'`: lista original do site (servicesData.ts), ainda não validada
 *    pela clínica (FEATURES.catalogConfirmed = false).
 *  - Atendimentos `source: 'corpo-clinico'`: consultas derivadas de especialidades confirmadas no corpo clínico.
 *
 * Regras: não inventar serviços, profissionais, registros, preços, convênios ou disponibilidade.
 * Aliases são apenas nomes alternativos/profissão — nunca sintomas.
 */
import { whatsappUrl } from '../config/site';

export type ServiceCategory = 'consultas' | 'exames' | 'odonto' | 'outros';
export type ServiceKind = 'consulta' | 'exame' | 'terapia';
export type ProfessionalCategory = 'medicos' | 'odontologia' | 'terapias' | 'outros';

export interface Specialty {
  id: string;
  label: string;
  /** Termos alternativos de busca (profissão, abreviações, grafias). */
  aliases: string[];
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  kind: ServiceKind;
  description: string;
  iconName: string;
  /** Especialidades cujos profissionais realizam/atendem este serviço (relação confirmada). */
  specialtyIds: string[];
  aliases: string[];
  source: 'catalogo' | 'corpo-clinico';
  /** Observação conservadora exibida no card quando há pendência de confirmação. */
  note?: string;
}

export interface Professional {
  id: string;
  name: string;
  /** Rótulo exibido (fiel ao arquivo original). */
  specialtyLabel: string;
  specialtyIds: string[];
  category: ProfessionalCategory;
  /** PENDENTE: origem dos registros não documentada no projeto; exibidos como estavam. */
  registration?: string;
  /** Slug da imagem em public/img/prof/<slug>-<w>.(avif|webp). */
  photo: string;
  objectPosition?: string;
}

export const categoryLabels: Record<ServiceCategory, string> = {
  consultas: 'Especialidades médicas',
  exames: 'Exames e diagnóstico',
  odonto: 'Atendimento odontológico',
  outros: 'Outros atendimentos',
};

export const serviceCategoryFilters: { id: 'todos' | ServiceCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'consultas', label: 'Consultas médicas' },
  { id: 'exames', label: 'Exames' },
  { id: 'odonto', label: 'Odontologia' },
  { id: 'outros', label: 'Outros atendimentos' },
];

export const professionalCategoryFilters: { id: 'todos' | ProfessionalCategory; label: string }[] = [
  { id: 'todos', label: 'Todos' },
  { id: 'medicos', label: 'Médicos' },
  { id: 'odontologia', label: 'Odontologia' },
  { id: 'terapias', label: 'Terapias e saúde integral' },
  { id: 'outros', label: 'Enfermagem' },
];

export const specialties: Specialty[] = [
  { id: 'clinica-geral', label: 'Clínica Geral', aliases: ['clínico geral', 'clínica médica', 'clínico'] },
  { id: 'ginecologia-obstetricia', label: 'Ginecologia e Obstetrícia', aliases: ['ginecologista', 'gineco', 'obstetra', 'pré-natal'] },
  { id: 'cardiologia', label: 'Cardiologia', aliases: ['cardiologista', 'cardio'] },
  { id: 'ortopedia', label: 'Ortopedia', aliases: ['ortopedista'] },
  { id: 'neurologia', label: 'Neurologia', aliases: ['neurologista', 'neuro'] },
  { id: 'psiquiatria', label: 'Psiquiatria', aliases: ['psiquiatra'] },
  { id: 'endocrinologia', label: 'Endocrinologia', aliases: ['endocrinologista', 'endócrino'] },
  { id: 'dermatologia', label: 'Dermatologia', aliases: ['dermatologista', 'dermato'] },
  { id: 'reumatologia', label: 'Reumatologia', aliases: ['reumatologista', 'reumato'] },
  { id: 'pneumologia', label: 'Pneumologia', aliases: ['pneumologista', 'pneumo'] },
  { id: 'angiologia', label: 'Angiologia', aliases: ['angiologista'] },
  { id: 'gastroenterologia', label: 'Gastroenterologia', aliases: ['gastroenterologista', 'gastro'] },
  { id: 'otorrinolaringologia', label: 'Otorrinolaringologia', aliases: ['otorrino', 'otorrinolaringologista'] },
  { id: 'geriatria', label: 'Geriatria', aliases: ['geriatra'] },
  {
    id: 'diagnostico-imagem',
    label: 'Diagnóstico por Imagem e Ultrassonografia',
    aliases: ['ultrassom', 'ultrassonografista', 'ultra-som', 'ultrasom', 'usg', 'ecografia'],
  },
  { id: 'endoscopia-digestiva', label: 'Endoscopia Digestiva', aliases: ['endoscopia', 'endoscopista'] },
  { id: 'anestesiologia', label: 'Anestesiologia', aliases: ['anestesista', 'anestesia'] },
  { id: 'odontologia', label: 'Odontologia', aliases: ['dentista', 'odonto', 'cirurgiã-dentista', 'cirurgião-dentista'] },
  { id: 'fisioterapia', label: 'Fisioterapia', aliases: ['fisioterapeuta', 'fisio'] },
  { id: 'nutricao', label: 'Nutrição', aliases: ['nutricionista', 'nutrição clínica'] },
  { id: 'psicologia', label: 'Psicologia', aliases: ['psicólogo', 'psicóloga'] },
  { id: 'fonoaudiologia', label: 'Fonoaudiologia', aliases: ['fonoaudiólogo', 'fonoaudióloga', 'fono'] },
  { id: 'psicopedagogia', label: 'Psicopedagogia', aliases: ['psicopedagogo', 'psicopedagoga', 'pedagoga', 'pedagogia', 'ABA'] },
  { id: 'enfermagem', label: 'Enfermagem', aliases: ['enfermeiro', 'enfermeira'] },
];

/**
 * Especialidades confirmadas no corpo clínico que NÃO viram card de atendimento ao público
 * (atuação de apoio). Continuam encontráveis pela busca através dos profissionais.
 */
export const supportSpecialtyIds = ['anestesiologia', 'enfermagem'];

const CONFIRM_EXAM_NOTE = 'Realização, preparo e datas são confirmados pela recepção.';

export const services: Service[] = [
  // ---- Catálogo original (16) ----
  { id: 'ginecologia-obstetricia', name: 'Ginecologia e Obstetrícia', category: 'consultas', kind: 'consulta', iconName: 'HeartHandshake', source: 'catalogo',
    description: 'Saúde integral da mulher, acompanhamento pré-natal e cuidados ginecológicos preventivos.',
    specialtyIds: ['ginecologia-obstetricia'], aliases: [] },
  { id: 'neurologia', name: 'Neurologia', category: 'consultas', kind: 'consulta', iconName: 'Brain', source: 'catalogo',
    description: 'Diagnóstico e tratamento de patologias do sistema nervoso central e periférico.',
    specialtyIds: ['neurologia'], aliases: [] },
  { id: 'ortopedia', name: 'Ortopedia', category: 'consultas', kind: 'consulta', iconName: 'Bone', source: 'catalogo',
    description: 'Cuidado especializado para ossos, articulações, lesões e saúde musculoesquelética.',
    specialtyIds: ['ortopedia'], aliases: [] },
  { id: 'dermatologia', name: 'Dermatologia', category: 'consultas', kind: 'consulta', iconName: 'Sparkles', source: 'catalogo',
    description: 'Prevenção, diagnóstico e tratamentos clínicos e estéticos para saúde da pele, unhas e cabelos.',
    specialtyIds: ['dermatologia'], aliases: [] },
  { id: 'ultrassonografia', name: 'Ultrassonografia', category: 'exames', kind: 'exame', iconName: 'ScanLine', source: 'catalogo',
    description: 'Exames de imagem para avaliação abdominal, pélvica, obstétrica e articular.',
    specialtyIds: ['diagnostico-imagem'], aliases: ['ultrassom', 'ultra-som', 'usg', 'ecografia'], note: CONFIRM_EXAM_NOTE },
  { id: 'cardiologia', name: 'Cardiologia', category: 'consultas', kind: 'consulta', iconName: 'HeartPulse', source: 'corpo-clinico',
    description: 'Consulta com cardiologista do corpo clínico. Exames cardiológicos são listados separadamente.',
    specialtyIds: ['cardiologia'], aliases: ['consulta cardiológica'] },
  { id: 'exames-cardiologicos', name: 'Exames cardiológicos', category: 'exames', kind: 'exame', iconName: 'HeartPulse', source: 'catalogo',
    description: 'Exames de avaliação cardiovascular. Não substitui a consulta com cardiologista.',
    // PENDENTE: quais exames e qual profissional os realiza não estão documentados.
    specialtyIds: [], aliases: ['cardiologia', 'cardiológico'], note: CONFIRM_EXAM_NOTE },
  { id: 'odontologia', name: 'Odontologia', category: 'odonto', kind: 'consulta', iconName: 'Smile', source: 'catalogo',
    description: 'Cuidados com a saúde bucal, estética do sorriso, profilaxia e reabilitação oral.',
    specialtyIds: ['odontologia'], aliases: [] },
  { id: 'fisioterapia', name: 'Fisioterapia', category: 'outros', kind: 'terapia', iconName: 'ActivitySquare', source: 'catalogo',
    description: 'Reabilitação física, recuperação motora e melhora da mobilidade.',
    specialtyIds: ['fisioterapia'], aliases: [] },
  { id: 'psiquiatria', name: 'Psiquiatria', category: 'consultas', kind: 'consulta', iconName: 'UserCheck', source: 'catalogo',
    description: 'Acolhimento e acompanhamento especializado em saúde mental.',
    specialtyIds: ['psiquiatria'], aliases: [] },
  { id: 'gastroenterologia', name: 'Gastroenterologia', category: 'consultas', kind: 'consulta', iconName: 'Stethoscope', source: 'catalogo',
    description: 'Diagnóstico e acompanhamento do aparelho digestivo, estômago, fígado e intestino.',
    specialtyIds: ['gastroenterologia'], aliases: [] },
  { id: 'fonoaudiologia', name: 'Fonoaudiologia', category: 'outros', kind: 'terapia', iconName: 'MessageSquare', source: 'catalogo',
    description: 'Avaliação e terapia da comunicação, fala, audição, voz e deglutição.',
    specialtyIds: ['fonoaudiologia'], aliases: [] },
  { id: 'pneumologia', name: 'Pneumologia', category: 'consultas', kind: 'consulta', iconName: 'Wind', source: 'catalogo',
    description: 'Diagnóstico e tratamento de doenças respiratórias, pulmões e vias aéreas.',
    specialtyIds: ['pneumologia'], aliases: [] },
  { id: 'angiologia', name: 'Angiologia', category: 'consultas', kind: 'consulta', iconName: 'Activity', source: 'catalogo',
    description: 'Cuidado especializado do sistema circulatório e da saúde vascular.',
    specialtyIds: ['angiologia'], aliases: [] },
  { id: 'mamografia', name: 'Mamografia', category: 'exames', kind: 'exame', iconName: 'ShieldAlert', source: 'catalogo',
    description: 'Exame de imagem preventivo para a saúde das mamas.',
    specialtyIds: [], aliases: ['mamógrafo'], note: CONFIRM_EXAM_NOTE },
  { id: 'analises-clinicas', name: 'Laboratório de análises clínicas', category: 'exames', kind: 'exame', iconName: 'FlaskConical', source: 'catalogo',
    description: 'Coleta e exames laboratoriais.',
    specialtyIds: [], aliases: ['exame de sangue', 'exames laboratoriais', 'coleta', 'laboratório'], note: CONFIRM_EXAM_NOTE },
  { id: 'nutricao', name: 'Nutrição', category: 'outros', kind: 'terapia', iconName: 'Apple', source: 'catalogo',
    description: 'Planejamento alimentar individualizado e acompanhamento nutricional clínico.',
    specialtyIds: ['nutricao'], aliases: [] },

  // ---- Consultas derivadas de especialidades confirmadas no corpo clínico ----
  { id: 'clinica-geral', name: 'Clínica Geral', category: 'consultas', kind: 'consulta', iconName: 'Stethoscope', source: 'corpo-clinico',
    description: 'Consulta com clínico geral do corpo clínico.', specialtyIds: ['clinica-geral'], aliases: [] },
  { id: 'endocrinologia', name: 'Endocrinologia', category: 'consultas', kind: 'consulta', iconName: 'Activity', source: 'corpo-clinico',
    description: 'Consulta com endocrinologista do corpo clínico.', specialtyIds: ['endocrinologia'], aliases: [] },
  { id: 'reumatologia', name: 'Reumatologia', category: 'consultas', kind: 'consulta', iconName: 'Bone', source: 'corpo-clinico',
    description: 'Consulta com reumatologista do corpo clínico.', specialtyIds: ['reumatologia'], aliases: [] },
  { id: 'otorrinolaringologia', name: 'Otorrinolaringologia', category: 'consultas', kind: 'consulta', iconName: 'Stethoscope', source: 'corpo-clinico',
    description: 'Consulta com otorrinolaringologista do corpo clínico.', specialtyIds: ['otorrinolaringologia'], aliases: [] },
  { id: 'geriatria', name: 'Geriatria', category: 'consultas', kind: 'consulta', iconName: 'UserCheck', source: 'corpo-clinico',
    description: 'Consulta com geriatra do corpo clínico.', specialtyIds: ['geriatria'], aliases: [] },
  { id: 'endoscopia-digestiva', name: 'Endoscopia Digestiva', category: 'consultas', kind: 'consulta', iconName: 'Stethoscope', source: 'corpo-clinico',
    description: 'Profissional do corpo clínico com atuação em endoscopia digestiva.',
    specialtyIds: ['endoscopia-digestiva'], aliases: [], note: 'Consulte a recepção sobre a realização de exames.' },
  { id: 'psicologia', name: 'Psicologia', category: 'outros', kind: 'terapia', iconName: 'MessageSquare', source: 'corpo-clinico',
    description: 'Atendimento com psicólogas do corpo clínico.', specialtyIds: ['psicologia'], aliases: [] },
  { id: 'psicopedagogia', name: 'Psicopedagogia', category: 'outros', kind: 'terapia', iconName: 'Sparkles', source: 'corpo-clinico',
    description: 'Atendimento com psicopedagogas do corpo clínico.', specialtyIds: ['psicopedagogia'], aliases: [] },
];

const P = (
  id: string, name: string, specialtyLabel: string, specialtyIds: string[],
  category: ProfessionalCategory, registration?: string,
): Professional => ({ id, name, specialtyLabel, specialtyIds, category, registration, photo: id, objectPosition: 'center 15%' });

export const professionals: Professional[] = [
  P('dr-adelhane-martins-sanches', 'Dr. Adelhane Martins Sanches', 'Clínica Geral', ['clinica-geral'], 'medicos'),
  P('dr-alexandre-morais', 'Dr. Alexandre Morais', 'Ginecologia e Obstetrícia', ['ginecologia-obstetricia'], 'medicos', 'CRM 90448 · RQE 53047'),
  P('dra-thays-dias-lopes', 'Dra. Thays Dias Lopes', 'Ginecologia e Obstetrícia', ['ginecologia-obstetricia'], 'medicos'),
  P('dr-joao-carlos-pena', 'Dr. João Carlos Pena', 'Cardiologia', ['cardiologia'], 'medicos'),
  P('dr-fabio-araujo', 'Dr. Fábio Araújo', 'Ortopedia', ['ortopedia'], 'medicos'),
  P('dr-tonyato-maia', 'Dr. Tonyato Maia', 'Neurologia', ['neurologia'], 'medicos'),
  P('dra-mariana-goncalves', 'Dra. Mariana Gonçalves', 'Psiquiatria', ['psiquiatria'], 'medicos', 'CRM 96590'),
  P('dra-aline-guimaraes', 'Dra. Aline Guimarães', 'Endocrinologia', ['endocrinologia'], 'medicos'),
  P('dra-isadora-caldeira', 'Dra. Isadora Caldeira', 'Dermatologia', ['dermatologia'], 'medicos'),
  P('dr-flavio-fabiano', 'Dr. Flávio Fabiano', 'Reumatologia', ['reumatologia'], 'medicos'),
  P('dr-pedro-vilela', 'Dr. Pedro Vilela', 'Pneumologia', ['pneumologia'], 'medicos'),
  P('dr-jovelino-pinheiro', 'Dr. Jovelino Pinheiro', 'Angiologia', ['angiologia'], 'medicos'),
  P('dra-daniela-rodrigues', 'Dra. Daniela Rodrigues', 'Gastroenterologia', ['gastroenterologia'], 'medicos'),
  P('dr-luiz-eduardo-ribeiro-coelho', 'Dr. Luiz Eduardo Ribeiro Coelho', 'Otorrinolaringologia', ['otorrinolaringologia'], 'medicos'),
  P('dr-saulo-corradi', 'Dr. Saulo Corradi', 'Geriatria', ['geriatria'], 'medicos'),
  P('dr-gustavo-l-mendes', 'Dr. Gustavo L. Mendes', 'Diagnóstico por Imagem e Ultrassonografia', ['diagnostico-imagem'], 'medicos'),
  P('dra-sthefane-freitas', 'Dra. Sthefane Freitas', 'Endoscopia Digestiva', ['endoscopia-digestiva'], 'medicos'),
  P('dra-ellen-leal', 'Dra. Ellen Leal', 'Anestesiologia', ['anestesiologia'], 'medicos'),
  P('dra-bruna-luiza', 'Dra. Bruna Luiza', 'Odontologia', ['odontologia'], 'odontologia'),
  P('breno-oliveira-silva', 'Breno Oliveira Silva', 'Fisioterapia', ['fisioterapia'], 'terapias', 'CREFITO-MG 439057-F'),
  P('debora-silveira', 'Débora Silveira', 'Nutrição', ['nutricao'], 'terapias'),
  P('marcine-fernanda', 'Marcine Fernanda', 'Psicologia', ['psicologia'], 'terapias'),
  P('tamires-coutinho', 'Tamires Coutinho', 'Psicologia', ['psicologia'], 'terapias'),
  P('noelma', 'Noelma', 'Fonoaudiologia', ['fonoaudiologia'], 'terapias'),
  P('rosangela-borges', 'Rosângela Borges', 'Psicopedagogia e Pedagogia', ['psicopedagogia'], 'terapias'),
  P('shirlane-varella', 'Shirlane Varella', 'Psicopedagogia (ABA)', ['psicopedagogia'], 'terapias'),
  P('paulo-ricardo', 'Paulo Ricardo', 'Enfermagem', ['enfermagem'], 'outros'),
];

// ---- Relações ----
const specialtyById = new Map(specialties.map((s) => [s.id, s]));
export const getSpecialty = (id: string) => specialtyById.get(id);

export function professionalsForService(service: Service): Professional[] {
  return professionals.filter((p) => p.specialtyIds.some((id) => service.specialtyIds.includes(id)));
}

export function servicesForProfessional(pro: Professional): Service[] {
  return services.filter((s) => s.specialtyIds.some((id) => pro.specialtyIds.includes(id)));
}

// ---- WhatsApp contextualizado ----
export function whatsappForService(service: Service): string {
  const what = service.kind === 'exame' ? `o exame de ${service.name}` : `atendimento em ${service.name}`;
  return whatsappUrl(`Olá! Encontrei ${what} no site do Instituto Pró-Vida e gostaria de consultar a disponibilidade para agendamento.`);
}

export function whatsappForProfessional(pro: Professional): string {
  return whatsappUrl(
    `Olá! Gostaria de consultar a disponibilidade de atendimento com ${pro.name} (${pro.specialtyLabel}) no Instituto Pró-Vida.`,
  );
}
