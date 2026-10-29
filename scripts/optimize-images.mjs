/**
 * Gera versões otimizadas (AVIF/WebP) das imagens usadas no site.
 * Os originais são preservados em public/assets e source-assets/.
 *
 * Uso: npm run images
 * Saída: public/img/** + src/data/imageManifest.json (dimensões intrínsecas)
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const pub = path.join(root, 'public');
const outDir = path.join(pub, 'img');
const profSrc = path.join(pub, 'assets', 'profissionais');

const PROF_WIDTHS = [320, 480, 720];
const THUMB = 96; // miniaturas circulares do hero (até 40px CSS @2x+)
const HERO_WIDTHS = [640, 960, 1440, 1920];
const ABOUT_WIDTHS = [480, 720, 960];

fs.mkdirSync(path.join(outDir, 'prof'), { recursive: true });

const manifest = { professionals: {}, hero: null, about: null, og: null };
const report = [];

async function variants(input, base, widths, { crop } = {}) {
  const meta = await sharp(input).metadata();
  const ratio = crop ? crop.h / crop.w : meta.height / meta.width;
  for (const w of widths) {
    const h = Math.round(w * ratio);
    const pipe = () =>
      crop
        ? sharp(input).resize(w, h, { fit: 'cover', position: crop.position ?? 'attention' })
        : sharp(input).resize({ width: Math.min(w, meta.width) });
    await pipe().avif({ quality: 52, effort: 6 }).toFile(`${base}-${w}.avif`);
    await pipe().webp({ quality: 74, effort: 6 }).toFile(`${base}-${w}.webp`);
  }
  return { width: meta.width, height: meta.height, ratio };
}

function size(f) {
  return fs.statSync(f).size;
}

// Profissionais
for (const file of fs.readdirSync(profSrc)) {
  const slug = file.replace(/\.(png|jpe?g)$/i, '');
  const input = path.join(profSrc, file);
  const base = path.join(outDir, 'prof', slug);
  const info = await variants(input, base, PROF_WIDTHS);
  // miniatura quadrada focada no rosto (parte superior do retrato)
  await sharp(input)
    .resize(THUMB, THUMB, { fit: 'cover', position: 'north' })
    .webp({ quality: 72 })
    .toFile(`${base}-thumb.webp`);
  manifest.professionals[slug] = { width: info.width, height: info.height };
  report.push([file, size(input), size(`${base}-480.webp`), size(`${base}-480.avif`), size(`${base}-thumb.webp`)]);
}

// Hero (fachada)
{
  const input = path.join(pub, 'HERO.png');
  const info = await variants(input, path.join(outDir, 'hero'), HERO_WIDTHS);
  manifest.hero = { width: info.width, height: info.height };
  report.push(['HERO.png', size(input), size(path.join(outDir, 'hero-1440.webp')), size(path.join(outDir, 'hero-1440.avif')), 0]);

  // Imagem de compartilhamento 1200x630 (JPEG para compatibilidade com redes sociais)
  await sharp(input).resize(1200, 630, { fit: 'cover', position: 'centre' }).jpeg({ quality: 80, mozjpeg: true }).toFile(path.join(outDir, 'og-image.jpg'));
  manifest.og = { width: 1200, height: 630 };
}

// Seção "O Instituto"
{
  const input = path.join(pub, 'assets', 'clinica-fachada.webp');
  const info = await variants(input, path.join(outDir, 'fachada'), ABOUT_WIDTHS);
  manifest.about = { width: info.width, height: info.height };
  report.push(['clinica-fachada.webp', size(input), size(path.join(outDir, 'fachada-720.webp')), size(path.join(outDir, 'fachada-720.avif')), 0]);
}

fs.writeFileSync(path.join(root, 'src', 'data', 'imageManifest.json'), JSON.stringify(manifest, null, 2) + '\n');

const kb = (n) => (n / 1024).toFixed(0).padStart(6) + ' KB';
console.log('arquivo'.padEnd(40), 'original', '  webp(ref)', '  avif(ref)', '  thumb');
for (const [f, o, w, a, t] of report) console.log(f.padEnd(40), kb(o), kb(w), kb(a), t ? kb(t) : '');
const tot = report.reduce((s, r) => [s[0] + r[1], s[1] + r[2], s[2] + r[3]], [0, 0, 0]);
console.log('TOTAL'.padEnd(40), kb(tot[0]), kb(tot[1]), kb(tot[2]));
