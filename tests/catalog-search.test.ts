import { describe, it, expect } from 'vitest';
import {
  services,
  professionals,
  specialties,
  professionalsForService,
  servicesForProfessional,
} from '../src/data/catalog';
import {
  searchServices,
  searchProfessionals,
  normalize,
  tokenize,
} from '../src/lib/search';

describe('1. Normalização de busca', () => {
  it('remove acentos, pontuação e espaços redundantes', () => {
    expect(normalize('  Dr. João-Carlos!  ')).toBe('dr joao carlos');
    expect(normalize('ULTRASSONOGRAFIA')).toBe('ultrassonografia');
    expect(normalize('Ginecologia & Obstetrícia')).toBe('ginecologia obstetricia');
  });

  it('tokeniza filtrando stopwords comuns', () => {
    expect(tokenize('exame de sangue')).toEqual(['exame', 'sangue']);
    expect(tokenize('consulta com cardiologista')).toEqual(['consulta', 'cardiologista']);
  });
});

describe('2. Busca de Atendimentos', () => {
  it('encontra "Ultrassonografia" ao buscar "ultrassom" (sinônimo explícito)', () => {
    const results = searchServices('ultrassom');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((s) => s.id === 'ultrassonografia')).toBe(true);
  });

  it('encontra "Odontologia" ao buscar "dentista"', () => {
    const results = searchServices('dentista');
    expect(results.length).toBeGreaterThan(0);
    expect(results.some((s) => s.id === 'odontologia')).toBe(true);
  });

  it('encontra atendimento ao buscar "cardiologia", priorizando a consulta sobre exames', () => {
    const results = searchServices('cardiologia');
    expect(results.length).toBeGreaterThanOrEqual(2);
    expect(results[0].id).toBe('cardiologia'); // Consulta cardiológica em primeiro
    expect(results.some((s) => s.id === 'exames-cardiologicos')).toBe(true);
  });

  it('encontra atendimentos por nome de profissional relacionado', () => {
    const results = searchServices('joao');
    expect(results.some((s) => s.id === 'cardiologia')).toBe(true);
  });

  it('não infere sintomas clínicos como diagnósticos', () => {
    // Sintomas não-mapeados não devem retornar nenhum serviço por adivinhação
    const results = searchServices('enxaqueca');
    expect(results).toHaveLength(0);
  });

  it('filtra corretamente por categoria', () => {
    const exames = searchServices('', 'exames');
    expect(exames.every((s) => s.category === 'exames')).toBe(true);
    expect(exames.some((s) => s.id === 'ultrassonografia')).toBe(true);

    const consultas = searchServices('', 'consultas');
    expect(consultas.every((s) => s.category === 'consultas')).toBe(true);
  });
});

describe('3. Busca de Profissionais', () => {
  it('encontra "Dr. João Carlos Pena" buscando "joao" sem acento e em minúsculas', () => {
    const results = searchProfessionals('joao');
    expect(results.some((p) => p.name.includes('João Carlos'))).toBe(true);
  });

  it('encontra especialistas através de sinônimos (ex: "dentista" -> Dra. Bruna Luiza)', () => {
    const results = searchProfessionals('dentista');
    expect(results.some((p) => p.name.includes('Bruna Luiza'))).toBe(true);
  });

  it('encontra "Dr. Gustavo L. Mendes" ao buscar "ultrassom"', () => {
    const results = searchProfessionals('ultrassom');
    expect(results.some((p) => p.id === 'dr-gustavo-l-mendes')).toBe(true);
  });

  it('preserva a totalidade dos 27 profissionais cadastrados', () => {
    const all = searchProfessionals('');
    expect(all).toHaveLength(27);
  });
});

describe('4. Unificação do Catálogo e Relações', () => {
  it('possui identificadores estáveis e únicos', () => {
    const serviceIds = new Set(services.map((s) => s.id));
    expect(serviceIds.size).toBe(services.length);

    const proIds = new Set(professionals.map((p) => p.id));
    expect(proIds.size).toBe(professionals.length);

    const specIds = new Set(specialties.map((s) => s.id));
    expect(specIds.size).toBe(specialties.length);
  });

  it('relaciona consultas aos seus profissionais correspondentes', () => {
    const cardio = services.find((s) => s.id === 'cardiologia')!;
    const cardioPros = professionalsForService(cardio);
    expect(cardioPros.map((p) => p.id)).toContain('dr-joao-carlos-pena');

    const gineco = services.find((s) => s.id === 'ginecologia-obstetricia')!;
    const ginecoPros = professionalsForService(gineco);
    expect(ginecoPros.map((p) => p.id)).toContain('dr-alexandre-morais');
    expect(ginecoPros.map((p) => p.id)).toContain('dra-thays-dias-lopes');
  });

  it('permite relação bidirecional (profissional -> serviços)', () => {
    const drAlexandre = professionals.find((p) => p.id === 'dr-alexandre-morais')!;
    const relatedServices = servicesForProfessional(drAlexandre);
    expect(relatedServices.map((s) => s.id)).toContain('ginecologia-obstetricia');
  });

  it('mantém distinção clara: exames cardiológicos não são consulta médica', () => {
    const examesCardio = services.find((s) => s.id === 'exames-cardiologicos')!;
    expect(examesCardio.kind).toBe('exame');
    const consultaCardio = services.find((s) => s.id === 'cardiologia')!;
    expect(consultaCardio.kind).toBe('consulta');
  });
});
