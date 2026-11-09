import manifest from './galleryManifest.json';

export type GalleryCategory = 'estrutura' | 'consultorios' | 'laboratorio' | 'imagem' | 'odontologia';

export const GALLERY_FILTERS: { id: 'todas' | GalleryCategory; label: string }[] = [
  { id: 'todas', label: 'Todas' },
  { id: 'estrutura', label: 'Estrutura' },
  { id: 'consultorios', label: 'Consultórios' },
  { id: 'laboratorio', label: 'Coleta e laboratório' },
  { id: 'imagem', label: 'Exames de imagem' },
  { id: 'odontologia', label: 'Odontologia' },
];

export interface GalleryPhoto {
  slug: string;
  category: GalleryCategory;
  title: string;
  alt: string;
  width: number;
  height: number;
}

const P = (slug: string, category: GalleryCategory, title: string, alt: string): GalleryPhoto => ({
  slug,
  category,
  title,
  alt,
  ...(manifest as Record<string, { width: number; height: number }>)[slug],
});

export const GALLERY_WIDTHS = [480, 960, 1600];

export const GALLERY: GalleryPhoto[] = [
  P('fachada', 'estrutura', 'Fachada', 'Fachada do Instituto Pró-Vida, em Rio Pardo de Minas, com a lista de serviços na parede'),
  P('recepcao', 'estrutura', 'Recepção', 'Recepção do Instituto Pró-Vida com balcão de atendimento e cadeiras para espera'),
  P('sala-de-espera', 'estrutura', 'Sala de espera', 'Área de espera com poltronas confortáveis e painel do Instituto Pró-Vida'),
  P('consultorio-maca', 'consultorios', 'Consultório com maca', 'Consultório com mesa, cadeiras e maca de atendimento'),
  P('consultorio-clinico', 'consultorios', 'Consultório clínico', 'Consultório com mesa de atendimento, maca e bancada'),
  P('consultorio-computador', 'consultorios', 'Consultório equipado', 'Consultório com computador, mesa e lavatório'),
  P('bancada-coleta', 'laboratorio', 'Bancada de coleta', 'Bancada com tubos de coleta de sangue organizados por tipo'),
  P('cadeira-de-coleta', 'laboratorio', 'Sala de coleta', 'Cadeira de coleta de sangue com apoio para os braços'),
  P('material-de-coleta', 'laboratorio', 'Material de coleta', 'Bancada com materiais de coleta e coletores de descarte adequado'),
  P('raio-x', 'imagem', 'Raio-X', 'Sala de Raio-X com mesa de exame e acessibilidade para cadeira de rodas'),
  P('mamografia', 'imagem', 'Mamografia', 'Sala de mamografia com equipamento e painel de árvores floridas'),
  P('tomografia', 'imagem', 'Tomografia computadorizada', 'Sala do tomógrafo com painel de paisagem na parede'),
  P('densitometria', 'imagem', 'Densitometria óssea', 'Sala de densitometria óssea com equipamento e degrau de apoio'),
  P('ultrassom', 'imagem', 'Ultrassonografia', 'Sala de ultrassonografia com maca, aparelho e impressora'),
  P('odontologia', 'odontologia', 'Consultório odontológico', 'Consultório odontológico com cadeira e equipamentos'),
  P('odontologia-instrumentos', 'odontologia', 'Instrumentos odontológicos', 'Bandeja com instrumentos do consultório odontológico'),
  P('odontologia-sala', 'odontologia', 'Sala odontológica', 'Consultório odontológico visto através da divisória de vidro'),
];
