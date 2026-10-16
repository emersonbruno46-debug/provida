export interface DoctorItem {
  id: string;
  name: string;
  specialty: string;
  category?: 'medicos' | 'odontologia' | 'terapias' | 'outros';
  registration?: string;
  image: string;
  objectPosition?: string;
}

export const doctorsData: DoctorItem[] = [
  {
    id: "dr-adelhane-martins-sanches",
    name: "Dr. Adelhane Martins Sanches",
    specialty: "Clínica Geral",
    category: "medicos",
    image: "/assets/profissionais/dr-adelhane-martins-sanches.jpg",
    objectPosition: "center 15%"
  },
  {
    id: "dr-alexandre-morais",
    name: "Dr. Alexandre Morais",
    specialty: "Ginecologia e Obstetrícia",
    category: "medicos",
    registration: "CRM 90448 · RQE 53047",
    image: "/assets/profissionais/dr-alexandre-morais.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-thays-dias-lopes",
    name: "Dra. Thays Dias Lopes",
    specialty: "Ginecologia e Obstetrícia",
    category: "medicos",
    image: "/assets/profissionais/dra-thays-dias-lopes.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-joao-carlos-pena",
    name: "Dr. João Carlos Pena",
    specialty: "Cardiologia",
    category: "medicos",
    image: "/assets/profissionais/dr-joao-carlos-pena.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-fabio-araujo",
    name: "Dr. Fábio Araújo",
    specialty: "Ortopedia",
    category: "medicos",
    image: "/assets/profissionais/dr-fabio-araujo.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-tonyato-maia",
    name: "Dr. Tonyato Maia",
    specialty: "Neurologia",
    category: "medicos",
    image: "/assets/profissionais/dr-tonyato-maia.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-mariana-goncalves",
    name: "Dra. Mariana Gonçalves",
    specialty: "Psiquiatria",
    category: "medicos",
    registration: "CRM 96590",
    image: "/assets/profissionais/dra-mariana-goncalves.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-aline-guimaraes",
    name: "Dra. Aline Guimarães",
    specialty: "Endocrinologia",
    category: "medicos",
    image: "/assets/profissionais/dra-aline-guimaraes.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-isadora-caldeira",
    name: "Dra. Isadora Caldeira",
    specialty: "Dermatologia",
    category: "medicos",
    image: "/assets/profissionais/dra-isadora-caldeira.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-flavio-fabiano",
    name: "Dr. Flávio Fabiano",
    specialty: "Reumatologia",
    category: "medicos",
    image: "/assets/profissionais/dr-flavio-fabiano.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-pedro-vilela",
    name: "Dr. Pedro Vilela",
    specialty: "Pneumologia",
    category: "medicos",
    image: "/assets/profissionais/dr-pedro-vilela.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-jovelino-pinheiro",
    name: "Dr. Jovelino Pinheiro",
    specialty: "Angiologia",
    category: "medicos",
    image: "/assets/profissionais/dr-jovelino-pinheiro.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-daniela-rodrigues",
    name: "Dra. Daniela Rodrigues",
    specialty: "Gastroenterologia",
    category: "medicos",
    image: "/assets/profissionais/dra-daniela-rodrigues.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-luiz-eduardo-ribeiro-coelho",
    name: "Dr. Luiz Eduardo Ribeiro Coelho",
    specialty: "Otorrinolaringologia",
    category: "medicos",
    image: "/assets/profissionais/dr-luiz-eduardo-ribeiro-coelho.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-saulo-corradi",
    name: "Dr. Saulo Corradi",
    specialty: "Geriatria",
    category: "medicos",
    image: "/assets/profissionais/dr-saulo-corradi.png",
    objectPosition: "center 15%"
  },
  {
    id: "dr-gustavo-l-mendes",
    name: "Dr. Gustavo L. Mendes",
    specialty: "Diagnóstico por Imagem e Ultrassonografia",
    category: "medicos",
    image: "/assets/profissionais/dr-gustavo-l-mendes.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-sthefane-freitas",
    name: "Dra. Sthefane Freitas",
    specialty: "Endoscopia Digestiva",
    category: "medicos",
    image: "/assets/profissionais/dra-sthefane-freitas.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-ellen-leal",
    name: "Dra. Ellen Leal",
    specialty: "Anestesiologia",
    category: "medicos",
    image: "/assets/profissionais/dra-ellen-leal.png",
    objectPosition: "center 15%"
  },
  {
    id: "dra-bruna-luiza",
    name: "Dra. Bruna Luiza",
    specialty: "Odontologia / Cirurgia Dentista",
    category: "odontologia",
    image: "/assets/profissionais/dra-bruna-luiza.png",
    objectPosition: "center 15%"
  },
  {
    id: "breno-oliveira-silva",
    name: "Breno Oliveira Silva",
    specialty: "Fisioterapia",
    category: "terapias",
    registration: "CREFITO-MG 439057-F",
    image: "/assets/profissionais/breno-oliveira-silva.png",
    objectPosition: "center 15%"
  },
  {
    id: "debora-silveira",
    name: "Débora Silveira",
    specialty: "Nutrição Clínica",
    category: "terapias",
    image: "/assets/profissionais/debora-silveira.png",
    objectPosition: "center 15%"
  },
  {
    id: "marcine-fernanda",
    name: "Marcine Fernanda",
    specialty: "Psicologia",
    category: "terapias",
    image: "/assets/profissionais/marcine-fernanda.png",
    objectPosition: "center 15%"
  },
  {
    id: "tamires-coutinho",
    name: "Tamires Coutinho",
    specialty: "Psicologia",
    category: "terapias",
    image: "/assets/profissionais/tamires-coutinho.png",
    objectPosition: "center 15%"
  },
  {
    id: "noelma",
    name: "Noelma",
    specialty: "Fonoaudiologia",
    category: "terapias",
    image: "/assets/profissionais/noelma.png",
    objectPosition: "center 15%"
  },
  {
    id: "rosangela-borges",
    name: "Rosângela Borges",
    specialty: "Psicopedagoga e Pedagoga",
    category: "terapias",
    image: "/assets/profissionais/rosangela-borges.png",
    objectPosition: "center 15%"
  },
  {
    id: "shirlane-varella",
    name: "Shirlane Varella",
    specialty: "Psicopedagoga ABA",
    category: "terapias",
    image: "/assets/profissionais/shirlane-varella.png",
    objectPosition: "center 15%"
  },
  {
    id: "paulo-ricardo",
    name: "Paulo Ricardo",
    specialty: "Enfermagem",
    category: "outros",
    image: "/assets/profissionais/paulo-ricardo.png",
    objectPosition: "center 15%"
  }
];

export function getWhatsAppDoctorUrl(doctorName: string, specialty?: string): string {
  const specText = specialty ? ` (${specialty})` : '';
  const message = `Olá! Gostaria de consultar a disponibilidade de atendimento com ${doctorName}${specText} no Instituto Pró-Vida.`;
  return `https://wa.me/5538999283598?text=${encodeURIComponent(message)}`;
}
