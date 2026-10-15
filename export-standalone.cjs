const fs = require('fs');
const path = require('path');

const projectDir = __dirname;
const distDir = path.join(projectDir, 'dist');

let html = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8');
const jsFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.js'));
const cssFiles = fs.readdirSync(path.join(distDir, 'assets')).filter(f => f.endsWith('.css'));

const jsCode = fs.readFileSync(path.join(distDir, 'assets', jsFiles[0]), 'utf8');
const cssCode = fs.readFileSync(path.join(distDir, 'assets', cssFiles[0]), 'utf8');

// Replace external scripts and styles with inlined tags
html = html.replace(/<link rel="stylesheet"[^>]+>/, '<style>\n' + cssCode + '\n</style>');
html = html.replace(/<script type="module"[^>]+><\/script>/, '<script>\n' + jsCode + '\n</script>');

// Replace asset paths with base64 data URIs
const assets = ['logo.webp', 'clinica-fachada.webp', 'dr-alexandre-morais.webp', 'dra-mariana-goncalves.webp', 'breno-oliveira-silva.webp'];
for (const a of assets) {
  const p = path.join(projectDir, 'public/assets', a);
  if (fs.existsSync(p)) {
    const b64 = 'data:image/webp;base64,' + fs.readFileSync(p).toString('base64');
    html = html.split('/assets/' + a).join(b64);
  }
}

fs.writeFileSync('C:/Users/BRUNO/Downloads/Instituto_ProVida_Redesign_Premium.html', html, 'utf8');
fs.writeFileSync(path.join(projectDir, 'Instituto_ProVida_Redesign_Premium.html'), html, 'utf8');
console.log('Standalone HTML exported successfully to both locations!');
