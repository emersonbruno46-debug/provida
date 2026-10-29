/**
 * Busca tolerante a acentos, maiúsculas e espaços, por nome, especialidade e aliases.
 * Não faz inferência de sintomas: só casa termos presentes em nomes, especialidades
 * e sinônimos explícitos.
 */
import {
  services, professionals, getSpecialty, professionalsForService,
  type Service, type Professional, type ServiceCategory, type ProfessionalCategory,
} from '../data/catalog';

export function normalize(text: string): string {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const STOPWORDS = new Set(['de', 'da', 'do', 'das', 'dos', 'e', 'em', 'com', 'para', 'a', 'o', 'as', 'os', 'no', 'na', 'dr', 'dra']);

/** Sinônimos explícitos: termo digitado → termo canônico também procurado. */
export const SEARCH_SYNONYMS: Record<string, string[]> = {
  ultrassom: ['ultrassonografia'],
  ultrasom: ['ultrassonografia'],
  usg: ['ultrassonografia'],
  ecografia: ['ultrassonografia'],
  dentista: ['odontologia'],
  dentario: ['odontologia'],
  odonto: ['odontologia'],
  cardiologista: ['cardiologia'],
  ginecologista: ['ginecologia'],
  obstetra: ['obstetricia'],
  psicologo: ['psicologia'],
  psicologa: ['psicologia'],
  nutricionista: ['nutricao'],
  fisioterapeuta: ['fisioterapia'],
  fonoaudiologo: ['fonoaudiologia'],
  fonoaudiologa: ['fonoaudiologia'],
  exame: ['exames'],
};

/** Junta grafias com espaço/hífen ("ultra som", "pre natal") antes de tokenizar. */
const PHRASES: [RegExp, string][] = [
  [/\bultra som\b/g, 'ultrassom'],
  [/\bpre natal\b/g, 'prenatal'],
];

export function tokenize(query: string): string[] {
  let q = normalize(query);
  for (const [re, rep] of PHRASES) q = q.replace(re, rep);
  return q.split(' ').filter((t) => t && !STOPWORDS.has(t));
}

interface Field { words: string[]; weight: number }

function field(texts: (string | undefined)[], weight: number): Field {
  const words = texts.flatMap((t) => (t ? tokenize(t) : []));
  // também indexa formas compactas ("pre natal" -> "prenatal")
  return { words, weight };
}

function tokenScore(token: string, fields: Field[]): number {
  const candidates = [token, ...(SEARCH_SYNONYMS[token] ?? [])];
  let best = 0;
  for (const f of fields) {
    for (const w of f.words) {
      for (const c of candidates) {
        if (w === c) best = Math.max(best, f.weight + 1);
        else if (w.startsWith(c)) best = Math.max(best, f.weight);
      }
    }
  }
  return best;
}

/** Retorna 0 se algum termo não casar; senão a pontuação (maior = mais relevante). */
function score(tokens: string[], fields: Field[]): number {
  let total = 0;
  for (const t of tokens) {
    const s = tokenScore(t, fields);
    if (s === 0) return 0;
    total += s;
  }
  return total;
}

const KIND_WORDS: Record<Service['kind'], string> = {
  consulta: 'consulta consultas especialidade',
  exame: 'exame exames diagnostico',
  terapia: 'atendimento terapia',
};

const serviceIndex = services.map((s) => {
  const specs = s.specialtyIds.map(getSpecialty).filter(Boolean);
  const pros = professionalsForService(s);
  return {
    item: s,
    fields: [
      field([s.name], 6),
      field(specs.map((x) => x!.label), 5),
      field([...s.aliases, ...specs.flatMap((x) => x!.aliases)], 4),
      field([KIND_WORDS[s.kind]], 2),
      field(pros.map((p) => p.name), 1),
    ],
  };
});

const professionalIndex = professionals.map((p) => {
  const specs = p.specialtyIds.map(getSpecialty).filter(Boolean);
  return {
    item: p,
    fields: [
      field([p.name], 6),
      field([p.specialtyLabel, ...specs.map((x) => x!.label)], 5),
      field(specs.flatMap((x) => x!.aliases), 4),
    ],
  };
});

function run<T>(index: { item: T; fields: Field[] }[], query: string, keep: (item: T) => boolean): T[] {
  const tokens = tokenize(query);
  const pool = index.filter((e) => keep(e.item));
  if (tokens.length === 0) return pool.map((e) => e.item);
  return pool
    .map((e, i) => ({ e, i, s: score(tokens, e.fields) }))
    .filter((r) => r.s > 0)
    .sort((a, b) => b.s - a.s || a.i - b.i)
    .map((r) => r.e.item);
}

export function searchServices(query: string, category: 'todos' | ServiceCategory = 'todos'): Service[] {
  return run(serviceIndex, query, (s) => category === 'todos' || s.category === category);
}

export function searchProfessionals(query: string, category: 'todos' | ProfessionalCategory = 'todos'): Professional[] {
  return run(professionalIndex, query, (p) => category === 'todos' || p.category === category);
}

/** Sugestões exibidas no estado vazio. */
export const SEARCH_SUGGESTIONS = ['Ultrassom', 'Cardiologia', 'Dentista', 'Ginecologia', 'Fisioterapia'];
