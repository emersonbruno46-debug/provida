/**
 * Converte as fotos da galeria (JPEG originais) para WebP responsivo.
 *
 * Uso: node scripts/optimize-gallery.mjs "<pasta-com-os-JPEG>"
 * Saída: public/img/galeria/<slug>-{480,960,1600}.webp + src/data/galleryManifest.json
 * Os JPEG originais (~8 MB cada) NÃO entram no repositório.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const src = process.argv[2];
if (!src) throw new Error('Informe a pasta com as fotos originais.');
const out = path.join(root, 'public', 'img', 'galeria');
fs.mkdirSync(out, { recursive: true });

const WIDTHS = [480, 960, 1600];

// original -> slug (a classificação/legendas ficam em src/data/galleryData.ts)
const FILES = {
  'IMG_7622.jpg': 'recepcao',
  'IMG_7612.jpg': 'sala-de-espera',
  'IMG_7580.jpg': 'consultorio-maca',
  'IMG_7603.jpg': 'consultorio-clinico',
  'IMG_7601.jpg': 'consultorio-computador',
  'IMG_7588.jpg': 'bancada-coleta',
  'IMG_7592.jpg': 'cadeira-de-coleta',
  'IMG_7604.jpg': 'material-de-coleta',
  'IMG_7600.jpg': 'raio-x',
  'IMG_7597.jpg': 'mamografia',
  'IMG_7605.jpg': 'tomografia',
  'IMG_7596.jpg': 'densitometria',
  'IMG_7610.jpg': 'ultrassom',
  'IMG_7616.jpg': 'odontologia',
  'IMG_7617.jpg': 'odontologia-instrumentos',
  'IMG_7620.jpg': 'odontologia-sala',
};

const manifest = {};
let before = 0, after = 0;
for (const [file, slug] of Object.entries(FILES)) {
  const input = path.join(src, file);
  const meta = await sharp(input).rotate().metadata();
  const [w0, h0] = meta.orientation && meta.orientation >= 5 ? [meta.height, meta.width] : [meta.width, meta.height];
  const ratio = h0 / w0;
  for (const w of WIDTHS) {
    const h = Math.round(w * ratio);
    const f = path.join(out, `${slug}-${w}.webp`);
    await sharp(input).rotate().resize(w, h).webp({ quality: w >= 1600 ? 72 : 76, effort: 6 }).toFile(f);
    if (w === 1600) after += fs.statSync(f).size;
  }
  before += fs.statSync(input).size;
  manifest[slug] = { width: WIDTHS[2], height: Math.round(WIDTHS[2] * ratio) };
}
fs.writeFileSync(path.join(root, 'src', 'data', 'galleryManifest.json'), JSON.stringify(manifest, null, 2) + '\n');
console.log(`originais: ${(before / 1048576).toFixed(1)} MB  ->  webp 1600w: ${(after / 1048576).toFixed(1)} MB`);
