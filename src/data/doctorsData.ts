export interface DoctorItem {
  id: string;
  name: string;
  specialty: string;
  registration: string;
  image: string;
  objectPosition?: string;
}

export const doctorsData: DoctorItem[] = [
  {
    id: 'dr-alexandre-morais',
    name: 'Dr. Alexandre Morais',
    specialty: 'Ginecologia e obstetrícia',
    registration: 'CRM 90448 · RQE 53047',
    image: '/assets/dr-alexandre-morais.webp',
    objectPosition: 'center 15%',
  },
  {
    id: 'dra-mariana-goncalves',
    name: 'Dra. Mariana Gonçalves',
    specialty: 'Psiquiatria',
    registration: 'CRM 96590',
    image: '/assets/dra-mariana-goncalves.webp',
    objectPosition: 'center 18%',
  },
  {
    id: 'breno-oliveira-silva',
    name: 'Breno Oliveira Silva',
    specialty: 'Fisioterapia',
    registration: 'CREFITO-MG 439057-F',
    image: '/assets/breno-oliveira-silva.webp',
    objectPosition: 'center 10%',
  },
];

export function getWhatsAppDoctorUrl(doctorName: string): string {
  const message = `Olá! Gostaria de consultar a disponibilidade de atendimento com ${doctorName} no Instituto Pró-Vida.`;
  return `https://wa.me/5538999283598?text=${encodeURIComponent(message)}`;
}
